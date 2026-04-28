import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Digital Governance Insights",
  description:
    "Explore digital governance insights across signal integrity, consent architecture, identity continuity, and measurement reliability in enterprise digital systems.",
  alternates: {
    canonical: "/governance-insights/",
  },
  openGraph: {
    title: "Digital Governance Insights | Michvi LLP",
    description:
      "Structured perspectives on governance architecture, signal systems, and digital accountability.",
    url: "https://michvi.com/governance-insights/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function GovernanceInsightsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-dark center">
        <div className="container narrow">
          <h1 className="hero-title">Digital Governance Insights</h1>

          <p className="hero-sub">
            Structural perspectives on governance architecture, signal systems, and digital accountability.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* INTRO */}
      <section className="section light center">
        <div className="container narrow">

          <p>
            Governance Insights examine digital systems through the lens of architectural accountability within{" "}
            <Link href="/digital-governance-architecture/" className="inline-link">
              digital governance architecture
            </Link>.
          </p>

          <p>
            These perspectives explore how signals, identity continuity, consent conditions, and measurement environments shape outcomes before reporting layers interpret them.
          </p>

          <p>
            This aligns with{" "}
            <Link href="/design-time-governance/" className="inline-link">
              design-time governance
            </Link>, where governance is evaluated before systems operate at scale.
          </p>

          <p className="muted">
            Governance is not a reporting function. It is an architectural discipline.
          </p>

        </div>
      </section>

      {/* EXTERNAL */}
      <section className="section light-alt center">
        <div className="container narrow">

          <p className="label">External Publications</p>

          {externalPosts.map((post, i) => (
            <div key={i} className="external-block">
              <h2>{post.title}</h2>
              <p>{post.desc}</p>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Read on Medium →
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* INTERNAL */}
      <section className="section">
        <div className="container">

          <div className="center" style={{ marginBottom: "44px" }}>
            <h2 className="section-title">
              Governance Architecture Insights
            </h2>

            <p className="muted">
              Core structural dimensions shaping governance across digital environments.
            </p>
          </div>

          <div className="grid-2">
            {insights.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <Link href={item.link} className="cta-link">
                  Read Insight →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* POSITIONING */}
      <section
        className="section light center"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container narrow">

          <p className="muted">
            These insights support structured understanding of governance architecture and inform{" "}
            <Link href="/digital-governance-assessment/" className="inline-link">
              digital governance assessments
            </Link>{" "}
            for regulated environments.
          </p>

        </div>
      </section>

      {/* 🔥 FINAL CTA — LOCKED SYSTEM */}
      <section
        className="hero-dark center"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          marginTop: 0,
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
        id="insights-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Digital Governance Insights",
          url: "https://michvi.com/governance-insights/",
        })}
      </Script>

    </main>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const externalPosts = [
  {
    title: "Governance Begins Before Data Exists",
    desc: "Governance begins where signals are formed.",
    link: "https://medium.com/@shikharjha/governance-begins-before-data-exists-d44dd75ad32d",
  },
  {
    title: "Why Digital Governance Often Fails at the Signal Layer",
    desc: "Governance frameworks miss signal generation layers.",
    link: "https://medium.com/@shikharjha/why-digital-governance-often-fails-at-the-signal-layer-8112a55fdab9",
  },
  {
    title: "When Signals Break, Systems Still Run",
    desc: "Signal fragmentation alters system reality.",
    link: "https://medium.com/@shikharjha/when-signals-break-systems-still-run-but-reality-starts-to-drift-2cc5d2d92d5f",
  },
];

const insights = [
  {
    title: "Architecture as Accountability Infrastructure",
    desc: "Accountability is shaped before reporting layers.",
    link: "/governance-insights/architecture-as-accountability-infrastructure/",
  },
  {
    title: "Consent Architecture vs Consent Interfaces",
    desc: "Interfaces signal compliance — architecture determines integrity.",
    link: "/governance-insights/consent-architecture-vs-consent-interfaces/",
  },
  {
    title: "Identity Continuity in Distributed Digital Systems",
    desc: "Identity consistency shapes accountability across systems.",
    link: "/governance-insights/identity-continuity-digital-systems/",
  },
  {
    title: "Measurement Architecture as Governance Surface",
    desc: "Measurement environments shape interpretation.",
    link: "/governance-insights/measurement-architecture-governance/",
  },
  {
    title: "Platform Defaults as Hidden Governance Decisions",
    desc: "Defaults define behavior before governance is applied.",
    link: "/governance-insights/platform-defaults-governance/",
  },
  {
    title: "Signal Generation Before Data Persistence",
    desc: "Signals define what data can become.",
    link: "/governance-insights/signal-generation-governance/",
  },
  {
    title: "Automation Amplifies Governance Design Choices",
    desc: "Automation scales structural assumptions.",
    link: "/governance-insights/automation-governance-architecture/",
  },
  {
    title: "Design-Time Governance in AI-Integrated Systems",
    desc: "AI systems reflect upstream system conditions.",
    link: "/governance-insights/design-time-governance-ai-systems/",
  },
];