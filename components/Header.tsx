import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* LEFT — IDENTITY */}
        <Link href="/" className="site-logo">
          <span className="logo-main">Michvi LLP</span>
          <span className="logo-sub">
            Governance & Signal Advisory
          </span>
        </Link>

        {/* CENTER — NAV */}
        <nav className="site-nav">
          <Link href="/governance-model">Framework</Link>
          <Link href="/design-time-governance">Design-Time</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/governance-insights">Insights</Link>
        </nav>

        {/* RIGHT — ACTION */}
        <Link
          href="/request-assessment"
          className="site-cta"
          aria-label="Request a Governance Dialogue"
        >
          Request a Governance Dialogue
          <span className="cta-arrow" aria-hidden="true">→</span>
        </Link>

      </div>
    </header>
  );
}