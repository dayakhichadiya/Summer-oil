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
              Discover the right Samar Singtel groundnut oil pack for your kitchen.
            </p>
          </div>
          <p className="text-sm text-brand-charcoal/60">3 pack options</p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productConfig.sizes.map((size, i) => {
            const photo = images.productSizes[size.label];

            return (
              <Reveal key={size.label} delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-brown/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative m-3 mb-0 flex h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-brand-cream-soft p-5 sm:h-[310px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={700}
                      sizes="(max-width: 639px) 90vw, (max-width: 1279px) 42vw, 360px"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute right-3 top-3">
                      <ProductShareButton
                        title={`${size.title} - ${size.label}`}
                        description={size.description}
                        url={`/products/${size.slug}`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-green">
                          Samar Singtel
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-brand-charcoal sm:text-2xl">
                          Groundnut Oil
                        </h3>
                      </div>
                      <span className="shrink-0 rounded-full bg-brand-cream px-3 py-1.5 text-xs font-semibold text-brand-brown">
                        {size.label}
                      </span>
                    </div>

                    <p className="mt-4 min-h-[48px] text-sm leading-6 text-brand-charcoal/70">
                      {size.description}
                    </p>

                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-brand-brown/10 pt-4">
                      <div>
                        <p className="text-xs font-medium text-brand-charcoal/55">Price</p>
                        <p className="mt-0.5 text-2xl font-bold tracking-tight text-brand-charcoal">{size.price}</p>
                      </div>
                      {size.netWeight && (
                        <p className="pb-1 text-right text-xs text-brand-charcoal/60">
                          Net weight<span className="block font-semibold text-brand-charcoal/80">{size.netWeight}</span>
                        </p>
                      )}
                    </div>

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
