import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 36, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

export const MaskedLine = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <motion.span
        className={`block ${className}`}
        initial={false}
        animate={{ y: inView ? "0%" : "112%" }}
        transition={{ duration: 1.15, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Chapter = ({ num, title, light = false }) => (
  <Reveal
    className={`flex items-center gap-4 ${light ? "text-ivory/50" : "text-charcoal/50"}`}
  >
    <span className="font-sans text-[11px] tracking-[0.3em]">{num}</span>
    <span className={`h-px w-10 ${light ? "bg-ivory/30" : "bg-charcoal/25"}`} />
    <span className="font-sans text-[11px] tracking-[0.3em] uppercase">{title}</span>
  </Reveal>
);
