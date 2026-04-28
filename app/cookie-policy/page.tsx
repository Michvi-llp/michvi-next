import type { Metadata } from "next";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy explaining how Michvi LLP uses cookies and tracking technologies in a consent-based and minimal data approach.",

  alternates: {
    canonical: "/cookie-policy/",
  },

  openGraph: {
    title: "Cookie Policy | Michvi LLP",
    description:
      "Consent-based cookie usage and tracking transparency for Michvi LLP.",
    url: "https://michvi.com/cookie-policy/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function CookiePolicyPage() {
  return (
    <main>

      <section className="section">
        <div className="container narrow">

          <h1 className="center">Cookie Policy</h1>

          <p className="muted center" style={{ marginBottom: "40px" }}>
            This Cookie Policy explains how Michvi LLP (“Michvi”, “we”, “our”) uses cookies and similar technologies across its website.
          </p>

          {/* ================= 1 ================= */}
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device that help websites function and understand how users interact with content.
          </p>

          {/* ================= 2 ================= */}
          <h2>2. How We Use Cookies</h2>
          <p>
            Michvi uses cookies in a limited and controlled manner to understand high-level engagement and improve website clarity.
          </p>

          <p>
            These may include:
          </p>

          <ul>
            <li>Page navigation patterns</li>
            <li>Session continuity</li>
            <li>High-level engagement signals</li>
          </ul>

          {/* ================= 3 ================= */}
          <h2>3. Types of Cookies Used</h2>

          <h3>Essential Cookies</h3>
          <p>
            Required for basic website functionality, including session continuity and security.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            Used to understand how visitors interact with the website in an aggregated and non-sensitive manner.
          </p>

          <h3>Marketing / Measurement Cookies</h3>
          <p>
            Used in a limited manner to measure communication effectiveness. These operate only based on user consent.
          </p>

          {/* ================= 4 ================= */}
          <h2>4. Consent-Based Operation</h2>
          <p>
            Non-essential cookies are activated only after user consent is provided through the cookie banner.
          </p>

          <p>
            Users may accept or decline cookie usage, and preferences can be updated at any time through browser settings.
          </p>

          {/* ================= 5 ================= */}
          <h2>5. Third-Party Technologies</h2>
          <p>
            The website may use selected third-party tools for analytics and communication purposes.
          </p>

          <p>
            These tools operate under their own privacy frameworks and are configured to limit data collection to necessary and non-sensitive information.
          </p>

          {/* ================= 6 ================= */}
          <h2>6. Data Minimization Approach</h2>
          <p>
            Michvi follows a governance-first approach emphasizing minimal data collection, limited retention, and controlled signal usage.
          </p>

          {/* ================= 7 ================= */}
          <h2>7. Managing Cookies</h2>
          <p>
            Users can control or disable cookies through browser settings. Disabling certain cookies may impact website functionality.
          </p>

          {/* ================= 8 ================= */}
          <h2>8. Updates</h2>
          <p>
            This policy may be updated periodically to reflect changes in technologies or regulatory expectations.
          </p>

          {/* ================= 9 ================= */}
          <h2>9. Contact</h2>
          <p>
            <strong>Michvi LLP</strong><br />
            Email: contact@michvi.com
          </p>

          <p className="muted" style={{ marginTop: "40px" }}>
            Effective Date: 30 March 2026
          </p>

        </div>
      </section>

    </main>
  );
}