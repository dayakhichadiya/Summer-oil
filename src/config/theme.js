/**
 * Centralized brand color tokens.
 *
 * Change a color here and it updates:
 *  - Tailwind utility classes (bg-brand-gold, text-brand-brown, etc.) via tailwind.config.js
 *  - The hand-drawn SVG illustrations, which import these values directly
 *  - The CSS custom properties in globals.css (keep those in sync if you edit this file)
 */
const theme = {
  colors: {
    brown: {
      DEFAULT: "#4A2E1F", // deep earthy brown — primary brand color
      dark: "#301C12",
      light: "#6E4A32",
    },
    gold: {
      DEFAULT: "#C08A1E", // golden oil — accent color, used sparingly
      dark: "#96690F",
      light: "#E2B04C",
    },
    cream: {
      DEFAULT: "#F6EEDD", // warm cream — main background
      soft: "#FBF7EE",
      deep: "#EEE0BF",
    },
    green: {
      DEFAULT: "#54622F", // natural green — earth / field accent
      dark: "#3B451F",
      light: "#7A8B52",
    },
    charcoal: {
      DEFAULT: "#231D17", // dark charcoal — text & dark sections
      soft: "#372E24",
    },
    rust: {
      DEFAULT: "#A34328", // small accent for badges / highlights, used very sparingly
    },
  },
};

module.exports = theme;
