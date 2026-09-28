import Reveal from "@/components/ui/Reveal";

/**
 * Shared heading block used at the top of most sections:
 * a heading, an optional eyebrow/subheading, and optional
 * supporting copy — left-aligned by default, centered on request.
 *
 * Animates into view on scroll (see <Reveal />), so every section
 * across the site gets the same polished entrance for free.
 */
export default function SectionHeading({
  heading,
  eyebrow,
  description,
  align = "left",
  light = false,
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const textColor = light ? "text-brand-cream-soft" : "text-brand-charcoal";
  const subColor = light ? "text-brand-gold-light" : "text-brand-brown/70";

  return (
    <Reveal className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`inline-flex items-center gap-2 font-body text-sm font-semibold tracking-[0.14em] uppercase ${subColor}`}>
          <span className={`h-px w-6 ${light ? "bg-brand-gold-light" : "bg-brand-gold-dark/60"}`} />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight ${textColor}`}>
        {heading}
      </h2>
      {description && (
        <p className={`font-body text-base sm:text-lg leading-relaxed ${light ? "text-brand-cream-soft/85" : "text-brand-charcoal/75"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
