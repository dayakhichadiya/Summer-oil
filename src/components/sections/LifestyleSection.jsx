import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import KitchenIllustration from "@/components/ui/illustrations/KitchenIllustration";
import { productConfig } from "@/config/product";

export default function LifestyleSection() {
  return (
    <section className="bg-brand-cream-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-charcoal leading-tight">
              Your Everyday Cooking Companion
            </h2>
            <p className="text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              From breakfast in the morning to dinner at night — whether you're deep frying,
              tempering, or cooking an everyday meal, Summer Sing Tel stays with your kitchen
              through it all.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {productConfig.usageNotes.map((note) => (
                <li key={note} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-brand-green" strokeWidth={2.5} />
                  </span>
                  <span className="text-brand-charcoal/80 text-sm sm:text-base">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 rounded-organic overflow-hidden bg-brand-cream">
            <KitchenIllustration className="w-full h-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
