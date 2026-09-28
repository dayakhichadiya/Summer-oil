import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

export default function BrandStory() {
  return (
    <section className="bg-brand-cream overflow-hidden">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal direction="left" className="order-1 relative">
            <div className="image-frame rounded-organic shadow-[0_25px_60px_-15px_rgba(35,29,23,0.35)]">
              <Image
                src={images.brandStory.src}
                alt={images.brandStory.alt}
                width={images.brandStory.width}
                height={images.brandStory.height}
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-brand-cream-soft">
                <p className="font-display text-sm font-semibold tracking-wide">Sourced in Gujarat</p>
                <p className="text-xs text-brand-cream-soft/75">Straight from the farmers we work with</p>
              </div>
            </div>
            {/* Decorative accent behind the photo — echoes the brand gold */}
            <div className="hidden lg:block absolute -z-10 -bottom-6 -right-6 h-full w-full rounded-organic bg-brand-gold/15" aria-hidden="true" />
          </Reveal>

          <Reveal direction="right" delay={0.1} className="order-2 flex flex-col gap-5">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-charcoal leading-tight">
              A Trusted Oil for Your Family
            </h2>
            <p className="text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              The idea behind {siteConfig.brand.name} is a simple one — the oil you use every
              day in your kitchen should be something you can trust without a second thought.
            </p>
            <p className="text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              Oil plays an important role in every Indian kitchen, from frying to daily tempering.
              That's the understanding we started this brand with — direct communication, honest
              conversations, and oil that's carefully prepared before it reaches you.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
