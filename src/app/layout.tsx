import type { Metadata, Viewport } from "next";
import { Playfair_Display, Tiro_Devanagari_Hindi } from "next/font/google";
import { HelpWidget, Navbar, Preloader, ScrollProgress, ScrollToTop } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rdpublicschool.org.in"),
  title: {
    default: "R.D. Public School, Tekari — CBSE Affiliated School in Gaya",
    template: "%s · R.D. Public School, Tekari",
  },
  description:
    "R.D. Public School (RDPS), Vikram Vihar, Tekari, Gaya — a CBSE affiliated school (No. 330422) established in 2009, offering quality education for the holistic development of every child.",
  keywords: ["RD Public School", "RDPS Tekari", "CBSE school Gaya", "school in Tekari", "Vikram Vihar school"],
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: {
    type: "website",
    siteName: "R.D. Public School, Tekari",
    images: ["/images/photos/building.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1f2328",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${tiro.variable} antialiased`}
    >
      <body className="grain min-h-dvh bg-ivory">
        <Providers>
          <a
            href="#main"
            className="sr-only z-[100] rounded-full bg-ink px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <HelpWidget />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
