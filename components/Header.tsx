"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* LEFT — LOGO */}
        <Link href="/" className="site-logo">
          <span className="logo-main">Michvi LLP</span>
          <span className="logo-sub">Governance & Signal Advisory</span>
        </Link>

        {/* NAV (DESKTOP ONLY) */}
        <nav className="site-nav">
          <Link href="/governance-model">Framework</Link>
          <Link href="/design-time-governance">Design-Time</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/governance-insights">Insights</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="header-actions">

          {/* CTA */}
          <Link href="/request-assessment" className="site-cta">
            Request a Governance Dialogue →
          </Link>

          {/* MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => {
              console.log("MENU CLICKED");
              setOpen(true);
            }}
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <span>Michvi LLP</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className="mobile-nav">
            <Link href="/governance-model" onClick={() => setOpen(false)}>Framework</Link>
            <Link href="/design-time-governance" onClick={() => setOpen(false)}>Design-Time</Link>
            <Link href="/how-we-work" onClick={() => setOpen(false)}>How We Work</Link>
            <Link href="/governance-insights" onClick={() => setOpen(false)}>Insights</Link>

            <Link
              href="/request-assessment"
              className="mobile-cta"
              onClick={() => setOpen(false)}
            >
              Request a Governance Dialogue →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}