import { TRANSFORMATIONS } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Transformations = () => (
  <section className="bg-ivory px-5 md:px-10 pb-24 md:pb-36">
    <Chapter num="06" title="Transformations" />
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8 md:mt-10">
      <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight">
        <MaskedLine>Before</MaskedLine>
        <MaskedLine delay={0.12} className="italic text-stone">
          & after.
        </MaskedLine>
      </h2>
      <Reveal delay={0.2}>
        <p className="font-sans text-xs tracking-[0.15em] text-charcoal/50 max-w-xs md:text-right leading-relaxed">
          REAL CLIENT RESULTS — PHOTOGRAPHED IN-STUDIO AND PUBLISHED WITH
          CLIENT CONSENT.
        </p>
      </Reveal>
    </div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-14">
      {TRANSFORMATIONS.map((it, i) => (
        <Reveal key={it.service} delay={i * 0.1}>
          <div className="grid grid-cols-2 gap-3" data-testid={`transformation-${i}`}>
            {[
              ["BEFORE", it.before],
              ["AFTER", it.after],
            ].map(([label, src]) => (
              <figure key={label} className="group relative overflow-hidden aspect-[16/10]">
                <img
                  src={src}
                  alt={`${it.service} — ${label.toLowerCase()}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
          <div className="mt-4 border-t border-charcoal/15 pt-4 flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-xl md:text-2xl text-charcoal tracking-tight">
              {it.service}
            </h3>
            <span className="font-sans text-[10px] tracking-[0.2em] text-charcoal/50 text-right">
              {it.desc}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
