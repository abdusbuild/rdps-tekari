import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { about, codeOfConduct, mission, rules, school, vision } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Accordion } from "@/components/ui/accordion";
import { Button, Icon } from "@/components/ui/kit";
import { ClipReveal, Parallax, Reveal, SplitText, Stagger, StaggerItem, Tilt } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about R.D. Public School, Tekari (Gaya) — our history since 2009, vision, mission, values and the leadership guiding this CBSE affiliated school.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Since 2009, lighting the way in Tekari."
        lead="Situated at Vikram Vihar, near S.N. Sinha College, R.D. Public School is a CBSE affiliated school dedicated to the holistic development of every child."
        image="/images/photos/building.png"
      />

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SplitText as="h2" text="A charming campus with room to grow." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{about.intro}</p>
              <p className="mt-4 leading-relaxed text-muted">{about.philosophy}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              {[
                ["2009", "Founded"],
                ["25", "Classrooms"],
                [school.affiliationNo, "CBSE Aff. No."],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-crimson">{v}</p>
                  <p className="mt-1 text-xs text-muted">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <div className="relative lg:col-span-7">
            <ClipReveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Parallax className="size-full" offset={60}>
                <Image src="/images/photos/ceremony.png" alt="School leadership at a lamp-lighting ceremony" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
              </Parallax>
            </ClipReveal>
            <Reveal delay={0.4} className="absolute -bottom-10 -left-2 max-w-xs rounded-3xl bg-maroon p-6 text-ivory shadow-lg sm:-left-4 lg:-left-10">
              <p className="font-deva text-2xl text-saffron">{school.motto}</p>
              <p className="mt-2 text-sm text-ivory/70">“{school.mottoMeaning}” — the guiding motto on our crest.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-night py-24 text-ivory sm:py-32">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-crimson to-maroon p-8 sm:p-12">
            <Eye className="size-12 text-saffron" strokeWidth={1.3} />
            <p className="eyebrow mt-8 text-saffron-soft">Vision</p>
            <p className="mt-4 font-display text-3xl font-light leading-snug sm:text-4xl">{vision}</p>
            <div aria-hidden className="absolute -bottom-20 -right-20 size-72 rounded-full border-[30px] border-ivory/5" />
          </Reveal>
          <Reveal delay={0.15} className="rounded-[2rem] border border-ivory/10 bg-ivory/[.03] p-8 sm:p-12">
            <Target className="size-12 text-saffron" strokeWidth={1.3} />
            <p className="eyebrow mt-8 text-saffron-soft">Mission</p>
            <p className="mt-4 leading-relaxed text-ivory/80">{mission.lead}</p>
            <Stagger className="mt-8 space-y-3" stagger={0.06}>
              {mission.points.map((p, i) => (
                <StaggerItem key={p} className="flex gap-4 border-t border-ivory/10 pt-3 text-sm text-ivory/70">
                  <span className="font-display text-saffron">{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <SplitText as="h2" text="More than classrooms — a complete way of growing." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
          </div>
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.pillars.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <Tilt className="group h-full rounded-2xl" max={6}>
                  <div className="h-full rounded-2xl bg-cream p-5 transition-colors duration-500 group-hover:bg-ivory group-hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.12)]">
                    <span className="grid size-10 place-items-center rounded-xl bg-ivory text-crimson transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon name={p.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-medium">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                  </div>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Rules */}
      <section id="rules" className="scroll-mt-24 bg-cream py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SplitText as="h2" text="Rules & code of conduct." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" />
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted">
                Discipline is the foundation of learning. We ask every student and parent to read and follow these
                guidelines.
              </p>
              <div className="mt-8">
                <Button href="/admissions">Admission process</Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion
              items={[
                { title: "Rules & Regulations", body: <List items={rules} /> },
                { title: "Code of Conduct", body: <List items={codeOfConduct} /> },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((r, i) => (
        <li key={i} className="flex gap-4 text-ink-soft">
          <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-crimson/10 text-xs font-bold text-crimson">{i + 1}</span>
          <span className="leading-relaxed">{r}</span>
        </li>
      ))}
    </ol>
  );
}
