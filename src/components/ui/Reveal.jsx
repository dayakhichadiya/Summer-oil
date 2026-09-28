"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps any block of content and fades/slides it in once it scrolls
 * into view. Pure CSS handles the actual animation (see .is-visible
 * rules in globals.css) — this component only toggles the class via
 * IntersectionObserver, so it's cheap and has no layout impact.
 *
 * @param {"up"|"left"|"right"|"scale"} direction - entrance direction
 * @param {number} delay - seconds to delay the animation (stagger children)
 * @param {string} as - element tag to render (default "div")
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If IntersectionObserver isn't available for some reason, just show it.
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
