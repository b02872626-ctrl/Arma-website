"use client";

import { useEffect, useRef, useState } from "react";

// Reveals text line by line — each line slides up from behind a mask
// when it scrolls into view. Pass `lines` as an array of strings/JSX.
export default function MaskText({ as: Tag = "div", lines, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -120px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <span
            className={`block transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              shown ? "translate-y-0" : "translate-y-[115%]"
            }`}
            style={{ transitionDelay: shown ? `${i * 90}ms` : "0ms" }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
