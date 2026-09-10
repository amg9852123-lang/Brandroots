import { Chapter, Reveal, MaskedLine } from "./Reveal";

const ITEMS = [
  { service: "Hair Transformation", desc: "Cut, colour and finish — documented with client consent." },
  { service: "Skin Treatment", desc: "Facial and skin ritual results, photographed in-studio." },
];

const Frame = ({ label }) => (
  <div className="aspect-[3/4] border border-dashed border-charcoal/30 bg-beige/20 flex flex-col items-center justify-center gap-2 p-4 text-center">
    <span className="font-sans text-[10px] tracking-[0.3em] text-charcoal/50">{label}</span>
    <span className="font-sans text-[9px] tracking-[0.2em] text-charcoal/35">
      IMAGE TO BE ADDED
    </span>
  </div>
);

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
          REAL CLIENT TRANSFORMATIONS WILL BE SHOWCASED HERE — PUBLISHED ONLY
          WITH CLIENT CONSENT.
        </p>
      </Reveal>
    </div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-14">
      {ITEMS.map((it, i) => (
        <Reveal key={it.service} delay={i * 0.1}>
          <div className="grid grid-cols-2 gap-3" data-testid={`transformation-${i}`}>
            <Frame label="BEFORE" />
            <Frame label="AFTER" />
          </div>
          <div className="mt-4 flex items-baseline justify-between border-t border-charcoal/15 pt-4">
            <h3 className="font-serif text-xl md:text-2xl text-charcoal tracking-tight">
              {it.service}
            </h3>
            <span className="font-sans text-[10px] tracking-[0.25em] text-charcoal/50">
              {it.desc}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
