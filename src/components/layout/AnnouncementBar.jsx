import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-brown text-brand-cream-soft">
      <div className="mx-auto max-w-container container-px flex items-center justify-center gap-2 py-2 text-xs sm:text-sm text-center">
        <span>Reach us directly on WhatsApp — quick, simple ordering</span>
        <a
          href={`tel:+${siteConfig.whatsapp.number}`}
          className="hidden sm:inline-flex items-center gap-1 text-brand-gold-light hover:text-brand-cream-soft transition-colors"
        >
          <Phone size={14} aria-hidden="true" />
          <span>+{siteConfig.whatsapp.number}</span>
        </a>
      </div>
    </div>
  );
}
