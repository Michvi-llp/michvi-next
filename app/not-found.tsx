import Link from "next/link";

export default function NotFound() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-dark center">
        <div className="container narrow">

          <h1 className="hero-title">
            Page Not Found
          </h1>

          <p className="hero-sub">
            The requested page does not exist or may have moved.
          </p>

          <p className="muted" style={{ marginTop: "12px" }}>
            You may continue exploring governance insights or return to the main site.
          </p>

        </div>
      </section>

      {/* ================= ACTIONS ================= */}
      <section className="section center">
        <div className="container narrow">

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>

            <Link href="/" className="cta-link">
              Go to Homepage →
            </Link>

            <Link href="/governance-insights/" className="cta-link secondary">
              Explore Insights →
            </Link>

          </div>

        </div>
      </section>

      {/* ================= POSITIONING ================= */}
      <section className="section light center">
        <div className="container narrow">

          <p className="muted">
            Michvi LLP — Independent Governance & Signal Advisory
          </p>

        </div>
      </section>

    </main>
  );
}