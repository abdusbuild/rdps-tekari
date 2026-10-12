"use client";

import { motion } from "motion/react";

const ease = [0.76, 0, 0.24, 1] as const;

// Re-mounts on every navigation: a crimson panel sweeps off-screen while the page rises in.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[65] origin-top bg-maroon"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[64] origin-top bg-saffron"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
