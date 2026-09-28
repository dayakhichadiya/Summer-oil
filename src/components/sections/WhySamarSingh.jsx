import { Clock3, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
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
          heading="Why Summer Sing Tel?"
          light
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-brand-cream-soft/5 border border-brand-cream-soft/10"
            >
              <Icon size={22} className="text-brand-gold-light" strokeWidth={1.8} aria-hidden="true" />
              <p className="font-display font-semibold text-brand-cream-soft text-lg">
                {title}
              </p>
              <p className="text-sm text-brand-cream-soft/65 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
