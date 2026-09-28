# Samar Sing Tel

Premium single-page marketing website for the Samar Sing Tel groundnut oil brand, built with Next.js (App Router), JavaScript and Tailwind CSS. No backend, no cart — every "buy" action opens a pre-filled WhatsApp chat.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to change things

Everything you're likely to edit lives in plain data/config files, separate from the design components:

| What you want to change | File |
| --- | --- |
| Brand name, WhatsApp number, default message, contact info | `src/config/site.js` |
| Product details (name, sizes, description, highlights) | `src/config/product.js` |
| FAQ questions & answers | `src/data/faq.js` |
| Testimonials | `src/data/testimonials.js` |
| "Our Process" steps | `src/data/process.js` |
| Brand colors | CSS variables in `src/app/globals.css`, mirrored in `src/config/theme.js` and `tailwind.config.js` |
| Section copy / layout | `src/components/sections/*.jsx` |
| Fonts | `src/app/layout.js` (currently Fraunces for headings, Work Sans for body) |
| Real photos (hero, farm, kitchen, product sizes, logo) | `src/config/images.js` — one file, every photo path in one place. Drop new files into `public/images/` and update the path here; nothing else needs to change. |
| Scroll-in animations | `src/components/ui/Reveal.jsx` — wraps a block and fades/slides it in once it scrolls into view (`direction="up\|left\|right\|scale"`, optional `delay`). Already used across every section. |

> The old hand-drawn SVGs in `src/components/ui/illustrations/` are still in the repo (e.g. `PeanutShape` is used as a small decorative bullet icon) but every "photo-sized" spot — hero, brand story, lifestyle shot, product sizes — now renders a real `next/image` sourced from `src/config/images.js`, currently pointed at the placeholder photos that shipped with the project. Swap those paths for your real photography whenever it's ready; no component code needs to change. `BottleIllustration.jsx` and `FieldPattern.jsx` are unused leftovers and safe to delete.

## WhatsApp

All WhatsApp links are generated from a single source of truth:

1. `src/config/site.js` — stores the phone number (digits only, with country code, no `+` or spaces) and the default message.
2. `src/lib/whatsapp.js` — builds the `https://wa.me/...` link.
3. `src/components/ui/WhatsAppButton.jsx` — the only component that should render a WhatsApp CTA button.

To change the number, edit **one line** in `src/config/site.js`.

## Important note on claims

This site intentionally avoids unverified claims (organic, cold-pressed, wood-pressed, kachi ghani, 100% pure, lab tested, FSSAI certified, health claims, etc.) and does not use fake reviews, certifications or statistics. Add these only once you can back them up, in `src/config/product.js` and `src/data/testimonials.js`.
