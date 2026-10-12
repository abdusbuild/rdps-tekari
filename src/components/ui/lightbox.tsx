"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLenis } from "lenis/react";

export type LightboxItem = { src: string; title: string; meta?: string };

export function Lightbox({
  items,
  index,
  onChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const lenis = useLenis();
  const go = useCallback(
    (d: number) => index !== null && onChange((index + d + items.length) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (index === null) return;
    lenis?.stop();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("keydown", key);
      lenis?.start();
    };
  }, [index, go, onChange, lenis]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-[75] flex flex-col bg-night/95 p-4 text-ivory backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onChange(null)}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm tabular-nums text-ivory/50">
              {index! + 1} / {items.length}
            </p>
            <button type="button" aria-label="Close" className="grid size-11 place-items-center rounded-full bg-ivory/10 hover:bg-ivory/20" onClick={() => onChange(null)}>
              <X className="size-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.src}
                className="relative size-full"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={item.src} alt={item.title} fill sizes="100vw" className="object-contain" draggable={false} />
              </motion.div>
            </AnimatePresence>
            <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-0 grid size-12 place-items-center rounded-full bg-ivory/10 hover:bg-crimson">
              <ChevronLeft className="size-6" />
            </button>
            <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-0 grid size-12 place-items-center rounded-full bg-ivory/10 hover:bg-crimson">
              <ChevronRight className="size-6" />
            </button>
          </div>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-xl sm:text-2xl">{item.title}</p>
            {item.meta && <p className="mt-1 text-sm text-ivory/50">{item.meta}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
