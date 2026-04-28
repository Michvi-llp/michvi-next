import type { Metadata } from "next";

/* ========================= */
/* METADATA */
/* ========================= */
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing access to Michvi LLP website and independent governance advisory services.",

  alternates: {
    canonical: "/terms/",
  },

  openGraph: {
    title: "Terms & Conditions | Michvi LLP",
    description:
      "Terms governing use of Michvi LLP website and advisory services.",
    url: "https://michvi.com/terms/",
  },
};

/* ========================= */
/* PAGE */
/* ========================= */
export default function TermsPage() {
  return (
    <main>

      <section className="section">
        <div className="container narrow">

          <h1 className="center">Terms & Conditions</h1>

          <p className="muted center" style={{ marginBottom: "40px" }}>
            These Terms & Conditions govern access to and use of the Michvi LLP website and advisory services.
            By accessing this website or engaging with Michvi LLP, you agree to the terms outlined below.
          </p>

          {/* ================= 1 ================= */}
          <h2>1. About Michvi</h2>
          <p>
            Michvi LLP (“Michvi”, “we”, “our”) provides independent governance and signal advisory focused on structural evaluation of digital systems.
            All services are delivered in a read-only, observational capacity.
          </p>

          {/* ================= 2 ================= */}
          <h2>2. Nature of Services</h2>
          <p>
            Services are advisory and non-operational in nature. Michvi does not deploy tools, modify configurations,
            access production systems, or process customer-identifiable data.
          </p>

          <p>
            Any findings or recommendations are provided for executive-level decision support purposes only.
          </p>

          {/* ================= 3 ================= */}
          <h2>3. No Execution or Implementation</h2>
          <p>
            Michvi does not perform remediation, execute system changes, or assume operational responsibility within client environments.
            All execution decisions remain solely with the client.
          </p>

          {/* ================= 4 ================= */}
          <h2>4. No Legal or Regulatory Advice</h2>
          <p>
            Michvi does not provide legal, regulatory, financial, or compliance certification services.
            Advisory outputs should not be interpreted as legal opinions, guarantees, or regulatory endorsements.
          </p>

          {/* ================= 5 ================= */}
          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Michvi LLP shall not be liable for indirect,
            incidental, or consequential losses arising from reliance on advisory findings or recommendations.
          </p>

          {/* ================= 6 ================= */}
          <h2>6. Intellectual Property</h2>
          <p>
            All content, terminology, structural models, and written materials on this website constitute the intellectual property of Michvi LLP unless otherwise stated.
          </p>

          <p>
            Content may not be reproduced, redistributed, reverse-engineered, or repurposed without prior written consent.
          </p>

          {/* ================= 7 ================= */}
          <h2>7. Confidentiality</h2>
          <p>
            Engagement-specific discussions, materials, and observations are treated as confidential unless explicitly agreed otherwise in writing.
          </p>

          {/* ================= 8 ================= */}
          <h2>8. Third-Party Links</h2>
          <p>
            This website may contain links to third-party platforms. Michvi LLP is not responsible for the content,
            security, or practices of external websites.
          </p>

          {/* ================= 9 ================= */}
          <h2>9. Use of Analytics & Technologies</h2>
          <p>
            The website may use selected analytics and communication technologies to improve performance and understand engagement patterns.
          </p>

          <p>
            These operate in alignment with user consent preferences and are configured to limit data collection to necessary and non-sensitive information.
          </p>

          {/* ================= 10 ================= */}
          <h2>10. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and interpreted in accordance with the laws applicable in India.
          </p>

          {/* ================= 11 ================= */}
          <h2>11. Updates</h2>
          <p>
            Michvi LLP reserves the right to update these Terms & Conditions at any time.
            Continued use of the website constitutes acceptance of updated terms.
          </p>

          {/* ================= 12 ================= */}
          <h2>12. Contact</h2>
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