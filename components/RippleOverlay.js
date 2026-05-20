"use client";

import { useEffect, useRef } from "react";

// Cursor-driven 2D water ripples painted on a canvas over its parent.
// The parent should be `position: relative` for the absolute positioning to
// resolve. Skips on touch devices and `prefers-reduced-motion`.
export default function RippleOverlay({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");

    const W = 180;
    const H = 110;
    canvas.width = W;
    canvas.height = H;

    let buf0 = new Float32Array(W * H);
    let buf1 = new Float32Array(W * H);

    let inView = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { rootMargin: "10% 0px 10% 0px" }
    );
    observer.observe(wrap);

    let lastX = -1;
    let lastY = -1;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        lastX = lastY = -1;
        return;
      }
      const x = Math.floor(((e.clientX - rect.left) / rect.width) * W);
      const y = Math.floor(((e.clientY - rect.top) / rect.height) * H);
      if (x < 1 || x >= W - 1 || y < 1 || y >= H - 1) return;

      const drop = (px, py) => {
        if (px < 1 || px >= W - 1 || py < 1 || py >= H - 1) return;
        buf0[py * W + px] += 70;
      };
      if (lastX >= 0) {
        const steps = Math.max(Math.abs(x - lastX), Math.abs(y - lastY));
        for (let s = 0; s <= steps; s++) {
          const t = steps === 0 ? 0 : s / steps;
          drop(
            Math.floor(lastX + (x - lastX) * t),
            Math.floor(lastY + (y - lastY) * t)
          );
        }
      } else {
        drop(x, y);
      }
      lastX = x;
      lastY = y;
    };

    window.addEventListener("mousemove", onMove);

    const imageData = ctx.createImageData(W, H);
    const data = imageData.data;
    let rafId = null;

    const tick = () => {
      if (!inView) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      for (let y = 1; y < H - 1; y++) {
        const row = y * W;
        for (let x = 1; x < W - 1; x++) {
          const i = row + x;
          const avg =
            (buf0[i - 1] + buf0[i + 1] + buf0[i - W] + buf0[i + W]) * 0.5;
          buf1[i] = (avg - buf1[i]) * 0.992;
        }
      }
      const tmp = buf0;
      buf0 = buf1;
      buf1 = tmp;

      for (let i = 0; i < buf0.length; i++) {
        const v = Math.abs(buf0[i]);
        const a = v > 160 ? 160 : v | 0;
        const idx = i * 4;
        // Slight cool tint: lower R/G, full B → very subtle blue cast.
        data[idx] = 230;
        data[idx + 1] = 240;
        data[idx + 2] = 255;
        data[idx + 3] = a;
      }
      ctx.putImageData(imageData, 0, 0);

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ mixBlendMode: "overlay" }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ filter: "blur(7px)" }}
      />
    </div>
  );
}
