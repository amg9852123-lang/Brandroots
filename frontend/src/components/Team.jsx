import { ARTISTS } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Team = () => (
  <section id="about" className="bg-ivory px-5 md:px-10 pb-24 md:pb-36">
    <Chapter num="07" title="The Artists" />
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8 md:mt-10">
      <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight">
        <MaskedLine>The hands</MaskedLine>
        <MaskedLine delay={0.12} className="italic text-stone">
          behind the craft.
        </MaskedLine>
      </h2>
      <Reveal delay={0.2}>
        <p className="font-sans text-xs tracking-[0.15em] text-charcoal/50 max-w-xs md:text-right leading-relaxed">
          REPRESENTATIVE PORTRAITS — TEAM NAMES AND STUDIO PHOTOGRAPHY ARE
          BEING FINALISED WITH THE SALON.
        </p>
      </Reveal>
    </div>

    <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-14">
      {ARTISTS.map((s, i) => (
        <Reveal key={s.role} delay={i * 0.1}>
          <div data-testid={`team-slot-${i}`}>
            <div className="group rounded-t-[10rem] overflow-hidden aspect-[3/4] bg-beige/30">
              <img
                src={s.img}
                alt={`${s.role} specialist at BRANDROOT`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4 border-t border-charcoal/15 pt-4">
              <p className="font-sans text-[10px] tracking-[0.3em] text-charcoal/45">
                {s.note.toUpperCase()} · NAME TO BE CONFIRMED
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-charcoal tracking-tight mt-1">
                {s.role}
              </h3>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
