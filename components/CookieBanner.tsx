"use client";

import { useEffect, useState } from "react";
import { setConsentState, getConsentState } from "@/lib/dataLayer";

type LocalConsent = {
  analytics: boolean;
  ads: boolean;
};

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [prefs, setPrefs] = useState<LocalConsent>({
    analytics: false,
    ads: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consentState = getConsentState();

    try {
      const storedUi = localStorage.getItem("consent_state");
      if (storedUi) {
        const parsed = JSON.parse(storedUi) as Partial<LocalConsent>;
        setPrefs({
          analytics: !!parsed.analytics,
          ads: !!parsed.ads,
        });
      }
    } catch {}

    try {
      const storedCore = localStorage.getItem("michvi_consent");
      if (!storedCore) {
        setVisible(true);
        return;
      }
    } catch {
      setVisible(true);
      return;
    }

    if (consentState === "granted" || consentState === "denied") {
      setVisible(false);
    }
  }, []);

  // 🔥 ADD THIS (SECOND useEffect)
  useEffect(() => {
    function openBanner() {
      setVisible(true);
      setCustomize(true); // direct open settings
    }

    window.addEventListener("open-consent", openBanner);

    return () => {
      window.removeEventListener("open-consent", openBanner);
    };
  }, []);

  function apply(state: LocalConsent) {
    const resolved = state.analytics || state.ads ? "granted" : "denied";

    setConsentState(resolved);

    try {
      localStorage.setItem("consent_state", JSON.stringify(state));
      localStorage.setItem("michvi_consent_detail", JSON.stringify(state));
    } catch {}
    

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
      
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          background: "#0f172a",
          color: "#fff",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 16px 32px rgba(0,0,0,0.25)",
          padding: "18px 20px",
        }}
      >
        {!customize && (
          <>
            {/* HEADER */}
            <div style={{ marginBottom: "10px" }}>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
                Privacy Preferences
              </h3>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Essential technologies run by default. Optional analytics (GA4)
                and targeting (LinkedIn) help us understand usage and improve
                governance insights.
              </p>
            </div>

            {/* CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              {[
                {
                  title: "Essential",
                  desc: "Required for core functionality, security, and form handling.",
                },
                {
                  title: "Analytics",
                  desc: "Usage and engagement measurement (GA4).",
                },
                {
                  title: "Targeting",
                  desc: "Limited advertising signals (LinkedIn).",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 600 }}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.7)",
                      marginTop: "3px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button onClick={acceptAll} style={primaryBtn}>
                Accept All
              </button>

              <button onClick={rejectAll} style={secondaryBtn}>
                Reject Optional
              </button>

              <button
                onClick={() => setCustomize(true)}
                style={ghostBtn}
              >
                Manage Preferences
              </button>
            </div>
          </>
        )}

        {customize && (
          <>
            <h3 style={{ margin: 0, fontSize: "16px" }}>
              Manage Preferences
            </h3>

            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={row}>
                Essential (always active)
                <input type="checkbox" checked readOnly disabled />
              </label>

              <label style={row}>
                Analytics (GA4)
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                  }
                />
              </label>

              <label style={row}>
                Targeting (LinkedIn)
                <input
                  type="checkbox"
                  checked={prefs.ads}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, ads: e.target.checked }))
                  }
                />
              </label>
            </div>

            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <button onClick={savePrefs} style={primaryBtn}>
                Save
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

/* BUTTONS */
const primaryBtn: React.CSSProperties = {
  background: "#fff",
  color: "#0f172a",
  borderRadius: "8px",
  padding: "8px 14px",
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
  padding: "8px 14px",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
};

const ghostBtn: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  borderRadius: "8px",
  padding: "8px 14px",
  fontSize: "12px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
};

const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "13px",
  background: "rgba(255,255,255,0.04)",
  padding: "8px 10px",
  borderRadius: "8px",
};