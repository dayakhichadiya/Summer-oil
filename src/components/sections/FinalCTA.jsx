import { Droplet } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-green to-brand-green-dark grain-overlay">
      {/* Ambient glow blobs — brighter + bigger so they actually read against the green */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand-gold-light/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-brand-cream-soft/20 blur-[110px]" />
      {/* Faint field-row lines for texture, echoing the farm motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 46px, rgba(246,238,221,0.6) 46px, rgba(246,238,221,0.6) 47px)",
        }}
      />

      <Container className="relative py-20 sm:py-24 text-center flex flex-col items-center gap-6">
        <Reveal direction="scale">
          <span className="grid size-16 place-items-center rounded-full bg-brand-gold-light/15 border border-brand-gold-light/30 shadow-[0_0_0_8px_rgba(226,176,76,0.08)]">
            <Droplet size={26} className="text-brand-gold-light" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] text-brand-cream-soft leading-tight max-w-2xl">
            Get in Touch on WhatsApp Today
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-brand-cream-soft/80 text-base sm:text-lg max-w-md leading-relaxed">
            We're just one message away — ask us about sizes, pricing, and delivery.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <WhatsAppButton size="lg" variant="ghost" className="mt-2">
            Order on WhatsApp
          </WhatsAppButton>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xs uppercase tracking-[0.16em] text-brand-cream-soft/50 mt-1">
            Usually replies within the hour
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
