import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, school, vision } from "@/lib/data";
import { Year } from "./chrome";
import { FooterGroup } from "./footer-group";
import { legalLinks } from "./legal";
import { Marquee } from "./ui/kit";

const more = [
  { href: "/news", label: "News & Notices" },
  { href: "/disclosure", label: "Mandatory Disclosure" },
  { href: "/admissions#fees", label: "Fee Structure" },
  { href: "/about#rules", label: "Rules & Code of Conduct" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-ivory">
      <div className="border-b border-ivory/10 py-8">
        <Marquee
          duration={50}
          items={["Tamaso Ma Jyotirgamaya", "Learn", "Lead", "Serve", "Since 2009", "CBSE 330422"].map((t) => (
            <span key={t} className="flex items-center gap-10 pr-10 font-display text-5xl italic text-ivory/90 sm:text-7xl">
              {t}
              <span className="size-3 rounded-full bg-saffron" />
            </span>
          ))}
        />
      </div>

      <div className="container-x grid py-16 md:grid-cols-12 md:gap-12">
        <div className="mb-8 md:col-span-12 md:mb-0 lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-ivory p-1.5">
              <Image src="/images/logo.png" alt="" width={56} height={56} />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold">{school.name}</p>
              <p className="font-deva text-saffron">{school.motto}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
            <span className="font-semibold text-ivory/80">Our vision — </span>
            {vision}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2 text-xs text-ivory/70">
            CBSE Affiliation No. {school.affiliationNo} · School Code {school.schoolCode}
          </p>
        </div>

        <FooterGroup title="Explore" className="border-t md:col-span-5 md:border-t-0 lg:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
            {[...nav.slice(1), ...more].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="group inline-flex items-center gap-1 text-ivory/75 transition-colors hover:text-saffron">
                  {n.label}
                  <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </FooterGroup>

        <FooterGroup title="Reach us" className="md:col-span-7 lg:col-span-4">
          <div className="space-y-5 text-sm">
            <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-ivory/75 hover:text-ivory">
              <MapPin className="mt-0.5 size-4 shrink-0 text-saffron" />
              <span>{school.address},<br />{school.city}</span>
            </a>
            <div className="flex gap-3 text-ivory/75">
              <Phone className="mt-0.5 size-4 shrink-0 text-saffron" />
              <span className="flex flex-col">
                {school.phones.map((p, i) => (
                  <a key={p} href={school.phoneHrefs[i]} className="hover:text-ivory">{p}</a>
                ))}
              </span>
            </div>
            <a href={`mailto:${school.email}`} className="flex gap-3 break-all text-ivory/75 hover:text-ivory">
              <Mail className="mt-0.5 size-4 shrink-0 text-saffron" />
              {school.email}
            </a>
            <div className="flex gap-3 text-ivory/75">
              <Clock className="mt-0.5 size-4 shrink-0 text-saffron" />
              <span>Office: Mon–Fri 8 AM – 2 PM<br />Sat 8 AM – 12 PM</span>
            </div>
          </div>
        </FooterGroup>
      </div>

      <div className="container-x relative">
        <p
          aria-hidden
          className="pointer-events-none select-none bg-gradient-to-b from-ivory/[.09] to-transparent bg-clip-text text-center font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-transparent"
        >
          RDPS
        </p>
      </div>

      <div className="border-t border-ivory/10">
        {/* Extra bottom room below lg so the floating "Need help?" button doesn't cover this line */}
        <div className="container-x flex flex-col gap-2 pb-24 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>© <Year /> R.D. Public School, Tekari. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-5">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-saffron">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
