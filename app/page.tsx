import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Michvi LLP — Structural Digital Governance Advisory",
  description:
    "Governance exposure in digital systems accumulates before it becomes visible.",
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

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-dark">
        <div className="container narrow center">

          <h1 className="hero-title">
            Governance exposure in digital systems accumulates before it becomes visible.
          </h1>

          <p className="hero-highlight">
            By the time it surfaces in reporting,
            <strong> it has already shaped structural risk. </strong>
          </p>

          <p className="hero-sub">
            Most regulated digital environments carry governance exposure that is structurally embedded.
          </p>

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

          {/* FIXED spacing */}
          <div style={{ marginTop: "28px" }}>
            <Link href="/digital-governance-assessment/" className="btn-primary">
              Request a Governance Dialogue
            </Link>
          </div>

          <p className="cta-filter">
            We respond when the condition aligns with our advisory scope.
          </p>

          <p className="hero-micro">
            Independent. Read-only. No system access. No vendor relationships.
          </p>

        </div>
      </section>

      {/* SIGNAL DEFINITIONS */}
      <section className="section light">
        <div className="container">

          {/* FIXED wrapper */}
          <div className="center" style={{ maxWidth: "720px", margin: "0 auto 40px" }}>
            <p className="section-intro">
              Governance conditions form across structural layers — often becoming visible only after exposure has accumulated.
            </p>
          </div>

          <div className="grid-2 signal-grid">

            <div className="card">
              <h3>Signal Integrity</h3>
              <p>Structural correspondence between outputs and commitments.</p>
              <p className="card-risk-line">Breaks when outputs cannot be verified.</p>
            </div>

            <div className="card">
              <h3>Identity Continuity</h3>
              <p>Persistence of identity logic across systems.</p>
              <p className="card-risk-line">Breaks when identity fragments.</p>
            </div>

            <div className="card">
              <h3>Consent Boundary</h3>
              <p>Where consent governs actual signal collection.</p>
              <p className="card-risk-line">Breaks when consent is not enforced.</p>
            </div>

            <div className="card">
              <h3>Governance Exposure</h3>
              <p>Accumulated structural gaps.</p>
              <p className="card-risk-line">Surfaces externally.</p>
            </div>

          </div>

          <div className="flow-block">
            <h2>Structural Governance Formation</h2>

            <div className="flow-line">
              <span>Signal Integrity</span>
              <span className="arrow">→</span>
              <span>Identity Continuity</span>
              <span className="arrow">→</span>
              <span>Consent Boundary</span>
              <span className="arrow">→</span>
              <span className="highlight">Governance Exposure</span>
            </div>
          </div>

        </div>
      </section>

      {/* RECOGNITION */}
      <section className="section">
        <div className="container narrow center">

          <p className="section-intro">
            Organizations initiate governance assessment during migration, expansion, AI adoption, or regulatory preparation.
          </p>

          <p className="recognition-line">
            If governance cannot be independently verified — the condition is already present.
          </p>

          <div className="authority-block">

            <h2>Governance Exposure is Not Downstream</h2>

            <p className="highlight-line">
              It does not originate in reporting.
            </p>

            <p>
              It is the outcome of unresolved structural conditions.
            </p>

            <p className="trust-line">
              Observable across real governance environments.
            </p>

          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="section light">
        <div className="container narrow center">

          <p>
            Structural patterns are observable across regulated environments.
          </p>

          <p>
            At that stage, governance exposure is no longer architectural —
            <strong> it is already under evaluation.</strong>
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link href="/governance-case-abstracts/" className="btn-dark">
              View Governance Case Abstracts →
            </Link>
          </div>

        </div>
      </section>

      {/* HOW IT APPEARS */}
      <section className="section">
        <div className="container narrow center">

          <h2>How This Condition Typically Appears</h2>

          <p className="muted">
            It becomes visible through secondary signals across systems.
          </p>

          {/* FIXED spacing */}
          <div style={{ marginTop: "32px" }}>

            <p><strong>Technology</strong></p>
            <p className="small muted">Signal inconsistencies, identity mismatch.</p>

            <p><strong>Marketing</strong></p>
            <p className="small muted">Performance variation without explanation.</p>

            <p><strong>Privacy</strong></p>
            <p className="small muted">Consent exists but not enforceable.</p>

            <p><strong>Board</strong></p>
            <p className="small muted">Governance assumed but not validated.</p>

          </div>

          <p style={{ marginTop: "28px" }}>
            <strong>Underlying structural condition is already present.</strong>
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container narrow center">

          <h2>Request a Governance Dialogue</h2>

          <p className="muted">
            Independent structural evaluation.
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link href="/digital-governance-assessment/" className="btn-dark">
              Request a Governance Dialogue →
            </Link>
          </div>

        </div>
      </section>

      {/* SCHEMA */}
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
        })}
      </Script>

    </main>
  );
}