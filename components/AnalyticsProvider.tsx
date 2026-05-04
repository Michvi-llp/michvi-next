"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { buildMichviData, pushEvent, getConsentState } from "@/lib/dataLayer";

const SCROLL_MARKS = [25, 50, 75, 90];

export function AnalyticsProvider() {
  const pathname = usePathname();

  const lastPageViewRef = useRef<{ path: string; time: number }>({
    path: "",
    time: 0,
  });

  const scrollMarksRef = useRef<number[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const exitFiredRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  function getContext(path: string) {
    const title = typeof document !== "undefined" ? document.title : "";
    return buildMichviData(path, title);
  }

  function hasConsent() {
    return getConsentState() === "granted";
  }

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  /* ================= PAGE VIEW ================= */
  useEffect(() => {
    if (!pathname) return;
    if (!hasConsent()) return;

    const now = Date.now();

    if (
      lastPageViewRef.current.path === pathname &&
      now - lastPageViewRef.current.time < 800
    ) {
      return;
    }

    lastPageViewRef.current = { path: pathname, time: now };

    pushEvent({
      event: "page_view",
      ...getContext(pathname),
    });

    scrollMarksRef.current = [];
    exitFiredRef.current = false;
    clearTimers();
  }, [pathname]);

  /* ================= CLICK ================= */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      if (!link?.href) return;

      const text =
        link.textContent?.trim() ||
        link.getAttribute("aria-label") ||
        "unknown";

      const currentPath = window.location.pathname;
      const context = getContext(currentPath);

      let linkUrl: URL;
      try {
        linkUrl = new URL(link.href);
      } catch {
        return;
      }

      if (linkUrl.pathname.includes("/request-assessment")) {
        pushEvent({
          event: "cta_click",
          ...context,
          cta_text: text,
          destination_url: link.href,
        });
        return;
      }

      if (link.closest("nav")) {
        pushEvent({
          event: "nav_click",
          ...context,
          nav_text: text,
          nav_url: link.href,
        });
        return;
      }

      if (link.closest("footer")) {
        pushEvent({
          event: "footer_click",
          ...context,
          link_text: text,
          link_url: link.href,
        });
        return;
      }

      if (linkUrl.origin !== window.location.origin) {
        pushEvent({
          event: "outbound_click",
          ...context,
          outbound_url: link.href,
          link_text: text,
        });
        return;
      }

      pushEvent({
        event: "internal_link_click",
        ...context,
        link_text: text,
        link_url: link.href,
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

    function processScroll() {
      rafRef.current = null;

      if (document.visibilityState !== "visible") return;

      const percent = getScrollPercent();
      const context = getContext(pathname);

      // get highest threshold reached
      const maxReached = Math.max(
        ...SCROLL_MARKS.filter((mark) => percent >= mark),
        0
      );

      if (
        maxReached > 0 &&
        !scrollMarksRef.current.includes(maxReached)
      ) {
        scrollMarksRef.current.push(maxReached);

        pushEvent({
          event: "scroll_depth",
          ...context,
          scroll_percentage: maxReached,
        });
      }
    }

    function handleScroll() {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(processScroll);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pathname]);

  /* ================= ENGAGEMENT ================= */
  useEffect(() => {
    if (!pathname) return;

    clearTimers();

    let activeTime = 0;
    let lastTick = Date.now();

    let fired30 = false;
    let fired60 = false;

    function isActive() {
      return document.visibilityState === "visible";
    }

    function tick() {
      const now = Date.now();

      if (isActive()) {
        activeTime += now - lastTick;
      }

      lastTick = now;

      const context = getContext(pathname);

      if (activeTime >= 30000 && !fired30) {
        fired30 = true;

        pushEvent({
          event: "engaged_30s",
          ...context,
        });
      }

      if (activeTime >= 60000 && !fired60) {
        fired60 = true;

        pushEvent({
          event: "engaged_60s",
          ...context,
        });
      }
    }

    const interval = setInterval(tick, 1000);

    function handleVisibilityChange() {
      lastTick = Date.now();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimers();
    };
  }, [pathname]);

  /* ================= PAGE EXIT ================= */
  useEffect(() => {
    if (!pathname) return;

    exitFiredRef.current = false;

    function fireExit() {
      if (exitFiredRef.current) return;

      exitFiredRef.current = true;

      pushEvent({
        event: "page_exit",
        ...getContext(pathname),
      });
    }

    function handleVisibilityChange() {
      if (!hasConsent()) return;
      if (document.visibilityState === "hidden") {
        fireExit();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", fireExit);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", fireExit);
    };
  }, [pathname]);

  return null;
  }