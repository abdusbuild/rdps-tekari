import type { Metadata } from "next";
import Image from "next/image";
import { Megaphone } from "lucide-react";
import { events, formatDate, notices } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ClipReveal, Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "News & Notices",
  description: "Latest news, notices and event updates from R.D. Public School, Tekari.",
};

export default function NewsPage() {
  const [featured, ...rest] = events;
  return (
    <>
      <PageHeader eyebrow="News" title="News, notices & happenings." image="/images/photos/childrens-day.jpg" />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          {notices.map((n) => (
            <Reveal key={n.title} className="grid overflow-hidden rounded-[2rem] bg-maroon text-ivory md:grid-cols-5">
              <div className="flex flex-col justify-center p-8 sm:p-12 md:col-span-3">
                <p className="eyebrow inline-flex items-center gap-2 text-saffron-soft">
                  <Megaphone className="size-4" /> Notice · {formatDate(n.date)}
                </p>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">{n.title}</h2>
              </div>
              <div className="relative min-h-64 bg-ivory md:col-span-2">
                <Image src={n.img} alt="" fill sizes="(min-width:768px) 40vw, 100vw" className="object-contain p-4" />
              </div>
            </Reveal>
          ))}

          <div className="mt-20">
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <ClipReveal className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto">
                <Image src={featured.img} alt={featured.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                  <p className="text-xs font-semibold uppercase tracking-widest text-saffron">{featured.category} · {formatDate(featured.date)}</p>
                  <h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">{featured.title}</h3>
                </div>
              </ClipReveal>
              <Stagger className="divide-y divide-ink/10" stagger={0.05}>
                {rest.slice(0, 6).map((e) => (
                  <StaggerItem key={e.slug} className="group flex items-center gap-5 py-4 first:pt-0">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                      <Image src={e.img} alt="" fill sizes="160px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-crimson">{formatDate(e.date)}</p>
                      <h3 className="mt-1 font-display text-lg font-medium leading-snug transition-colors group-hover:text-crimson">{e.title}</h3>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>

          <div className="mt-24">
            <SplitText as="h2" text="From the archive." className="font-display text-4xl font-medium tracking-tight sm:text-5xl" />
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rest.slice(6).map((e) => (
                <StaggerItem key={e.slug} className="group">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                    <Image src={e.img} alt={e.title} fill quality={90} sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold">{e.category}</span>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-crimson">{formatDate(e.date)}</p>
                  <h3 className="mt-1 font-display text-lg font-medium leading-snug">{e.title}</h3>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
