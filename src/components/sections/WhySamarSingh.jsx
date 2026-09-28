import { Clock3, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Direct Conversations",
    description: "No call centers — get your questions answered straight on WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Information",
    description: "No hidden details on size, price, or delivery — just honest conversations.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    description: "Delivery is scheduled promptly once your order is confirmed.",
  },
  {
    icon: Users,
    title: "Built for Indian Kitchens",
    description: "Prepared with everyday Indian cooking needs in mind.",
  },
];

export default function WhySamarSingh() {
  return (
    <section id="why-us" className="bg-brand-brown">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Why Us"
          heading="Why Samar Sing Tel?"
          light
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col gap-3 p-6 rounded-2xl bg-brand-cream-soft/5 border border-brand-cream-soft/10 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-cream-soft/10 hover:border-brand-gold-light/30">
                <Icon
                  size={22}
                  className="text-brand-gold-light transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <p className="font-display font-semibold text-brand-cream-soft text-lg">
                  {title}
                </p>
                <p className="text-sm text-brand-cream-soft/65 leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
