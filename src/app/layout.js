import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A2E1F",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand.name} | Groundnut Oil, Gujarat`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description:
    "Summer Sing Tel — groundnut oil (peanut oil) made for everyday Indian kitchens in Gujarat. Reach out directly on WhatsApp to place your order.",
  keywords: [
    "Summer Sing Tel",
    "Groundnut Oil",
    "Peanut Oil",
    "Groundnut Oil Gujarat",
    "Peanut Oil Gujarat",
  ],
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} | Groundnut Oil, Gujarat`,
    description:
      "Groundnut oil (peanut oil) made for everyday Indian kitchens. Order directly on WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | Groundnut Oil`,
    description: "Groundnut oil made for everyday Indian kitchens — Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.brand.name,
        url: siteConfig.url,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.brand.name,
        url: siteConfig.url,
        inLanguage: "en-IN",
      },
      {
        "@type": "Product",
        name: `${siteConfig.brand.name} — Groundnut Oil`,
        description:
          "Groundnut oil made from selected groundnuts, prepared for everyday Indian kitchens.",
        brand: {
          "@type": "Brand",
          name: siteConfig.brand.name,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
