import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND, IMG } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { MaskedLine, Reveal } from "./Reveal";

export const FinalCTA = () => {
  const ref = useRef(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[85svh] overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <img
          src={IMG.interior1}
          alt="The BRANDROOT studio"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <h2 className="font-serif text-ivory text-[12vw] sm:text-7xl lg:text-8xl tracking-tight leading-[0.98]">
          <MaskedLine>YOUR NEXT</MaskedLine>
          <MaskedLine delay={0.12} className="italic text-beige">
            TRANSFORMATION
          </MaskedLine>
          <MaskedLine delay={0.24}>STARTS HERE.</MaskedLine>
        </h2>
        <Reveal delay={0.4}>
          <p className="font-sans text-sm text-ivory/70 tracking-wide mt-8">
            Discover the BRANDROOT experience.
          </p>
        </Reveal>
        <Reveal delay={0.5} className="flex flex-col sm:flex-row gap-3 mt-10">
          <button
            data-testid="finalcta-book-btn"
            onClick={() => openBooking()}
            className="font-sans text-[11px] tracking-[0.25em] px-9 py-4 bg-ivory text-charcoal hover:bg-beige transition-colors duration-500"
          >
            BOOK YOUR APPOINTMENT
          </button>
          <a
            data-testid="finalcta-call-btn"
            href={BRAND.phoneHref}
            className="font-sans text-[11px] tracking-[0.25em] px-9 py-4 border border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal transition-colors duration-500"
          >
            CALL BRANDROOT
          </a>
        </Reveal>
      </div>
    </section>
  );
};
