import type { Metadata } from "next";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Michvi LLP Privacy Policy outlining data handling, analytics usage, consent controls, and governance-first operating model.",

  alternates: {
    canonical: "/privacy-policy/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function PrivacyPolicyPage() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="section center">
        <div className="container narrow">

          <h1 className="hero-title">Privacy Policy</h1>

          <p className="hero-sub">
            Michvi LLP operates with a governance-first approach to digital systems. This policy outlines how information is handled across our website, analytics systems, and advisory engagements.
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section">
        <div className="container article-wrap">

          <h2>1. Operating Model</h2>
          <p>
            Michvi LLP provides independent, read-only advisory assessments focused on signal integrity, measurement reliability, and governance oversight.
          </p>
          <p>
            We do not deploy tools, modify client systems, or access production environments.
          </p>

          <h2>2. Information We Do Not Collect</h2>
          <ul>
            <li>Customer personal data from client production systems</li>
            <li>End-user behavioral profiles across external platforms</li>
            <li>Production databases or live system records</li>
            <li>Administrative credentials or platform access</li>
            <li>Sensitive personally identifiable information from external systems</li>
          </ul>

          <h2>3. Website Analytics and Measurement</h2>
          <p>
            This website uses limited analytics technologies, including Google Analytics 4 (GA4), to understand high-level interaction patterns such as page views, navigation behavior, and engagement signals.
          </p>
          <p>
            These technologies operate strictly under user consent and are configured to avoid the collection of sensitive or personally identifiable information.
          </p>

          <h2>4. Marketing and Tracking Technologies</h2>
          <p>
            We may use limited third-party technologies, including LinkedIn Insight Tag, to measure engagement and support relevant outreach.
          </p>
          <ul>
            <li>Operate only after explicit user consent</li>
            <li>Collect limited interaction and attribution signals</li>
            <li>Do not enable unauthorized profiling or cross-platform identity enrichment</li>
          </ul>

          <h2>5. CRM and Communication Systems</h2>
          <p>
            We use customer relationship management (CRM) systems to manage inbound enquiries, communication records, and advisory interactions.
          </p>
          <p>
            Information submitted through forms (such as name, email, organization, and message content) is processed solely for communication and advisory purposes.
          </p>

          <h2>6. Contact Communications</h2>
          <p>
            When contacting Michvi LLP, limited information may be collected to respond to queries, schedule advisory discussions, and maintain communication records.
          </p>

          <h2>7. Advisory Engagements</h2>
          <p>
            Advisory work is conducted in a strictly observational and governance-focused manner.
          </p>
          <p>
            Findings are derived from structural evaluation and externally observable system behavior, without accessing internal systems or personal data.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            Only limited information required for communication, documentation, and advisory continuity is retained for a reasonable period.
          </p>

          <h2>9. Data Access and Deletion</h2>
          <p>
            Individuals may request access, correction, or deletion of submitted information through designated data rights channels.
          </p>
          <p>
            Requests are handled in alignment with applicable regulatory frameworks.
          </p>

          <h2>10. Third-Party Infrastructure</h2>
          <p>
            The website relies on third-party platforms for hosting, analytics (GA4), communication, and CRM services. These providers operate under their own privacy and security frameworks.
          </p>

          <h2>11. Consent and Control</h2>
          <p>
            Users can control optional analytics and tracking technologies through the Privacy Preferences interface available on the website.
          </p>
          <p>
            No non-essential tracking technologies are activated prior to user consent.
          </p>

          <h2>12. Regulatory Alignment</h2>
          <p>
            The operating model aligns with applicable frameworks including GDPR, India’s Digital Personal Data Protection (DPDP) Act, and emerging global governance standards.
          </p>

          <h2>13. Policy Updates</h2>
          <p>
            This policy may be updated periodically to reflect regulatory, technological, or operational changes.
          </p>

          <h2>14. Contact</h2>
          <p>
            Michvi LLP<br />
            Email: advisory@michvi.com
          </p>

          <p className="muted" style={{ marginTop: "40px" }}>
            Effective Date: 30 March 2026
          </p>

        </div>
      </section>

    </main>
  );
}