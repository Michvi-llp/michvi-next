import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* DATA */
/* ========================= */
const cases = [
  {
    title: "Case 01 — Fragmented Identity Continuity",
    desc: "Cross-domain journeys appeared intact in executive dashboards, yet structural analysis revealed fragmented identity persistence across sub-domains and attribution layers.",
    risk: "Attribution distortion and executive reporting inconsistency",
  },
  {
    title: "Case 02 — Reactive Consent Enforcement",
    desc: "Consent enforcement mechanisms were implemented after signal activation, exposing environments where data collection began prior to structural consent validation.",
    risk: "Regulatory defensibility gap and audit exposure",
  },
  {
    title: "Case 03 — Attribution Structure Misalignment",
    desc: "Attribution frameworks assumed signal integrity while event taxonomy and identity stitching showed structural fragmentation.",
    risk: "Financial reporting distortion and strategic misallocation",
  },
  {
    title: "Case 04 — AI Signal Dependency Exposure",
    desc: "AI optimization models depended on upstream data pipelines that had not undergone independent signal validation.",
    risk: "Model bias and decision system distortion",
  },
  {
    title: "Case 05 — Cross-Platform Signal Loss",
    desc: "Signal continuity between analytics and marketing ecosystems revealed inconsistent measurement alignment.",
    risk: "Attribution discontinuity and campaign instability",
  },
  {
    title: "Case 06 — Event Taxonomy Drift",
    desc: "Event naming evolved across teams without centralized governance oversight.",
    risk: "Long-term analytics degradation and reporting inconsistency",
  },
  {
    title: "Case 07 — Attribution Model Overconfidence",
    desc: "Executive dashboards relied on attribution models assuming reliable upstream signals.",
    risk: "Strategic misallocation of marketing investments",
  },
  {
    title: "Case 08 — Platform Default Data Exposure",
    desc: "Default platform behaviors activated data capture prior to governance validation.",
    risk: "Compliance exposure and governance blind spots",
  },
];

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Governance Case Abstracts | Digital Governance Risk Observations",
  description:
    "Sanitized governance case abstracts illustrating structural risks across signal integrity, identity continuity, consent enforcement, attribution, and AI-driven systems.",
  alternates: {
    canonical: "https://michvi.com/governance-case-abstracts/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function GovernanceCaseAbstractsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-dark center">
        <div className="container narrow">
          <h1 className="hero-title">Governance Case Abstracts</h1>

          <p className="hero-sub">
            Structural governance observations across regulated digital ecosystems.
          </p>

          <p className="hero-sub">
            Governance exposure often exists before it becomes visible in reporting environments.
          </p>

          <p className="hero-trigger">
            Most organizations recognize these conditions only after external scrutiny begins.
          </p>

          <p className="hero-note">
            Sanitized architectural insights derived from enterprise environments.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section light">
        <div className="container narrow">
          <p>
            <strong>Digital governance case abstracts</strong> illustrate structural risks identified within complex digital ecosystems — spanning signal integrity, identity continuity, consent enforcement, attribution integrity, and AI-driven decision systems.
          </p>

          <p>
            These observations originate from independent architectural oversight across enterprise environments, where governance conditions are often embedded before they are visible in reporting layers.
          </p>

          <p className="muted">
            Frequently observed across multi-product platforms, AI-enabled systems, and regulated digital ecosystems.
          </p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="section">
        <div className="container narrow">
          <h2 className="section-title">What These Abstracts Represent</h2>

          <p>
            These are not operational case studies. They are <strong>governance case abstracts</strong> designed for executive-level discussion — sanitized to preserve confidentiality.
          </p>

          <p>
            Structural risks often exist beneath stable dashboards — across consent enforcement, identity relationships, and measurement alignment.
          </p>

          <p>
            See{" "}
            <Link href="/design-time-governance/" className="inline-link">
              Design-Time Governance
            </Link>{" "}
            or{" "}
            <Link href="/request-assessment/" className="inline-link">
              initiate an assessment
            </Link>.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="section">
        <div className="container narrow">
          <h2 className="section-title">Governance Observation Library</h2>

          <p className="muted center" style={{ marginBottom: "32px" }}>
            Representative structural risks across enterprise systems.
          </p>

          <div className="case-list">
            {cases.map((item, i) => (
              <div key={i} className="case-card">
                <div className="case-head">
                  <span className="case-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                </div>

                <p className="case-desc">{item.desc}</p>

                <p className="case-risk">
                  <strong>Governance Risk:</strong> {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED — HARD ISOLATED */}
      <section
        className="section light center"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          marginBottom: 0,
        }}
      >
        <div className="container narrow">
          <h2 className="section-title">Explore Governance Insights</h2>

          <p>
            Structured perspectives on governance patterns across digital and AI-driven systems.
          </p>

          <Link href="/governance-insights/" className="cta-link">
            Explore Governance Insights →
          </Link>
        </div>
      </section>

      {/* CTA — COMPLETELY ISOLATED */}
      <section
        className="hero-dark center"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          marginTop: 0,
          borderTop: "1px solid rgba(255,255,255,0.06)", // visual separator (optional but clean)
        }}
      >
        <div className="container narrow">

          <h2 className="section-title">
            Initiate Confidential Governance Review
          </h2>

          <p className="hero-sub">
            Independent structural evaluation of signal integrity, identity continuity,
            consent enforcement, and governance exposure across enterprise systems.
          </p>

          <Link href="/request-assessment/" className="btn-primary">
            Request a Governance Dialogue
          </Link>

          <p className="cta-filter">
            We respond when the condition described aligns with our advisory scope.
          </p>

          <p className="hero-micro">
            Independent. Read-only. Structurally focused.
          </p>

        </div>
      </section>

      {/* SCHEMA */}
      <Script
        id="case-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Governance Case Abstracts",
          description:
            "Sanitized governance observations illustrating structural risks across digital systems.",
          url: "https://michvi.com/governance-case-abstracts/",
        })}
      </Script>

    </main>
  );
}