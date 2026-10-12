import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { disclosure, results, school } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure",
  description: "CBSE mandatory public disclosure of R.D. Public School, Tekari — affiliation, certificates, results and staff details.",
};

export default function DisclosurePage() {
  const general = [
    ["Name of the school", school.name],
    ["Affiliation number", school.affiliationNo],
    ["School code", school.schoolCode],
    ["Address", "Vikram Vihar, Tekari, District Gaya Jee, Bihar — 824236"],
    ["Principal", school.principal],
    ["Email", school.email],
    ["Contact", school.phones[0]],
  ];
  return (
    <>
      <PageHeader eyebrow="Mandatory Disclosure" title="Public mandatory disclosure." lead="Information published as required by the Central Board of Secondary Education." image="/images/affiliation.jpg" />

      <section className="py-24 sm:py-32">
        <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="mt-8 overflow-hidden rounded-3xl ring-1 ring-ink/10">
              <dl className="divide-y divide-ink/10">
                {general.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-4 px-5 py-4 text-sm odd:bg-cream">
                    <dt className="col-span-2 text-muted">{k}</dt>
                    <dd className="col-span-3 break-words font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-14">
              <Reveal className="mt-8 grid grid-cols-2 gap-3">
                {disclosure.teaching.map((t) => (
                  <div key={t.label} className="rounded-2xl bg-cream p-4">
                    <p className="text-xs text-muted">{t.label}</p>
                    <p className="mt-1 font-display text-xl">{t.value}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SplitText as="h2" text="Certificates & records." className="font-display text-4xl font-medium tracking-tight sm:text-5xl" />
            <Stagger className="mt-8 space-y-3" stagger={0.04}>
              {disclosure.documents.map((d) => (
                <StaggerItem key={d.href}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-cream px-5 py-4 transition-all duration-300 hover:bg-crimson hover:text-ivory"
                  >
                    <span className="flex items-center gap-4">
                      <FileText className="size-5 shrink-0 text-crimson transition-colors group-hover:text-saffron" strokeWidth={1.5} />
                      <span className="font-medium">{d.title}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wider">
                      PDF <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-14">
              <Reveal className="mt-6 overflow-x-auto rounded-3xl ring-1 ring-ink/10">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead className="bg-maroon text-ivory">
                    <tr>
                      {["Year", "Appeared", "Passed", "Pass %"].map((h) => (
                        <th key={h} className="px-5 py-4 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    {results.map((r) => (
                      <tr key={r.year} className="transition-colors hover:bg-cream">
                        <td className="px-5 py-4 font-semibold">{r.year}</td>
                        <td className="px-5 py-4">{r.appeared}</td>
                        <td className="px-5 py-4">{r.passed}</td>
                        <td className="px-5 py-4 font-display text-lg text-crimson">{r.pct}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
