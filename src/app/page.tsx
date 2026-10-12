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
      <AdmissionCTA />
    </>
  );
}
