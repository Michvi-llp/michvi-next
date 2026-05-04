import type { Metadata } from "next";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Cookie Policy | Michvi LLP",
  description:
    "Cookie Policy explaining how Michvi LLP uses cookies and consent-based signal activation in a governance-first architecture.",

  alternates: {
    canonical: "https://michvi.com/cookie-policy/",
  },

  openGraph: {
    title: "Cookie Policy | Michvi LLP",
    description:
      "Consent-based signal activation and minimal data usage at Michvi LLP.",
    url: "https://michvi.com/cookie-policy/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function CookiePolicyPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">Cookie Policy</h1>

          <p className="hero-sub">
            This policy explains how Michvi LLP uses cookies and signal-based tracking in a consent-controlled and governance-first manner.
          </p>

          <p className="hero-micro">
            Consent-driven · Minimal data · Structural governance
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section">
        <div className="container article-wrap">

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device that enable websites to function and understand high-level interaction patterns.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            Michvi LLP uses cookies in a limited and controlled manner to support essential functionality and understand aggregated engagement patterns.
          </p>

          <p>These may include:</p>
          <ul>
            <li>Page navigation patterns</li>
            <li>Session continuity</li>
            <li>High-level engagement signals</li>
          </ul>

          <h2>3. Types of Cookies Used</h2>

          <h3>Essential Cookies</h3>
          <p>
            Required for core functionality, including session continuity and system stability. These operate by default.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            Used to understand interaction patterns in an aggregated and non-sensitive manner.
          </p>

          <h3>Communication / Measurement Cookies</h3>
          <p>
            Used in a limited manner to evaluate communication effectiveness. These operate only after user consent.
          </p>

          <h2>4. Consent-Based Signal Activation</h2>
          <p>
            Non-essential cookies and signals are not activated at page load.
          </p>

          <p>
            Events associated with analytics and communication are held in a temporary queue and are only activated after explicit user consent is provided.
          </p>

          <p>
            This ensures that no non-essential data is transmitted before consent is established.
          </p>

          <p>
            Users can grant, deny, or modify consent preferences at any time through the on-site consent manager.
          </p>

          <h2>5. Third-Party Technologies</h2>
          <p>
            The website uses limited third-party technologies (such as analytics and communication platforms) under a consent-controlled configuration.
          </p>

          <p>
            These technologies operate within their respective frameworks and are configured to limit data collection to necessary and non-sensitive signals.
          </p>

          <h2>6. Data Minimization Approach</h2>
          <p>
            Michvi follows a governance-first approach emphasizing minimal data collection, limited retention, and controlled signal activation.
          </p>

          <p>
            Signals are structured to prioritize system integrity and accountability over volume or tracking depth.
          </p>

          <h2>7. Managing Cookies</h2>
          <p>
            Users can manage cookie preferences directly through the consent manager available on this website.
          </p>

          <p>
            Additionally, browser-level controls may be used to restrict or delete cookies, though this may impact certain functionality.
          </p>

          <h2>8. Updates</h2>
          <p>
            This policy may be updated periodically to reflect changes in technology, governance practices, or regulatory expectations.
          </p>

          <h2>9. Contact</h2>
          <p>
            <strong>Michvi LLP</strong><br />
            Governance Advisory<br />
            advisory@michvi.com
          </p>

          <p className="muted" style={{ marginTop: "40px" }}>
            Effective Date: 30 March 2026
          </p>

        </div>
      </section>

    </main>
  );
}