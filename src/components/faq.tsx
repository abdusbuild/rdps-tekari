"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";
import { Clock, Mail, Phone } from "lucide-react";
import { faqs, school, type FaqCategory } from "@/lib/data";
import { Accordion } from "@/components/ui/accordion";
import { Reveal, SplitText } from "@/components/ui/motion";

/** Filterable FAQ with a contact card. Pass `categories` to show only a subset (e.g. on the Admissions page). */
export function Faq({
  categories,
  title = "Questions parents often ask.",
  className,
}: {
  categories?: FaqCategory[];
  title?: string;
  className?: string;
}) {
  const pool = categories ? faqs.filter((f) => categories.includes(f.category)) : faqs;
  const tabs = ["All", ...new Set(pool.map((f) => f.category))] as const;
  const [tab, setTab] = useState<string>("All");
  const shown = tab === "All" ? pool : pool.filter((f) => f.category === tab);

  return (
    <section id="faq" className={clsx("scroll-mt-24 py-24 sm:py-32", className)}>
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SplitText as="h2" text={title} className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-muted">
              Can&apos;t find what you&apos;re looking for? The school office is happy to help during working hours.
            </p>
            <div className="mt-8 rounded-[1.75rem] bg-maroon p-6 text-ivory sm:p-8">
              <p className="flex items-center gap-2 text-sm text-ivory/60">
                <Clock className="size-4" /> {school.officeHours[1].value}
              </p>
              <a href={school.phoneHrefs[0]} className="group mt-5 flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-saffron text-maroon transition-transform group-hover:rotate-12">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-ivory/60">Call the school office</span>
                  <span className="font-display text-xl">{school.phones[0]}</span>
                </span>
              </a>
              <a href={`mailto:${school.email}`} className="mt-4 flex items-center gap-4 text-sm text-ivory/80 hover:text-ivory">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ivory/20">
                  <Mail className="size-5" />
                </span>
                <span className="break-all">{school.email}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {tabs.length > 2 && (
            <div role="tablist" aria-label="FAQ topics" className="mb-8 flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={clsx(
                    "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                    tab === t ? "text-ivory" : "bg-ink/[.05] text-ink-soft hover:bg-ink/10",
                  )}
                >
                  {tab === t && (
                    <motion.span
                      layoutId="faq-tab"
                      className="absolute inset-0 rounded-full bg-crimson"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t}</span>
                </button>
              ))}
            </div>
          )}
          <Accordion
            key={tab}
            size="sm"
            items={shown.map((f) => ({
              title: f.q,
              body: <p className="leading-relaxed text-ink-soft">{f.a}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

/** schema.org FAQPage structured data for search results. */
export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
