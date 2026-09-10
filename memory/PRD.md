# BRANDROOT SALON & SPA LTD. — Website PRD

## Original Problem Statement
Build a premium, editorial-quality website for BRANDROOT SALON & SPA LTD., a real luxury unisex salon & spa in Nashik, Maharashtra (Shop No. 9/10/11, Shreeji The Status, Opp. City Centre Mall, Parijat Nagar, Nashik 422002 · +91 75075 15957 · 10 AM–8 PM daily · 4.8★, ~365 Google reviews · brandrootsalon.com). Direction: quiet luxury × fashion editorial × modern Indian luxury. No invented awards/staff/testimonials/prices — clearly marked editable placeholders where data is unavailable. Awwwards-level craft: masked line-by-line hero reveal, numbered manifesto chapters, slow editorial marquee, lenis smooth scroll, framer-motion reveals, subtle parallax, mobile-first with strong call/WhatsApp/book CTAs.

## User Personas
- Nashik locals (men & women) discovering a premium salon/spa and booking appointments
- Existing clients checking services, packages (Silver/Gold/Platinum), hours, location
- Salon owner/team receiving appointment enquiries

## Architecture
- Frontend: React 19 (JSX), Tailwind, framer-motion, lenis, react-fast-marquee, axios, sonner. Sections as components in /app/frontend/src/components; content centralized in src/data/content.js; booking state via src/context/BookingContext.js; lenis via src/lib/scroll.js
- Backend: FastAPI /api — POST /api/enquiries (validates, saves to Mongo, returns prefilled wa.me deep-link), GET /api/enquiries (list), GET /api/ (health)
- DB: MongoDB `enquiries` collection (uuid string ids, `_id` excluded from reads)
- Design: /app/design_guidelines.json — ivory #F7F5F0 / charcoal #111111 / beige #D9D0C5; Cormorant Garamond + Manrope

## Implemented (2026-09-10)
- Cinematic hero: masked line reveal "THE ART OF BEAUTIFUL HAIR.", parallax bg, scroll indicator, dual CTAs
- Chapters 01–11: brand statement, editorial marquee, service directory (8 real categories w/ hover image preview), featured services (PRICE ON CONSULTATION), MORE THAN A SALON split-screen, asymmetric gallery, before/after placeholders, team placeholders (arched frames), Silver/Gold/Platinum membership presentation, 4.8★/365 Google social proof + editable quote placeholder, Instagram section (real @brandrootsalonandspa), location w/ live Google Maps embed + Call/WhatsApp/Directions, cinematic final CTA, minimal footer
- Booking drawer: name/phone/service/date/time/message → MongoDB + WhatsApp deep-link confirm; date min validation
- Mobile: full-screen menu, sticky CALL/WHATSAPP/BOOK dock
- SEO title/meta, grain overlay, reduced-motion support, data-testids throughout

## Verified
- curl: POST/GET /api/enquiries ✓; hero/services/gallery/contact screenshots ✓; booking submit → success + wa.me link ✓; mobile hero/menu/contact ✓; all 18 stock images HTTP 200 ✓

## Update (2026-09-10) — Imagery & verified reviews
- Transformations: placeholder frames replaced with editorial before/after photo pairs (frizzy→glossy hair; facial-in-progress→glowing skin), BEFORE/AFTER tags, "representative imagery" disclosure
- Team: arched frames now hold professional portrait photography (object-cover in arch masks); names still marked TO BE CONFIRMED
- Testimonials: added real verified review ("Nice ambience and service." — Sunny Pingale, Justdial Jan 2024) + aggregated guest-praise insights from 361 Justdial ratings; slot reserved for more Google reviews. NOTE: Google review texts are not publicly scrapeable (limited Maps view); only Justdial content was verifiable. One negative review (Pritam, membership complaint) exists — intentionally not featured
- New images curl-verified (HTTP 200) and screenshot-verified in situ

## Backlog
- P0: Replace representative imagery with real salon photography (team names/portraits, client before/after with consent); add 1–2 more named Google reviews manually from the Maps listing
- P1: Real package pricing/inclusions; notify salon of enquiries (Resend email or WhatsApp API)
- P2: Dedicated /services detail pages; real Instagram feed embed; blog/SEO content

## Next Tasks
1. Collect real photos (team, interior, transformations) from owner and swap representative stock imagery
2. Copy 2 more named Google reviews manually from the Maps listing into the testimonial section
3. Confirm package details and publish pricing
