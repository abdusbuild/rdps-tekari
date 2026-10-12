import type { Metadata } from "next";
import Link from "next/link";
import { school } from "@/lib/data";
import { LegalPage, type LegalSection } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the website of R.D. Public School, Tekari.",
};

const sections: LegalSection[] = [
  {
    title: "Acceptance of terms",
    body: (
      <p>
        By accessing this website of {school.name}, you agree to these Terms of Use. If you do not agree, please do not use the
        website.
      </p>
    ),
  },
  {
    title: "Purpose of the website",
    body: (
      <p>
        This website provides general information about the School, its facilities, admissions, faculty, events and CBSE
        mandatory disclosures. It is meant for parents, students and the public for informational purposes only.
      </p>
    ),
  },
  {
    title: "Accuracy of information",
    body: (
      <p>
        We try to keep all information accurate and up to date. However, details such as fees, dates, schedules and notices may
        change. For final and binding information, please confirm with the school office. In case of any difference, official
        school notices and records will prevail.
      </p>
    ),
  },
  {
    title: "Admissions",
    body: (
      <p>
        Submitting an enquiry through this website does not guarantee admission. Admissions are subject to availability of seats,
        the School&rsquo;s admission policy and CBSE norms.
      </p>
    ),
  },
  {
    title: "Intellectual property",
    body: (
      <p>
        The name, logo, text, photographs and other content on this website belong to {school.name} unless stated otherwise. They
        may not be copied, reproduced or used for commercial purposes without written permission from the School.
      </p>
    ),
  },
  {
    title: "Acceptable use",
    body: (
      <ul>
        <li>Do not use the website for any unlawful purpose.</li>
        <li>Do not attempt to disrupt, damage or gain unauthorised access to the website.</li>
        <li>Do not misuse school photographs or information about students and staff.</li>
      </ul>
    ),
  },
  {
    title: "External links",
    body: (
      <p>
        This website may link to external websites such as CBSE or Google Maps. We are not responsible for the content or
        privacy practices of those websites.
      </p>
    ),
  },
  {
    title: "Limitation of liability",
    body: (
      <p>
        The School is not liable for any loss or damage arising from the use of, or inability to use, this website or the
        information on it.
      </p>
    ),
  },
  {
    title: "Privacy",
    body: (
      <p>
        Your use of this website is also governed by our{" "}
        <Link href="/privacy-policy" className="text-crimson hover:underline">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    title: "Governing law",
    body: <p>These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of courts in Gaya, Bihar.</p>,
  },
  {
    title: "Contact us",
    body: (
      <p>
        For any questions about these terms, write to{" "}
        <a href={`mailto:${school.email}`} className="text-crimson hover:underline">{school.email}</a> or call {school.phones[0]}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="Terms of use."
      lead="The terms that apply when you use the R.D. Public School website."
      updated="12 October 2026"
      sections={sections}
    />
  );
}
