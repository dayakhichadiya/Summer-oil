import { Check } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { productConfig } from "@/config/product";
import { images } from "@/config/images";

export default function LifestyleSection() {
  return (
    <section className="bg-brand-cream-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal direction="left" className="flex flex-col gap-5 order-2 lg:order-1">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-brand-charcoal leading-tight">
              Your Everyday Cooking Companion
            </h2>
            <p className="text-base sm:text-lg text-brand-charcoal/75 leading-relaxed">
              From breakfast in the morning to dinner at night — whether you're deep frying,
              tempering, or cooking an everyday meal, Samar Sing Tel stays with your kitchen
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
          </Reveal>

          <Reveal direction="right" delay={0.1} className="order-1 lg:order-2">
            <div className="image-frame rounded-organic bg-brand-cream shadow-[0_25px_60px_-15px_rgba(35,29,23,0.3)]">
              <Image
                src={images.lifestyle.src}
                alt={images.lifestyle.alt}
                width={images.lifestyle.width}
                height={images.lifestyle.height}
                className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-brown/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
