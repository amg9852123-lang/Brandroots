from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import urllib.parse
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

WHATSAPP_NUMBER = "917507515957"


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=8, max_length=20)
    service: str = Field(min_length=2, max_length=120)
    date: str = Field(min_length=4, max_length=20)
    time: str = Field(min_length=2, max_length=20)
    message: Optional[str] = ""


class Enquiry(EnquiryCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "BRANDROOT Salon & Spa API"}


@api_router.post("/enquiries")
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    wa_text = "\n".join([
        "New Appointment Enquiry — BRANDROOT Salon & Spa",
        f"Name: {enquiry.name}",
        f"Phone: {enquiry.phone}",
        f"Service: {enquiry.service}",
        f"Preferred: {enquiry.date} at {enquiry.time}",
        f"Message: {enquiry.message or '—'}",
    ])
    wa_url = f"https://wa.me/{WHATSAPP_NUMBER}?text={urllib.parse.quote(wa_text)}"
    return {"id": enquiry.id, "whatsapp_url": wa_url, "status": "received"}


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    return await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
