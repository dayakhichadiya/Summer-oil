import { BadgeCheck, Handshake, PackageCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";

const pillars = [
  {
    icon: Handshake,
    title: "Direct Communication",
    description: "No middlemen — talk to us directly on WhatsApp.",
  },
  {
    icon: PackageCheck,
    title: "Careful Packaging",
    description: "Oil is packed so it reaches you safely and securely.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Dealings",
    description: "Clear conversations about size, price, and delivery.",
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    description: "Delivery is arranged once your order is confirmed.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-brand-brown">
      <Container className="py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-2.5 lg:items-start lg:text-left">
              <div className="w-11 h-11 rounded-full bg-brand-cream-soft/10 flex items-center justify-center">
                <Icon size={20} className="text-brand-gold-light" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <p className="font-semibold text-brand-cream-soft text-sm sm:text-base">{title}</p>
              <p className="text-xs sm:text-sm text-brand-cream-soft/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
