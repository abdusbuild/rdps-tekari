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
    default: "R.D. Public School, Tekari | CBSE School in Tekari, Gaya (Bihar)",
    template: "%s | R.D. Public School, Tekari",
  },
  description:
    "R.D. Public School (RDPS), Vikram Vihar, Tekari, Gaya — CBSE affiliated (No. 330422) school since 2009 for Class I–XII with Science stream, well-equipped labs, library, computer lab and sports. Admissions, fees & contact.",
  applicationName: "R.D. Public School",
  keywords: [
    "RD Public School",
    "R.D. Public School Tekari",
    "RDPS Tekari",
    "CBSE school in Tekari",
    "CBSE school in Gaya",
    "best school in Tekari",
    "school near S.N. Sinha College Tekari",
    "school admission Tekari",
    "Vikram Vihar Tekari",
    "CBSE affiliation 330422",
  ],
  authors: [{ name: "R.D. Public School" }],
  creator: "R.D. Public School",
  publisher: "R.D. Public School",
  category: "education",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "R.D. Public School, Tekari",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
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
