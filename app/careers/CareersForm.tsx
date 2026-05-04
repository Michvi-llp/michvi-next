"use client";

import { useState, useRef, useEffect } from "react";
import { pushEvent, getConsentState } from "@/lib/dataLayer";

/* ================= TYPES ================= */
type FormStatus = "idle" | "submitting" | "success" | "error";

type CareerFields = {
  name: string;
  email: string;
  role: string;
  message: string;
  website: string;
  profile_link?: string;
};

type Errors = Partial<Record<keyof CareerFields | "consent_ack", string>>;

/* ================= INIT ================= */
const initialFields: CareerFields = {
  name: "",
  email: "",
  role: "",
  message: "",
  website: "",
  profile_link: "",
};

export function CareersForm() {
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
              form_id: "careers_form",
              form_type: "career",
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
      name: keyof CareerFields;
      value: string;
    };

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;

      if (getConsentState() === "granted") {
        pushEvent({
          event: "form_start",
          form_id: "careers_form",
          form_type: "career",
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

    const name = fields.name.trim();
    const email = fields.email.trim();
    const role = fields.role.trim();
    const message = fields.message.trim();

    if (!name) e.name = "Required";

    if (!email) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Invalid email";
    }

    if (!role) e.role = "Required";

    if (!message) {
      e.message = "Required";
    } else if (message.length < 10) {
      e.message = "Add more detail";
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
          form_id: "careers_form",
          form_type: "career",
        });
      }
      return;
    }

    if (fields.website) return;

    const consent = getConsentState();

    if (consent === "granted") {
      pushEvent({
        event: "form_submit",
        form_id: "careers_form",
        form_type: "career",
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
          role: fields.role.trim(),
          message: fields.message.trim(),
          form_type: "career",
          pageUrl: window.location.href,
          pageTitle: document.title,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) throw new Error();

      if (consent === "granted") {
        pushEvent({
          event: "form_success",
          form_id: "careers_form",
          form_type: "career",
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
        <h2>Application submitted.</h2>
        <p>We will review and get back if aligned.</p>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="form-stack"
    >
      {/* HONEYPOT */}
      <input
        name="website"
        value={fields.website}
        onChange={handleChange}
        style={{ display: "none" }}
      />

      {/* ROW */}
      <div className="form-row">
        <div className="form-field">
          <input
            placeholder="Name"
            name="name"
            value={fields.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <input
            placeholder="Role / Position"
            name="role"
            value={fields.role}
            onChange={handleChange}
            className={errors.role ? "input-error" : ""}
          />
          {errors.role && <p className="form-error">{errors.role}</p>}
        </div>

        <div className="form-field">
          <input
            placeholder="Portfolio / Resume Link (optional)"
            name="profile_link"
            value={(fields as any).profile_link || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* TEXTAREA */}
      <div className="form-field">
        <textarea
          placeholder="Brief about your experience"
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      {/* CONSENT */}
      <div className="form-consent">
        <label className={errors.consent_ack ? "label-error" : ""}>
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => {
              setConsentChecked(e.target.checked);

              if (errors.consent_ack) {
                setErrors((prev) => ({ ...prev, consent_ack: "" }));
              }
            }}
            
          />
          <span>
            I agree to data usage as per{" "}
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>
          </span>
        </label>

        {errors.consent_ack && (
          <p className="form-error">{errors.consent_ack}</p>
        )}
      </div>

      {/* BUTTON */}
      <button type="submit" className="form-submit">
        {status === "submitting" ? "Submitting…" : "Apply"}
      </button>
    </form>
  );
}