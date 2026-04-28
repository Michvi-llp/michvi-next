"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getConsentState } from "@/lib/dataLayer";

export function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = getConsentState();

    // ✅ Only reset when consent is granted
    if (consent === "granted") {
      window.__pageViewFired = false;
    }

  }, [pathname]);

  return null;
}