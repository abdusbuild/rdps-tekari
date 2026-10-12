"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal, SplitText } from "@/components/ui/motion";
import { useSwipe } from "@/components/ui/use-swipe";

const ease = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 7000;

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Auto-rotating parent & alumni voices; pauses while hovered or focused. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const t = testimonials[index];

  const go = (step: number) => {
    setDir(step);
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);
  };
  const swipe = useSwipe(go);

  return (
    <section className="relative overflow-hidden bg-night py-24 text-ivory sm:py-32">
      <div aria-hidden className="absolute -left-40 top-10 size-[30rem] rounded-full bg-crimson/20 blur-3xl" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SplitText
            as="h2"
            text="Families who chose RDPS."
            className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm text-ivory/60">
              What parents and former students say about learning, growing and belonging at R.D. Public School.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center rounded-full border border-ivory/20 transition-colors hover:bg-ivory hover:text-ink"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center rounded-full bg-saffron text-maroon transition-transform hover:scale-105"
              >
                <ArrowRight className="size-5" />
              </button>
              <p className="ml-3 font-display text-lg tabular-nums text-ivory/50">
                <span className="text-ivory">{String(index + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="lg:col-span-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div {...swipe} className="relative touch-pan-y overflow-hidden rounded-[2rem] border border-ivory/10 bg-ivory/[.03] p-8 sm:p-12" aria-live="polite">
            <Quote aria-hidden className="absolute right-8 top-8 size-24 text-ivory/5 sm:size-32" strokeWidth={1} />
            <div className="flex gap-1 text-saffron" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5 fill-current" aria-hidden />
              ))}
            </div>
            <div className="relative mt-8 min-h-64 sm:min-h-56">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <blockquote className="font-display text-2xl font-light leading-snug tracking-tight sm:text-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-full bg-crimson font-display text-lg font-semibold">
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-ivory/55">{t.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className="relative h-1 flex-1 overflow-hidden rounded-full bg-ivory/15"
                >
                  {i === index && (
                    // The bar's own animation is the autoplay timer, so pausing it on hover pauses both.
                    <span
                      key={index}
                      onAnimationEnd={() => go(1)}
                      className="absolute inset-y-0 left-0 animate-progress rounded-full bg-saffron"
                      style={{ ["--progress-duration" as string]: `${INTERVAL}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
