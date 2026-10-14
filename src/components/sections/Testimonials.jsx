import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-brand-cream">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Our Customers Say"
          align="center"
        />

        <div className="mt-10 sm:mt-12">
          {visibleTestimonials.length === 0 ? (
            <div className="mx-auto flex max-w-lg flex-col items-center gap-3 rounded-2xl border border-dashed border-brand-brown/25 px-6 py-10 text-center">
              <Quote
                size={28}
                className="text-brand-gold"
                aria-hidden="true"
              />
              <p className="text-base leading-relaxed text-brand-charcoal/70">
                Customer reviews will be added here soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {visibleTestimonials.map((t, i) => (
                <Reveal
                  key={`${t.location}-${i}`}
                  delay={i * 0.08}
                  className="h-full"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-brown/10 bg-brand-cream-soft p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(35,29,23,0.18)] sm:p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-xl bg-brand-gold/10">
                        <Quote
                          size={23}
                          className="text-brand-gold"
                          aria-hidden="true"
                        />
                      </div>

                      <span className="text-xs font-medium uppercase tracking-wider text-brand-charcoal/45">
                        Customer Feedback
                      </span>
                    </div>

                    {/* Star rating */}
                    {Number.isFinite(t.rating) &&
                      t.rating >= 1 &&
                      t.rating <= 5 && (
                        <div
                          className="mb-4 flex items-center gap-1"
                          aria-label={`${t.rating} out of 5 stars`}
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              key={index}
                              size={16}
                              className={
                                index < t.rating
                                  ? "fill-brand-gold text-brand-gold"
                                  : "text-brand-brown/20"
                              }
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      )}

                    {/* Review */}
                    <p className="flex-1 text-[15px] leading-7 text-brand-charcoal/80">
                      “{t.quote}”
                    </p>

                    {/* Location */}
                    {t.location && (
                      <div className="mt-6 flex items-center gap-2 border-t border-brand-brown/10 pt-4">
                        <span
                          className="size-2 rounded-full bg-brand-gold"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-brand-charcoal/60">
                          {t.location}
                        </span>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
