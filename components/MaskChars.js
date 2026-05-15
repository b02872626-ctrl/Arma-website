"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// Reveals a title letter by letter — each character slides up from behind a
// mask, staggered. Words stay intact so long titles still wrap normally.
export default function MaskChars({
  as: Tag = "span",
  text,
  className = "",
  stagger = 40,
  duration = 600,
}) {
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

  const words = String(text).split(" ");
  let charIndex = -1;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 ? " " : null}
          <span className="inline-block">
            {[...word].map((ch, ci) => {
              charIndex += 1;
              const delay = charIndex * stagger;
              return (
                <span
                  key={ci}
                  aria-hidden="true"
                  className="inline-block overflow-hidden align-bottom pt-[0.12em] pb-[0.18em] -my-[0.15em]"
                >
                  <span
                    className="inline-block ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transitionProperty: "transform",
                      transitionDuration: `${duration}ms`,
                      transform: shown ? "translateY(0)" : "translateY(130%)",
                      transitionDelay: shown ? `${delay}ms` : "0ms",
                    }}
                  >
                    {ch}
                  </span>
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
