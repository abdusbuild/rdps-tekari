"use client";

import clsx from "clsx";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Footer column that collapses into an accordion on phones and is always open from `md` up. */
export function FooterGroup({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={clsx("border-b border-ivory/10 md:border-0", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:py-0"
      >
        <span className="eyebrow text-ivory/40">{title}</span>
        <span
          aria-hidden
          className={clsx(
            "grid size-8 place-items-center rounded-full border transition-all duration-500 md:hidden",
            open ? "rotate-180 border-saffron bg-saffron text-maroon" : "border-ivory/15 text-ivory/70",
          )}
        >
          <ChevronDown className="size-4" />
        </span>
      </button>
      {/* grid-rows 0fr → 1fr animates the height without measuring */}
      <div
        id={id}
        className={clsx(
          "grid transition-[grid-template-rows] duration-500 ease-out-expo md:grid-rows-[1fr]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className={clsx("overflow-hidden transition-[visibility] duration-500", !open && "max-md:invisible")}>
          <div className="pb-6 md:pb-0 md:pt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
