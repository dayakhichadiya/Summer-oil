import theme from "@/config/theme";

const c = theme.colors;

/**
 * Subtle furrowed-field pattern, used as a low-opacity background
 * texture (never as the main visual) to bring in a farm feeling.
 */
export default function FieldPattern({ className = "", opacity = 0.5 }) {
  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M${-40 + i * 90} 200 C ${60 + i * 90} 90, ${140 + i * 90} 90, ${240 + i * 90} 0`}
          stroke={c.brown.DEFAULT}
          strokeWidth="2"
          fill="none"
        />
      ))}
    </svg>
  );
}
