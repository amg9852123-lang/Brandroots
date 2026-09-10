import { Star, ArrowUpRight } from "lucide-react";
import { BRAND } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Testimonials = () => (
  <section className="bg-ivory px-5 md:px-10 py-24 md:py-36">
    <Chapter num="09" title="In Their Words" />
    <div className="grid lg:grid-cols-12 gap-12 mt-10 md:mt-14 items-end">
      <div className="lg:col-span-5">
        <h2 className="font-serif text-charcoal text-7xl md:text-9xl tracking-tight leading-none flex items-start">
          <MaskedLine>4.8</MaskedLine>
        </h2>
        <Reveal delay={0.15}>
          <div className="flex items-center gap-1 mt-4" data-testid="google-rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-charcoal text-charcoal" />
            ))}
          </div>
          <p className="font-sans text-xs tracking-[0.2em] text-charcoal/60 mt-4 leading-relaxed">
            RATED 4.8 ON GOOGLE
            <br />
            BY 365+ GUESTS
          </p>
          <a
            data-testid="google-reviews-link"
            href={BRAND.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] text-charcoal border-b border-charcoal pb-1 mt-6 hover:opacity-50 transition-opacity duration-300"
          >
            READ REVIEWS ON GOOGLE <ArrowUpRight size={13} />
          </a>
        </Reveal>
      </div>

      <div className="lg:col-span-7">
        <Reveal delay={0.2}>
          <blockquote className="border-l border-charcoal/20 pl-6 md:pl-10" data-testid="verified-review">
            <p className="font-serif italic text-2xl md:text-4xl text-charcoal/80 leading-snug tracking-tight">
              “Nice ambience and service.”
            </p>
            <footer className="mt-6">
              <p className="font-sans text-xs tracking-[0.2em] text-charcoal/75">
                SUNNY PINGALE
              </p>
              <p className="font-sans text-[9px] tracking-[0.3em] text-charcoal/40 mt-1">
                VERIFIED REVIEW · JUSTDIAL, JAN 2024
              </p>
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <p className="font-sans text-[10px] tracking-[0.3em] text-charcoal/45 mb-5">
            WHAT GUESTS PRAISE — AGGREGATED FROM 360+ VERIFIED JUSTDIAL RATINGS
          </p>
          <ul className="space-y-4">
            {[
              "Professional and efficient staff who provide excellent services",
              "Aesthetic and inviting interior with a royal ambience",
              "Polite and experienced staff who maintain cleanliness and hygiene",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-4 border-t border-charcoal/10 pt-4"
              >
                <span className="mt-2 h-px w-6 bg-charcoal/40 shrink-0" />
                <span className="font-serif text-lg md:text-xl text-charcoal/75 tracking-tight leading-snug">
                  {t}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-[9px] tracking-[0.25em] text-charcoal/35 mt-8">
            SLOT RESERVED — ADD FURTHER VERIFIED GOOGLE REVIEWS HERE
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
