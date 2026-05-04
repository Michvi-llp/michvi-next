"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { pushEvent, getConsentState } from "@/lib/dataLayer";

type FormStatus = "idle" | "submitting" | "success" | "error";

type AssessmentFields = {
  name: string;
  organisation: string;
  role: string;
  email: string;
  context: string;
  website: string;
};

type FieldErrors = Partial<
  Record<keyof AssessmentFields | "consent_ack", string>
>;

type FieldProps = {
  label: string;
  name: "name" | "organisation" | "role" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
};

const initialFields: AssessmentFields = {
  name: "",
  organisation: "",
  role: "",
  email: "",
  context: "",
  website: "",
};

export function AssessmentForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);

  const isSubmitting = status === "submitting";

  const hasStartedRef = useRef(false);
  const hasViewedRef = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  /* VIEW */
  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasViewedRef.current) {
            hasViewedRef.current = true;

            if (getConsentState() === "granted") {
              pushEvent({
                event: "form_view",
                form_id: "assessment_form",
                form_type: "advisory_intake",
              });
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  /* CHANGE */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target as {
      name: keyof AssessmentFields;
      value: string;
    };

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;

      if (getConsentState() === "granted") {
        pushEvent({
          event: "form_start",
          form_id: "assessment_form",
          form_type: "advisory_intake",
        });
      }
    }

    setFields((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  const trimmedFields = useMemo(
    () => ({
      name: fields.name.trim(),
      organisation: fields.organisation.trim(),
      role: fields.role.trim(),
      email: fields.email.trim(),
      context: fields.context.trim(),
      website: fields.website.trim(),
    }),
    [fields]
  );

  /* VALIDATE */
  function validate(): FieldErrors {
    const e: FieldErrors = {};

    if (!trimmedFields.name) e.name = "Required";
    if (!trimmedFields.organisation) e.organisation = "Required";
    if (!trimmedFields.role) e.role = "Required";

    if (!trimmedFields.email) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedFields.email)) {
      e.email = "Invalid email";
    }

    if (!trimmedFields.context) {
      e.context = "Required";
    } else if (trimmedFields.context.length < 20) {
      e.context = "Add more detail";
    }

    if (!consentChecked) {
      e.consent_ack = "Required";
    }

    return e;
  }

  /* SUBMIT */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please complete required fields.");

      if (getConsentState() === "granted") {
        pushEvent({
          event: "form_error",
          form_id: "assessment_form",
          form_type: "advisory_intake",
        });
      }
      return;
    }

    if (trimmedFields.website) return;

    const consent = getConsentState();

    if (consent === "granted") {
      pushEvent({
        event: "form_submit",
        form_id: "assessment_form",
        form_type: "advisory_intake",
      });
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...trimmedFields,
          form_type: "advisory_intake",
          pageUrl: window.location.href,
          pageTitle: document.title,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) throw new Error();

      if (consent === "granted") {
        pushEvent({
          event: "form_success",
          form_id: "assessment_form",
          form_type: "advisory_intake",
        });
      }

      setStatus("success");
      setFields(initialFields);
      setErrors({});
      setConsentChecked(false);
      hasStartedRef.current = false;
    } catch {
      setStatus("error");
      setMessage("Submission failed. Try again.");
    }
  }

  /* SUCCESS STATE */
  if (status === "success") {
    return (
      <div style={{ padding: "40px 0" }}>
        <span className="mono">Received</span>
        <h2>Request submitted.</h2>
        <p>We will respond within five working days.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} id="assessment_form" noValidate onSubmit={handleSubmit}>
      <input
        name="website"
        type="text"
        value={fields.website}
        onChange={handleChange}
        style={{ display: "none" }}
      />

      <Field label="Name" name="name" value={fields.name} onChange={handleChange} error={errors.name} autoComplete="name" />
      <Field label="Organisation" name="organisation" value={fields.organisation} onChange={handleChange} error={errors.organisation} autoComplete="organization" />
      <Field label="Role" name="role" value={fields.role} onChange={handleChange} error={errors.role} autoComplete="organization-title" />
      <Field label="Email" name="email" type="email" value={fields.email} onChange={handleChange} error={errors.email} autoComplete="email" />

      {/* 🔥 CONTEXT FIX */}
      <div className="form-field">
        <label>Context</label>
        <textarea
          name="context"
          value={fields.context}
          onChange={handleChange}
          rows={6}
          placeholder="Briefly describe your system, concern, or what triggered this request (e.g. attribution gaps, consent concerns, data inconsistency, regulatory exposure)"
          className={errors.context ? "input-error" : ""}
        />
        {errors.context && <p className="form-error">{errors.context}</p>}
      </div>

      {/* 🔥 CONSENT */}
      <div style={{ marginBottom: "16px" }}>
        <label
          className={errors.consent_ack ? "label-error" : ""}
          style={{ display: "flex", gap: "8px" }}
        >
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
          />
          <span style={{ fontSize: "13px" }}>
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

      {status === "error" && message && (
        <p className="form-error-global">{message}</p>
      )}

      {/* 🔥 CTA FIX */}
      <button type="submit" disabled={isSubmitting} className="btn-dark">
        {isSubmitting ? "Submitting…" : "Submit Governance Request"}
      </button>

      {/* 🔥 MICRO TRUST */}
      <p className="muted" style={{ marginTop: "12px", fontSize: "12px" }}>
        No automated outreach · No vendor follow-ups · Direct advisory response
      </p>
    </form>
  );
}

/* FIELD */
function Field({ label, name, value, onChange, error, type = "text", autoComplete }: FieldProps) {
  return (
    <div className="form-field">
      <label className={error ? "label-error" : ""}>
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        autoComplete={autoComplete}
        className={error ? "input-error" : ""}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}