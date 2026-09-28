import theme from "@/config/theme";

const c = theme.colors;

/** Flat-vector farm scene — sun, rolling field rows, a farmer silhouette — for Brand Story. */
export default function FarmIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label="Illustration of a farm field">
      <defs>
        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.cream.soft} />
          <stop offset="100%" stopColor={c.cream.deep} />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="480" height="360" fill="url(#skyFade)" />

      {/* sun */}
      <circle cx="370" cy="80" r="46" fill={c.gold.light} opacity="0.9" />
      <circle cx="370" cy="80" r="46" fill="none" stroke={c.gold.DEFAULT} strokeWidth="2" opacity="0.5" />

      {/* distant hill */}
      <path d="M0 210 C 100 170, 200 190, 300 160 C 380 140, 440 165, 480 150 L480 360 L0 360 Z" fill={c.green.light} opacity="0.35" />

      {/* field rows */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M${-40 + i * 90} 360 C ${40 + i * 90} 260, ${120 + i * 90} 260, ${200 + i * 90} 200`}
          stroke={c.brown.DEFAULT}
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
      ))}
      <rect x="0" y="230" width="480" height="130" fill={c.green.DEFAULT} opacity="0.18" />

      {/* farmer silhouette */}
      <g transform="translate(150,215)">
        <ellipse cx="0" cy="118" rx="34" ry="8" fill={c.charcoal.DEFAULT} opacity="0.15" />
        <path
          d="M0 0c-8 0-14 6-14 14 0 6 3 11 8 13l-4 44h20l-4-44c5-2 8-7 8-13 0-8-6-14-14-14Z"
          fill={c.brown.DEFAULT}
        />
        <circle cx="0" cy="-14" r="12" fill={c.brown.light} />
        <path d="M-14 -18 Q0 -30 14 -18 Q0 -22 -14 -18Z" fill={c.charcoal.soft} />
        <path d="M-14 60 l-10 40" stroke={c.brown.DEFAULT} strokeWidth="8" strokeLinecap="round" />
        <path d="M14 60 l10 40" stroke={c.brown.DEFAULT} strokeWidth="8" strokeLinecap="round" />
      </g>
    </svg>
  );
}
