import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function OurProcess() {
  return (
    <section id="process" className="bg-brand-cream-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our Process"
          heading="From the Field to Your Kitchen"
          description="Every bottle of oil passes through these stages before it reaches you."
        />

        <ol className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 0.1} className="group relative pl-1">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl sm:text-4xl font-semibold text-brand-gold-dark/70 transition-colors duration-300 group-hover:text-brand-gold-dark">
                  {step.number}
                </span>
                <span className="font-display font-semibold text-lg sm:text-xl text-brand-charcoal">
                  {step.title}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-[15px] text-brand-charcoal/70 leading-relaxed max-w-xs">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-4 -right-4 w-8 h-px bg-gradient-to-r from-brand-brown/25 to-transparent" />
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
