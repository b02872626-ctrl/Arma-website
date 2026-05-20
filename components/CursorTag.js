"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Figma-style name tag that follows the cursor.
// Smoothly trails the pointer with a small lerp for a natural feel.
// Hidden on touch devices and inside the embedded Sanity Studio.
export default function CursorTag() {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/studio")) return;

    // Skip on touch-only devices — no cursor to follow.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;
    let visible = false;
    let rafId = null;

    const tick = () => {
      // Lerp toward target for a slight trailing feel.
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      el.style.transform = `translate3d(${currentX + 18}px, ${currentY + 18}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Only show the tag while the cursor is over the hero (#top).
      // On pages without a hero, the tag stays hidden entirely.
      const hero = document.getElementById("top");
      let overHero = false;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        overHero =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      }

      if (overHero && !visible) {
        visible = true;
        el.style.opacity = "1";
      } else if (!overHero && visible) {
        visible = false;
        el.style.opacity = "0";
      }
    };

    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        transform: "translate3d(-200px, -200px, 0)",
        opacity: 0,
        transition: "opacity 200ms ease-out",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-md border border-line bg-white px-2.5 py-1 text-sm font-semibold text-ink shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
    >
      Arma
    </div>
  );
}
