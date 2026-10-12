"use client";

import clsx from "clsx";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Phone, Quote } from "lucide-react";
import { about, events, facilities, features, formatDate, results, school, stats, vision } from "@/lib/data";
import { Button, Icon, Marquee } from "@/components/ui/kit";
import { ClipReveal, Counter, Parallax, Reveal, SplitText, Stagger, StaggerItem, Tilt } from "@/components/ui/motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function StatsBand() {
  return (
    <section id="intro" className="relative z-10 -mt-px bg-night pb-12 text-ivory">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/[.03] lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={clsx(
                "group relative px-5 py-3 sm:px-7 sm:py-4",
                i % 2 === 0 && "border-r border-ivory/10",
                i < 2 && "border-b border-ivory/10 lg:border-b-0",
                i === 1 && "lg:border-r",
              )}
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-crimson/20 transition-transform duration-700 ease-out-expo group-hover:scale-y-100" />
              <p className="relative font-display text-2xl font-medium text-saffron sm:text-4xl">
                <Counter to={s.value} plain={"plain" in s && s.plain} />
              </p>
              <p className="relative mt-0.5 text-xs text-ivory/60 sm:text-sm">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const noop = () => () => {};

export function Intro() {
  // Server snapshot uses the build-time-safe established year; the client fills in the live value.
  const years = useSyncExternalStore(noop, () => new Date().getFullYear() - school.established, () => 17);
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 h-[28rem] sm:h-[36rem] lg:order-1">
          <ClipReveal className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[2rem]">
            <Parallax className="size-full" offset={50}>
              <Image src="/images/photos/building.png" alt="R.D. Public School building at Vikram Vihar, Tekari" fill sizes="(min-width:1024px) 35vw, 70vw" className="object-cover" />
            </Parallax>
          </ClipReveal>
          <ClipReveal delay={0.25} from="right" className="absolute bottom-0 right-0 h-[55%] w-[55%] overflow-hidden rounded-[2rem] border-8 border-ivory">
            <Parallax className="size-full" offset={30}>
              <Image src="/images/photos/library.jpg" alt="Students reading in the school library" fill sizes="(min-width:1024px) 25vw, 55vw" className="object-cover" />
            </Parallax>
          </ClipReveal>
          <Reveal delay={0.5} className="absolute bottom-[12%] left-[6%] z-10">
            <div className="flex items-center gap-4 rounded-2xl bg-crimson p-5 text-ivory shadow-lg">
              <p className="font-display text-5xl font-semibold">
                <Counter to={years} />+
              </p>
              <p className="text-xs font-semibold uppercase leading-tight tracking-widest">
                Years of<br />excellence
              </p>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <SplitText
            as="h2"
            text="A school built for the mind, body and spirit."
            className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{about.philosophy}</p>
            <p className="mt-4 leading-relaxed text-muted">{about.intro}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Qualified teachers", "Modern infrastructure", "Fully equipped labs", "Rich library & playgrounds"].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3 text-sm font-medium">
                <span className="grid size-6 place-items-center rounded-full bg-crimson text-[10px] text-ivory">✓</span>
                {t}
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/about">Our story</Button>
            <a href={school.phoneHrefs[1]} className="group flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-ivory">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">Call us anytime</span>
                <span className="font-semibold">{school.phones[1]}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SplitText
              as="h2"
              text="Best quality and affordable education in Tekari."
              className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl"
            />
          </div>
          <Reveal>
            <p className="max-w-sm text-muted">
              Catering quality education towards the holistic development of the students since 2009.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <Tilt className="group h-full rounded-2xl" max={8}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-ivory p-5 ring-1 ring-ink/5 transition-colors duration-500 group-hover:bg-maroon group-hover:text-ivory">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full bg-saffron/0 blur-2xl transition-all duration-700 group-hover:bg-saffron/40" />
                  <span className="grid size-10 place-items-center rounded-xl bg-crimson/10 text-crimson transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-saffron group-hover:text-maroon">
                    <Icon name={f.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-ivory/70">{f.text}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Horizontally swipeable row of facility cards; vertical page scroll is never captured. */
export function FacilitiesScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const picks = facilities.filter((f) =>
    ["Classrooms", "Computer Lab", "Library", "Mathematics & Physics Lab", "Chemistry Lab", "Biology Lab", "Karate", "Table Tennis & Volleyball", "Music Room", "Exhibition & Multi-Purpose Hall"].includes(f.name),
  );
  const slide = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-night py-24 text-ivory sm:py-32">
      <div className="container-x mb-10 flex items-end justify-between gap-6">
        <h2 className="font-display text-4xl font-medium leading-none tracking-tight sm:text-6xl">
          Spaces that <em className="text-saffron">spark</em> curiosity.
        </h2>
        <div className="hidden gap-3 md:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => slide(dir)}
              aria-label={dir === -1 ? "Previous facilities" : "Next facilities"}
              className="grid size-12 place-items-center rounded-full border border-ivory/15 transition-colors hover:border-saffron hover:bg-saffron hover:text-maroon"
            >
              {dir === -1 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
            </button>
          ))}
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:gap-6 sm:scroll-px-[max(1.5rem,calc((100vw-82rem)/2+2.5rem))] sm:px-[max(1.5rem,calc((100vw-82rem)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {picks.map((f) => (
          <article
            key={f.name}
            className="group relative aspect-[4/3] w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[21rem] lg:w-[23rem]"
          >
            {/* Photos are ~2:1, so object-cover renders them ~1.5x the card width — size the request for that */}
            <Image src={f.img} alt={f.name} fill quality={90} sizes="(min-width:1024px) 552px, (min-width:640px) 504px, 120vw" className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-saffron">{f.group}</p>
              <h3 className="mt-1 font-display text-xl font-medium sm:text-2xl">{f.name}</h3>
            </div>
          </article>
        ))}
        <Link
          href="/facilities"
          className="group grid w-[56vw] shrink-0 snap-start place-items-center rounded-3xl border border-ivory/15 sm:w-[15rem]"
        >
          <span className="flex flex-col items-center gap-3 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-saffron text-maroon transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight className="size-6" />
            </span>
            <span className="font-display text-xl">All {facilities.length} facilities</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export function Principal() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="relative isolate mx-auto w-full max-w-[18rem] sm:max-w-sm lg:col-span-5 lg:max-w-md">
          <div aria-hidden className="absolute -bottom-3 -right-3 -z-10 size-full rounded-[1.5rem] border border-saffron/50 sm:-bottom-4 sm:-right-4 sm:rounded-[2rem]" />
          <ClipReveal className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-sand sm:rounded-[2rem]">
            <Image
              src="/images/photos/principal-portrait.jpg"
              alt={`Principal ${school.principal}`}
              fill
              sizes="(min-width:1024px) 448px, (min-width:640px) 384px, 288px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon/90 to-transparent p-5 pt-16 text-ivory sm:p-6 sm:pt-20">
              <p className="font-display text-xl sm:text-2xl">{school.principal}</p>
              <p className="text-xs text-ivory/70 sm:text-sm">Principal, R.D. Public School</p>
            </div>
          </ClipReveal>
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-crimson">
              <span className="h-px w-8 bg-crimson/60" />
              Message from the Principal
            </p>
            <Quote className="mt-6 size-12 text-saffron" strokeWidth={1.2} />
          </Reveal>
          <SplitText
            as="p"
            text={vision}
            className="mt-4 font-display text-2xl font-light leading-snug tracking-tight sm:text-4xl"
          />
          <Reveal delay={0.15} className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-ink/20" />
            <div>
              <p className="font-display text-xl italic">{school.principal}</p>
              <p className="text-sm text-muted">Principal</p>
            </div>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6 text-sm">
            <div>
              <p className="text-muted">Principal</p>
              <p className="font-semibold">{school.principal}</p>
            </div>
            <div>
              <p className="text-muted">Vice Principal</p>
              <p className="font-semibold">{school.vicePrincipal}</p>
            </div>
            <div>
              <p className="text-muted">Principal&apos;s office</p>
              <p className="font-semibold">Mon–Fri, 10:30–11:30 AM</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SplitText as="h2" text="Consistent results, year after year." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted">
              CBSE Class X pass percentage as published in the school&apos;s mandatory public disclosure.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-ivory p-5">
                <p className="font-display text-4xl text-crimson"><Counter to={565} /></p>
                <p className="mt-1 text-xs text-muted">Students appeared, 2016–20</p>
              </div>
              <div className="rounded-2xl bg-ivory p-5">
                <p className="font-display text-4xl text-crimson"><Counter to={500} /></p>
                <p className="mt-1 text-xs text-muted">Students passed, 2016–20</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="lg:col-span-8">
          <div className="relative flex h-80 items-end gap-3 border-b border-ink/15 sm:h-96 sm:gap-6">
            {[25, 50, 75, 100].map((g) => (
              <div key={g} className="pointer-events-none absolute inset-x-0 border-t border-dashed border-ink/10" style={{ bottom: `${g}%` }}>
                <span className="absolute -top-2.5 right-0 bg-cream pl-2 text-[10px] text-muted">{g}%</span>
              </div>
            ))}
            {results.map((r, i) => (
              <div key={r.year} className="group relative flex h-full flex-1 flex-col justify-end">
                <motion.div
                  className={clsx(
                    "relative rounded-t-2xl",
                    r.pct === 100 ? "bg-gradient-to-t from-crimson to-saffron" : "bg-gradient-to-t from-maroon to-crimson",
                  )}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${r.pct}%` } : undefined}
                  transition={{ duration: 1.4, delay: i * 0.12, ease }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ delay: 1 + i * 0.12 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-lg font-semibold sm:text-2xl"
                  >
                    {r.pct}%
                  </motion.span>
                  <span className="absolute inset-x-2 bottom-3 rounded-lg bg-ivory/90 px-2 py-1.5 text-center text-[10px] leading-tight text-ink opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs">
                    {r.passed}/{r.appeared} passed
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-3 sm:gap-6">
            {results.map((r) => (
              <p key={r.year} className="flex-1 text-center text-sm font-semibold text-muted">{r.year}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GalleryStrip() {
  const row1 = events.slice(0, 8);
  const row2 = events.slice(8);
  const card = (e: (typeof events)[number]) => (
    <Link
      key={e.slug}
      href="/gallery"
      className="group relative mr-4 block h-44 w-64 overflow-hidden rounded-2xl sm:h-52 sm:w-80"
    >
      <Image src={e.img} alt={e.title} fill quality={90} sizes="(min-width:640px) 380px, 320px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-sm font-semibold text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {e.title}
      </p>
    </Link>
  );
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="container-x mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SplitText as="h2" text="Moments we celebrate together." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
        </div>
        <Reveal>
          <Button href="/gallery">Open the gallery</Button>
        </Reveal>
      </div>
      <div className="space-y-4">
        <Marquee items={row1.map(card)} duration={60} />
        <Marquee items={row2.map(card)} duration={55} reverse />
      </div>
    </section>
  );
}

export function News() {
  const latest = events.slice(0, 3);
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SplitText as="h2" text="What's happening on campus." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
          </div>
          <Reveal>
            <Link href="/news" className="group inline-flex items-center gap-2 font-semibold text-crimson">
              All news & notices
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((e) => (
            <StaggerItem key={e.slug}>
              <Link href="/news" className="group block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image src={e.img} alt={e.title} fill quality={90} sizes="(min-width:1024px) 420px, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold backdrop-blur">{e.category}</span>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-crimson">{formatDate(e.date)}</p>
                <h3 className="mt-1.5 font-display text-xl font-medium leading-snug">
                  <span className="bg-gradient-to-r from-crimson to-crimson bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                    {e.title}
                  </span>
                </h3>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function AdmissionCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.96, 1]);
  return (
    <section ref={ref} className="px-4 py-12 sm:px-6 sm:py-16">
      <motion.div
        style={{ scale }}
        className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-night px-6 py-12 text-ivory ring-1 ring-white/10 sm:px-12 sm:py-14"
      >
        <div aria-hidden className="absolute inset-x-12 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-saffron/70 to-transparent" />
        <div aria-hidden className="absolute -left-20 -top-28 -z-10 size-80 rounded-full bg-crimson/35 blur-[100px]" />
        <div aria-hidden className="absolute -bottom-32 right-0 -z-10 size-72 rounded-full bg-saffron/10 blur-[100px]" />
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
              <span className="h-px w-8 bg-saffron/70" />
              Admissions open
            </p>
            <SplitText as="h2" text="Give your child the right start." className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-5xl" />
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-base text-ivory/65">
                Admission enquiries open from the 2nd week of January for Classes I – IX. Class XI (Science) admissions
                begin after CBSE Class X results.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 md:flex-col md:items-stretch">
              <Button href="/admissions" variant="light">Admission process</Button>
              <Button href="/contact" variant="ghost">Enquire now</Button>
            </div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
