import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Digital Governance Glossary & FAQ",
  description:
    "Definitions and explanations of key concepts in digital governance including signal integrity, identity continuity, consent architecture, and governance exposure.",
  alternates: {
    canonical: "/governance-glossary/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function GovernanceGlossaryPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Digital Governance Glossary & FAQ
          </h1>

          <p className="hero-sub">
            Foundational concepts and structured explanations for understanding governance conditions across digital systems.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="section light center">
        <div className="container narrow">

          <p>
            Digital governance terminology is often interpreted inconsistently across organizations, platforms, and regulatory contexts.
          </p>

          <p>
            This glossary defines core structural concepts used to examine how governance conditions emerge across signals, identity, consent, and measurement environments.
          </p>

          <p className="muted">
            These definitions are conceptual and do not represent implementation frameworks or system design instructions.
          </p>

        </div>
      </section>

      {/* GLOSSARY */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "40px" }}>
            <h2 className="section-title">Core Governance Concepts</h2>
          </div>

          <div className="grid-2">

            {glossary.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.term}</h3>
                <p>{item.definition}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="section light">
        <div className="container narrow">

          <h2 className="section-title center">
            Frequently Asked Questions
          </h2>

          <div style={{ marginTop: "32px" }}>

            {faq.map((item, i) => (
              <div key={i} style={{ marginBottom: "28px" }}>
                <strong>{item.q}</strong>
                <p className="muted">{item.a}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section className="section center">
        <div className="container narrow">

          <p className="muted">
            These concepts support structured understanding of governance conditions and inform{" "}
            <Link href="/digital-governance-assessment/" className="inline-link">
              digital governance assessments
            </Link>{" "}
            across enterprise environments.
          </p>

        </div>
      </section>

      {/* CTA — SOFT (NOT AGGRESSIVE) */}
      <section
        className="hero-dark center"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container narrow">

          <h2 className="cta-title">
            Explore Governance Conditions in Your Environment
          </h2>

          <p className="hero-sub">
            Independent structural evaluation of signal integrity, identity continuity,
            consent alignment, and governance exposure across digital systems.
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
        id="glossary-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        })}
      </Script>

    </main>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const glossary = [
  {
    term: "Signal Integrity",
    definition:
      "The structural consistency between system activity and the signals used to represent that activity within digital environments.",
  },
  {
    term: "Identity Continuity",
    definition:
      "The persistence of identity relationships across systems, platforms, and interaction layers.",
  },
  {
    term: "Consent Architecture",
    definition:
      "The structural layer where consent conditions govern how signals are generated and processed, beyond interface-level representation.",
  },
  {
    term: "Governance Exposure",
    definition:
      "The accumulation of structural gaps that become externally visible before internal resolution.",
  },
  {
    term: "Measurement Architecture",
    definition:
      "The system through which signals are structured into observable data and interpreted within reporting environments.",
  },
  {
    term: "Design-Time Governance",
    definition:
      "The evaluation of governance conditions before systems operate at scale or influence reporting and automation layers.",
  },
];

/* ========================= */

const faq = [
  {
    q: "What is digital governance in simple terms?",
    a: "Digital governance refers to how digital systems behave in relation to accountability, consent, identity, and measurement — before outcomes appear in reports or dashboards.",
  },
  {
    q: "Why do governance issues not appear immediately?",
    a: "Governance conditions are structural. They accumulate across systems and typically become visible only after exposure has already formed.",
  },
  {
    q: "Is governance the same as compliance?",
    a: "No. Compliance reflects adherence to rules, while governance reflects how systems structurally behave in relation to those rules.",
  },
  {
    q: "Why is design-time governance important?",
    a: "Because governance conditions originate during system design. Evaluating them early prevents downstream exposure across reporting, automation, and regulatory environments.",
  },
  {
    q: "Do these concepts require technical implementation?",
    a: "No. These are conceptual frameworks used to understand governance conditions, not implementation instructions.",
  },
];