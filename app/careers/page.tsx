import type { Metadata } from "next";
import Script from "next/script";
import { CareersForm } from "./CareersForm";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Careers | Michvi LLP",
  description:
    "Submit your profile for consideration in governance advisory, research, and systems-focused roles at Michvi LLP.",

  alternates: {
    canonical: "/careers/",
  },

  openGraph: {
    title: "Careers | Michvi LLP",
    description:
      "Apply for roles aligned with digital governance, signal integrity, and system-level advisory.",
    url: "https://michvi.com/careers/",
  },

  robots: {
    index: false,
    follow: false,
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function CareersPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Careers
          </h1>

          <p className="hero-sub">
            Engage in governance-first advisory, signal architecture, and
            system-level research across digital environments.
          </p>

          <p className="muted hero-meta">
            Structured · Selective · High-context work · No volume hiring
          </p>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="section">
        <div className="container narrow">

          <div className="center" style={{ marginBottom: "32px" }}>
            <h2>Submit Your Profile</h2>

            <p className="muted" style={{ marginTop: "10px" }}>
              Share relevant experience and context. Suitable profiles are
              evaluated based on alignment with governance-first work.
            </p>
          </div>

          <div className="card form-card">
            <CareersForm />
          </div>

          <p className="muted center" style={{ marginTop: "18px", fontSize: "13px" }}>
            This is not a volume hiring channel. Submissions are reviewed based
            on relevance and depth.
          </p>

        </div>
      </section>

      {/* ================= WORK MODEL ================= */}
      <section className="section light">
        <div className="container narrow center">

          <h2>Work Model</h2>

          <p className="muted" style={{ marginTop: "12px" }}>
            Engagements are advisory-led, system-focused, and governance-first.
            Work involves structural thinking across signal integrity, consent
            architecture, and measurement reliability.
          </p>

        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <Script
        id="careers-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Careers | Michvi LLP",
          description:
            "Career submission page for governance advisory and research roles.",
          url: "https://michvi.com/careers/",
        })}
      </Script>

    </main>
  );
}
