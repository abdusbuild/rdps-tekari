import type { Metadata } from "next";
import { school } from "@/lib/data";
import { LegalPage, type LegalSection } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How R.D. Public School, Tekari collects, uses and protects personal information shared through this website.",
};

const contact = (
  <>
    {school.name}, {school.address}, {school.city}
    <br />
    Email: <a href={`mailto:${school.email}`} className="text-crimson hover:underline">{school.email}</a> · Phone: {school.phones.join(", ")}
  </>
);

const sections: LegalSection[] = [
  {
    title: "Introduction",
    body: (
      <p>
        This Privacy Policy explains how {school.name} (&ldquo;the School&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
        information when you visit this website or contact us through it. By using the website, you agree to the practices
        described here.
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>This website does not require you to create an account and does not store personal data on its own servers.</p>
        <ul>
          <li>
            <strong>Enquiries you send us</strong> — when you use the contact form, your name, phone number, class sought and
            message are placed into an email in your own mail app. Nothing is sent until you choose to send that email.
          </li>
          <li>
            <strong>Direct communication</strong> — details you share when you call, email or visit the school office.
          </li>
          <li>
            <strong>Technical data</strong> — like most websites, our hosting provider may automatically log basic information
            such as IP address, browser type and pages visited, for security and performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How we use information",
    body: (
      <ul>
        <li>To respond to admission enquiries, questions and feedback.</li>
        <li>To communicate with parents and guardians about admissions and school matters.</li>
        <li>To keep the website secure and working properly.</li>
      </ul>
    ),
  },
  {
    title: "Students' information",
    body: (
      <p>
        Information about students collected during admission is used only for academic, administrative and statutory purposes,
        including reporting required by CBSE and government authorities. Photographs of school events published in the gallery
        are shared for the school community; parents who do not wish their child&rsquo;s photograph to appear may write to us and
        it will be removed.
      </p>
    ),
  },
  {
    title: "Sharing of information",
    body: (
      <p>
        We do not sell, rent or trade personal information. Information may be shared only with CBSE, government or educational
        authorities where required by law, or when needed to protect the safety of students and staff.
      </p>
    ),
  },
  {
    title: "Cookies & third-party services",
    body: (
      <p>
        This website does not use advertising or tracking cookies. Some pages include an embedded Google Map and links to
        external sites (such as CBSE documents); those services have their own privacy policies, which we encourage you to read.
      </p>
    ),
  },
  {
    title: "Data security & retention",
    body: (
      <p>
        We take reasonable care to protect the information you share with us, and keep it only as long as needed for the purpose
        it was provided or as required by law. No method of transmission over the internet is completely secure, so we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        You may ask us to access, correct or delete personal information you have shared with us by contacting the school office
        using the details below.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: <p>We may update this policy from time to time. Changes take effect when posted on this page with a new &ldquo;Last updated&rdquo; date.</p>,
  },
  {
    title: "Contact us",
    body: <p>{contact}</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy policy."
      lead="How we handle the information you share with R.D. Public School through this website."
      updated="12 October 2026"
      sections={sections}
    />
  );
}
