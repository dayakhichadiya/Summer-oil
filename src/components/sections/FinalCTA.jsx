import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PeanutShape from "@/components/ui/illustrations/PeanutShape";

export default function FinalCTA() {
  return (
    <section className="bg-brand-green">
      <Container className="py-16 sm:py-20 text-center flex flex-col items-center gap-6">
        <PeanutShape className="w-16 h-9" tone="green" />
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] text-brand-cream-soft leading-tight max-w-2xl">
          Get in Touch on WhatsApp Today
        </h2>
        <p className="text-brand-cream-soft/80 text-base sm:text-lg max-w-md leading-relaxed">
          We're just one message away — ask us about sizes, pricing, and delivery.
        </p>
        <WhatsAppButton size="lg" variant="ghost" className="mt-2">
          Order on WhatsApp
        </WhatsAppButton>
      </Container>
    </section>
  );
}
