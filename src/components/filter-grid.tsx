"use client";

import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Expand } from "lucide-react";
import { Lightbox, type LightboxItem } from "./ui/lightbox";

type Item = LightboxItem & { group: string };

/** Filter chips + animated masonry-ish grid that opens a lightbox. */
export function FilterGrid({ items, groups, variant = "grid" }: { items: Item[]; groups: string[]; variant?: "grid" | "masonry" }) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = active === "All" ? items : items.filter((i) => i.group === active);

  return (
    <>
      <LayoutGroup>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter">
          {["All", ...groups].map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={active === g}
              onClick={() => setActive(g)}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                active === g ? "text-ivory" : "text-ink-soft hover:text-ink",
              )}
            >
              {active === g && (
                <motion.span layoutId="chip" className="absolute inset-0 rounded-full bg-crimson" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              {active !== g && <span className="absolute inset-0 rounded-full ring-1 ring-ink/10" />}
              <span className="relative">
                {g}
                <span className={clsx("ml-1.5 text-xs", active === g ? "text-ivory/60" : "text-muted")}>
                  {g === "All" ? items.length : items.filter((i) => i.group === g).length}
                </span>
              </span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className={clsx(
            "mt-10",
            variant === "masonry" ? "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          )}
        >
          <AnimatePresence mode="popLayout">
            {shown.map((it, i) => (
              <motion.button
                layout
                key={it.src}
                type="button"
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                  "group relative block w-full overflow-hidden rounded-2xl bg-sand text-left",
                  variant === "masonry" ? "mb-4 break-inside-avoid" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={it.src}
                  alt={it.title}
                  {...(variant === "masonry" ? { width: 800, height: i % 3 === 0 ? 1000 : 600 } : { fill: true })}
                  quality={90}
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className={clsx(
                    "object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105",
                    variant === "masonry" && (i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"),
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
                <span className="absolute right-3 top-3 grid size-9 scale-50 place-items-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Expand className="size-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-saffron">{it.meta ?? it.group}</p>
                  <p className="mt-1 font-display text-lg font-medium leading-snug">{it.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
      <Lightbox items={shown} index={open} onChange={setOpen} />
    </>
  );
}
