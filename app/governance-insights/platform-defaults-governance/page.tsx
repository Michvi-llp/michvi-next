import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function PlatformDefaultsPage() {
  return (
    <>
      <Head>
        <title>Platform Defaults as Hidden Governance Decisions | Digital Governance</title>

        <meta
          name="description"
          content="Platform defaults shape governance outcomes before policies apply. Understand how default configurations influence signals, measurement, and system behavior in digital environments."
        />

        <meta
          name="keywords"
          content="platform defaults governance, data governance defaults, digital governance architecture, system configuration governance, signal integrity, design time governance"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://michvi.com/governance-insights/platform-defaults/"
        />
      </Head>

      <main>

        {/* HERO */}
        <section className="hero-dark center">
          <div className="container narrow">

            <h1 className="hero-title">
              Platform Defaults as Hidden Governance Decisions
            </h1>

            <p className="hero-sub">
              Many governance outcomes are not explicitly defined.  
              They emerge from default configurations embedded within platforms.
            </p>

          </div>
        </section>


        {/* ARTICLE */}
        <section className="article">
          <div className="container article-wrap">

            <p>
              Digital platforms include predefined configurations that determine how activity is captured, structured, and represented.
            </p>

            <p>
              These defaults are designed for operational convenience — not governance alignment.
            </p>

            <p>
              When organizations adopt platforms without examining these configurations, they inherit embedded assumptions.
            </p>

            <p className="highlight">
              These assumptions shape how digital activity becomes visible — and how system behavior is interpreted.
            </p>


            <h2>Defaults Operate Before Governance</h2>

            <p>
              Default configurations are applied at the moment systems begin to operate.
            </p>

            <p>
              They define structural conditions before governance frameworks are engaged.
            </p>

            <p>
              As a result, governance often evaluates outcomes that have already been shaped.
            </p>

            <p>
              What appears as neutral system behavior may already reflect embedded assumptions.
            </p>


            <h2>Defaults as Implicit Decisions</h2>

            <p>
              Defaults rarely appear as decisions.  
              They are not typically documented as governance choices.
            </p>

            <p>
              Yet they determine:
            </p>

            <ul>
              <li>What is captured</li>
              <li>What is ignored</li>
              <li>How activity is grouped</li>
              <li>How outcomes are interpreted</li>
            </ul>

            <p>
              In this sense, defaults function as implicit governance decisions — shaping system behavior without explicit ownership.
            </p>


            <h2>Governance Beyond Policy</h2>

            <p>
              Governance is often associated with policy, compliance frameworks, and reporting controls.
            </p>

            <p>
              These operate after systems are already active.
            </p>

            <p>
              Platform defaults act earlier.
            </p>

            <p>
              They establish structural conditions before governance is formally applied.
            </p>

            <p>
              This aligns with approaches such as{" "}
              <Link href="/design-time-governance" className="inline-link">
                design-time governance
              </Link>, where configuration-level conditions are evaluated before they propagate across systems.
            </p>

            <p className="highlight">
              Defaults are not neutral.  
              They are pre-defined governance decisions.
            </p>

          </div>
        </section>


        {/* BACK */}
        <section className="section light center">
          <div className="container narrow">

            <p className="muted">
              Explore more insights on digital governance architecture.
            </p>

            <Link href="/governance-insights" className="cta-link">
              ← Return to Governance Insights
            </Link>

          </div>
        </section>


        {/* SCHEMA */}
        <Script
          id="platform-defaults-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Platform Defaults as Hidden Governance Decisions",
            description:
              "Platform defaults influence governance outcomes before policies apply. They shape signal capture, interpretation, and system behavior in digital environments.",
            author: {
              "@type": "Organization",
              name: "Michvi LLP"
            },
            publisher: {
              "@type": "Organization",
              name: "Michvi LLP",
              url: "https://michvi.com"
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://michvi.com/governance-insights/platform-defaults/"
            }
          })}
        </Script>

      </main>
    </>
  );
}