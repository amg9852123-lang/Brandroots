import Marquee from "react-fast-marquee";
import { Instagram as IgIcon, ArrowUpRight } from "lucide-react";
import { BRAND, INSTA_TILES } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Instagram = () => (
  <section className="bg-ivory border-t border-charcoal/10 py-24 md:py-32 overflow-hidden">
    <div className="px-5 md:px-10">
      <Chapter num="10" title="On Instagram" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8 md:mt-10">
        <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight">
          <MaskedLine>Daily work,</MaskedLine>
          <MaskedLine delay={0.12} className="italic text-stone">
            in the feed.
          </MaskedLine>
        </h2>
        <Reveal delay={0.2}>
          <a
            data-testid="instagram-follow-btn"
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] border border-charcoal px-7 py-4 hover:bg-charcoal hover:text-ivory transition-colors duration-500"
          >
            <IgIcon size={15} /> FOLLOW BRANDROOT
          </a>
        </Reveal>
      </div>
    </div>

    <Reveal delay={0.15} className="mt-14">
      <Marquee speed={22} gradient={false} pauseOnHover>
        {INSTA_TILES.map((t, i) => (
          <a
            key={i}
            data-testid={`insta-tile-${i}`}
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group block mx-2 md:mx-3"
          >
            <div className="w-52 md:w-64 aspect-[3/4] overflow-hidden">
              <img
                src={t.img}
                alt={t.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          </a>
        ))}
      </Marquee>
    </Reveal>

    <Reveal className="px-5 md:px-10 mt-8">
      <a
        data-testid="instagram-handle-link"
        href={BRAND.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.25em] text-charcoal/60 hover:text-charcoal transition-colors duration-300"
      >
        {BRAND.instagramHandle} <ArrowUpRight size={13} />
      </a>
    </Reveal>
  </section>
);
