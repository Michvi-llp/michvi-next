import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { AssessmentForm } from "./AssessmentForm";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Request Digital Governance Assessment",
  description:
    "Submit a confidential request for an independent digital governance assessment examining structural risks across signals, identity, consent, and measurement systems.",

  alternates: {
    canonical: "/request-assessment/",
  },

  openGraph: {
    title: "Request Digital Governance Assessment | Michvi LLP",
    description:
      "Confidential intake for independent governance evaluation across enterprise digital systems.",
    url: "https://michvi.com/request-assessment/",
  },
  robots: {
    index: false,
    follow: false,
  },  
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function RequestAssessmentPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Request Digital Governance Assessment
          </h1>

          <p className="hero-sub">
            Submit a confidential request for independent structural evaluation
            across signal integrity, identity continuity, consent alignment,
            and measurement reliability.
          </p>

          {/* 🔥 CRITICAL — DECISION REDUCTION */}
          <p className="hero-micro">
            30–45 minute structured diagnostic · No system access · No obligation
          </p>

          <p className="hero-micro">
            Executive advisory · Independent review · Read-only · Confidential intake
          </p>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="section">
        <div className="container narrow center">

          <h2 style={{ marginBottom: "12px" }}>
            Assessment Request
          </h2>

          <p className="muted" style={{ marginBottom: "32px" }}>
            Provide high-level context. Suitable inquiries are reviewed at leadership level.
          </p>

          <div className="card" style={{ padding: "32px", textAlign: "left" }}>
            <AssessmentForm />
          </div>

          {/* 🔥 TRUST LOCK */}
          <p className="muted" style={{ marginTop: "16px", fontSize: "13px" }}>
            All submissions are treated as confidential governance inquiries.
          </p>

        </div>
      </section>

      {/* ================= WHAT HAPPENS ================= */}
      <section className="section light">
        <div className="container narrow">

          <h2 className="center">
            What Happens After Submission
          </h2>

          <div style={{ marginTop: "32px" }}>

            <div style={{ marginBottom: "20px" }}>
              <strong>1. Initial Review</strong>
              <p className="muted">
                Submission is reviewed to understand governance context, system
                structure, and evaluation relevance.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <strong>2. Structured Discussion</strong>
              <p className="muted">
                Where appropriate, a discussion is initiated to clarify
                architecture, governance exposure, and scope.
              </p>
            </div>

            <div>
              <strong>3. Engagement Determination</strong>
              <p className="muted">
                If aligned, a formal governance assessment engagement may be initiated.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SCOPE ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2>Assessment Scope</h2>

          <p>
            Structural evaluation across signal generation, identity continuity,
            consent alignment, measurement interpretation, and governance
            visibility within{" "}
            <Link href="/design-time-governance/" className="inline-link">
              design-time governance
            </Link>.
          </p>

        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="section light center">
        <div className="container narrow">

          <p className="muted">
            Advisory-only engagement · No production access · No configuration changes · No remediation execution
          </p>

          {/* 🔥 QUALIFICATION FILTER */}
          <p className="muted" style={{ marginTop: "12px" }}>
            Engagements are selectively initiated where structural governance alignment exists.
          </p>

        </div>
      </section>

      {/* ================= FINAL CTA (FIXED) ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2>Request a Governance Dialogue</h2>

          <p className="muted">
            If your governance exposure aligns with the conditions described, initiate a structured discussion.
          </p>

          {/* 🔥 STRONG CTA — NOT LINK */}
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact/" className="btn-dark">
              Executive Contact
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script id="request-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Request Digital Governance Assessment",
          description:
            "Confidential intake page for governance assessment inquiries.",
        })}
      </Script>

    </main>
  );
}
