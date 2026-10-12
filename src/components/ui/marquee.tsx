"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const RESUME_MS = 1200;

export function Marquee({
  items,
  className,
  duration = 40,
  reverse = false,
}: {
  items: React.ReactNode[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const box = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  // How many copies of `items` make up half the track. The track holds that half twice and
  // wraps at the halfway point, so the half must be at least as wide as the viewport or a gap shows.
  const [copies, setCopies] = useState(1);

  useEffect(() => {
    const measure = () => {
      const cw = box.current?.offsetWidth ?? 0;
      const gw = group.current?.offsetWidth ?? 0;
      if (cw && gw) setCopies(Math.max(1, Math.ceil(cw / gw)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (box.current) ro.observe(box.current);
    if (group.current) ro.observe(group.current);
    return () => ro.disconnect();
  }, []);

  // The box is a real horizontal scroller, so touch swipes and trackpads move it natively.
  // Auto-scroll drives scrollLeft and steps aside while the user is interacting.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dir = reverse ? -1 : 1;
    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;
    let touching = false;
    let held = false;
    let hover = false;
    let idle: ReturnType<typeof setTimeout> | undefined;

    const wrap = (p: number) => {
      const half = (track.current?.offsetWidth ?? 0) / 2;
      if (half <= 0) return p;
      while (p >= half) p -= half;
      while (p < 0) p += half;
      return p;
    };
    const hold = () => {
      held = true;
      clearTimeout(idle);
    };
    const release = () => {
      clearTimeout(idle);
      idle = setTimeout(() => {
        held = false;
        pos = el.scrollLeft;
      }, RESUME_MS);
    };

    const tick = (t: number) => {
      const dt = Math.min(t - last, 50) / 1000;
      last = t;
      const gw = group.current?.offsetWidth ?? 0;
      if (!held && !hover && !reduce && gw) {
        // One set of items scrolls past every `duration` seconds.
        pos = wrap(pos + (dir * gw * dt) / duration);
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onScroll = () => {
      if (!held) return;
      const w = wrap(el.scrollLeft);
      if (Math.abs(w - el.scrollLeft) > 1) el.scrollLeft = w;
      pos = w;
      if (!touching) release();
    };
    const onTouchStart = () => {
      touching = true;
      hold();
    };
    const onTouchEnd = () => {
      touching = false;
      release();
    };
    const onWheel = () => {
      hold();
      release();
    };
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchEnd);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [duration, reverse]);

  const half = Array.from({ length: copies }, () => items).flat();

  return (
    <div
      ref={box}
      className={clsx("mask-fade-x no-scrollbar relative flex overflow-x-auto overscroll-x-contain", className)}
    >
      <div ref={track} className="flex w-max shrink-0 items-center">
        {[...half, ...half].map((it, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i >= items.length}>
            {it}
          </div>
        ))}
      </div>
      {/* Invisible copy of one set, used only to measure its width. */}
      <div ref={group} aria-hidden className="pointer-events-none invisible absolute left-0 top-0 flex w-max items-center">
        {items.map((it, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
