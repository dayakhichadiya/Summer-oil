const theme = require("./src/config/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: theme.colors,
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(35, 29, 23, 0.25)",
        card: "0 4px 18px -6px rgba(35, 29, 23, 0.18)",
      },
      borderRadius: {
        organic: "2rem 2rem 0.5rem 2rem",
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drip: "drip 2.2s ease-in infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
