import Link from "next/link";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Michvi LLP | Digital Governance & Signal Advisory</title>

        <meta
          name="description"
          content="Michvi LLP is an independent digital governance advisory focused on signal integrity, identity continuity, consent governance, and structural accountability across analytics and AI-driven systems."
        />

        <meta
          name="keywords"
          content="Michvi LLP, digital governance advisory, signal integrity governance, AI governance, consent governance, data governance India, governance architecture"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://michvi.com/about/" />

        <meta property="og:title" content="About Michvi LLP" />
        <meta
          property="og:description"
          content="Independent governance advisory addressing structural exposure across digital and AI-driven systems."
        />
        <meta property="og:url" content="https://michvi.com/about/" />
        <meta property="og:type" content="website" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
      </Head>

      <main>

        {/* HERO */}
        <section className="hero-dark center">
          <div className="container narrow">

            <h1 className="hero-title">About Michvi</h1>

            <p className="hero-sub">
              An independent governance advisory established to address structural exposure in complex digital ecosystems.
            </p>

            <p className="hero-note">
              Focused on signal integrity, identity continuity, consent governance, and structural accountability across analytics, attribution, and AI-integrated environments.
            </p>

          </div>
        </section>


        {/* WHY */}
        <section className="section center">
          <div className="container narrow">

            <header className="section-header center">
              <h2 className="section-title">
                Why Michvi Was Established
              </h2>
            </header>

            <p>
              Modern digital systems operate across analytics platforms, consent frameworks, attribution engines,
              and AI-integrated decision models — frequently without independent structural governance oversight.
            </p>

            <p>
              Most governance frameworks begin after data becomes visible. Structural risk, however, emerges earlier —
              where signals are defined, identities are represented, and system behavior is configured.
            </p>

            <p>
              This perspective aligns with{" "}
              <Link href="/digital-governance-architecture/" className="inline-link">
                digital governance architecture
              </Link>{" "}
              and{" "}
              <Link href="/design-time-governance/" className="inline-link">
                design-time governance
              </Link>.
            </p>

            <p>
              Michvi was established to address this gap through independent, read-only governance evaluation —
              without deploying tools or altering system configurations.
            </p>

          </div>
        </section>


        {/* CORE */}
        <section className="section light">
          <div className="container">

            <header className="section-header center">
              <h2 className="section-title">
                Core Advisory Focus
              </h2>
            </header>

            <div className="grid-3">

              <div className="card">
                <h3>Signal Integrity Oversight</h3>
                <p>
                  Evaluation of signal structures, identity continuity, and cross-domain alignment.
                </p>
                <Link href="/governance-insights/signal-generation-governance/" className="inline-link">
                  Explore signal layer →
                </Link>
              </div>

              <div className="card">
                <h3>Consent & Regulatory Alignment</h3>
                <p>
                  Structural review of consent enforcement and governance hierarchy.
                </p>
                <Link href="/governance-insights/consent-architecture/" className="inline-link">
                  Explore consent →
                </Link>
              </div>

              <div className="card">
                <h3>Architectural Risk Mapping</h3>
                <p>
                  Identification of systemic governance gaps before deployment.
                </p>
                <Link href="/governance-case-abstracts/" className="inline-link">
                  View case abstracts →
                </Link>
              </div>

            </div>

          </div>
        </section>


        {/* LEADERSHIP */}
        <section className="section light">
          <div className="container">

            <header className="section-header center" style={{ marginBottom: "60px" }}>
              <h2 className="section-title">Governance Leadership</h2>

              <p className="hero-note">
                Michvi operates at the intersection of institutional governance and digital system architecture —
                establishing accountability at the point where systems are defined.
              </p>
            </header>

            <div className="grid-2">

              <div className="card">
                <span className="mono">Institutional Governance</span>

                <h3 style={{ marginTop: "10px" }}>
                  Ashok Kumar Jha
                </h3>

                <p className="hero-note">
                  Founder · Institutional Governance Lead<br />
                  Former Senior Officer — Bihar Administrative Service
                </p>

                <p>
                  Brings nearly three decades of experience in administrative leadership, regulatory systems,
                  and institutional decision-making within government environments.
                </p>
              </div>


              <div className="card">
                <span className="mono">Digital Governance Architecture</span>

                <h3 style={{ marginTop: "10px" }}>
                  Shikhar Jha
                </h3>

                <p className="hero-note">
                  Co-Founder & Digital Governance Architect
                </p>

                <Link
                  href="https://www.linkedin.com/in/jhashikhar"
                  className="inline-link"
                  target="_blank"
                >
                  View Profile →
                </Link>

                <p>
                  Leads Michvi’s digital governance perspective across signal integrity,
                  identity continuity, consent boundaries, and system accountability.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* WHY THIS COMBINATION */}
        <section className="section center">
          <div className="container narrow">

            <header className="section-header center">
              <h2 className="section-title">
                Governance Perspective
              </h2>
            </header>

            <p>
              Michvi was established to bring institutional governance perspective and
              digital system governance expertise into a single independent advisory structure.
            </p>

            <p>
              Ashok Kumar Jha brings administrative governance experience and institutional
              judgment from public-sector leadership environments.
            </p>

            <p>
              Shikhar Jha brings digital governance expertise across signal integrity,
              identity continuity, consent boundaries, analytics, attribution, and AI-enabled systems.
            </p>

            <p className="muted">
              This combination allows Michvi to evaluate governance exposure before it becomes
              visible through reporting, audit, automation, or regulatory scrutiny.
            </p>

          </div>
        </section>

        {/* IP SAFE */}
        <section className="section center">
          <div className="container narrow">

            <header className="section-header center">
              <h2 className="section-title">
                Independent & Confidential
              </h2>
            </header>

            <p>
              All governance evaluations are conducted at a structural level without accessing or modifying production systems.
            </p>

            <p>
              Observations are derived from system architecture and signal behavior — without exposing proprietary methodologies or internal analytical frameworks.
            </p>
            
            <p>
              Unlike implementation-led or tool-dependent approaches, Michvi operates
              independently of platforms, vendors, or deployment layers.
            </p>

            <p className="muted small">
              Evaluation methodology and analytical depth remain proprietary and are not disclosed publicly.
            </p>
            
          </div>
        </section>


        {/* ENTITY */}
        <section className="section center">
          <div className="container narrow">

            <p className="hero-note">
              Michvi LLP is a registered entity in India.<br />
              MSME Udyam Registration: UDYAM-UP-29-0221904<br />
              Independent Governance & Signal Advisory.
            </p>

          </div>
        </section>


        {/* CTA */}
        <section className="hero-dark center">
          <div className="container narrow">

            <h2 className="section-title">
              Engage Independent Governance Oversight
            </h2>

            <p className="hero-sub">
              Executive-level structural evaluation for regulated digital environments.
            </p>

            <Link href="/request-assessment/" className="btn-primary">
              Request a Governance Dialogue
            </Link>

            <p className="hero-note">
              advisory@michvi.com
            </p>

          </div>
        </section>


        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Michvi LLP",
              url: "https://michvi.com",
              description:
                "Independent digital governance advisory focused on signal integrity, identity continuity, consent governance, and structural accountability.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              founder: [
                { "@type": "Person", name: "Ashok Kumar Jha" },
                { "@type": "Person", name: "Shikhar Jha" }
              ],
              sameAs: [
                "https://www.linkedin.com/in/jhashikhar"
              ]
            })
          }}
        />

      </main>
    </>
  );
}