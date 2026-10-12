import clsx from "clsx";
import Link from "next/link";
import {
  ArrowUpRight,
  Baby,
  Compass,
  Globe,
  GraduationCap,
  HeartHandshake,
  LandPlot,
  Leaf,
  Monitor,
  Sparkles,
  Sun,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Magnetic } from "./motion";

const icons: Record<string, LucideIcon> = {
  Baby, Compass, Globe, GraduationCap, HeartHandshake, LandPlot, Leaf, Monitor, Sparkles, Sun, Trophy, Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const I = icons[name] ?? Sparkles;
  return <I className={className} strokeWidth={1.6} aria-hidden />;
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "ghost" | "dark";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className, external }: BtnProps) {
  const styles = {
    primary: "bg-crimson text-ivory",
    light: "bg-ivory text-ink",
    dark: "bg-ink text-ivory",
    ghost: "bg-transparent text-current ring-1 ring-current/25",
  }[variant];
  const fill = {
    primary: "bg-crimson-deep",
    light: "bg-saffron",
    dark: "bg-crimson",
    ghost: "bg-saffron",
  }[variant];
  const inner = (
    <span
      className={clsx(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-3.5 pl-6 pr-3 text-sm font-semibold tracking-wide",
        styles,
        className,
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0",
          fill,
        )}
      />
      <span className={clsx("relative transition-colors duration-500", variant === "ghost" && "group-hover:text-ink")}>
        {children}
      </span>
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-full bg-current/15">
        <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-6 group-hover:translate-x-6" />
        <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </span>
  );
  return (
    <Magnetic strength={0.25}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link href={href}>{inner}</Link>
      )}
    </Magnetic>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("eyebrow inline-flex items-center gap-3 text-crimson", className)}>
      <span className="h-px w-8 bg-current" aria-hidden />
      {children}
    </p>
  );
}

export { Marquee } from "./marquee";
