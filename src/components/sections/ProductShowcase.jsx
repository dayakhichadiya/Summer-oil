
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductShareButton from "@/components/ui/ProductShareButton";
import { productConfig } from "@/config/product";
import { images } from "@/config/images";

export default function ProductShowcase() {
  return (
    <section
      id="products"
      className="bg-brand-cream"
      aria-labelledby="products-heading"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal className="mb-9 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-brand-brown/70">
              Our Products
            </p>
            <h2
              id="products-heading"
              className="font-display text-3xl font-semibold text-brand-charcoal sm:text-4xl"
            >
              Choose Your Pack
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-brand-charcoal/70 sm:text-base">
              Discover the right Samar Singtel groundnut oil pack
              for your kitchen.
            </p>
          </div>

          <p className="text-sm text-brand-charcoal/60">
            3 pack options
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productConfig.sizes.map((size, i) => {
            const photo = images.productSizes[size.label];

            return (
              <Reveal
                key={size.label}
                delay={i * 0.08}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-3xl
                  border border-brand-brown/10 bg-brand-cream-soft
                  p-4 shadow-card transition duration-300
                  hover:-translate-y-1 hover:shadow-xl sm:p-5">

                  <div className="mb-4 flex justify-end">
                    <ProductShareButton
                      title={`${size.title} - ${size.label}`}
                      description={size.description}
                      url={`/products/${size.slug}`}
                    />
                  </div>

                  <div className="flex h-[320px] w-full items-center
                    justify-center overflow-hidden rounded-2xl
                    bg-white p-4 sm:h-[350px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={700}
                      sizes="(max-width: 639px) 90vw,
                             (max-width: 1279px) 42vw, 360px"
                      className="h-full w-full object-contain
                        transition-transform duration-500
                        group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-5">
                    <h3 className="font-display text-xl font-semibold
                      leading-snug text-brand-charcoal sm:text-2xl">
                      Samar Singtel Groundnut Oil
                    </h3>

                    <p className="mt-2 text-sm font-semibold
                      text-brand-green">
                      {size.label}
                    </p>

                    <p className="mt-3 min-h-[48px] text-sm
                      leading-6 text-brand-charcoal/70">
                      {size.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <WhatsAppButton
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        message={`Hello, I'd like more information about the ${size.label} pack of Samar Singtel.`}
                      >
                        Enquire on WhatsApp
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
