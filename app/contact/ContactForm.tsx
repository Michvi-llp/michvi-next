"use client";

import { useState, useRef, useEffect } from "react";
import { pushEvent, getConsentState } from "@/lib/dataLayer";

/* ================= TYPES ================= */
type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFields = {
  name: string;
  email: string;
  organisation: string;
  message: string;
  website: string;
};

type Errors = Partial<Record<keyof ContactFields | "consent_ack", string>>;

/* ================= INIT ================= */
const initialFields: ContactFields = {
  name: "",
  email: "",
  organisation: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [consentChecked, setConsentChecked] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const hasStartedRef = useRef(false);
  const hasViewedRef = useRef(false);

  /* ================= VIEW ================= */
  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasViewedRef.current) {
          hasViewedRef.current = true;

          if (getConsentState() === "granted") {
            pushEvent({
              event: "form_view",
              form_id: "contact_form",
              form_type: "contact",
            });
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= CHANGE ================= */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as {
      name: keyof ContactFields;
      value: string;
    };

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;

      if (getConsentState() === "granted") {
        pushEvent({
          event: "form_start",
          form_id: "contact_form",
          form_type: "contact",
        });
      }
    }

    setFields((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  /* ================= VALIDATE ================= */
  function validate(): Errors {
    const e: Errors = {};

    if (!fields.name.trim()) e.name = "Required";

    if (!fields.email.trim()) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Invalid email";
    }

    if (!fields.organisation.trim()) e.organisation = "Required";

    if (!fields.message.trim()) {
      e.message = "Required";
    } else if (fields.message.length < 15) {
      e.message = "Add more context";
    }

    if (!consentChecked) e.consent_ack = "Required";

    return e;
  }

  /* ================= SUBMIT ================= */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");

      if (getConsentState() === "granted") {
        pushEvent({
          event: "form_error",
          form_id: "contact_form",
          form_type: "contact",
        });
      }
      return;
    }

    if (fields.website) return;

    const consent = getConsentState();

    if (consent === "granted") {
      pushEvent({
        event: "form_submit",
        form_id: "contact_form",
        form_type: "contact",
      });
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          organisation: fields.organisation.trim(),
          message: fields.message.trim(),
          form_type: "contact",
          pageUrl: window.location.href,
          pageTitle: document.title,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) throw new Error();

      if (consent === "granted") {
        pushEvent({
          event: "form_success",
          form_id: "contact_form",
          form_type: "contact",
        });
      }

      setStatus("success");
      setFields(initialFields);
      setConsentChecked(false);
      hasStartedRef.current = false;
    } catch {
      setStatus("error");
    }
  }

  /* ================= SUCCESS ================= */
  if (status === "success") {
    return (
      <div style={{ padding: "40px 0" }}>
        <span className="mono">Received</span>
        <h2>Inquiry submitted.</h2>
        <p>We will review and respond where appropriate.</p>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>

      {/* HONEYPOT */}
      <input
        name="website"
        value={fields.website}
        onChange={handleChange}
        style={{ display: "none" }}
      />

      {/* NAME */}
      <div className="form-field">
        <input
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div className="form-field">
        <input
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      {/* ORGANISATION */}
      <div className="form-field">
        <input
          name="organisation"
          placeholder="Organisation"
          value={fields.organisation}
          onChange={handleChange}
          className={errors.organisation ? "input-error" : ""}
        />
        {errors.organisation && (
          <p className="form-error">{errors.organisation}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="form-field">
        <textarea
          name="message"
          placeholder="Brief context of your inquiry"
          value={fields.message}
          onChange={handleChange}
          rows={6}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      {/* CONSENT */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
        }}
      >
        <label
          className={errors.consent_ack ? "label-error" : ""}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-tertiary)",
            whiteSpace: "nowrap",
          }}
        >
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => {
              setConsentChecked(e.target.checked);
              if (errors.consent_ack) {
                setErrors((prev) => ({ ...prev, consent_ack: "" }));
              }
            }}
            style={{ margin: 0 }} // 🔥 remove browser offset
          />

          <span>
            I agree to data usage as per{" "}
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      {errors.consent_ack && (
        <p className="form-error center" style={{ marginTop: "6px" }}>
          {errors.consent_ack}
        </p>
      )}

      {/* BUTTON */}
      <button type="submit" className="form-submit">
        {status === "submitting" ? "Submitting…" : "Send Inquiry"}
      </button>

    </form>
  );
}