// michvi dataLayer — v2.7.1 FINAL LOCKED

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
  script_version: "v2.7.1";
}

export interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

const CORE_KEY = "michvi_consent";
const DETAIL_KEY = "michvi_consent_detail";

/* SAFE STORAGE */
function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSet(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch {}
}

/* CONSENT */
export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return "denied";
  return safeGet(CORE_KEY) === "granted" ? "granted" : "denied";
}

function getConsentDetail(): ConsentDetail {
  if (typeof window === "undefined") return { analytics: false, ads: false };

  const stored = safeGet(DETAIL_KEY);
  if (!stored) return { analytics: false, ads: false };

  try {
    const parsed = JSON.parse(stored) as Partial<ConsentDetail>;
    return {
      analytics: parsed.analytics === true,
      ads: parsed.ads === true,
    };
  } catch {
    return { analytics: false, ads: false };
  }
}

/* CONSENT UPDATE */
export function setConsentState(state: ConsentState): void {
  if (typeof window === "undefined") return;

  safeSet(CORE_KEY, state);

  const detail = getConsentDetail();
  const previous = window.__lastConsentState;

  window.__lastConsentState = state;
  window.dataLayer = window.dataLayer || [];

  window.gtag?.("consent", "update", {
    analytics_storage: detail.analytics ? "granted" : "denied",
    ad_storage: detail.ads ? "granted" : "denied",
  });

  window.dataLayer.push({
    event: "consent_update",
    consent_state: state,
    consent_status: state,
    analytics_storage: detail.analytics ? "granted" : "denied",
    ad_storage: detail.ads ? "granted" : "denied",
  });

  if (state === "granted") {
    const transitioned = previous !== "granted";

    if (transitioned) {
      window.dataLayer.push({
        event: "consent_granted",
        consent_status: state,
        analytics_storage: detail.analytics ? "granted" : "denied",
        ad_storage: detail.ads ? "granted" : "denied",
      });
    }

    if (!window.__pageViewFired) {
      window.__pageViewFired = true;

      const data = buildMichviData(
        window.location.pathname,
        document.title
      );

      window.dataLayer.push({
        event: "page_view",
        ...data,
        consent_status: state,
        analytics_storage: detail.analytics ? "granted" : "denied",
        ad_storage: detail.ads ? "granted" : "denied",
      });
    }

    flushQueue();
  }
}

/* QUEUE */
function flushQueue(): void {
  const queue = window.__eventQueue || [];
  window.__eventQueue = [];

  queue.forEach(pushEventDirect);
}

function pushEventDirect(evt: DataLayerEvent): void {
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
  if (getConsentState() !== "granted") {
    window.__eventQueue.push(evt);
    return;
  }

  pushEventDirect(evt);
}

/* CONTEXT */
export function buildMichviData(
  pathname: string,
  title: string
): MichviData {
  const params = new URLSearchParams(window.location.search);

  let loadType = "unknown";
  try {
    const nav = performance.getEntriesByType("navigation") as any;
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
    traffic_source: params.get("utm_source") || "direct",
    consent_status: getConsentState(),
    page_load_type: loadType,
    script_version: "v2.7.1",
  };
}

/* HELPERS */
function derivePageType(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/request-assessment") return "form";
  if (pathname === "/contact") return "contact";
  return "page";
}

function derivePageCategory(pathname: string): string {
  if (pathname === "/") return "core";
  if (pathname === "/request-assessment") return "conversion";
  return "general";
}

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