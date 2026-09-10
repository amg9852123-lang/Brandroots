import { useEffect, useMemo, useState } from "react";
import { Toaster } from "sonner";
import "@/App.css";
import { BookingContext } from "@/context/BookingContext";
import { initLenis } from "@/lib/scroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { EditorialMarquee } from "@/components/Marquee";
import { ServiceDirectory } from "@/components/ServiceDirectory";
import { FeaturedServices } from "@/components/FeaturedServices";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Transformations } from "@/components/Transformations";
import { Team } from "@/components/Team";
import { Packages } from "@/components/Packages";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileDock } from "@/components/MobileDock";
import { BookingDialog } from "@/components/BookingDialog";

function App() {
  const [booking, setBooking] = useState({ open: false, service: "", message: "" });

  useEffect(() => {
    initLenis();
  }, []);

  const ctx = useMemo(
    () => ({
      openBooking: (opts = {}) =>
        setBooking({ open: true, service: opts.service || "", message: opts.message || "" }),
    }),
    []
  );

  return (
    <BookingContext.Provider value={ctx}>
      <div className="grain bg-ivory text-charcoal min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Statement />
          <EditorialMarquee />
          <ServiceDirectory />
          <FeaturedServices />
          <Experience />
          <Gallery />
          <Transformations />
          <Team />
          <Packages />
          <Testimonials />
          <Instagram />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
        <MobileDock />
        <BookingDialog
          state={booking}
          onClose={() => setBooking({ open: false, service: "", message: "" })}
        />
        <Toaster position="top-center" toastOptions={{ style: { borderRadius: 0 } }} />
      </div>
    </BookingContext.Provider>
  );
}

export default App;
