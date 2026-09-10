import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { Chapter, Reveal, MaskedLine, EASE } from "./Reveal";

export const ServiceDirectory = () => {
  const [active, setActive] = useState(0);
  const { openBooking } = useBooking();

  return (
    <section id="services" className="bg-ivory px-5 md:px-10 py-24 md:py-36">
      <Chapter num="02" title="The Services" />
      <h2 className="font-serif text-charcoal text-5xl md:text-7xl tracking-tight mt-8 md:mt-10">
        <MaskedLine>A directory of</MaskedLine>
        <MaskedLine delay={0.12} className="italic text-stone">
          our craft.
        </MaskedLine>
      </h2>

      <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <button
                data-testid={`service-row-${s.id}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => openBooking({ service: s.name })}
                className={`group w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-6 md:py-7 border-t border-charcoal/15 px-2 md:px-4 transition-colors duration-500 hover:bg-charcoal ${
                  i === SERVICES.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-sans text-[11px] tracking-[0.2em] text-charcoal/40 group-hover:text-ivory/40 transition-colors duration-500 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-serif text-2xl md:text-4xl text-charcoal group-hover:text-ivory transition-colors duration-500 tracking-tight">
                    {s.name}
                  </span>
                  <span className="block font-sans text-xs md:text-sm text-charcoal/50 group-hover:text-ivory/50 transition-colors duration-500 mt-1 max-w-md">
                    {s.desc}
                  </span>
                </span>
                <span className="flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] text-charcoal/50 group-hover:text-ivory transition-colors duration-500">
                  <span className="hidden md:inline">EXPLORE SERVICES</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 aspect-[3/4] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={SERVICES[active].img}
                src={SERVICES[active].img}
                alt={SERVICES[active].name}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-charcoal/70 backdrop-blur-sm">
              <p className="font-sans text-[10px] tracking-[0.3em] text-ivory/80">
                {SERVICES[active].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
