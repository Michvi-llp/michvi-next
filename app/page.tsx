import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA (FINAL) */
/* ========================= */
export const metadata: Metadata = {
  title: "Michvi LLP — Structural Digital Governance Advisory",
  description:
    "Governance exposure in digital systems accumulates before it becomes visible. Independent structural governance advisory across Signal Integrity, Identity Continuity, Consent Boundary, and Governance Exposure.",

  alternates: {
    canonical: "https://michvi.com/",
  },

  openGraph: {
    title: "Michvi LLP — Structural Digital Governance Advisory",
    description:
      "Independent structural governance advisory across signal integrity, identity continuity, consent boundary, and governance exposure.",
    url: "https://michvi.com/",
    siteName: "Michvi LLP",
    type: "website",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function HomePage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Governance exposure in digital systems accumulates before it becomes visible.
          </h1>

          <p className="hero-highlight">
            By the time it surfaces in reporting, 
            <strong> it has already shaped structural risk. </strong>
          </p>

          <p className="hero-sub">
            Most regulated digital environments carry governance exposure that is structurally embedded — not operationally visible.
          </p>

          {/* SIGNAL TRIGGER STRIP */}
          <div className="signal-strip">
            <span>Signal Drift</span>
            <span>Identity Fragmentation</span>
            <span>Consent Misalignment</span>
          </div>

          <p className="hero-sub">
            These conditions originate in architecture — not in reporting.
          </p>
          
          <p className="hero-trigger">
            Most organizations recognize this only after external exposure begins.
          </p>
          {/* PRIMARY CTA */}
          <div style={{ marginTop: "28px" }}>
            <Link href="/digital-governance-assessment/" className="btn-primary">
              Request a Governance Dialogue
            </Link>
          </div>

          {/* QUALIFICATION FILTER */}
          <p className="cta-filter">
            We respond when the condition described aligns with our advisory scope.
          </p>

          {/* AUTHORITY LINE */}
          <p className="hero-micro">
            Independent. Read-only. Structurally focused. No system access. No vendor relationships.
          </p>

        </div>
      </section>

      {/* ================= SIGNAL DEFINITIONS ================= */}
        <section className="section light">
          <div className="container">

            {/* RECOGNITION BRIDGE (CRITICAL) */}
            <div className="center narrow" style={{ marginBottom: "48px" }}>
              <p className="section-intro">
                Governance conditions do not appear at once.  
                They form across structural layers — often becoming visible only after exposure has already accumulated.
              </p>
            </div>

            {/* SIGNAL GRID */}
            <div className="grid-2 signal-grid">

              <div className="card">
                <h3>Signal Integrity</h3>
                <p>
                  The structural correspondence between governance outputs and governance commitments.
                </p>
                <p className="card-risk-line">
                  Breaks when outputs cannot be independently verified.
                </p>
              </div>

              <div className="card">
                <h3>Identity Continuity</h3>
                <p>
                  The persistence of identity logic across systems and platforms.
                </p>
                <p className="card-risk-line">
                  Breaks when identity logic fragments across systems.
                </p>
              </div>

              <div className="card">
                <h3>Consent Boundary</h3>
                <p>
                  The layer where consent governs actual signal collection — not documentation.
                </p>
                <p className="card-risk-line">
                  Breaks when consent does not govern actual signal collection.
                </p>
              </div>

              <div className="card">
                <h3>Governance Exposure</h3>
                <p>
                  The accumulated structural gaps that become visible externally before internal resolution.
                </p>
                <p className="card-risk-line">
                  Surfaces when accumulated gaps become externally visible.
                </p>
              </div>

            </div>

            {/* STRUCTURAL FLOW (UPGRADED) */}
            <div className="flow-block">

              <h2>Structural Governance Formation</h2>

              <div className="flow-line">
                <span>Signal Integrity</span>
                <span>→</span>
                <span>Identity Continuity</span>
                <span>→</span>
                <span>Consent Boundary</span>
                <span>→</span>
                <span className="highlight">Governance Exposure</span>
              </div>

            </div>

          </div>
        </section>


      {/* ================= RECOGNITION ================= */}
      <section className="section center">

        <div className="container narrow">

          {/* RECOGNITION BLOCK */}
          <p className="section-intro">
            Organizations typically initiate governance assessment during platform migrations, ecosystem expansion, AI-driven decision adoption, or regulatory preparation.
          </p>

          <p className="recognition-line">
            Recognition. If your leadership team cannot independently verify whether governance signals correspond to governance commitments — this condition is already present.
          </p>

        </div>

        {/* CORE AUTHORITY BLOCK */}
        <div className="container narrow authority-block">

          <h2>
            Governance Exposure is Not a Downstream Condition
          </h2>

          <p className="highlight-line">
            Governance exposure does not originate in reporting.
          </p>

          <p>
            It is the structural outcome of accumulated unresolved conditions across Signal Integrity,
          </p>

          <p>
            Identity Continuity, and Consent Boundary.
          </p>

          <p>
            These conditions define the difference between governance that is documented and governance that is enforceable in practice.
          </p>

          <p className="trust-line">
            These conditions are not theoretical. They are observable across real governance environments where system behavior diverges from stated commitments.
          </p>

        </div>
        {/* ================= GOVERNANCE FLOW ================= */}

        <div className="governance-flow-wrap">

          <div className="divider" />

          <div className="governance-flow-block">

            <div className="governance-flow">
              <span>Signal Integrity</span>
              <span className="arrow">→</span>

              <span>Identity Continuity</span>
              <span className="arrow">→</span>

              <span>Consent Boundary</span>
              <span className="arrow">→</span>

              <span className="highlight">Governance Exposure</span>
            </div>

            <p className="flow-line-note">
              By this stage, exposure is no longer architectural — it is already under evaluation.
            </p>

          </div>

        </div>
      </section>


      {/* ================= TRUST COMPRESSION ================= */}
      <section className="section light center">
        <div className="container narrow">

          <p>
            Structural patterns in Signal Integrity drift, Identity Continuity fragmentation, and Consent Boundary misalignment are observable across regulated digital environments.
          </p>

          <p>
            Most organizations initiate this conversation after external scrutiny has already begun.
            <br />
            <strong>At that stage, governance exposure is no longer architectural — it is already under evaluation.</strong>
          </p>

          <Link href="/governance-case-abstracts/" className="cta-link">
            View Governance Case Abstracts →
          </Link>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2>Request a Governance Dialogue</h2>

          <p className="muted">
            Independent structural evaluation of Signal Integrity, Identity Continuity, Consent Boundary, and Governance Exposure.
          </p>

          <Link href="/digital-governance-assessment/" className="cta-link">
            Request a Governance Dialogue →
          </Link>

        </div>
      </section>


      {/* ================= SCHEMA ================= */}
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Michvi LLP",
          url: "https://michvi.com",
          description:
            "Independent structural digital governance advisory focused on signal integrity, identity continuity, consent boundary, and governance exposure.",
        })}
      </Script>

    </main>
  );
}