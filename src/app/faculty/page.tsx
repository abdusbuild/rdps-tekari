import type { Metadata } from "next";
import Image from "next/image";
import { disclosure, school, staff } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { StaffDirectory } from "@/components/staff-directory";
import { ClipReveal, Counter, Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description:
    "Meet the principal, qualified teachers and staff of R.D. Public School, Tekari — a CBSE affiliated school in Gaya, Bihar.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  const counts = [
    { label: "Post Graduate Teachers", value: 8 },
    { label: "Trained Graduate Teachers", value: 13 },
    { label: "Primary Teachers", value: 9 },
    { label: "Total teachers", value: 34 },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Faculty"
        title="Qualified, dedicated, inspiring."
        lead="Our teachers are the heart of RDPS — guiding every child with care, knowledge and discipline."
        image="/images/photos/jury.png"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-6 lg:grid-cols-12">
          <ClipReveal className="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-sand lg:col-span-5">
            <Image src="/images/photos/principal-portrait.jpg" alt={`Principal ${school.principal}`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon via-maroon/70 to-transparent p-8 pt-24 text-ivory">
              <p className="eyebrow text-saffron-soft">Principal</p>
              <p className="mt-2 font-display text-4xl">{school.principal}</p>
            </div>
          </ClipReveal>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal className="rounded-[2rem] bg-night p-8 text-ivory sm:p-10">
              <p className="eyebrow text-saffron-soft">Vice Principal</p>
              <p className="mt-2 font-display text-4xl">{school.vicePrincipal}</p>
              <div className="mt-8 grid gap-6 border-t border-ivory/10 pt-6 sm:grid-cols-2">
                {disclosure.teaching.slice(-2).map((t) => (
                  <div key={t.label}>
                    <p className="text-sm text-ivory/50">{t.label}</p>
                    <p className="mt-1 text-lg">{t.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Stagger className="grid flex-1 grid-cols-2 gap-4">
              {counts.map((c) => (
                <StaggerItem key={c.label} className="rounded-2xl bg-cream p-5">
                  <p className="font-display text-4xl text-crimson"><Counter to={c.value} /></p>
                  <p className="mt-2 text-sm text-muted">{c.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="mb-10">
            <SplitText as="h2" text="The people of RDPS." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
          </div>
          <StaffDirectory staff={staff} />
        </div>
      </section>
    </>
  );
}
