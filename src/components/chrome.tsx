"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUp, ArrowUpRight, Mail, Menu, MessageCircle, MessageCircleQuestion, Phone, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { nav, school } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export function ScrollToTop() {
  const lenis = useLenis();
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() => (lenis ? lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.4, ease }}
          className="group fixed bottom-4 right-4 z-[55] grid size-12 place-items-center rounded-full bg-night text-ivory shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)] ring-1 ring-white/10 transition-colors duration-300 hover:bg-crimson sm:bottom-6 sm:right-6 sm:size-14 [html[data-menu-open]_&]:hidden"
        >
          <svg aria-hidden viewBox="0 0 56 56" className="absolute inset-0 size-full -rotate-90">
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              className="stroke-saffron"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp className="size-5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-saffron via-crimson to-maroon"
      style={{ scaleX }}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    // Lets other fixed UI (e.g. the help widget) step aside while the menu is open
    root.toggleAttribute("data-menu-open", open);
  }, [open]);

  return (
    <>
      {/* Top bar: admissions notice + quick contact. Scrolls away; the main bar below stays pinned. */}
      <div className="relative z-50 bg-night text-[13px] text-ivory/85">
        <div className="container-x flex h-10 items-center justify-between gap-4">
          <p className="flex min-w-0 items-center gap-2 truncate">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-crimson/70" />
              <span className="relative size-2 rounded-full bg-crimson" />
            </span>
            <span className="truncate">
              Admissions open for session <span className="font-semibold text-saffron">2026–27</span>
              <span className="hidden sm:inline"> · Class I to XI</span>
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-5">
            <a href={school.phoneHrefs[0]} className="flex items-center gap-1.5 transition-colors hover:text-saffron">
              <Phone className="size-3.5" />
              <span className="hidden sm:inline">{school.phones[0]}</span>
            </a>
            <a href={`mailto:${school.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-saffron md:flex">
              <Mail className="size-3.5" />
              {school.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={clsx(
          "sticky top-0 z-50 transition-[background-color,box-shadow] duration-300",
          scrolled || open
            ? "bg-ivory/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)] backdrop-blur-xl"
            : "bg-ivory",
        )}
      >
        <nav className="container-x flex h-[76px] items-center justify-between gap-4" aria-label="Main">
          <Link href="/" className="flex items-center gap-3" aria-label="R.D. Public School — home">
            <Image src="/images/logo.png" alt="" width={48} height={48} className="size-11 sm:size-12" preload />
            <span className="leading-tight text-ink">
              <span className="block whitespace-nowrap font-display text-lg font-semibold tracking-tight sm:text-xl">R.D. Public School</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Tekari · Gaya · CBSE</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block px-4 py-2 text-[15px] font-medium transition-colors duration-200 hover:text-crimson",
                      active ? "font-semibold text-crimson" : "text-ink-soft",
                    )}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/admissions"
              className="hidden items-center whitespace-nowrap rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_20px_-8px_rgba(196,22,28,.7)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-crimson-deep sm:inline-flex"
            >
              Apply Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full bg-ink text-ivory xl:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
        {/* Brand stripe along the bottom edge */}
        <div aria-hidden className="h-[3px] bg-gradient-to-r from-crimson via-saffron to-maroon" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-maroon text-ivory xl:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="container-x flex flex-1 flex-col justify-center pt-24">
              <ul className="space-y-1">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease }}
                  >
                    <Link
                      href={n.href}
                      className={clsx(
                        "block py-1 font-display text-4xl font-medium sm:text-5xl",
                        pathname === n.href ? "text-saffron" : "text-ivory",
                      )}
                    >
                      {n.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="container-x space-y-2 pb-10 text-sm text-ivory/70"
            >
              <a href={school.phoneHrefs[0]} className="flex items-center gap-2"><Phone className="size-4" /> {school.phones[0]}</a>
              <a href={`mailto:${school.email}`} className="flex items-center gap-2"><Mail className="size-4" /> {school.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Intro curtain: logo + motto, shown once per session. */
export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("rdps-intro") === "1";
      sessionStorage.setItem("rdps-intro", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen ? 0 : 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-maroon text-ivory"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -40 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease }}
              className="rounded-full bg-ivory p-2 shadow-lg"
            >
              <Image src="/images/logo.png" alt="" width={112} height={112} preload />
            </motion.div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.9, ease }}
                className="font-deva text-2xl text-saffron sm:text-3xl"
              >
                {school.motto}
              </motion.p>
            </div>
            <motion.div
              className="h-px w-40 origin-left bg-ivory/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.4, ease }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const noop = () => () => {};

/** Current year, rendered on the client only (keeps the server prerender free of `new Date()`). */
export function Year() {
  const y = useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);
  return <>{y ?? ""}</>;
}

/** Floating "Need help?" launcher with quick call / WhatsApp / email actions. */
export function HelpWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const actions = [
    { label: "Call us", sub: school.phones[0], href: school.phoneHrefs[0], icon: Phone, tint: "bg-crimson" },
    { label: "WhatsApp", sub: "Chat with the office", href: school.whatsappHref, icon: MessageCircle, tint: "bg-leaf", external: true },
    { label: "Email us", sub: school.email, href: `mailto:${school.email}`, icon: Mail, tint: "bg-maroon" },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Close on any click/tap outside the widget.
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-4 left-4 z-[55] flex flex-col items-start gap-3 sm:bottom-6 sm:left-6 [html[data-menu-open]_&]:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            id="help-panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease }}
            className="w-[min(20rem,calc(100vw-2rem))] origin-bottom-left rounded-[1.75rem] bg-ivory p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)] ring-1 ring-ink/5"
          >
            <div className="px-3 pb-3 pt-2">
              <p className="font-display text-xl font-medium">Need help?</p>
              <p className="text-sm text-muted">Admissions, fees or anything else — reach the school office.</p>
            </div>
            <ul className="space-y-1">
              {actions.map((a, i) => (
                <motion.li
                  key={a.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease }}
                >
                  <a
                    href={a.href}
                    {...(a.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-cream"
                  >
                    <span className={clsx("grid size-10 shrink-0 place-items-center rounded-full text-ivory", a.tint)}>
                      <a.icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">{a.label}</span>
                      <span className="block truncate text-xs text-muted">{a.sub}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-ink py-3 text-sm font-semibold text-ivory transition-colors hover:bg-crimson"
            >
              Send an admission enquiry <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="help-panel"
        aria-label={open ? "Close help" : "Need help? Contact the school"}
        className="group relative flex items-center gap-2 rounded-full bg-crimson py-3 pl-3 pr-3 text-ivory shadow-[0_15px_40px_-10px_rgba(196,22,28,.6)] transition-colors hover:bg-maroon sm:pr-5"
      >
        {!open && <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-crimson/40 [animation-duration:2.5s]" />}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "q"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="size-5" /> : <MessageCircleQuestion className="size-5" />}
          </motion.span>
        </AnimatePresence>
        <span className="hidden text-sm font-semibold sm:inline">{open ? "Close" : "Need help?"}</span>
      </button>
    </div>
  );
}
