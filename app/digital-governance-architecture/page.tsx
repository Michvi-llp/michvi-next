import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Digital Governance Architecture | Signal, Identity & AI Governance Framework",
  description:
    "Digital governance architecture examines how signals, identity, measurement, and automation shape accountability across enterprise and AI-driven systems. A structural governance perspective applied before reporting layers.",

  alternates: {
    canonical: "https://michvi.com/digital-governance-architecture/",
  },

  openGraph: {
    title: "Digital Governance Architecture | Michvi LLP",
    description:
      "A structural governance approach examining signals, identity, measurement, and automation before reporting layers.",
    url: "https://michvi.com/digital-governance-architecture/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function DigitalGovernanceArchitecturePage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Digital Governance Architecture
          </h1>

          <p className="hero-sub">
            Governance in digital systems is not established through reporting layers. It emerges from structural conditions defined earlier — across signals, identity, measurement, and automation.
          </p>

          <p className="hero-trigger">
            Most organizations recognize governance breakdown only after outcomes diverge.
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
            Digital governance is often approached through dashboards, compliance reviews, and reporting frameworks. These provide visibility into outcomes, but they do not define how those outcomes were shaped.
          </p>

          <p>
            By the time activity becomes visible in reporting environments, the structural conditions that determine interpretation have already been established.
          </p>

          <p>
            <strong>Digital governance architecture</strong> examines these earlier conditions — where system behavior is defined before it is observed.
          </p>

        </div>
      </section>

      {/* ================= CORE MODEL ================= */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "48px" }}>
            <h2 className="section-title">
              Core Structural Layers
            </h2>

            <p className="muted">
              Governance conditions emerge across interconnected system layers rather than isolated components.
            </p>
          </div>

          <div className="grid-2">

            <div className="card">
              <h3>Signal Generation</h3>
              <p>
                Signals represent the earliest form of system activity. They determine what can become observable within digital environments.
              </p>
              <Link href="/governance-insights/signal-generation-governance/" className="cta-link">
                Explore →
              </Link>
            </div>

            <div className="card">
              <h3>Identity Continuity</h3>
              <p>
                Identity connects activity across systems. Continuity determines whether relationships between events remain interpretable.
              </p>
              <Link href="/governance-insights/identity-continuity-digital-systems/" className="cta-link">
                Explore →
              </Link>
            </div>

            <div className="card">
              <h3>Measurement Architecture</h3>
              <p>
                Measurement defines how signals are structured into observable data. It shapes interpretation rather than simply reporting outcomes.
              </p>
              <Link href="/governance-insights/measurement-architecture-governance/" className="cta-link">
                Explore →
              </Link>
            </div>

            <div className="card">
              <h3>Automation Systems</h3>
              <p>
                Automation extends system behavior at scale. It amplifies existing structural conditions rather than correcting them.
              </p>
              <Link href="/governance-insights/automation-governance-architecture/" className="cta-link">
                Explore →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SHIFT ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2>From Reporting to Structural Governance</h2>

          <p>
            Traditional governance evaluates outcomes after systems are already operating. This creates a reactive model where inconsistencies are identified after they have been propagated.
          </p>

          <p>
            Digital governance architecture shifts this perspective earlier — toward the conditions that shape outcomes before they become visible.
          </p>

          <p>
            This shift is reflected in{" "}
            <Link href="/design-time-governance/" className="inline-link">
              design-time governance
            </Link>, where governance is applied before system behavior is extended through automation and reporting layers.
          </p>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section light">
        <div className="container narrow">

          <h2 className="center">What is Digital Governance Architecture?</h2>

          <p>
            Digital governance architecture refers to the structural conditions across signals, identity, measurement, and automation that define how digital systems behave before outcomes are reported.
          </p>

          <h3 className="center" style={{ marginTop: "40px" }}>
            Why is design-time governance important?
          </h3>

          <p>
            Design-time governance ensures structural risks are identified before systems scale, preventing downstream inconsistencies, compliance exposure, and unreliable decision-making.
          </p>

        </div>
      </section>

      {/* ================= CTA (FIXED) ================= */}
      <section
        className="hero-dark center"
        style={{ padding: "72px 24px 78px", marginTop: "0" }}
      >
        <div className="container">

          <h2 className="cta-title">
            Apply Structural Governance Perspective
          </h2>

          <p className="hero-sub">
            Structured evaluation of governance dependencies across signals, identity, and measurement — before systems scale or regulatory exposure increases.
          </p>

          <Link href="/request-assessment/" className="btn-primary">
            Request a Governance Dialogue
          </Link>

          <p className="hero-trigger">
            Suitable for organizations experiencing signal inconsistency, consent ambiguity, or identity fragmentation.
          </p>

          <p className="hero-micro">
            Independent. Structured. Advisory-only.
          </p>

        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="pillar-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Digital Governance Architecture",
          description:
            "A structural governance framework examining signals, identity, measurement, and automation.",
          url: "https://michvi.com/digital-governance-architecture/",
          publisher: {
            "@type": "Organization",
            name: "Michvi LLP",
          },
        })}
      </Script>

    </main>
  );
}