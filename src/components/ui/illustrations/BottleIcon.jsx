import theme from "@/config/theme";

const c = theme.colors;

/** Minimal bottle glyph for size cards — lighter-weight than the hero BottleIllustration. */
export default function BottleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <rect x="50" y="10" width="20" height="14" rx="3" fill={c.brown.DEFAULT} />
      <path d="M54 24h12v20h-12z" fill={c.cream.soft} stroke={c.brown.DEFAULT} strokeWidth="2" />
      <path
        d="M54 44c-14 6-24 18-24 34v54c0 10 8 18 18 18h24c10 0 18-8 18-18V78c0-16-10-28-24-34Z"
        fill={c.cream.soft}
        stroke={c.brown.DEFAULT}
        strokeWidth="2.5"
      />
      <path
        d="M30 92h60v40c0 10-8 18-18 18H48c-10 0-18-8-18-18Z"
        fill={c.gold.DEFAULT}
      />
      <rect x="38" y="98" width="44" height="34" rx="4" fill={c.cream.soft} opacity="0.9" />
    </svg>
  );
}
