import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Digital Governance Assessment",
  description:
    "Independent structural evaluation of digital systems to identify governance, consent, and accountability gaps before reporting layers and automation scale.",

  alternates: {
    canonical: "/digital-governance-assessment/",
  },

  openGraph: {
    title: "Digital Governance Assessment | Michvi LLP",
    description:
      "Independent governance evaluation across signals, identity, measurement, and automation.",
    url: "https://michvi.com/digital-governance-assessment/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function DigitalGovernanceAssessmentPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Digital Governance Assessment
          </h1>

          <p className="hero-sub">
            Independent structural evaluation of digital systems to identify governance, consent, and accountability gaps before reporting layers and automation scale system behavior.
          </p>

          <p className="hero-trigger">
            Most organizations recognize these conditions only after external exposure begins.
          </p>

          <div style={{ marginTop: "28px" }}>
            <Link href="/request-assessment/" className="btn-primary">
              Request a Governance Dialogue
            </Link>
          </div>

          <p className="cta-filter">
            We respond when the condition described aligns with our advisory scope.
          </p>

          <p className="hero-micro">
            Read-only · Architecture-focused · Executive-level outputs
          </p>

        </div>
      </section>


      {/* ================= PROBLEM ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2>Governance Issues Rarely Begin Where They Are Observed</h2>

          <p>
            Most governance discussions begin with dashboards, compliance reviews, or post-incident analysis. By that stage, system behavior has already been shaped by underlying structural conditions.
          </p>

          <p>
            Reporting environments surface outcomes — not the conditions that produced them.
          </p>

          <p>
            The Digital Governance Assessment examines these earlier conditions within{" "}
            <Link href="/digital-governance-architecture/" className="inline-link">
              digital governance architecture
            </Link>, where governance exposure originates before it becomes visible.
          </p>

        </div>
      </section>


      {/* ================= WHAT WE EXAMINE ================= */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "48px" }}>
            <h2 className="section-title">
              Structural Evaluation Areas
            </h2>
          </div>

          <div className="grid-2">

            <div className="card">
              <h3>Signal Integrity</h3>
              <p>
                How system activity is generated and whether signals remain structurally consistent across environments.
              </p>
            </div>

            <div className="card">
              <h3>Identity Continuity</h3>
              <p>
                Whether identity relationships remain coherent across systems, influencing attribution and accountability.
              </p>
            </div>

            <div className="card">
              <h3>Consent Alignment</h3>
              <p>
                How consent conditions influence system behavior beyond interface-level representation.
              </p>
            </div>

            <div className="card">
              <h3>Measurement Interpretation</h3>
              <p>
                How activity is structured into observable data and whether reporting reflects underlying system reality.
              </p>
            </div>

            <div className="card">
              <h3>Automation Behavior</h3>
              <p>
                How automated systems extend structural conditions across campaigns, reporting, and decision environments.
              </p>
            </div>

            <div className="card">
              <h3>Platform Dependencies</h3>
              <p>
                Structural exposure arising from platform defaults, integrations, and system-level assumptions.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= WHY TIMING ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2>Why Timing Matters</h2>

          <p>
            Once signals are captured, data is structured, and automation is applied, structural inconsistencies become embedded across systems.
          </p>

          <p>
            At that stage, governance becomes reactive.
          </p>

          <p>
            Early-stage evaluation reduces the amplification of structural weaknesses into regulatory, operational, and executive-level exposure.
          </p>

        </div>
      </section>


      {/* ================= WHO ================= */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "40px" }}>
            <h2 className="section-title">
              Executive Stakeholders
            </h2>
          </div>

          <div className="grid-2">

            <div className="card">
              <h3>Chief Digital Officer</h3>
              <p>Oversight of enterprise digital architecture and governance alignment.</p>
            </div>

            <div className="card">
              <h3>Chief Data Officer</h3>
              <p>Responsibility for data governance and reporting accountability.</p>
            </div>

            <div className="card">
              <h3>CIO / CTO</h3>
              <p>Platform architecture and system-level governance exposure.</p>
            </div>

            <div className="card">
              <h3>Risk & Compliance Leadership</h3>
              <p>Regulatory positioning and accountability across digital systems.</p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= OUTPUT ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2>What You Receive</h2>

          <p>
            A structured executive governance memorandum outlining structural exposure, system dependencies, and governance considerations across digital environments.
          </p>

          <p className="muted">
            This is an independent evaluation — not an implementation engagement.
          </p>

        </div>
      </section>


      {/* ================= POSITIONING ================= */}
      <section className="section center">
        <div className="container narrow">

          <p className="muted">
            No system access · No configuration changes · No vendor involvement · No remediation execution
          </p>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section
        className="hero-dark center"
        style={{ padding: "70px 24px 70px", marginTop: "-40px" }}
      >
        <div className="container">

          <h2 className="cta-title">
            Initiate Confidential Governance Assessment
          </h2>

          <p className="hero-sub">
            Structured architectural governance evaluation for regulated, AI-enabled, and high-accountability digital environments.
          </p>

          <Link href="/request-assessment/" className="btn-primary">
            Request a Governance Dialogue
          </Link>

          <p className="hero-trigger">
            Suitable for organizations experiencing signal inconsistency, consent ambiguity, or identity fragmentation.
          </p>

          <p className="hero-micro">
            Applied before systems become operationally or regulatorily consequential.
          </p>

          <p className="hero-micro">
            Independent. Structured. Advisory-only.
          </p>

        </div>
      </section>


      {/* ================= SCHEMA ================= */}
      <Script
        id="assessment-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Governance Assessment",
          provider: {
            "@type": "Organization",
            name: "Michvi LLP",
          },
          description:
            "Independent governance evaluation across digital system architecture.",
        })}
      </Script>

    </main>
  );
}