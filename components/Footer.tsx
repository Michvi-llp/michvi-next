"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-grid">

          {/* ===== BRAND ===== */}
          <div className="footer-brand">
            <h4>MICHVI LLP</h4>

            <p className="footer-tagline">
              Independent Governance & Signal Advisory
            </p>

            <p className="footer-meta">LLPIN: ACI-2186</p>
            <p className="footer-meta">
              MSME Registered (Udyam): UDYAM-UP-29-0221904
            </p>

            <p className="footer-note">
              Structured. Confidential. Read-only advisory.<br />
              Independent of marketing platforms, system vendors, and implementation partners.
            </p>

            {/* ✅ SINGLE CTA ONLY */}
            <div className="footer-cta">
              <Link href="/request-assessment">
                <span>Request a Governance Dialogue</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* ===== FRAMEWORK ===== */}
          <div className="footer-col">
            <h4>Framework</h4>
            <ul>
              <li><Link href="/digital-governance-architecture">Digital Governance Architecture</Link></li>
              <li><Link href="/governance-model">Governance Model</Link></li>
              <li><Link href="/design-time-governance">Design-Time Governance</Link></li>
              <li><Link href="/digital-governance-assessment">Digital Governance Assessment</Link></li>
              <li><Link href="/governance-insights">Governance Insights</Link></li>
              <li><Link href="/governance-case-abstracts">Governance Case Abstracts</Link></li>
              <li><Link href="/governance-glossary">Governance Glossary</Link></li>
              <li><Link href="/how-we-work">How We Work</Link></li>
            </ul>
          </div>

          {/* ===== COMPANY ===== */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Executive Contact</Link></li>
              <li>
                <a
                  href="https://www.linkedin.com/company/michvi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* ===== LEGAL ===== */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>

              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new Event("open-consent"));
                  }}
                  className="footer-link-btn"
                >
                  Privacy Preferences
                </button>
              </li>

              <li>
                <a
                  href="https://na2.hs-data-privacy.com/request/jh63GnORcTW_9TbGps1c9Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Rights Request
                </a>
              </li>

              <li>
                <Link href="/terms-conditions">Terms of Use</Link>
              </li>

              <li>
                <a href="mailto:advisory@michvi.com">
                  advisory@michvi.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Michvi LLP. All rights reserved.
        </div>

      </div>
    </footer>
  );
}