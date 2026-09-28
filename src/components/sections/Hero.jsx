import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BottleIllustration from "@/components/ui/illustrations/BottleIllustration";
import FieldPattern from "@/components/ui/illustrations/FieldPattern";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-cream">
      <FieldPattern
        className="absolute bottom-0 left-0 w-full h-40 sm:h-56"
        opacity={0.25}
      />

      <Container className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-display font-semibold text-[2.1rem] leading-[1.25] sm:text-5xl sm:leading-[1.2] lg:text-[3.4rem] lg:leading-[1.15] text-brand-charcoal max-w-xl">
              {siteConfig.tagline}
            </h1>

            <p className="text-base sm:text-lg text-brand-charcoal/75 max-w-md leading-relaxed">
              {siteConfig.brand.name} is a groundnut oil brand — prepared with simplicity and care for the everyday Indian kitchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
              <WhatsAppButton size="lg" className="w-full sm:w-auto">
                Order on WhatsApp
              </WhatsAppButton>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-brown/25 px-8 py-4 min-h-[56px] text-base sm:text-lg font-semibold text-brand-brown hover:border-brand-brown hover:bg-brand-brown/5 transition-colors"
              >
                Learn About Our Oil
              </a>
            </div>
          </div>

          {/* Illustration column */}
          <div className="order-1 lg:order-2 flex justify-center">
            <BottleIllustration className="w-56 sm:w-72 lg:w-full max-w-sm h-auto drop-shadow-[0_25px_35px_rgba(35,29,23,0.18)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
