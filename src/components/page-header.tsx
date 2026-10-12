"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { SplitText } from "./ui/motion";

export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[clamp(420px,62svh,640px)] items-end overflow-hidden bg-night text-ivory">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill preload sizes="100vw" className="object-cover opacity-55" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/30" />

      <motion.div style={{ y: textY, opacity }} className="container-x pb-16 pt-20 sm:pb-24">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-xs font-medium text-ivory/60"
        >
          <Link href="/" className="hover:text-saffron">Home</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-ivory">{eyebrow}</span>
        </motion.nav>
        <SplitText
          as="h1"
          immediate
          delay={0.45}
          text={title}
          className="block max-w-5xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.03em]"
        />
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/70"
          >
            {lead}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
