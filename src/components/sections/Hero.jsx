"use client";

/**
 * Samar Sing Tel — Animated Hero ("Frosted Oil Glow")
 * Drop-in replacement for your current hero section.
 *
 * Install:
 *   1. Put hero-oil-bottle.jpg in /public/images/
 *   2. Put Hero.jsx in /src/components/ (or /components/)
 *   3. Put hero.css next to it (same folder)
 *   4. In your page (app/page.jsx or pages/index.jsx):
 *
 *        import Hero from "@/components/Hero";
 *        ...
 *        <Hero />
 *
 * Tailwind: works out of the box (uses arbitrary values, no config needed).
 * Uses your existing src/config/site.js for brand + WhatsApp details.
 */

import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";
import Reveal from "@/components/ui/Reveal";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
  siteConfig.whatsapp.defaultMessage,
)}`;

const trustCards = [
  {
    n: "1",
    tone: "bg-[#f5a623]/20 text-[#f5a623]",
    title: "Cold-pressed daily",
    body: "No heat, no chemicals — just the natural flavour of the peanut.",
  },
  {
    n: "2",
    tone: "bg-[#8a9a5b]/20 text-[#8a9a5b]",
    title: "Direct from the farm",
    body: "Peanuts sourced from small farmers across Gujarat.",
  },
  {
    n: "3",
    tone: "bg-[#d97706]/15 text-[#d97706]",
    title: "Sealed for freshness",
    body: "Light-tight bottles keep every drop golden and pure.",
  },
];

export default function Hero() {
  return (
    <main className={`relative min-h-screen overflow-hidden bg-[#faf6ef] ${inter.className}`}>
      {/* Ambient golden glow blobs */}
      <div className="animate-drift pointer-events-none absolute -left-24 top-10 size-96 rounded-full bg-[#f5a623]/30 blur-[110px]" />
      <div className="animate-drift-reverse pointer-events-none absolute -right-20 bottom-0 size-96 rounded-full bg-[#8a9a5b]/25 blur-[120px]" />

      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-16 lg:grid-cols-2 lg:gap-8">
        {/* Left column */}
        <div className="z-10">
          <span className="rise inline-flex items-center gap-2 rounded-full border border-[#d97706]/25 bg-white/60 px-4 py-1.5 text-xs font-medium text-[#2a2016]/70 backdrop-blur-md">
            <span className="animate-floaty size-2 rounded-full bg-[#f5a623]" />
            Cold-pressed in small batches
          </span>

          <h1
            className={`rise mt-6 text-5xl font-semibold leading-[1.05] text-[#2a2016] lg:text-6xl ${fraunces.className}`}
            style={{ animationDelay: "0.12s" }}
          >
            Trust in every taste,
            <br />
            <span className="text-[#d97706]">quality in</span> every drop.
          </h1>

          <p
            className="rise mt-6 max-w-md text-lg leading-relaxed text-[#2a2016]/65"
            style={{ animationDelay: "0.24s" }}
          >
            Samar Sing Tel is a groundnut (peanut) oil made for everyday
            Indian kitchens across Gujarat — pure, golden, and pressed the way
            your family has always done it.
          </p>

          <div
            className="rise mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f5a623] px-7 py-3.5 text-sm font-semibold text-[#2a2016] shadow-[0_10px_30px_rgba(245,166,35,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(245,166,35,0.5)]"
            >
              Order Your First Bottle
            </a>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full border border-[#2a2016]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#2a2016] backdrop-blur-md transition hover:border-[#d97706]"
            >
              WhatsApp Us
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Trust stats */}
          <div className="rise mt-10 flex gap-8" style={{ animationDelay: "0.48s" }}>
            <div>
              <p className={`text-3xl font-semibold text-[#2a2016] ${fraunces.className}`}>100%</p>
              <p className="text-xs uppercase tracking-wider text-[#2a2016]/50">Cold pressed</p>
            </div>
            <div className="h-10 w-px bg-[#2a2016]/10" />
            <div>
              <p className={`text-3xl font-semibold text-[#2a2016] ${fraunces.className}`}>0</p>
              <p className="text-xs uppercase tracking-wider text-[#2a2016]/50">Additives</p>
            </div>
            <div className="h-10 w-px bg-[#2a2016]/10" />
            <div>
              <p className={`text-3xl font-semibold text-[#2a2016] ${fraunces.className}`}>5L</p>
              <p className="text-xs uppercase tracking-wider text-[#2a2016]/50">Family pack</p>
            </div>
          </div>
        </div>

        {/* Right column — frosted product card */}
        <div className="relative z-10">
          <div
            className="rise relative rounded-[2rem] border border-white/60 bg-white/40 p-4 shadow-[0_30px_80px_rgba(42,32,22,0.18)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="image-frame rounded-3xl">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                className="aspect-[4/5] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#2a2016]/25 via-transparent to-transparent" />
            </div>

            <div className="animate-floaty absolute -left-6 top-10 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl">
              <p className="text-xs font-semibold text-[#2a2016]">Farm-sourced</p>
              <p className="text-[11px] text-[#2a2016]/55">Gujarat peanuts</p>
            </div>

            <div
              className="animate-floaty-slow absolute -right-4 bottom-16 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="animate-pulsering absolute inline-flex size-full rounded-full bg-[#8a9a5b]" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#8a9a5b]" />
                </span>
                <p className="text-xs font-semibold text-[#2a2016]">Freshly pressed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why-us cards */}
      <section id="purity" className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {trustCards.map((card, i) => (
            <Reveal key={card.n} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/50 bg-white/50 p-6 shadow-[0_10px_30px_rgba(42,32,22,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_20px_45px_rgba(42,32,22,0.12)]">
                <span
                  className={`grid size-10 place-items-center rounded-xl text-lg transition-transform duration-300 group-hover:scale-110 ${card.tone} ${fraunces.className}`}
                >
                  {card.n}
                </span>
                <p className={`mt-4 text-lg font-semibold text-[#2a2016] ${fraunces.className}`}>
                  {card.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#2a2016]/60">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
