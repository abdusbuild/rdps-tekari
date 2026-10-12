import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/motion";

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export type LegalSection = { title: string; body: React.ReactNode };

/** Shared layout for the policy pages: numbered sections with a sticky table of contents. */
export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} image="/images/notice.jpg" />

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <ol className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#s${i + 1}`} className="flex gap-3 text-muted transition-colors hover:text-crimson">
                      <span className="w-5 shrink-0 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-xs text-muted">Last updated: {updated}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {legalLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="rounded-full bg-cream px-4 py-2 font-medium transition-colors hover:bg-crimson hover:text-ivory">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-12 lg:col-span-8">
            {sections.map((s, i) => (
              <Reveal key={s.title}>
                <article id={`s${i + 1}`} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    <span className="mr-3 text-crimson">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink/80 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                    {s.body}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
