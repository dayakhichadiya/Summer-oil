
"use client";

import { siteConfig } from "@/config/site";
import { Fraunces, Inter } from "next/font/google";
import "../sections/css/Hero.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const whatsappUrl = `https://wa.me/${
  siteConfig.whatsapp.number
}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`;

export default function Hero() {
  return (
    <main className={`samar-hero ${inter.className}`} id="home">
      {/* Soft lighting behind the content */}
      <div className="hero-light hero-light-left" aria-hidden="true" />

      {/* Desktop background artwork */}
      <div className="hero-desktop-art" aria-hidden="true" />

      <section className="hero-layout">
        {/* Text and actions */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Groundnut oil for everyday cooking
          </div>

          <h1 className={fraunces.className}>
            Trust in every
            <br />
            taste,
            <br />
            <span className="hero-highlight">quality in</span> every drop.
          </h1>

          <p className="hero-description">
            Samar Singtel groundnut oil is made for everyday
            Indian kitchens across Gujarat — bringing a familiar
            taste to the meals your family loves.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#products">
              Explore Our Products
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="hero-button hero-button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <span className="hero-trust-icon" aria-hidden="true">◉</span>
              <div>
                <strong>Groundnut Oil</strong>
                <span>Made for daily cooking</span>
              </div>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <span className="hero-trust-icon" aria-hidden="true">◇</span>
              <div>
                <strong>Gujarat</strong>
                <span>Our home market</span>
              </div>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <span className="hero-trust-icon" aria-hidden="true">↗</span>
              <div>
                <strong>1–15 kg</strong>
                <span>Pack options</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile artwork: same image, optimized crop */}
        <div className="hero-mobile-art" role="img"
          aria-label="Samar Singtel groundnut oil bottle with peanuts and golden oil" />
      </section>
    </main>
  );
}
