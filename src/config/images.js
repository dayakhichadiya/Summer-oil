/**
 * Single source of truth for every real photo used on the site.
 *
 * Today most of these point at the same one or two placeholder shots
 * that shipped with the project (public/images/hero1.jpg, farmner.jpg,
 * miniHero.png) so the layout can be judged with real photography
 * instead of the old hand-drawn illustrations.
 *
 * When your real product photos are ready:
 *   1. Drop the files into /public/images/
 *   2. Update the matching path below (nothing else needs to change —
 *      every component reads from here)
 *
 * width/height should match the actual image's aspect ratio so Next.js
 * can reserve the right space and avoid layout shift.
 */
export const images = {
  hero: {
    src: "/images/hero1.jpg",
    alt: "Bottle of golden Samar Sing Tel groundnut oil with fresh peanuts",
    width: 1024,
    height: 1280,
  },

  brandStory: {
    src: "/images/farmner.jpg",
    alt: "Farmer sourcing groundnuts for Samar Sing Tel in Gujarat",
    width: 900,
    height: 1100,
  },

  lifestyle: {
    src: "/images/miniHero.png",
    alt: "Samar Sing Tel groundnut oil being used in an everyday Indian kitchen",
    width: 900,
    height: 1000,
  },

  // TODO: replace with a real shot for each pack size once available.
  // Every size currently falls back to the hero bottle shot below.
  productSizes: {
    "1 Litre": { src: "/images/hero1.jpg", alt: "Samar Sing Tel 1 Litre groundnut oil bottle" },
    "5 Litre": { src: "/images/hero1.jpg", alt: "Samar Sing Tel 5 Litre groundnut oil bottle" },
    "15 Litre (Tin)": { src: "/images/hero1.jpg", alt: "Samar Sing Tel 15 Litre groundnut oil tin" },
  },

  logo: {
    src: "/images/sso-logo.png",
    alt: "Samar Sing Tel logo",
    width: 150,
    height: 50,
  },
};
