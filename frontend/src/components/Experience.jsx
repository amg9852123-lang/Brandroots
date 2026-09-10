import { IMG } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

const POINTS = [
  ["Consultation first", "Every visit begins with a conversation, not a chair."],
  ["Personal recommendations", "Advice shaped around your hair, skin and lifestyle."],
  ["Attention to detail", "Quiet precision in every cut, treatment and finish."],
  ["A place to unwind", "A calm, considered environment designed for pause."],
];

export const Experience = () => (
  <section id="experience" className="bg-ivory px-5 md:px-10 py-24 md:py-36">
    <Chapter num="04" title="The Experience" />
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-10 md:mt-14">
      <Reveal className="order-2 lg:order-1">
        <div className="group overflow-hidden aspect-[3/4] lg:sticky lg:top-28">
          <img
            src={IMG.interior2}
            alt="Inside the BRANDROOT studio"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
          />
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight leading-[1]">
          <MaskedLine>MORE THAN</MaskedLine>
          <MaskedLine delay={0.12} className="italic text-stone">
            A SALON.
          </MaskedLine>
        </h2>
        <Reveal delay={0.2}>
          <p className="font-sans text-base md:text-lg leading-relaxed text-charcoal/70 mt-8 max-w-lg">
            BRANDROOT is where hair, beauty and wellness are treated as one
            craft. From the first consultation to the final finish, every detail
            is considered — so you leave not just looking different, but feeling
            it.
          </p>
        </Reveal>
        <div className="mt-12 md:mt-16">
          {POINTS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="grid grid-cols-[auto_1fr] gap-6 py-6 border-t border-charcoal/15 last:border-b">
                <span className="font-serif italic text-xl text-stone w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal tracking-tight">
                    {t}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/60 mt-1">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
