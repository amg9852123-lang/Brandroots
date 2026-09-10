import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BRAND } from "../data/content";
import { useBooking } from "../context/BookingContext";

export const MobileDock = () => {
  const { openBooking } = useBooking();
  const item =
    "flex flex-col items-center justify-center gap-1 py-3 font-sans text-[9px] tracking-[0.2em] transition-colors duration-300";

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-charcoal/10 grid grid-cols-3"
      data-testid="mobile-dock"
    >
      <a data-testid="dock-call-btn" href={BRAND.phoneHref} className={`${item} text-charcoal`}>
        <Phone size={17} /> CALL
      </a>
      <a
        data-testid="dock-whatsapp-btn"
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-charcoal border-x border-charcoal/10`}
      >
        <MessageCircle size={17} /> WHATSAPP
      </a>
      <button
        data-testid="dock-book-btn"
        onClick={() => openBooking()}
        className={`${item} bg-charcoal text-ivory`}
      >
        <CalendarCheck size={17} /> BOOK
      </button>
    </div>
  );
};
