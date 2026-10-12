import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Download, FileText, FlaskConical } from "lucide-react";
import { admission, fees, inr, school } from "@/lib/data";
import { Faq } from "@/components/faq";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/kit";
import { ClipReveal, Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Admission process, required documents, fee structure and academic calendar of R.D. Public School, Tekari.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Begin your journey at RDPS."
        lead="Admission enquiries are entertained from the 2nd week of January. Details are also displayed on the school notice board."
        image="/images/photos/champions.png"
      />

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SplitText as="h2" text="Four simple steps to admission." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted">
                Come to the school campus and our counsellors will assist you with the details. The school fee is charged monthly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Admission enquiry</Button>
                <Button href={fees.calendarPdf} external variant="ghost">Academic calendar</Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Timeline steps={admission.steps} />
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container-x">
          <SplitText as="h2" text="Admissions from Class I to XI." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {admission.classes.map((c) => (
              <StaggerItem key={c.label} className="group rounded-2xl bg-ivory p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.12)]">
                <p className="font-display text-3xl text-crimson">{c.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-5 overflow-hidden rounded-3xl bg-maroon p-8 text-ivory sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-saffron text-maroon">
                  <FlaskConical className="size-8" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow text-saffron-soft">Class XI · Science stream</p>
                  <p className="mt-1 font-display text-2xl">Subject combination offered</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {admission.stream.map((s) => (
                  <span key={s} className="rounded-full border border-ivory/20 px-4 py-2 text-sm transition-colors hover:bg-ivory hover:text-maroon">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SplitText as="h2" text="Documents required at admission." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted">Students of all classes must submit two passport-size photographs along with the following.</p>
              <p className="mt-6 rounded-2xl border-l-4 border-saffron bg-cream p-5 text-sm leading-relaxed text-ink-soft">{admission.tcNote}</p>
            </Reveal>
          </div>
          <Stagger className="space-y-3" stagger={0.06}>
            {admission.documents.map((d, i) => (
              <StaggerItem key={d.name} className="group flex items-center justify-between gap-4 rounded-2xl bg-cream px-5 py-4 transition-colors hover:bg-sand">
                <span className="flex items-center gap-4">
                  <span className="font-display text-crimson">{String(i + 1).padStart(2, "0")}</span>
                  <FileText className="size-5 text-muted" strokeWidth={1.5} />
                  <span className="font-medium">{d.name}</span>
                </span>
                <span
                  className={
                    d.status === "Mandatory"
                      ? "rounded-full bg-crimson px-3 py-1 text-xs font-semibold text-ivory"
                      : d.status === "Compulsory"
                        ? "rounded-full bg-maroon/10 px-3 py-1 text-xs font-semibold text-maroon"
                        : "rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-muted"
                  }
                >
                  {d.status}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="scroll-mt-24 bg-night py-24 text-ivory sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SplitText as="h2" text="Transparent, affordable fees." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
            </div>
            <Reveal>
              <a href={fees.officialChart} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-maroon">
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                Official 2026-27 fee chart (PDF)
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="rounded-[2rem] border border-ivory/10 bg-ivory/[.03] p-6 sm:p-8 lg:col-span-7">
              <p className="eyebrow text-ivory/50">Tuition fee · monthly</p>
              <Stagger className="mt-6 divide-y divide-ivory/10" stagger={0.05}>
                {fees.tuition.map((t) => (
                  <StaggerItem key={t.cls} className="group flex items-center justify-between py-4">
                    <span className="text-ivory/80">Class {t.cls}</span>
                    <span className="flex flex-1 items-center px-4">
                      <span className="h-px flex-1 origin-left scale-x-0 bg-saffron/40 transition-transform duration-500 group-hover:scale-x-100" />
                    </span>
                    <span className="font-display text-2xl text-saffron">{inr(t.amount)}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
            <div className="grid gap-5 lg:col-span-5">
              <Reveal delay={0.1} className="rounded-[2rem] bg-crimson p-6 sm:p-8">
                <p className="eyebrow text-ivory/70">One-time</p>
                {fees.oneTime.map((f) => (
                  <div key={f.label} className="mt-5 flex items-end justify-between gap-4 border-t border-ivory/20 pt-4">
                    <div>
                      <p className="font-semibold">{f.label}</p>
                      <p className="text-xs text-ivory/70">{f.when}</p>
                    </div>
                    <p className="font-display text-3xl">{inr(f.amount)}</p>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.2} className="rounded-[2rem] border border-ivory/10 bg-ivory/[.03] p-6 sm:p-8">
                <p className="eyebrow text-ivory/50">Annual charges</p>
                {fees.annual.map((f) => (
                  <div key={f.label + f.cls} className="mt-4 flex items-center justify-between gap-4 border-t border-ivory/10 pt-4">
                    <p className="text-ivory/80">
                      {f.label} <span className="text-ivory/50">· Class {f.cls}</span>
                    </p>
                    <p className="font-display text-xl text-saffron">{inr(f.amount)}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
          <p className="mt-6 text-xs text-ivory/45">
            Figures as listed on the school website. Please refer to the official 2026-27 fee chart or the school office for the latest fees.
          </p>
        </div>
      </section>

      {/* Calendar + hours */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ClipReveal className="relative mx-auto aspect-[9/11] w-full max-w-md overflow-hidden rounded-[2rem] bg-cream shadow-[0_40px_80px_-40px_rgba(0,0,0,.12)]">
            <a href={fees.calendarPdf} target="_blank" rel="noopener noreferrer" className="group block size-full">
              <Image src="/images/calendar.jpg" alt="Academic calendar 2026-27" fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </a>
          </ClipReveal>
          <div>
            <SplitText as="h2" text="Academic calendar & office hours." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
            <Stagger className="mt-10 space-y-4">
              {school.officeHours.map((h) => (
                <StaggerItem key={h.label} className="flex items-start gap-4 rounded-2xl bg-cream p-5">
                  <Clock className="mt-0.5 size-5 shrink-0 text-crimson" />
                  <div>
                    <p className="font-semibold">{h.label}</p>
                    <p className="text-ink-soft">{h.value}</p>
                    {h.note && <p className="text-sm text-muted">{h.note}</p>}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-8">
              <Button href={fees.calendarPdf} external>Download calendar 2026-27</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <Faq categories={["Admissions", "Fees"]} title="Admission & fee questions." className="bg-cream" />
    </>
  );
}
