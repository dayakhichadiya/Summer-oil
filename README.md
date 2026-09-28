# Summer Sing Tel

Premium single-page marketing website for the Summer Sing Tel groundnut oil brand, built with Next.js (App Router), JavaScript and Tailwind CSS. No backend, no cart — every "buy" action opens a pre-filled WhatsApp chat.

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
| Images / illustrations | `src/components/ui/illustrations/*.jsx` (hand-built SVGs — swap for real photography by dropping files in `public/images` and using `next/image`) |

## WhatsApp

All WhatsApp links are generated from a single source of truth:

1. `src/config/site.js` — stores the phone number (digits only, with country code, no `+` or spaces) and the default message.
2. `src/lib/whatsapp.js` — builds the `https://wa.me/...` link.
3. `src/components/ui/WhatsAppButton.jsx` — the only component that should render a WhatsApp CTA button.

To change the number, edit **one line** in `src/config/site.js`.

## Important note on claims

This site intentionally avoids unverified claims (organic, cold-pressed, wood-pressed, kachi ghani, 100% pure, lab tested, FSSAI certified, health claims, etc.) and does not use fake reviews, certifications or statistics. Add these only once you can back them up, in `src/config/product.js` and `src/data/testimonials.js`.
