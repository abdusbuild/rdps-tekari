"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
  defaultOpen = 0,
  size = "lg",
}: {
  items: { title: string; body: React.ReactNode }[];
  defaultOpen?: number | null;
  size?: "lg" | "sm";
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={clsx("group flex w-full items-center justify-between gap-6 text-left", size === "lg" ? "py-6" : "py-5")}
            >
              <span
                className={clsx(
                  "font-display font-medium transition-colors group-hover:text-crimson",
                  size === "lg" ? "text-2xl sm:text-3xl" : "text-lg leading-snug sm:text-xl",
                  isOpen && "text-crimson",
                )}
              >
                {it.title}
              </span>
              <span
                className={clsx(
                  "grid shrink-0 place-items-center rounded-full border transition-all duration-500",
                  size === "lg" ? "size-11" : "size-9",
                  isOpen
                    ? "rotate-180 border-crimson bg-crimson text-ivory"
                    : "border-ink/15 group-hover:border-crimson group-hover:text-crimson",
                )}
              >
                <ChevronDown className="size-5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className={size === "lg" ? "pb-8" : "pb-6 pr-12"}>{it.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
