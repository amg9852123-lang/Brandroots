import { ArrowRight } from "lucide-react";
import { PACKAGES } from "../data/content";
import { useBooking } from "../context/BookingContext";
import { Chapter, Reveal, MaskedLine } from "./Reveal";

export const Packages = () => {
  const { openBooking } = useBooking();

  return (
    <section className="bg-charcoal text-ivory px-5 md:px-10 py-24 md:py-36">
      <Chapter num="08" title="Memberships" light />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-10 md:mt-14">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.02]">
          <MaskedLine>The BRANDROOT</MaskedLine>
          <MaskedLine delay={0.12} className="italic text-stone">
            packages.
          </MaskedLine>
        </h2>
        <Reveal delay={0.2}>
          <p className="font-sans text-xs tracking-[0.15em] text-ivory/50 max-w-xs md:text-right leading-relaxed">
            INCLUSIONS AND PRICING ARE SHARED PERSONALLY — ENQUIRE FOR THE
            CURRENT PACKAGE DETAILS.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 border border-ivory/15 mt-14 md:mt-20 divide-y md:divide-y-0 md:divide-x divide-ivory/15">
        {PACKAGES.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className="h-full">
            <div
              className="group h-full flex flex-col justify-between gap-16 p-8 md:p-10 hover:bg-ivory/5 transition-colors duration-700"
              data-testid={`package-${p.name.toLowerCase().replace(" ", "-")}`}
            >
              <div>
                <span className="font-sans text-[11px] tracking-[0.3em] text-ivory/40">
                  {p.num}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl tracking-tight mt-6">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-ivory/50 leading-relaxed mt-4 max-w-xs">
                  {p.note}
                </p>
              </div>
              <button
                data-testid={`package-cta-${i}`}
                onClick={() =>
                  openBooking({
                    service: "Package Enquiry",
                    message: `I'd like details about the ${p.name}.`,
                  })
                }
                className="flex items-center gap-3 font-sans text-[10px] tracking-[0.25em] text-ivory/70 group-hover:text-ivory transition-colors duration-500"
              >
                VIEW PACKAGE DETAILS
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
