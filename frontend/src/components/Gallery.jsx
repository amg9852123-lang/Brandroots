import { GALLERY } from "../data/content";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Gallery = () => (
  <section id="gallery" className="bg-ivory px-5 md:px-10 py-24 md:py-36">
    <Chapter num="05" title="The Gallery" />
    <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight mt-8 md:mt-10">
      <MaskedLine>Moments,</MaskedLine>
      <MaskedLine delay={0.12} className="italic text-stone">
        in frame.
      </MaskedLine>
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 mt-14 md:mt-20">
      {GALLERY.map((g, i) => (
        <Reveal key={g.label} delay={(i % 3) * 0.08} className={g.cls}>
          <figure
            className="group relative overflow-hidden w-full h-full"
            data-testid={`gallery-item-${i}`}
          >
            <img
              src={g.img}
              alt={g.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <figcaption className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.3em] text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {g.label}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </section>
);
