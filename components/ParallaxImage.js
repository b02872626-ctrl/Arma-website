"use client";

import { useEffect, useRef } from "react";

// Subtle parallax on the inner image as it scrolls through the viewport.
// Pass a CSS background (image URL or gradient placeholder) via `background`,
// the wrapper aspect/sizing via `className`.
//
// `strength` = max translation in px (default 80). Higher = more dramatic.
export default function ParallaxImage({
  background,
  className = "",
  strength = 200,
}) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let inView = false;
    let pending = false;
    let rafId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) schedule();
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    observer.observe(wrapper);

    const update = () => {
      pending = false;
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when wrapper top is at viewport bottom; 1 when wrapper bottom is at viewport top.
      const raw = (vh - rect.top) / (vh + rect.height);
      const progress = Math.max(0, Math.min(1, raw));
      const offset = (progress - 0.5) * strength;
      inner.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const schedule = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    const onScroll = () => {
      if (inView) schedule();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={innerRef}
        className="absolute inset-x-0 -top-[22%] h-[144%] will-change-transform"
        style={{ background, transform: "translate3d(0, 0, 0)" }}
      />
    </div>
  );
}
