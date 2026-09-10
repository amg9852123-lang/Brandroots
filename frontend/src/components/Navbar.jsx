import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { scrollToId, getLenis } from "../lib/scroll";
import { EASE } from "./Reveal";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 400 : 0);
  };

  const light = !scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 h-16 md:h-20">
          <button
            data-testid="nav-logo"
            onClick={() => go("#home")}
            className={`font-serif text-lg md:text-xl tracking-[0.25em] transition-colors duration-500 ${
              light ? "text-ivory" : "text-charcoal"
            } ${open ? "text-ivory" : ""}`}
          >
            BRANDROOT
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className={`font-sans text-[11px] tracking-[0.25em] transition-colors duration-500 hover:opacity-50 ${
                  light ? "text-ivory" : "text-charcoal"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-book-btn"
              onClick={() => openBooking()}
              className={`hidden sm:block font-sans text-[11px] tracking-[0.25em] px-6 py-3 border transition-colors duration-500 ${
                light
                  ? "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
                  : "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
              }`}
            >
              BOOK APPOINTMENT
            </button>
            <button
              data-testid="nav-menu-btn"
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors duration-500 ${
                light || open ? "text-ivory" : "text-charcoal"
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-between px-6 pt-28 pb-10"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: EASE }}
                  onClick={() => go(l.href)}
                  className="text-left font-serif text-4xl sm:text-5xl text-ivory py-2 hover:text-stone transition-colors duration-300"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <button
                data-testid="mobile-menu-book-btn"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => openBooking(), 400);
                }}
                className="w-full border border-ivory/60 text-ivory font-sans text-[11px] tracking-[0.25em] py-4 hover:bg-ivory hover:text-charcoal transition-colors duration-500"
              >
                BOOK APPOINTMENT
              </button>
              <a
                data-testid="mobile-menu-call-link"
                href={BRAND.phoneHref}
                className="flex items-center justify-center gap-2 text-ivory/60 font-sans text-xs tracking-[0.2em]"
              >
                <Phone size={14} /> {BRAND.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
