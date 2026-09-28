import theme from "@/config/theme";

const c = theme.colors;

/** Small reusable peanut glyph used as a bullet / accent, not a bullet icon library import. */
export default function PeanutShape({ className = "", tone = "gold" }) {
  const fill = tone === "green" ? c.green.DEFAULT : c.gold.DEFAULT;
  const fillDark = tone === "green" ? c.green.dark : c.gold.dark;
  return (
    <svg viewBox="0 0 60 34" className={className} aria-hidden="true">
      <ellipse cx="15" cy="17" rx="14" ry="10" fill={fillDark} />
      <ellipse cx="42" cy="17" rx="16" ry="11" fill={fill} />
      <path d="M27 10c2 4 2 10 0 14" stroke={c.brown.light} strokeWidth="1.6" opacity="0.55" fill="none" />
    </svg>
  );
}
