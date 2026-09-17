import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

/**
 * The one component that should ever render a WhatsApp CTA.
 * Every other place on the site imports this instead of building
 * its own <a href="https://wa.me/..."> link.
 *
 * @param {"primary"|"secondary"|"ghost"} variant
 * @param {"sm"|"md"|"lg"} size
 * @param {string} [message] - overrides the default WhatsApp message
 * @param {string} [children] - button label
 * @param {boolean} [showIcon]
 */
export default function WhatsAppButton({
  variant = "primary",
  size = "md",
  message,
  children = "Order on WhatsApp",
  showIcon = true,
  className = "",
}) {
  const href = getWhatsAppLink(message);

  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-200 active:scale-[0.98] focus-visible:outline-offset-4";

  const sizes = {
    sm: "text-sm px-4 py-2.5 min-h-[40px]",
    md: "text-base px-6 py-3.5 min-h-[52px]",
    lg: "text-base sm:text-lg px-8 py-4 min-h-[56px]",
  };

  const variants = {
    primary:
      "bg-brand-green text-brand-cream-soft shadow-soft hover:bg-brand-green-dark",
    secondary:
      "bg-transparent text-brand-brown border-2 border-brand-brown/30 hover:border-brand-brown hover:bg-brand-brown/5",
    ghost:
      "bg-brand-cream-soft text-brand-brown border border-brand-gold/40 hover:border-brand-gold",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {showIcon && <MessageCircle size={size === "sm" ? 16 : 20} strokeWidth={2.2} aria-hidden="true" />}
      <span className="leading-none">{children}</span>
    </a>
  );
}
