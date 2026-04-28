"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  initDataLayer,
  buildMichviData,
  pushEvent,
  getConsentState,
} from "@/lib/dataLayer";

/* ================= DEDUP STATE ================= */
let lastEvent = { path: "", time: 0 };
const SCROLL_MARKS = [25, 50, 75, 90];

declare global {
  interface Window {
    __pageViewFired?: boolean;
  }
}

export function AnalyticsProvider() {
  const pathname = usePathname();

  const scrollMarksRef = useRef<number[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* ================= INIT ================= */
  useEffect(() => {
    initDataLayer();
  }, []);

  /* ================= PAGE VIEW ================= */
  useEffect(() => {
    if (!pathname) return;

    // First page_view is already handled by dataLayer.ts after consent grant.
    if (window.__pageViewFired) {
      window.__pageViewFired = false;
      return;
    }

    if (getConsentState() !== "granted") return;

    const now = Date.now();
    if (lastEvent.path === pathname && now - lastEvent.time < 1200) return;

    lastEvent = { path: pathname, time: now };

    const title = typeof document !== "undefined" ? document.title : "";
    const data = buildMichviData(pathname, title);

    pushEvent({
      event: "page_view",
      ...data,
    });

    scrollMarksRef.current = [];
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, [pathname]);

  /* ================= CLICK ================= */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (getConsentState() !== "granted") return;

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const url = link.href || "";
      if (!url) return;

      const text =
        link.textContent?.trim() ||
        link.getAttribute("aria-label") ||
        "unknown";

      const currentPath =
        typeof window !== "undefined" ? window.location.pathname : pathname || "";
      const title = typeof document !== "undefined" ? document.title : "";
      const context = buildMichviData(currentPath, title);

      if (url.includes("/request-assessment")) {
        pushEvent({
          event: "cta_click",
          ...context,
          cta_text: text,
          destination_url: url,
        });
        return;
      }

      if (link.closest("nav")) {
        pushEvent({
          event: "nav_click",
          ...context,
          nav_text: text,
          nav_url: url,
        });
        return;
      }

      if (link.closest("footer")) {
        pushEvent({
          event: "footer_click",
          ...context,
          link_text: text,
          link_url: url,
        });
        return;
      }

      const hostname =
        typeof window !== "undefined" ? window.location.hostname : "";

      if (hostname && !url.includes(hostname)) {
        pushEvent({
          event: "outbound_click",
          ...context,
          outbound_url: url,
          link_text: text,
        });
        return;
      }

      pushEvent({
        event: "internal_link_click",
        ...context,
        link_text: text,
        link_url: url,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ================= SCROLL ================= */
  useEffect(() => {
    if (!pathname) return;

    scrollMarksRef.current = [];

    function getScrollPercent() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const total = doc.scrollHeight - window.innerHeight;

      if (total <= 0) return 100;
      return (scrollTop / total) * 100;
    }

    function handleScroll() {
      if (getConsentState() !== "granted") return;
      if (document.visibilityState !== "visible") return;

      const percent = getScrollPercent();
      const title = typeof document !== "undefined" ? document.title : "";
      const context = buildMichviData(pathname || "", title);

      SCROLL_MARKS.forEach((mark) => {
        if (percent >= mark && !scrollMarksRef.current.includes(mark)) {
          scrollMarksRef.current.push(mark);

          pushEvent({
            event: "scroll_depth",
            ...context,
            scroll_percentage: mark,
          });
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  /* ================= ENGAGEMENT ================= */
  useEffect(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    function fire(delay: number, eventName: string) {
      const timer = setTimeout(() => {
        if (
          getConsentState() === "granted" &&
          document.visibilityState === "visible"
        ) {
          const title = typeof document !== "undefined" ? document.title : "";
          const context = buildMichviData(pathname || "", title);

          pushEvent({
            event: eventName,
            ...context,
          });
        }
      }, delay);

      timersRef.current.push(timer);
    }

    fire(30000, "engaged_30s");
    fire(60000, "engaged_60s");

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [pathname]);

  return null;
}