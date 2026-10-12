import type { Metadata } from "next";
import { disclosure, facilities, infrastructure } from "@/lib/data";
import { FilterGrid } from "@/components/filter-grid";
import { PageHeader } from "@/components/page-header";
import { Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Science labs, computer lab, library, playgrounds, music room and more on the 9,134 sq. m campus of R.D. Public School, Tekari, Gaya.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Built for learning, play and discovery."
        lead="Fully equipped laboratories, a rich library, playgrounds and activity rooms across a 9,134 sq. metre campus."
        image="/images/photos/mathematics-physics-lab.jpg"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <SplitText as="h2" text="Every space has a purpose." className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
          </div>
          <FilterGrid
            groups={["Academics", "Laboratories", "Sports", "Activities"]}
            items={facilities.map((f) => ({ src: f.img, title: f.name, group: f.group }))}
          />
        </div>
      </section>

      <section className="bg-night py-24 text-ivory sm:py-32">
        <div className="container-x">
          <SplitText as="h2" text="The numbers behind our campus." className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((s) => (
              <StaggerItem key={s.label} className="group bg-night p-6 transition-colors duration-500 hover:bg-maroon">
                <p className="text-sm text-ivory/50">{s.label}</p>
                <p className="mt-2 font-display text-4xl text-saffron">{s.value}</p>
                {s.note && <p className="mt-2 text-sm text-ivory/60">{s.note}</p>}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20">
            <p className="eyebrow text-ivory/50">Campus inspection videos</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {disclosure.videos.map((id) => (
                <div key={id} className="relative aspect-video overflow-hidden rounded-2xl bg-ivory/5">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title="R.D. Public School campus inspection video"
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 size-full"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
