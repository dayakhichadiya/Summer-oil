"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import logo from "@../../../public/images/sso-logo.png";
const navItems = [
  { label: "Our Oil", href: "#product" },
  { label: "Our Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream-soft/95 backdrop-blur border-b border-brand-brown/10">
      <nav className="mx-auto max-w-container container-px flex items-center justify-between h-16 sm:h-[76px]">
        <a
          href="#top"
          className="flex items-center shrink-0"
          onClick={() => setOpen(false)}
          aria-label={siteConfig.brand.name}
        >
          <Image
            src={logo}
            alt={siteConfig.brand.name}
            width={150}
            height={50}
            priority
            className="w-[120px] sm:w-[145px] object-contain"
          />
        </a>
        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[15px] font-medium text-brand-charcoal/80 hover:text-brand-brown transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" />
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-brand-brown"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-[76px] bottom-0 bg-brand-cream-soft transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-1 container-px pt-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg font-medium text-brand-charcoal border-b border-brand-brown/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-px mt-8">
          <WhatsAppButton size="lg" className="w-full" />
        </div>
      </div>
    </header>
  );
}
