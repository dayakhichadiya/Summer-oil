import Container from "@/components/ui/Container";
import FarmIllustration from "@/components/ui/illustrations/FarmIllustration";
import { siteConfig } from "@/config/site";

export default function BrandStory() {
  return (
    <section className="bg-brand-cream">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-organic overflow-hidden order-1">
            <FarmIllustration className="w-full h-auto" />
          </div>

          <div className="order-2 flex flex-col gap-5">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
