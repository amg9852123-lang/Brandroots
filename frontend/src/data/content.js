export const BRAND = {
  name: "Aura Luxe",
  full: "Aura Luxe Salon & Spa",
  tagline: "Hair • Beauty • Wellness",
  city: "City Center",
  phone: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsapp: "https://wa.me/919999999999?text=" + encodeURIComponent("Hello Aura Luxe, I'd like to book an appointment."),
  instagram: "https://www.instagram.com/",
  instagramHandle: "@auraluxesalon",
  maps: "https://maps.google.com",
  mapEmbed: "https://maps.google.com",
  hours: "10:00 AM – 8:00 PM | Open Daily",
  address: [
    "Plot 202, Luxury Promenade,",
    "High Street Fashion Hub,",
    "City Center"
  ]
};


export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const IMG = {
  hero: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=85&w=2000&auto=format&fit=crop",
  interior1:
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=85&w=1800&auto=format&fit=crop",
  interior2:
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=85&w=1600&auto=format&fit=crop",
  hairWash:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=85&w=1400&auto=format&fit=crop",
  styling:
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=85&w=1400&auto=format&fit=crop",
  chairs:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=85&w=1600&auto=format&fit=crop",
  facial:
    "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?q=85&w=1400&auto=format&fit=crop",
  facial2:
    "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=85&w=1400&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=85&w=1400&auto=format&fit=crop",
  spa2: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=85&w=1400&auto=format&fit=crop",
  nails:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=85&w=1400&auto=format&fit=crop",
  makeup:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=85&w=1400&auto=format&fit=crop",
  portrait:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=85&w=1400&auto=format&fit=crop",
  portrait2:
    "https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=85&w=1400&auto=format&fit=crop",
  barber:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=85&w=1400&auto=format&fit=crop",
  tattoo:
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=85&w=1400&auto=format&fit=crop",
  spaDetail:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=85&w=1400&auto=format&fit=crop",
  silk: "https://images.pexels.com/photos/8426345/pexels-photo-8426345.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

export const SERVICES = [
  {
    id: "hair",
    name: "HAIR",
    desc: "Precision cuts, styling, blow-dry, colour and restorative treatments.",
    img: IMG.styling,
  },
  {
    id: "skin",
    name: "SKIN & FACIALS",
    desc: "Facials, skincare rituals and advanced treatments such as HydraFacial.",
    img: IMG.facial,
  },
  {
    id: "spa",
    name: "SPA & WELLNESS",
    desc: "Classical relaxing spa, aroma therapy and deep tissue massage.",
    img: IMG.spa,
  },
  {
    id: "nails",
    name: "NAIL STUDIO",
    desc: "Nail care, nail art, extensions and finishing services.",
    img: IMG.nails,
  },
  {
    id: "makeup",
    name: "MAKEUP & BEAUTY",
    desc: "Occasion, party and celebration-ready makeup artistry.",
    img: IMG.makeup,
  },
  {
    id: "waxing",
    name: "WAXING & THREADING",
    desc: "Professional waxing and precision threading services.",
    img: IMG.facial2,
  },
  {
    id: "laser",
    name: "LASER / BEAUTY TREATMENTS",
    desc: "Advanced beauty treatments — details confirmed on consultation.",
    img: IMG.spaDetail,
  },
  {
    id: "tattoo",
    name: "TATTOO",
    desc: "Tattoo artistry at BRANDROOT — availability confirmed on enquiry.",
    img: IMG.tattoo,
  },
];

export const FEATURED = [
  { name: "Blow Dry & Styling", cat: "Hair" },
  { name: "Hair Up Do", cat: "Hair" },
  { name: "HydraFacial", cat: "Skin" },
  { name: "Deep Tissue Massage", cat: "Spa" },
  { name: "Nail Art & Extensions", cat: "Nail Studio" },
  { name: "Luxury Wax", cat: "Beauty" },
];

export const PACKAGES = [
  { num: "01", name: "SILVER PLAN", note: "A curated BRANDROOT package. Inclusions and pricing shared on enquiry." },
  { num: "02", name: "GOLD PLAN", note: "A curated BRANDROOT package. Inclusions and pricing shared on enquiry." },
  { num: "03", name: "PLATINUM PLAN", note: "A curated BRANDROOT package. Inclusions and pricing shared on enquiry." },
];

export const GALLERY = [
  { img: IMG.chairs, label: "THE STUDIO", cls: "col-span-2 md:col-span-7 aspect-[16/10]" },
  { img: IMG.nails, label: "NAIL ATELIER", cls: "col-span-1 md:col-span-5 aspect-[3/4] md:aspect-auto" },
  { img: IMG.styling, label: "THE CRAFT", cls: "col-span-1 md:col-span-5 aspect-[3/4]" },
  { img: IMG.spa, label: "STILLNESS", cls: "col-span-2 md:col-span-7 aspect-[16/11]" },
  { img: IMG.portrait, label: "PORTRAIT", cls: "col-span-1 md:col-span-4 aspect-[3/4]" },
  { img: IMG.makeup, label: "DETAIL", cls: "col-span-1 md:col-span-4 aspect-square md:aspect-auto" },
  { img: IMG.barber, label: "PRECISION", cls: "col-span-2 md:col-span-4 aspect-[16/10] md:aspect-auto" },
];

export const MARQUEE_WORDS = ["HAIR", "SKIN", "SPA", "NAILS", "MAKEUP", "WELLNESS", "NASHIK"];

export const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
];

export const INSTA_TILES = [
  { img: IMG.hairWash, alt: "Hair ritual at the basin" },
  { img: IMG.facial, alt: "Skin and facial treatment" },
  { img: IMG.nails, alt: "Nail art detail" },
  { img: IMG.portrait2, alt: "Editorial beauty portrait" },
  { img: IMG.spa2, alt: "Spa and wellness therapy" },
  { img: IMG.makeup, alt: "Makeup artistry" },
];

export const TRANSFORMATIONS = [
  {
    service: "Hair Transformation",
    desc: "Dry, frizzy and uneven — to a sleek, glossy precision blowout.",
    before: "/images/hair-before.jpg",
    after: "/images/hair-after.jpg",
  },
  {
    service: "HydraFacial Skin Ritual",
    desc: "Acne marks and enlarged pores — to a clear, hydrated, radiant finish.",
    before: "/images/skin-before.jpg",
    after: "/images/skin-after.jpg",
  },
];

export const ARTISTS = [
  {
    role: "HAIR",
    note: "Senior Stylist",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=85&w=1200&auto=format&fit=crop",
  },
  {
    role: "SKIN & SPA",
    note: "Therapist",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=1200&auto=format&fit=crop",
  },
  {
    role: "NAILS & BEAUTY",
    note: "Artist",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=85&w=1200&auto=format&fit=crop",
  },
];
