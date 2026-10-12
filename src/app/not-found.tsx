import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/kit";
import { school } from "@/lib/data";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description: "The page you are looking for doesn't exist or has moved. Explore admissions, facilities, gallery and contact details of R.D. Public School, Tekari.",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/admissions", label: "Admissions" },
  { href: "/about", label: "About us" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News & notices" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-night px-4 pb-16 pt-32 text-center text-ivory">
      <div>
        <p className="font-display text-[clamp(7rem,25vw,16rem)] font-medium leading-none text-saffron">404</p>
        <p className="mt-2 font-deva text-2xl text-ivory/70">{school.motto}</p>
        <h1 className="mt-6 font-display text-3xl font-medium sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/60">
          This page wandered off — it may have moved or never existed. Let&apos;s lead you back to the light.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">Contact the school</Button>
        </div>
        <nav aria-label="Popular pages" className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/40">Popular pages</p>
          <ul className="mx-auto mt-4 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ivory/75 underline-offset-4 transition-colors hover:text-saffron hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
