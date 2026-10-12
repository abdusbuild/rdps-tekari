import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import {
  AdmissionCTA,
  Features,
  FacilitiesScroller,
  GalleryStrip,
  Intro,
  News,
  Principal,
  Results,
  StatsBand,
} from "@/components/home/sections";
import { Faq, FaqJsonLd } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Marquee } from "@/components/ui/kit";
import { school } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** schema.org School structured data so search engines show the school's details. */
function SchoolJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: school.name,
    alternateName: [school.short, "RD Public School Tekari"],
    url: "https://rdpublicschool.org.in",
    logo: "https://rdpublicschool.org.in/images/logo.png",
    image: "https://rdpublicschool.org.in/images/photos/building.png",
    foundingDate: String(school.established),
    email: school.email,
    telephone: school.phoneHrefs.map((t) => t.replace("tel:", "")),
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address,
      addressLocality: "Tekari",
      addressRegion: "Bihar",
      postalCode: "824236",
      addressCountry: "IN",
    },
    hasMap: school.mapLink,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

const ribbon = ["Modern Technology", "Sports Environment", "Pleasant Atmosphere", "Experienced Faculty", "Science Stream", "Scouts & Guides"];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <div className="overflow-x-clip">
        <div className="bg-saffron py-4 text-maroon">
          <Marquee
            duration={30}
            items={ribbon.map((t) => (
              <span key={t} className="flex items-center gap-8 pr-8 font-display text-2xl font-medium sm:text-3xl">
                {t} <span aria-hidden>✦</span>
              </span>
            ))}
          />
        </div>
      </div>
      <Intro />
      <Features />
      <FacilitiesScroller />
      <Principal />
      <Results />
      <GalleryStrip />
      <News />
      <Testimonials />
      <Faq />
      <FaqJsonLd />
      <SchoolJsonLd />
      <AdmissionCTA />
    </>
  );
}
