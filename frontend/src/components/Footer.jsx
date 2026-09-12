import { Instagram, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS } from "../data/content";
import { scrollToId } from "../lib/scroll";

export const Footer = () => (
  <footer className="bg-charcoal text-ivory px-5 md:px-10 pt-20 pb-28 md:pb-10">
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <p className="font-serif text-4xl md:text-5xl tracking-[0.12em]">
          {BRAND.name.toUpperCase()}
        </p>
        <p className="font-sans text-xs tracking-[0.25em] text-ivory/50 mt-4">
          {BRAND.tagline.toUpperCase()}
        </p>
        <p className="font-sans text-xs tracking-[0.2em] text-ivory/40 mt-2">
          {BRAND.city.toUpperCase()}
        </p>
      </div>

      <div className="md:col-span-3">
        <p className="font-sans text-[10px] tracking-[0.3em] text-ivory/40 mb-5">MENU</p>
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              data-testid={`footer-link-${l.label.toLowerCase()}`}
              onClick={() => scrollToId(l.href)}
              className="text-left font-sans text-xs tracking-[0.2em] text-ivory/70 hover:text-ivory transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-4">
        <p className="font-sans text-[10px] tracking-[0.3em] text-ivory/40 mb-5">CONTACT</p>
        <a
          data-testid="footer-phone-link"
          href={BRAND.phoneHref}
          className="block font-serif text-2xl tracking-tight hover:text-stone transition-colors duration-300"
        >
          {BRAND.phone}
        </a>
        <div className="font-sans text-xs text-ivory/50 mt-3 leading-relaxed">
          {BRAND.address.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <p className="font-sans text-xs text-ivory/50 mt-1">{BRAND.hours}</p>
        <div className="flex gap-3 mt-6">
          <a
            data-testid="footer-instagram-link"
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${BRAND.name} on Instagram`}
            className="p-3 border border-ivory/25 hover:bg-ivory hover:text-charcoal transition-colors duration-500"
          >
            <Instagram size={16} />
          </a>
          <a
            data-testid="footer-whatsapp-link"
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${BRAND.name} on WhatsApp`}
            className="p-3 border border-ivory/25 hover:bg-ivory hover:text-charcoal transition-colors duration-500"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-ivory/10 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-3">
      <p className="font-sans text-[10px] tracking-[0.2em] text-ivory/40">
        © 2026 {BRAND.full} ALL RIGHTS RESERVED.
      </p>
    </div>
  </footer>
);
