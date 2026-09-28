import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

function initials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="bg-brand-cream">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Our Customers Say"
          align="center"
        />

        <div className="mt-10 sm:mt-12">
          {testimonials.length === 0 ? (
            <div className="mx-auto max-w-lg text-center flex flex-col items-center gap-3 py-8 px-6 rounded-2xl border border-dashed border-brand-brown/25">
              <Quote size={26} className="text-brand-gold" aria-hidden="true" />
              <p className="text-brand-charcoal/70 text-base leading-relaxed">
                Customer reviews will be added here soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08} className="h-full">
                  <div className="flex h-full flex-col gap-4 p-6 rounded-2xl bg-brand-cream-soft border border-brand-brown/10 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(35,29,23,0.2)]">
                    <Quote size={20} className="text-brand-gold" aria-hidden="true" />
                    <p className="text-brand-charcoal/80 text-[15px] leading-relaxed flex-1">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gold/15 font-display text-sm font-semibold text-brand-gold-dark">
                        {initials(t.name)}
                      </span>
                      <div>
                        <p className="font-semibold text-brand-charcoal text-sm">{t.name}</p>
                        <p className="text-xs text-brand-charcoal/50">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
