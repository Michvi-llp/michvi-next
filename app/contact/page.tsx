import type { Metadata } from "next";
import Script from "next/script";
import { ContactForm } from "./ContactForm";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Executive Contact | Michvi LLP",
  description:
    "Confidential executive-level contact for governance advisory, institutional dialogue, and strategic engagement.",

  alternates: {
    canonical: "/contact/",
  },

  openGraph: {
    title: "Executive Contact | Michvi LLP",
    description:
      "Structured and confidential communication channel for leadership-level interaction.",
    url: "https://michvi.com/contact/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function ContactPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Executive Contact
          </h1>

          <p className="hero-sub">
            For institutional dialogue, strategic advisory discussions, or
            executive-level collaboration outside formal assessment engagements.
          </p>

          <p className="hero-meta">
            Structured · Confidential · Leadership-reviewed · No marketing communication
          </p>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2 className="section-title">
            Structured Inquiry
          </h2>

          <p className="muted">
            Provide high-level context. Suitable inquiries are reviewed directly at leadership level.
          </p>

          <div className="form-card">
            <ContactForm />
          </div>

          <p className="hero-micro">
            Submissions are handled through a structured and confidential review process.
          </p>

        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2 className="section-title">
            Engagement Context
          </h2>

          <p>
            This channel is intended for strategic and institutional conversations
            where governance, architecture, or advisory alignment is under consideration.
          </p>

          <p className="muted">
            Not intended for general marketing, vendor outreach, or unsolicited communication.
          </p>

        </div>
      </section>

      {/* ================= ORGANIZATION ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2 className="section-title">
            Michvi LLP
          </h2>

          <p>
            Independent Governance & Signal Advisory — India
          </p>

          <p className="muted">
            MSME (Udyam) Registered Enterprise
          </p>

          <p className="hero-micro">
            Structured · Confidential · Read-only
          </p>

        </div>
      </section>

      {/* ================= CTA (CHARTER ALIGNED) ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h2 className="section-title">
            Initiate Confidential Governance Dialogue
          </h2>

          <p className="hero-sub">
            Suitable for leadership-level conversations where governance exposure,
            system accountability, or advisory alignment is under consideration.
          </p>

          <p className="cta-filter">
            We respond selectively based on structural relevance and advisory scope.
          </p>

          <p className="hero-micro">
            Independent. Structured. Advisory-only.
          </p>

        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Executive Contact",
          description:
            "Leadership-level communication channel for Michvi LLP.",
          url: "https://michvi.com/contact/",
          publisher: {
            "@type": "Organization",
            name: "Michvi LLP",
          },
        })}
      </Script>

    </main>
  );
}