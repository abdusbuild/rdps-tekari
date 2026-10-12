import type { Metadata } from "next";
import { events, formatDate } from "@/lib/data";
import { FilterGrid } from "@/components/filter-grid";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Celebrations, competitions, sports and academic events at R.D. Public School, Tekari.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments that make us RDPS."
        lead="Festivals, competitions, sports days and exhibitions — a look at life on campus."
        image="/images/photos/sports.jpg"
      />
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <FilterGrid
            variant="masonry"
            groups={["Celebration", "Competition", "Sports", "Academic"]}
            items={events.map((e) => ({ src: e.img, title: e.title, group: e.category, meta: formatDate(e.date) }))}
          />
        </div>
      </section>
    </>
  );
}
