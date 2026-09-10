import Lenis from "lenis";

let lenis = null;

export function initLenis() {
  if (lenis || typeof window === "undefined") return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  lenis = new Lenis({ duration: 1.25, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function getLenis() {
  return lenis;
}

export function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -64, duration: 1.5 });
  else el.scrollIntoView({ behavior: "smooth" });
}
