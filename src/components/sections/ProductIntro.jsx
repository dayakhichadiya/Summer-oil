import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PeanutShape from "@/components/ui/illustrations/PeanutShape";
import { productConfig } from "@/config/product";

export default function ProductIntro() {
  return (
    <section id="product" className="bg-brand-cream-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our Oil"
          heading="Made for Real Indian Cooking"
          description={productConfig.intro}
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {productConfig.highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-brand-cream border border-brand-brown/10"
            >
              <PeanutShape className="w-10 h-7 shrink-0 mt-1" />
              <div>
                <p className="font-display font-semibold text-brand-charcoal text-lg">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm sm:text-[15px] text-brand-charcoal/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
