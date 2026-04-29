"use client";

import { useEffect, useState, type ReactNode } from "react";
import { setConsentState, getConsentState } from "@/lib/dataLayer";

type LocalConsent = {
  analytics: boolean;
  ads: boolean;
};

const DETAIL_KEY = "michvi_consent_detail";
const CORE_KEY = "michvi_consent";

/* ───────── SAFE READ ───────── */
function readDetail(): LocalConsent | null {
  try {
    const raw = localStorage.getItem(DETAIL_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<LocalConsent>;

    if (
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.ads !== "boolean"
    ) {
      return null;
    }

    return {
      analytics: parsed.analytics,
      ads: parsed.ads,
    };
  } catch {
    return null;
  }
}

function readCore(): "granted" | "denied" | null {
  try {
    const raw = localStorage.getItem(CORE_KEY);
    if (raw === "granted" || raw === "denied") return raw;
    return null;
  } catch {
    return null;
  }
}

function isStorageHealthy(): boolean {
  try {
    const probe = "__consent_probe__";
    localStorage.setItem(probe, "1");
    localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

/* ───────── COMPONENT ───────── */
export function ConsentBanner({ logo }: { logo?: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [prefs, setPrefs] = useState<LocalConsent>({
    analytics: false,
    ads: false,
  });

  /* ───────── INIT ───────── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isStorageHealthy()) {
      setVisible(true);
      return;
    }

    const core = readCore();
    const detail = readDetail();

    if (detail) {
      setPrefs(detail);
    }

    // 🔥 FINAL LOGIC
    if (!core || !detail) {
      setVisible(true);
      return;
    }

    setVisible(false);
  }, []);

  /* ───────── OPEN FROM FOOTER ───────── */
  useEffect(() => {
    function openBanner() {
      setVisible(true);
      setCustomize(true);
    }

    window.addEventListener("open-consent", openBanner);
    return () => window.removeEventListener("open-consent", openBanner);
  }, []);

  /* ───────── CROSS TAB SYNC ───────── */
  useEffect(() => {
    function syncConsent() {
      const detail = readDetail();
      const core = readCore();

      if (detail) setPrefs(detail);

      if (!core || !detail) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  /* ───────── APPLY ───────── */
  function apply(state: LocalConsent) {
    const resolved: "granted" | "denied" =
      state.analytics || state.ads ? "granted" : "denied";

    try {
      localStorage.setItem(DETAIL_KEY, JSON.stringify(state));
      localStorage.setItem(CORE_KEY, resolved);
    } catch {}

    setConsentState(resolved);

    setPrefs(state);
    setVisible(false);
    setCustomize(false);
  }

  function acceptAll() {
    apply({ analytics: true, ads: true });
  }

  function rejectAll() {
    apply({ analytics: false, ads: false });
  }

  function savePrefs() {
    apply(prefs);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      style={shellOuter}
    >
      <div style={shellInner}>
        <header style={headerRow}>
          {logo && <div style={logoSlot}>{logo}</div>}

          <div style={{ flex: 1 }}>
            <h3 id="consent-title" style={titleStyle}>
              Privacy & Signal Control
            </h3>

            <p style={subtitleStyle}>
              Essential signals operate by default. Analytics and communication
              signals activate only with your consent.
            </p>
          </div>
        </header>

        {!customize && (
          <>
            <div style={cardGrid}>
              <Card title="Essential" desc="Core functionality and security." />
              <Card title="Analytics" desc="Usage insights." />
              <Card title="Communication" desc="LinkedIn signals." />
            </div>

            <div style={btnRow}>
              <button onClick={acceptAll} style={primaryBtn}>
                Accept All
              </button>

              <button onClick={rejectAll} style={secondaryBtn}>
                Reject Optional
              </button>

              <button onClick={() => setCustomize(true)} style={ghostBtn}>
                Manage Preferences
              </button>
            </div>
          </>
        )}

        {customize && (
          <>
            <div style={prefsList}>
              <Toggle label="Essential" checked disabled />
              <Toggle
                label="Analytics"
                checked={prefs.analytics}
                onChange={(v) =>
                  setPrefs((p) => ({ ...p, analytics: v }))
                }
              />
              <Toggle
                label="Communication (LinkedIn)"
                checked={prefs.ads}
                onChange={(v) =>
                  setPrefs((p) => ({ ...p, ads: v }))
                }
              />
            </div>

            <div style={btnRow}>
              <button onClick={savePrefs} style={primaryBtn}>
                Save Preferences
              </button>

              <button onClick={rejectAll} style={secondaryBtn}>
                Reject
              </button>

              <button onClick={() => setCustomize(false)} style={ghostBtn}>
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────── SMALL COMPONENTS ───────── */
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={card}>
      <div style={cardTitle}>{title}</div>
      <div style={cardDesc}>{desc}</div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label style={row}>
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </label>
  );
}
const shellOuter: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  padding: "16px",
  pointerEvents: "none",
  boxSizing: "border-box",
};

const shellInner: React.CSSProperties = {
  width: "100%",
  maxWidth: "920px",
  maxHeight: "calc(100vh - 32px)",
  overflowY: "auto",
  background: "#0f172a",
  color: "#fff",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 16px 32px rgba(0,0,0,0.25)",
  padding: "20px",
  pointerEvents: "auto",
  boxSizing: "border-box",
};

const headerRow: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "16px",
};

const logoSlot: React.CSSProperties = {
  flex: "0 0 auto",
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "16px",
  fontWeight: 600,
};

const subtitleStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: "13px",
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.72)",
};

const cardGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "10px",
  marginBottom: "14px",
};

const card: React.CSSProperties = {
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.06)",
};

const cardTitle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
};

const cardDesc: React.CSSProperties = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.7)",
  marginTop: "4px",
  lineHeight: 1.5,
};

const btnRow: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const prefsList: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "14px",
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  fontSize: "13px",
  background: "rgba(255,255,255,0.04)",
  padding: "10px 12px",
  borderRadius: "8px",
};

const primaryBtn: React.CSSProperties = {
  background: "#fff",
  color: "#0f172a",
  borderRadius: "8px",
  padding: "9px 16px",
  fontSize: "12px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};

const secondaryBtn: React.CSSProperties = {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "8px",
  padding: "9px 16px",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
};

const ghostBtn: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  borderRadius: "8px",
  padding: "9px 16px",
  fontSize: "12px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
};