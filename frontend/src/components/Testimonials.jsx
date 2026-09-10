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
          <blockquote className="border-l border-charcoal/20 pl-6 md:pl-10">
            <p className="font-serif italic text-2xl md:text-4xl text-charcoal/80 leading-snug tracking-tight">
              “A verified Google review from a BRANDROOT guest will be featured
              here.”
            </p>
            <footer className="mt-6">
              <span className="font-sans text-[9px] tracking-[0.3em] text-charcoal/40">
                EDITABLE PLACEHOLDER — REPLACE WITH A VERIFIED CLIENT REVIEW
              </span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </div>
  </section>
);
