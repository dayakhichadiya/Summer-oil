import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { productConfig } from "@/config/product";
import { images } from "@/config/images";

export default function ProductShowcase() {
  return (
    <section className="bg-brand-cream">
      <Container className="pb-16 sm:pb-20 lg:pb-24">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
          <h3 className="font-display font-semibold text-2xl sm:text-3xl text-brand-charcoal">
            Choose the Size That Fits Your Kitchen
          </h3>
          <p className="text-sm text-brand-charcoal/60">Available sizes</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {productConfig.sizes.map((size, i) => {
            const photo = images.productSizes[size.label];
            return (
              <Reveal key={size.label} delay={i * 0.1} className="h-full">
                <div className="group flex h-full flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-organic bg-brand-cream-soft border border-brand-brown/10 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(35,29,23,0.25)]">
                  <div className="image-frame w-full rounded-2xl bg-brand-cream">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-xl text-brand-charcoal">
                      {size.label}
                    </p>
                  </div>
                  <WhatsAppButton
                    variant="secondary"
                    size="sm"
                    className="w-full mt-auto"
                    message={`Hello, I'd like more information about the ${size.label} pack of Samar Sing Tel.`}
                  >
                    Enquire Now
                  </WhatsAppButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
