import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Structural Governance Model",
  description:
    "A conceptual framework for evaluating governance conditions across signals, identity, measurement, and automation within digital systems.",

  alternates: {
    canonical: "/governance-model/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function GovernanceModelPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Structural Governance Model
          </h1>

          <p className="hero-sub">
            Governance exposure in digital systems does not emerge from isolated events. It reflects structural conditions established earlier across system design.
          </p>

          <p className="hero-trigger">
            Most organizations attempt to resolve governance issues after they appear in reporting — when structural conditions are already embedded.
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
            Independent. Read-only. Structurally focused.
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section light center">
        <div className="container narrow">

          <p>
            Digital systems operate through interconnected components that shape how activity is captured, interpreted, and acted upon.
          </p>

          <p>
            Governance outcomes are influenced by these structural conditions long before they appear in reporting environments or operational workflows.
          </p>

          <p>
            The <strong>Structural Governance Model</strong> provides a conceptual lens for examining these conditions within{" "}
            <Link href="/digital-governance-architecture/" className="inline-link">
              digital governance architecture
            </Link>.
          </p>

        </div>
      </section>

      {/* ================= MODEL DIMENSIONS ================= */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "48px" }}>
            <h2 className="section-title">
              Governance Evaluation Dimensions
            </h2>

            <p className="muted">
              Conceptual areas for executive-level evaluation. These do not represent implementation models or system design instructions.
            </p>
          </div>

          <div className="grid-2">

            <div className="card">
              <h3>Architectural Context</h3>
              <p>
                Examination of system structure, sequencing, and dependencies before activation within a{" "}
                <Link href="/design-time-governance/" className="inline-link">
                  design-time governance perspective
                </Link>.
              </p>
            </div>

            <div className="card">
              <h3>Identity & Signal Conditions</h3>
              <p>
                High-level consideration of identity continuity and signal generation across distributed environments.
              </p>
            </div>

            <div className="card">
              <h3>Consent & Regulatory Context</h3>
              <p>
                Alignment between consent conditions, regulatory expectations, and system-level behavior.
              </p>
            </div>

            <div className="card">
              <h3>Measurement & Visibility</h3>
              <p>
                Evaluation of how activity becomes visible and how reporting reflects underlying system conditions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="section light">
        <div className="container">

          <div className="center" style={{ marginBottom: "48px" }}>
            <h2 className="section-title">
              Core Governance Principles
            </h2>
          </div>

          <div className="grid-2">

            <div className="card">
              <h3>Pre-Deployment Perspective</h3>
              <p>
                Governance conditions are more effectively evaluated before systems operate at scale.
              </p>
            </div>

            <div className="card">
              <h3>Structural Consistency</h3>
              <p>
                Alignment across signals, identity, and measurement influences downstream interpretability.
              </p>
            </div>

            <div className="card">
              <h3>Regulatory Alignment</h3>
              <p>
                Governance positioning reflects alignment with evolving regulatory expectations.
              </p>
            </div>

            <div className="card">
              <h3>Executive Visibility</h3>
              <p>
                Structural clarity supports informed decision-making and accountability at leadership level.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FLOW ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2>Conceptual Evaluation Flow</h2>

          <p className="muted">
            Indicative stages for understanding governance conditions. Not a defined methodology or operational sequence.
          </p>

          <div style={{ marginTop: "28px" }} className="flow-line">

            <span>Architectural Context</span>
            <span className="arrow">→</span>

            <span>Structural Observation</span>
            <span className="arrow">→</span>

            <span className="highlight">Executive Consolidation</span>

          </div>

        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="section light center" style={{ paddingBottom: "48px" }}>
        <div className="container narrow">

          <h2>Independent Governance Perspective</h2>

          <p>
            Michvi operates as an independent advisory perspective, focusing on structural conditions before they are reflected in reporting or operational systems.
          </p>

          <p>
            Engagements are executive-facing, confidential, and advisory-only. Evaluation depth and analytical approach remain proprietary.
          </p>

          <p className="muted" style={{ marginTop: "24px" }}>
            No system access · No configuration changes · No vendor involvement · No remediation execution
          </p>

        </div>
      </section>

      {/* ================= CTA (FINAL — CHARTER ALIGNED) ================= */}
      <section
        className="hero-dark center"
        style={{ padding: "72px 24px 78px", marginTop: "0" }}
      >
        <div className="container">

          <h2 className="cta-title">
            Apply Structural Governance Evaluation
          </h2>

          <p className="hero-sub">
            Structured evaluation of governance conditions across signals, identity, and measurement — before systems scale or governance exposure becomes externally visible.
          </p>

          <Link href="/request-assessment/" className="btn-primary">
            Request a Governance Dialogue
          </Link>

          <p className="hero-trigger">
            Suitable for organizations experiencing signal inconsistency, consent ambiguity, or fragmented identity systems.
          </p>

          <p className="hero-micro">
            Independent. Structured. Advisory-only.
          </p>

        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="model-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Structural Governance Model",
          description:
            "Conceptual governance framework examining structural conditions across digital systems.",
        })}
      </Script>

    </main>
  );
}