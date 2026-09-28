import theme from "@/config/theme";

const c = theme.colors;

/**
 * Hand-built flat-vector illustration of an oil bottle with a couple
 * of peanuts and a leaf — used in the hero. No external image files,
 * so there is nothing that can 404 or render broken on any device.
 */
export default function BottleIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 560"
      className={className}
      role="img"
      aria-label="Illustration of a Samar Sing Tel oil bottle"
    >
      <defs>
        <linearGradient id="oilFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.gold.light} />
          <stop offset="100%" stopColor={c.gold.dark} />
        </linearGradient>
        <linearGradient id="glassFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.cream.soft} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c.cream.deep} stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.charcoal.DEFAULT} stopOpacity="0.22" />
          <stop offset="100%" stopColor={c.charcoal.DEFAULT} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* floor shadow */}
      <ellipse cx="205" cy="512" rx="130" ry="22" fill="url(#floorShadow)" />

      {/* leaf accent behind bottle */}
      <path
        d="M330 210c34 8 54 44 46 80-30 6-64-10-78-42-10-24-2-46 32-38Z"
        fill={c.green.DEFAULT}
        opacity="0.85"
      />
      <path
        d="M330 210c18 20 26 46 20 72"
        stroke={c.green.dark}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* bottle cap */}
      <rect x="178" y="46" width="64" height="34" rx="8" fill={c.brown.DEFAULT} />
      <rect x="178" y="46" width="64" height="10" rx="5" fill={c.brown.light} />

      {/* bottle neck */}
      <path d="M190 78h40v46h-40z" fill="url(#glassFill)" stroke={c.brown.DEFAULT} strokeWidth="3" />

      {/* bottle shoulders + body */}
      <path
        d="M190 122
           C150 140 128 172 128 220
           L128 430
           C128 462 152 486 184 486
           L246 486
           C278 486 302 462 302 430
           L302 220
           C302 172 280 140 240 122
           Z"
        fill="url(#glassFill)"
        stroke={c.brown.DEFAULT}
        strokeWidth="3.5"
      />

      {/* oil fill inside bottle */}
      <path
        d="M133 260
           L297 260
           L297 430
           C297 459 275.5 481 246 481
           L184 481
           C154.5 481 133 459 133 430
           Z"
        fill="url(#oilFill)"
      />

      {/* oil surface line + shine */}
      <path d="M133 260 L297 260" stroke={c.gold.light} strokeWidth="3" opacity="0.7" />
      <path
        d="M156 150c-14 22-20 46-20 70v170"
        stroke={c.cream.soft}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.35"
        fill="none"
      />

      {/* label */}
      <rect x="150" y="300" width="110" height="110" rx="10" fill={c.cream.soft} stroke={c.brown.DEFAULT} strokeWidth="2.5" />
      <rect x="150" y="300" width="110" height="24" rx="10" fill={c.brown.DEFAULT} />
      <text
        x="205"
        y="320"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={c.cream.soft}
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        SAMAR SINGH
      </text>
      <text
        x="205"
        y="358"
        textAnchor="middle"
        fontSize="24"
        fontWeight="700"
        fill={c.brown.DEFAULT}
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        TEL
      </text>
      <text
        x="205"
        y="382"
        textAnchor="middle"
        fontSize="9.5"
        letterSpacing="1"
        fill={c.brown.light}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        GROUNDNUT OIL
      </text>

      {/* peanuts resting near the base */}
      <g transform="translate(70,470)">
        <ellipse cx="0" cy="0" rx="26" ry="17" fill={c.gold.dark} />
        <ellipse cx="22" cy="4" rx="24" ry="16" fill={c.gold.DEFAULT} />
        <path d="M11 -2c2 4 2 10 0 14" stroke={c.brown.light} strokeWidth="2" fill="none" opacity="0.5" />
      </g>
      <g transform="translate(330,455) rotate(18)">
        <ellipse cx="0" cy="0" rx="22" ry="14" fill={c.gold.DEFAULT} />
        <ellipse cx="19" cy="3" rx="20" ry="13" fill={c.gold.dark} />
      </g>
    </svg>
  );
}
