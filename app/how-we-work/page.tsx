import Link from "next/link";
import Script from "next/script";

/* ========================= */
/* SEO */
/* ========================= */

export const metadata = {
  title: "How We Work | Michvi LLP",

  description:
    "Independent digital governance advisory delivered through structural evaluation, design-time oversight, and executive-level governance assessments.",

  keywords: [
    "digital governance advisory",
    "design time governance",
    "governance assessment",
    "AI governance advisory",
    "data governance consulting",
    "signal integrity governance",
  ],

  alternates: {
    canonical: "https://www.michvi.com/how-we-work",
  },

  openGraph: {
    title: "How We Work | Michvi",
    description:
      "Independent governance advisory model based on structural evaluation and executive-level insights.",
    url: "https://www.michvi.com/how-we-work",
    siteName: "Michvi",
    type: "article",
  },
};


/* ========================= */
/* PAGE */
/* ========================= */

export default function HowWeWorkPage() {
  return (
    <main>

      {/* ========================= */}
      {/* SCHEMA */}
      {/* ========================= */}
      <Script
        id="how-we-work-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "How We Work",
          description:
            "Independent governance advisory model based on structural evaluation and design-time oversight.",
          url: "https://www.michvi.com/how-we-work",
          publisher: {
            "@type": "Organization",
            name: "Michvi LLP",
            url: "https://www.michvi.com"
          }
        })}
      </Script>



      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            How We Work
          </h1>

          <p className="hero-sub">
            Independent structural governance advisory delivered through{" "}
            <Link href="/governance-model/" className="inline-link">
              structural governance perspectives
            </Link>{" "}
            and{" "}
            <Link href="/design-time-governance/" className="inline-link">
              design-time governance
            </Link>.
          </p>

          <p className="hero-sub">
            Governance exposure is evaluated before it becomes operationally visible.
          </p>

          <p className="hero-trigger">
            Most organizations engage only after exposure begins.
          </p>

          <p className="hero-meta">
            No system access · No configuration changes · No vendor displacement
          </p>

        </div>
      </section>



      {/* ================= OPERATING MODEL ================= */}
      <section className="section">
        <div className="container">

          <h2 className="section-title center">
            Operating Model
          </h2>

          <div className="grid-2">

            {steps.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>

          <p className="muted center mt">
            Advisory informed by structural observation across complex enterprise environments.
          </p>

        </div>
      </section>



      {/* ================= ENGAGEMENT STRUCTURE ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2 className="section-title">
            Engagement Structure
          </h2>

          <p>
            Engagements are structured around architectural context review, stakeholder alignment,
            and governance evaluation.
          </p>

          <p className="muted">
            Findings are delivered as an executive memorandum outlining structural conditions,
            system dependencies, and governance exposure.
          </p>

          <p className="muted small">
            Evaluation methodology and analytical depth remain proprietary.
          </p>

        </div>
      </section>



      {/* ================= TIMELINE ================= */}
      <section className="section center">
        <div className="container narrow">

          <h2 className="section-title">
            Typical Engagement Window
          </h2>

          <p>
            Governance reviews are conducted within defined evaluation windows aligned
            to deployment timelines, platform transitions, or regulatory preparation.
          </p>

          <p className="muted">
            Scope and duration depend on structural complexity and governance exposure.
          </p>

        </div>
      </section>



      {/* ================= WHAT WE DON'T DO ================= */}
      <section className="section light center">
        <div className="container narrow">

          <h2 className="section-title">
            What We Do Not Do
          </h2>

          <p>
            Michvi does not operate as an implementation vendor, systems integrator,
            or platform reseller.
          </p>

          <p className="muted">
            Engagements remain advisory-only and structurally independent.
          </p>

        </div>
      </section>



      {/* ================= CHARACTERISTICS ================= */}
      <section className="section">
        <div className="container">

          <h2 className="section-title center">
            Engagement Characteristics
          </h2>

          <div className="grid-3">

            {traits.map((item, i) => (
              <div key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>



      {/* ================= CTA (LOCKED SYSTEM) ================= */}
      <section className="hero-dark center">
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

    </main>
  );
}


/* ========================= */
/* DATA */
/* ========================= */

const steps = [
  {
    title: "1. Architectural Intake",
    desc: "Structural review of system design, signal conditions, identity continuity, and consent boundaries.",
  },
  {
    title: "2. Structural Evaluation",
    desc: "Identification of governance exposure across measurement, attribution, and regulatory alignment.",
  },
  {
    title: "3. Executive Consolidation",
    desc: "Findings structured into an executive governance memorandum.",
  },
  {
    title: "4. Structural Independence",
    desc: "Evaluation delivered without operational involvement or vendor dependency.",
  },
];

const traits = [
  {
    title: "Independent",
    desc: "No commercial conflict with vendors or operators.",
  },
  {
    title: "Confidential",
    desc: "Executive-scoped engagement with controlled visibility.",
  },
  {
    title: "Pre-Exposure Focused",
    desc: "Oversight before governance exposure becomes visible.",
  },
];