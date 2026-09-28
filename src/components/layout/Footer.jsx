import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const navItems = [
  { label: "Our Oil", href: "#product" },
  { label: "Our Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-cream-soft/90">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-display font-bold text-2xl text-brand-cream-soft">
              {siteConfig.brand.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-cream-soft/65 max-w-sm">
              {siteConfig.tagline} Groundnut oil made for everyday Indian kitchens.
            </p>
            <div className="mt-6">
              <WhatsAppButton variant="ghost" size="sm" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-brand-cream-soft mb-4">Quick Links</p>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-brand-cream-soft/65 hover:text-brand-gold-light transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-brand-cream-soft mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-brand-cream-soft/65">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-gold-light" aria-hidden="true" />
                <a href={`tel:+${siteConfig.whatsapp.number}`}>+{siteConfig.whatsapp.number}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-gold-light" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand-gold-light" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-cream-soft/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-cream-soft/45">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name} · All rights reserved</p>
          <p>Samar Sing Tel — Groundnut Oil, Gujarat</p>
        </div>
      </Container>
    </footer>
  );
}
