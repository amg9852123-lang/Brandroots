import Marquee from "react-fast-marquee";
import { MARQUEE_WORDS } from "../data/content";

export const EditorialMarquee = ({ dark = false }) => (
  <div
    className={`py-7 md:py-10 border-y overflow-hidden ${
      dark ? "bg-charcoal border-ivory/10" : "bg-ivory border-charcoal/10"
    }`}
    data-testid="editorial-marquee"
  >
    <Marquee speed={32} gradient={false} pauseOnHover>
      {MARQUEE_WORDS.map((w) => (
        <span
          key={w}
          className={`font-serif italic text-3xl md:text-5xl mx-8 md:mx-12 whitespace-nowrap ${
            dark ? "text-ivory/70" : "text-charcoal/70"
          }`}
        >
          {w}
          <span className={`not-italic ml-8 md:ml-12 ${dark ? "text-stone/50" : "text-stone"}`}>
            ·
          </span>
        </span>
      ))}
    </Marquee>
  </div>
);
