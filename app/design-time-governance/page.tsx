import Link from "next/link";
import Head from "next/head";

export default function DesignTimeGovernancePage() {
  return (
    <>
      <Head>
        <title>Design-Time Governance Oversight | Digital Governance Advisory</title>

        <meta
          name="description"
          content="Independent design-time governance oversight for digital systems. Evaluate signal integrity, consent enforcement, identity logic, and AI exposure before deployment."
        />

        <meta
          name="keywords"
          content="Design time governance, digital governance architecture, signal integrity, consent governance, AI governance, attribution governance, DPDP compliance, governance advisory"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://michvi.com/design-time-governance-oversight"
        />
      </Head>

      <main>

        {/* HERO */}
        <section className="hero-dark center">
          <div className="container narrow">

            <h1 className="hero-title">
              Design-Time Governance<br />Oversight
            </h1>

            <p className="hero-sub">
              Governance failures rarely originate in production.  
              They begin in architectural decisions within the{" "}
              <Link href="/governance-model/" className="inline-link">
                structural governance model
              </Link>{" "}
              operating inside a broader{" "}
              <Link href="/digital-governance-architecture/" className="inline-link">
                digital governance architecture
              </Link>.
            </p>

            <p className="hero-note">
              Identity, system behavior, and consent structures shape exposure long before deployment.
            </p>

            <p className="hero-micro">
              Applied across analytics, attribution, and AI-driven systems — where governance is often introduced too late.
            </p>

          </div>
        </section>


        {/* WHY */}
        <section className="section center">
          <div className="container narrow">

            <h2 className="section-title">
              Why Governance Must Begin at Design
            </h2>

            <p>
              Structural signal drift, fragmented identity logic, attribution discontinuity, and consent misalignment originate during system design — not after deployment.
            </p>

            <p>
              As systems scale, these conditions become embedded.
            </p>

            <p>
              Correction becomes complex, expensive, and often incomplete.
            </p>

            <p className="hero-note">
              Design-time governance provides visibility into structural conditions before systems become operationally or regulatorily consequential.
            </p>

          </div>
        </section>


        {/* AREAS */}
        <section className="section light">
          <div className="container">

            <h2 className="section-title center">
              Core Areas of Design-Time Oversight
            </h2>

            <div className="grid-2">

              <div className="card">
                <h3>Signal Architecture Integrity</h3>
                <p>
                  Event taxonomy coherence, identity continuity, and cross-domain persistence structures define whether measurement remains reliable.
                </p>
                <Link href="/governance-insights/signal-generation-governance/" className="inline-link">
                  Explore signal layer →
                </Link>
              </div>

              <div className="card">
                <h3>Consent Enforcement Model</h3>
                <p>
                  Governance hierarchy, regulatory alignment, and enforcement conditions must be defined before activation.
                </p>
                <Link href="/governance-insights/consent-architecture/" className="inline-link">
                  Explore consent architecture →
                </Link>
              </div>

              <div className="card">
                <h3>Governance Visibility Controls</h3>
                <p>
                  Structural blind spots across measurement, reporting, and escalation pathways impact auditability.
                </p>
                <Link href="/governance-insights/platform-defaults-governance/" className="inline-link">
                  Explore hidden defaults →
                </Link>
              </div>

              <div className="card">
                <h3>AI & Attribution Exposure</h3>
                <p>
                  AI systems amplify upstream structural conditions, including attribution fragmentation and signal bias.
                </p>
                <Link href="/governance-insights/design-time-ai-governance/" className="inline-link">
                  Explore AI governance →
                </Link>
              </div>

            </div>

          </div>
        </section>


        {/* OUTPUT */}
        <section className="section center">
          <div className="container narrow">

            <h2 className="section-title">
              Governance Briefing Output
            </h2>

            <p>
              Findings are structured for executive and board-level circulation.
            </p>

            <p>
              Optional alignment for regulatory defensibility documentation is provided where required.
            </p>

            <p className="hero-note">
              Designed to provide visibility into governance architecture before activation or scale.
            </p>

          </div>
        </section>


        {/* IP SAFE */}
        <section className="section light center">
          <div className="container narrow">

            <h2 className="section-title">
              Independent & Confidential
            </h2>

            <p>
              All governance evaluations are conducted at a structural level without accessing or modifying production systems.
            </p>

            <p>
              Observations are derived from architectural patterns and system behavior — without exposing proprietary methodologies or internal analytical frameworks.
            </p>

            <p className="muted small">
              Evaluation methodology and analytical depth remain proprietary and are not disclosed in public or external documentation.
            </p>

          </div>
        </section>


        {/* RELATED */}
        <section className="section center">
          <div className="container narrow">

            <h2 className="section-title">
              Related Governance Perspectives
            </h2>

            <p className="muted">
              Explore how governance conditions emerge across digital systems.
            </p>

            <Link href="/governance-insights/" className="cta-link">
              Explore Governance Insights →
            </Link>

            <p className="mt">
              Or review sanitized{" "}
              <Link href="/governance-case-abstracts/" className="inline-link">
                governance case abstracts
              </Link>.
            </p>

          </div>
        </section>


        {/* CTA — FIXED (NO GAP, NO FLOATING) */}
        <section
          className="hero-dark center"
          style={{ padding: "70px 24px 70px", marginTop: "-40px" }}
        >
          <div className="container">

            <h2 className="cta-title">
              Initiate Confidential Design-Time Governance Review
            </h2>

            <p className="hero-sub">
              Structured architectural governance evaluation for regulated, AI-enabled, and high-accountability digital environments.
            </p>

            <Link href="/request-assessment" className="btn-primary">
              Request a Governance Dialogue
            </Link>

            <p className="hero-micro">
              Applied before systems become operationally or regulatorily consequential.
            </p>

            <p className="hero-trigger">
              Suitable for organizations experiencing structural signal inconsistency, consent ambiguity, or identity fragmentation.
            </p>

            <p className="hero-micro">
              Independent. Structured. Advisory-only.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}