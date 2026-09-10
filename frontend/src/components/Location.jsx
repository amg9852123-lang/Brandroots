import { Phone, MessageCircle, Navigation, CalendarCheck } from "lucide-react";
import { BRAND } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Location = () => {
  const { openBooking } = useBooking();

  const actions = [
    { label: "CALL NOW", href: BRAND.phoneHref, icon: Phone, testid: "location-call-btn" },
    { label: "WHATSAPP", href: BRAND.whatsapp, icon: MessageCircle, testid: "location-whatsapp-btn" },
    { label: "GET DIRECTIONS", href: BRAND.maps, icon: Navigation, testid: "location-directions-btn" },
  ];

  return (
    <section id="contact" className="bg-ivory border-t border-charcoal/10 px-5 md:px-10 py-24 md:py-36">
      <Chapter num="11" title="Visit Us" />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-10 md:mt-14">
        <div>
          <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight leading-[1]">
            <MaskedLine>Opposite</MaskedLine>
            <MaskedLine delay={0.12} className="italic text-stone">
              City Centre Mall.
            </MaskedLine>
          </h2>

          <Reveal delay={0.2} className="mt-10">
            <p className="font-sans text-[10px] tracking-[0.3em] text-charcoal/45">
              {BRAND.full}
            </p>
            <address className="not-italic font-serif text-2xl md:text-3xl text-charcoal tracking-tight leading-snug mt-4">
              {BRAND.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <div className="mt-8 space-y-2">
              <a
                data-testid="location-phone-link"
                href={BRAND.phoneHref}
                className="block font-serif text-3xl md:text-4xl text-charcoal hover:text-stone transition-colors duration-300 tracking-tight"
              >
                {BRAND.phone}
              </a>
              <p className="font-sans text-xs tracking-[0.2em] text-charcoal/60">
                {BRAND.hours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="grid grid-cols-2 gap-3 mt-10 max-w-md">
            {actions.map((a) => (
              <a
                key={a.label}
                data-testid={a.testid}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-charcoal px-4 py-4 font-sans text-[10px] tracking-[0.25em] hover:bg-charcoal hover:text-ivory transition-colors duration-500"
              >
                <a.icon size={14} /> {a.label}
              </a>
            ))}
            <button
              data-testid="location-book-btn"
              onClick={() => openBooking()}
              className="flex items-center justify-center gap-2 bg-charcoal text-ivory px-4 py-4 font-sans text-[10px] tracking-[0.25em] hover:bg-charcoal/85 transition-colors duration-500"
            >
              <CalendarCheck size={14} /> BOOK APPOINTMENT
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="h-full min-h-[420px] border border-charcoal/15">
            <iframe
              data-testid="location-map"
              title="BRANDROOT Salon & Spa on Google Maps"
              src={BRAND.mapEmbed}
              className="w-full h-full min-h-[420px] grayscale contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
