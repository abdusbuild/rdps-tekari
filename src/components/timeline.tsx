"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./ui/motion";

/** Vertical steps with a line that draws itself as you scroll. */
export function Timeline({ steps }: { steps: { title: string; text: string }[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <ol ref={ref} className="relative space-y-12 pl-16 sm:pl-24">
      <div aria-hidden className="absolute bottom-2 left-6 top-2 w-px bg-ink/10 sm:left-10" />
      <motion.div aria-hidden style={{ scaleY }} className="absolute bottom-2 left-6 top-2 w-px origin-top bg-crimson sm:left-10" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <Reveal y={20}>
            <span className="absolute -left-16 top-0 grid size-12 place-items-center rounded-full bg-ivory font-display text-lg text-crimson ring-1 ring-crimson/30 sm:-left-24 sm:size-20 sm:text-2xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-medium sm:text-3xl">{s.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
