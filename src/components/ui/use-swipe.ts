"use client";

import { useRef } from "react";

/** Touch handlers that call `onSwipe(1)` on a left swipe (next) and `onSwipe(-1)` on a right swipe (previous).
 *  Pair with `touch-pan-y` so vertical page scrolling still works over the element. */
export function useSwipe(onSwipe: (dir: 1 | -1) => void, threshold = 40) {
  const start = useRef<{ x: number; y: number } | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => {
      const t = e.touches[0];
      start.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: (e: React.TouchEvent) => {
      const s = start.current;
      start.current = null;
      if (!s) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - s.x;
      const dy = t.clientY - s.y;
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.2) onSwipe(dx < 0 ? 1 : -1);
    },
  };
}
