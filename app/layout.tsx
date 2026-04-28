// ─────────────────────────────────────────────────────────────────────────────
// app/layout.tsx
// Michvi LLP — Root Layout  v2.2.2 (FINAL LOCKED)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/CookieBanner";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { GTMLoader } from "@/components/GTMLoader";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL("https://michvi.com"),

  title: {
    template: "%s — Michvi LLP",
    default: "Digital Governance & Signal Advisory | Michvi LLP",
  },

  description:
    "Independent digital governance advisory examining signal integrity, consent architecture, identity continuity, and measurement reliability across enterprise digital systems.",

  keywords: [
    "digital governance",
    "signal integrity",
    "consent architecture",
    "identity continuity",
    "measurement reliability",
    "AI governance",
    "data governance advisory",
  ],

  authors: [{ name: "Michvi LLP" }],
  creator: "Michvi LLP",
  publisher: "Michvi LLP",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://michvi.com",
    siteName: "Michvi LLP",
    title: "Digital Governance & Signal Advisory",
    description:
      "Independent governance advisory focused on structural signal integrity and accountability in digital systems.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Governance & Signal Advisory",
    description:
      "Signal-first governance approach for enterprise digital systems.",
  },
};

/* ─── Root Layout ──────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🔥 CONSENT DEFAULT — ALWAYS DENIED */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

            window.gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* 🔹 SAFE GLOBAL INIT */}
        <Script id="dl-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.michvi = window.michvi || {};
          `}
        </Script>

        {/* 🔹 SESSION INIT (EARLY) */}
        <Script id="session-init" strategy="beforeInteractive">
          {`
            (function(){
              try {
                var s = sessionStorage.getItem("michvi_session");
                if (!s) {
                  s = "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6);
                  sessionStorage.setItem("michvi_session", s);
                }
                window.michvi.session = s;
              } catch(e) {}
            })();
          `}
        </Script>

        {/* 🔹 ORG SCHEMA */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Michvi LLP",
              "url": "https://michvi.com",
              "email": "advisory@michvi.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            }
          `}
        </Script>
      </head>

      <body>
        {/* 🔥 GTM LOAD */}
        <GTMLoader />

        {/* 🔥 SIGNAL ENGINE */}
        <AnalyticsProvider />

        {/* UI */}
        <Header />
        <main className="page-main">{children}</main>
        <Footer />

        {/* 🔥 CONSENT LAYER */}
        <ConsentBanner />
      </body>
    </html>
  );
}