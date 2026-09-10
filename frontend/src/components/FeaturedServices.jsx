import { ArrowRight } from "lucide-react";
import { FEATURED, IMG } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const FeaturedServices = () => {
  const { openBooking } = useBooking();

  return (
    <section className="bg-charcoal text-ivory px-5 md:px-10 py-24 md:py-36">
      <Chapter num="03" title="Featured Experiences" light />
      <div className="grid lg:grid-cols-12 gap-12 mt-10 md:mt-14">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02]">
            <MaskedLine>Signature</MaskedLine>
            <MaskedLine delay={0.12} className="italic text-stone">
              experiences.
            </MaskedLine>
          </h2>
          <Reveal delay={0.2} className="mt-8 md:mt-10">
            <div className="group overflow-hidden aspect-[4/5]">
              <img
                src={IMG.facial}
                alt="Facial treatment at BRANDROOT"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-24">
          {FEATURED.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div className="group flex items-center justify-between gap-4 py-6 border-t border-ivory/15 last:border-b">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] text-ivory/40 uppercase">
                    {f.cat}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-1 tracking-tight">
                    {f.name}
                  </h3>
                  <p className="font-sans text-[10px] tracking-[0.25em] text-stone/70 mt-2">
                    PRICE ON CONSULTATION
                  </p>
                </div>
                <button
                  data-testid={`featured-view-${i}`}
                  onClick={() => openBooking({ service: f.name })}
                  className="shrink-0 flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] border border-ivory/30 px-5 py-3 hover:bg-ivory hover:text-charcoal transition-colors duration-500"
                >
                  VIEW SERVICE
                  <ArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
