/**
 * Shared heading block used at the top of most sections:
 * a heading, an optional eyebrow/subheading, and optional
 * supporting copy — left-aligned by default, centered on request.
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
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`font-body text-sm font-semibold tracking-wide ${subColor}`}>
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
    </div>
  );
}
