import { Chapter, MaskedLine, Reveal } from "./Reveal";

export const Statement = () => (
  <section className="bg-ivory px-5 md:px-10 py-28 md:py-44">
    <Chapter num="01" title="The Philosophy" />
    <h2
      className="font-serif text-charcoal text-[11vw] sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight mt-10 md:mt-14 max-w-6xl"
      data-testid="statement-heading"
    >
      <MaskedLine delay={0.1}>Beauty is not a service.</MaskedLine>
      <MaskedLine delay={0.22} className="italic text-stone">
        It is an experience.
      </MaskedLine>
    </h2>
    <div className="mt-14 md:mt-20 grid md:grid-cols-12">
      <Reveal delay={0.2} className="md:col-start-7 md:col-span-5">
        <p className="font-sans text-base md:text-lg leading-relaxed text-charcoal/70">
          At BRANDROOT, every appointment begins with listening. We believe true
          luxury is personal — an unhurried consultation, an honest
          recommendation, and craft delivered with quiet precision. Hair, skin,
          spa and beauty, brought together under one roof in Nashik, and
          tailored entirely to you.
        </p>
      </Reveal>
    </div>
  </section>
);
