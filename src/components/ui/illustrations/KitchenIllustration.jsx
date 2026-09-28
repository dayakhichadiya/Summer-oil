import theme from "@/config/theme";

const c = theme.colors;

/** Warm flat-vector kitchen scene — kadai with oil, steam, and a bowl of peanuts. */
export default function KitchenIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 480 380" className={className} role="img" aria-label="Illustration of an Indian kitchen scene">
      <defs>
        <linearGradient id="kadaiOil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.gold.light} />
          <stop offset="100%" stopColor={c.gold.dark} />
        </linearGradient>
      </defs>

      {/* counter */}
      <rect x="0" y="270" width="480" height="110" fill={c.cream.deep} />
      <rect x="0" y="270" width="480" height="8" fill={c.brown.light} opacity="0.4" />

      {/* stove base */}
      <rect x="150" y="230" width="180" height="44" rx="8" fill={c.charcoal.soft} />
      <circle cx="190" cy="230" r="10" fill={c.charcoal.DEFAULT} />
      <circle cx="290" cy="230" r="10" fill={c.charcoal.DEFAULT} />

      {/* kadai (pan) */}
      <path d="M150 222 C150 262 190 288 240 288 C290 288 330 262 330 222 Z" fill={c.charcoal.soft} />
      <ellipse cx="240" cy="222" rx="90" ry="16" fill={c.charcoal.DEFAULT} />
      <ellipse cx="240" cy="218" rx="74" ry="11" fill="url(#kadaiOil)" />
      <path d="M148 210 L100 196" stroke={c.charcoal.DEFAULT} strokeWidth="10" strokeLinecap="round" />
      <path d="M332 210 L380 196" stroke={c.charcoal.DEFAULT} strokeWidth="10" strokeLinecap="round" />

      {/* steam */}
      <path d="M210 190c-6-14 8-18 4-32" stroke={c.brown.light} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M240 186c-6-14 8-20 3-34" stroke={c.brown.light} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.45" />
      <path d="M270 190c-6-14 8-18 4-32" stroke={c.brown.light} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55" />

      {/* bowl of peanuts */}
      <path d="M60 300c0 20 18 34 40 34s40-14 40-34Z" fill={c.brown.DEFAULT} />
      <ellipse cx="100" cy="300" rx="40" ry="10" fill={c.brown.light} />
      <g>
        <ellipse cx="84" cy="292" rx="11" ry="7" fill={c.gold.dark} />
        <ellipse cx="100" cy="288" rx="12" ry="8" fill={c.gold.DEFAULT} />
        <ellipse cx="116" cy="293" rx="11" ry="7" fill={c.gold.dark} />
        <ellipse cx="94" cy="298" rx="10" ry="6.5" fill={c.gold.light} />
      </g>

      {/* small oil bottle to the side */}
      <g transform="translate(370,236)">
        <rect x="0" y="0" width="26" height="46" rx="6" fill={c.cream.soft} stroke={c.brown.DEFAULT} strokeWidth="2" />
        <rect x="6" y="-12" width="14" height="14" rx="3" fill={c.brown.DEFAULT} />
        <rect x="3" y="22" width="20" height="20" rx="4" fill="url(#kadaiOil)" />
      </g>
    </svg>
  );
}
