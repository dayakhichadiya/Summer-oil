"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const navItems = [
  { label: "Our Oil", href: "#product" },
  { label: "Our Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // add a stronger shadow/blur once the page has scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return undefined;

    const measure = () => setHeaderHeight(node.getBoundingClientRect().height);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(node);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
            ? "bg-brand-cream-soft/95 backdrop-blur-md border-brand-brown/10 shadow-[0_8px_30px_-15px_rgba(35,29,23,0.35)]"
            : "bg-brand-cream-soft/70 backdrop-blur border-transparent"
          }`}
      >
        <nav className="mx-auto max-w-container container-px flex items-center justify-between h-16 sm:h-[76px]">
          <a
            href="#top"
            className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.03]"
            onClick={() => setOpen(false)}
            aria-label={siteConfig.brand.name}
          >
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              width={images.logo.width}
              height={images.logo.height}
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
                  className="nav-link text-[15px] font-medium text-brand-charcoal/80 hover:text-brand-brown transition-colors"
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
      </header>

      <div
        style={{
          top: headerHeight,
          height: `calc(100dvh - ${headerHeight}px)`,
        }}
        className={`lg:hidden fixed inset-x-0 z-40 overflow-y-auto overscroll-contain bg-brand-cream-soft transition-transform duration-300 ease-out ${open
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
          }`}
        aria-hidden={!open}
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
        <div className="container-px mt-8 pb-10">
          <WhatsAppButton size="lg" className="w-full" />
        </div>
      </div>
    </>
  );
}