import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND, IMG } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { scrollToId } from "../lib/scroll";
import { EASE } from "./Reveal";

const Line = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] overflow-hidden bg-charcoal">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMG.hero}
          alt={`Editorial beauty portrait — ${BRAND.full}`}
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 h-full flex flex-col justify-end px-5 md:px-10 pb-24 md:pb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-sans text-[10px] md:text-[11px] tracking-[0.35em] text-ivory/70 mb-6"
          data-testid="hero-eyebrow"
        >
          {BRAND.name.toUpperCase()} — LUXURY UNISEX SALON & SPA · {BRAND.city.toUpperCase()}
        </motion.p>

        <h1 className="font-serif text-ivory text-[16vw] sm:text-[13vw] lg:text-[10vw] leading-[0.92] tracking-tight">
          <Line delay={0.45}>THE ART OF</Line>
          <Line delay={0.58} className="italic text-beige">
            BEAUTIFUL HAIR.
          </Line>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: EASE }}
            className="font-sans text-sm md:text-base text-ivory/70 max-w-xs leading-relaxed"
          >
            A refined hair, beauty and wellness experience in {BRAND.city}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1, ease: EASE }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              data-testid="hero-book-btn"
              onClick={() => openBooking()}
              className="font-sans text-[11px] tracking-[0.25em] px-8 py-4 bg-ivory text-charcoal hover:bg-beige transition-colors duration-500"
            >
              BOOK AN APPOINTMENT
            </button>
            <button
              data-testid="hero-explore-btn"
              onClick={() => scrollToId("#services")}
              className="font-sans text-[11px] tracking-[0.25em] px-8 py-4 border border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal transition-colors duration-500"
            >
              EXPLORE SERVICES
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        data-testid="hero-scroll-indicator"
      >
        <span className="font-sans text-[9px] tracking-[0.35em] text-ivory/50">SCROLL</span>
        <motion.span
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-ivory/50 origin-top"
        />
      </motion.div>
    </section>
  );
};
