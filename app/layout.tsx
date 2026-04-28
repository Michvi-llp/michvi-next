import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/CookieBanner";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { GTMLoader } from "@/components/GTMLoader";
import { RouteChangeTracker } from "@/components/RouteChangeTracker";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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

        <Script id="session-init" strategy="beforeInteractive">
          {`
            (function(){
              try {
                window.michvi = window.michvi || {};

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

        <Script id="consent-open-helper" strategy="beforeInteractive">
          {`
            window.openConsentManager = function () {
              window.dispatchEvent(new Event('open-consent'));
            };
          `}
        </Script>

        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Michvi LLP",
            url: "https://michvi.com",
            email: "advisory@michvi.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
          })}
        </Script>
      </head>

      <body>
        <GTMLoader />
        <AnalyticsProvider />
        <RouteChangeTracker />

        <Header />
        <main className="page-main">{children}</main>
        <Footer />

        <ConsentBanner />
      </body>
    </html>
  );
}