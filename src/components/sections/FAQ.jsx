"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-brown/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display font-medium text-base sm:text-lg text-brand-charcoal">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-brown transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-brand-charcoal/70 leading-relaxed pb-5 pr-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-brand-cream-soft">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="FAQ" heading="Frequently Asked Questions" />

        <div className="mt-8 sm:mt-10 max-w-2xl">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
