import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BottleIcon from "@/components/ui/illustrations/BottleIcon";
import { productConfig } from "@/config/product";

export default function ProductShowcase() {
  return (
    <section className="bg-brand-cream">
      <Container className="pb-16 sm:pb-20 lg:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
          <h3 className="font-display font-semibold text-2xl sm:text-3xl text-brand-charcoal">
            Choose the Size That Fits Your Kitchen
          </h3>
          <p className="text-sm text-brand-charcoal/60">Available sizes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {productConfig.sizes.map((size) => (
            <div
              key={size.label}
              className="flex flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-organic bg-brand-cream-soft border border-brand-brown/10 shadow-card"
            >
              <BottleIcon className="w-16 h-auto sm:w-20" />
              <div>
                <p className="font-display font-semibold text-xl text-brand-charcoal">
                  {size.label}
                </p>
              </div>
              <WhatsAppButton
                variant="secondary"
                size="sm"
                className="w-full"
                message={`Hello, I'd like more information about the ${size.label} pack of Summer Sing Tel.`}
              >
                Enquire Now
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
