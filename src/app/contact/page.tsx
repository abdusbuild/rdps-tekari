import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { school } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Reveal, SplitText, Stagger, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Address, phone numbers, email, office hours and map for R.D. Public School, Vikram Vihar, near S.N. Sinha College, Tekari, Gaya, Bihar — 824236.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    { icon: MapPin, title: "Visit", lines: [school.address, school.city], href: school.mapLink },
    { icon: Phone, title: "Call", lines: school.phones, href: school.phoneHrefs[0] },
    { icon: Mail, title: "Write", lines: [school.email], href: `mailto:${school.email}` },
    { icon: Clock, title: "Office hours", lines: ["Mon – Fri · 8 AM – 2 PM", "Saturday · 8 AM – 12 PM"] },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you."
        lead="Have a question about admissions, fees or anything else? Reach out — our office is happy to help."
        image="/images/photos/building.png"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="grid size-10 place-items-center rounded-xl bg-crimson text-ivory transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <c.icon className="size-5" />
                  </span>
                  <p className="mt-4 eyebrow text-muted">{c.title}</p>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 break-words font-medium">{l}</p>
                  ))}
                </>
              );
              return (
                <StaggerItem key={c.title} className="h-full">
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group block h-full rounded-2xl bg-cream p-5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ivory hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.12)]">
                      {inner}
                    </a>
                  ) : (
                    <div className="group h-full rounded-2xl bg-cream p-5">{inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <SplitText as="h2" text="Send us a message." className="font-display text-4xl font-medium tracking-tight sm:text-5xl" />
              <Reveal delay={0.15} className="mt-10">
                <ContactForm />
              </Reveal>
            </div>
            <Reveal delay={0.1} className="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-sand">
              <iframe
                src={school.mapEmbed}
                title="Map showing R.D. Public School, Tekari"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full grayscale-[40%] contrast-[1.05]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
