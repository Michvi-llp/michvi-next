// ─────────────────────────────────────────────
// michvi dataLayer — v2.3.0 (CONSENT STABLE)
// ─────────────────────────────────────────────

export type ConsentState = "granted" | "denied";

export type ConsentDetail = {
  analytics: boolean;
  ads: boolean;
};

export interface MichviData {
  page_type: string;
  page_category: string;
  platform: "nextjs";
  device_type: "mobile" | "desktop";
  page_location: string;
  page_path: string;
  page_title: string;
  referrer: string;
  traffic_source: string;
  consent_status: ConsentState;
  page_load_type: string;
  script_version: "v2.3.0";
}

export interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

/* ───────────────── INIT ───────────────── */

export function initDataLayer(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.__eventQueue = window.__eventQueue || [];
  window.__journey = window.__journey || [];
  window.__lastConsentState = window.__lastConsentState || null;
  window.__pageViewFired = window.__pageViewFired || false;

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
  });
}

/* ───────────────── CONSENT ───────────────── */

export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return "denied";

  try {
    const stored = localStorage.getItem("michvi_consent");
    return stored === "granted" ? "granted" : "denied";
  } catch {
    return "denied";
  }
}

function getConsentDetail(): ConsentDetail {
  if (typeof window === "undefined") {
    return { analytics: false, ads: false };
  }

  try {
    const stored = localStorage.getItem("michvi_consent_detail");
    if (!stored) return { analytics: false, ads: false };

    const parsed = JSON.parse(stored) as Partial<ConsentDetail>;

    return {
      analytics: parsed.analytics === true,
      ads: parsed.ads === true,
    };
  } catch {
    return { analytics: false, ads: false };
  }
}

export function setConsentState(state: ConsentState): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("michvi_consent", state);
  } catch {}

  const detail = getConsentDetail();

  window.__lastConsentState = state;
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("consent", "update", {
    analytics_storage: detail.analytics ? "granted" : "denied",
    ad_storage: detail.ads ? "granted" : "denied",
  });

  window.dataLayer.push({
    event: "consent_update",
    consent_state: state,
    analytics_storage: detail.analytics ? "granted" : "denied",
    ad_storage: detail.ads ? "granted" : "denied",
  });

  if (state === "granted") {
    flushQueue();

    window.dataLayer.push({
      event: "consent_granted",
      analytics_storage: detail.analytics ? "granted" : "denied",
      ad_storage: detail.ads ? "granted" : "denied",
    });

    if (!window.__pageViewFired) {
      window.__pageViewFired = true;

      const data = buildMichviData(
        window.location.pathname,
        document.title
      );

      window.dataLayer.push({
        event: "page_view",
        ...data,
        analytics_storage: detail.analytics ? "granted" : "denied",
        ad_storage: detail.ads ? "granted" : "denied",
      });
    }
  }
}

/* ───────────────── EVENT QUEUE ───────────────── */

function flushQueue(): void {
  if (typeof window === "undefined") return;

  const queue = window.__eventQueue || [];
  window.__eventQueue = [];

  for (const evt of queue) {
    pushEventDirect(evt);
  }
}

function pushEventDirect(evt: DataLayerEvent): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const detail = getConsentDetail();

  window.dataLayer.push({
    ...evt,
    consent_status: getConsentState(),
    analytics_storage: detail.analytics ? "granted" : "denied",
    ad_storage: detail.ads ? "granted" : "denied",
  });

  window.__journey = window.__journey || [];
  window.__journey.push(evt.event);
}

export function pushEvent(evt: DataLayerEvent): void {
  if (typeof window === "undefined") return;

  const consent = getConsentState();

  if (evt.event === "consent_update") {
    pushEventDirect(evt);
    return;
  }

  if (consent !== "granted") {
    window.__eventQueue = window.__eventQueue || [];
    window.__eventQueue.push(evt);
    return;
  }

  pushEventDirect(evt);
}

/* ───────────────── CONTEXT BUILDER ───────────────── */

export function buildMichviData(
  pathname: string,
  title: string
): MichviData {
  if (typeof window === "undefined") {
    return {
      page_type: "unknown",
      page_category: "unknown",
      platform: "nextjs",
      device_type: "desktop",
      page_location: "",
      page_path: pathname,
      page_title: title,
      referrer: "",
      traffic_source: "direct",
      consent_status: "denied",
      page_load_type: "unknown",
      script_version: "v2.3.0",
    };
  }

  const params = new URLSearchParams(window.location.search);
  const trafficSource = params.get("utm_source") || "direct";

  let loadType = "unknown";

  try {
    const nav = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (nav[0]) loadType = nav[0].type;
  } catch {}

  return {
    page_type: derivePageType(pathname),
    page_category: derivePageCategory(pathname),
    platform: "nextjs",
    device_type: window.innerWidth < 768 ? "mobile" : "desktop",
    page_location: window.location.href,
    page_path: pathname,
    page_title: title,
    referrer: document.referrer || "",
    traffic_source: trafficSource,
    consent_status: getConsentState(),
    page_load_type: loadType,
    script_version: "v2.3.0",
  };
}

/* ───────────────── HELPERS ───────────────── */

function derivePageType(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/request-assessment") return "form";
  if (pathname === "/request-assessment/") return "form";
  if (pathname === "/contact") return "contact";
  if (pathname === "/contact/") return "contact";
  return "page";
}

function derivePageCategory(pathname: string): string {
  if (pathname === "/") return "core";
  if (pathname === "/request-assessment") return "conversion";
  if (pathname === "/request-assessment/") return "conversion";
  return "general";
}

/* ───────────────── GLOBAL TYPES ───────────────── */

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    __eventQueue: DataLayerEvent[];
    __journey: string[];
    __lastConsentState: ConsentState | null;
    __pageViewFired?: boolean;
    gtag?: (...args: unknown[]) => void;
  }
}