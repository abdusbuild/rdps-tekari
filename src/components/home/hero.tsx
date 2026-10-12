"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";
import { Button } from "@/components/ui/kit";
import { SplitText } from "@/components/ui/motion";
import { useSwipe } from "@/components/ui/use-swipe";

const ease = [0.16, 1, 0.3, 1] as const;
const SLIDE_MS = 6000;
const values = ["character", "confidence", "curiosity", "courage"];

function RotatingWord() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setW((p) => (p + 1) % values.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={values[w]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="col-start-1 row-start-1 font-semibold text-saffron"
        >
          {values[w]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const n = heroSlides.length;
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);
  const swipe = useSwipe((d) => n > 1 && go(d));

  // Re-keyed on `i` so a manual change restarts the full interval instead of firing early.
  useEffect(() => {
    if (n < 2 || paused) return;
    const t = setTimeout(() => go(1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, n, paused, go]);

  return (
    <section
      ref={ref}
      aria-roledescription="carousel"
      aria-label="School highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipe}
      className="relative isolate touch-pan-y flex min-h-[clamp(560px,calc(100svh-119px),840px)] items-center overflow-hidden bg-night text-ivory"
    >
      {/* full-bleed slides */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduce ? 1 : 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduce ? 0 : SLIDE_MS / 1000 + 1.5, ease: "easeOut" }}
            >
              <Image
                src={heroSlides[i].src}
                alt={heroSlides[i].caption}
                fill
                preload={i === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: heroSlides[i].focus }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* scrim: dark on the text side, opening up to the photo on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background:linear-gradient(100deg,rgb(18_19_22/.94)_0%,rgb(18_19_22/.82)_34%,rgb(18_19_22/.42)_66%,rgb(18_19_22/.12)_100%),linear-gradient(0deg,rgb(18_19_22/.7)_0%,transparent_40%)]"
      />

      {n > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute left-[clamp(12px,2.5vw,28px)] top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/25 bg-night/30 backdrop-blur transition hover:border-saffron hover:bg-saffron hover:text-maroon sm:grid"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute right-[clamp(12px,2.5vw,28px)] top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/25 bg-night/30 backdrop-blur transition hover:border-saffron hover:bg-saffron hover:text-maroon sm:grid"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      <div className="container-x w-full pb-28 pt-20 lg:pt-16">
        <motion.div style={{ y: textY, opacity: fade }} className="max-w-3xl sm:px-14 2xl:px-0">
          <h1 className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <SplitText text="From darkness" immediate delay={0.5} className="block" />
            <span className="block">
              <SplitText text="into" immediate delay={0.65} />{" "}
              <SplitText text="light." immediate delay={0.75} className="italic text-saffron" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            In Tekari, Gaya, children learn to think clearly, speak confidently and grow in mind, body &amp; spirit —
            not just to clear an exam.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.9, ease }}
            className="mt-6 font-display text-2xl text-ivory sm:text-3xl"
          >
            We build <RotatingWord />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/admissions">Start an admission enquiry</Button>
            <Button href="/gallery" variant="ghost" className="text-ivory">See school life</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* caption + counter + progress */}
      {n > 1 && (
        <motion.div
          style={{ opacity: fade }}
          className="absolute bottom-6 right-[clamp(16px,4vw,40px)] z-10 flex items-center gap-4 text-ivory sm:bottom-8"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="hidden text-sm font-medium text-ivory/80 md:block"
            >
              {heroSlides[i].caption}
            </motion.p>
          </AnimatePresence>
          <span className="hidden font-display text-sm tabular-nums text-ivory/70 md:inline">
            <span className="text-ivory">{String(i + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5">
            {heroSlides.map((_, k) => (
              <button
                key={k}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Show slide ${k + 1}`}
                aria-current={k === i}
                className="relative h-1.5 w-7 overflow-hidden rounded-full bg-ivory/25"
              >
                {k === i && (
                  <motion.span
                    key={`${i}-${paused}`}
                    className="absolute inset-0 origin-left bg-saffron"
                    initial={{ scaleX: paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
