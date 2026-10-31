"use client";

import { Fragment, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import config, { type ApplyField } from "@/hackuncp.config";
import { Newsletter } from "./Subscribe";
import { asset } from "./asset";

const { apply, links } = config;

/** "[text](url)" in a label becomes a link that opens in a new tab. */
function rich(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <a key={i} href={m[2]} target="_blank" rel="noreferrer" className="underline underline-offset-2">
        {m[1]}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}

function Field({ field: f }: { field: ApplyField }) {
  const id = `apply-${f.name}`;
  const span = f.wide || f.type === "check" || f.type === "chips" ? "setup-wide" : "";
  const label = (
    <>
      {f.label}
      {!f.required && f.type !== "check" && <span className="setup-optional"> (optional)</span>}
    </>
  );

  switch (f.type) {
    case "check":
      return (
        <label className={`setup-check ${span}`}>
          <input type="checkbox" name={f.name} value="yes" required={f.required} />
          <span>
            {rich(f.label)}
            {f.required && <span className="setup-required"> *</span>}
          </span>
        </label>
      );
    case "chips":
      return (
        <fieldset className={`setup-field ${span}`}>
          <legend className="setup-label">{label}</legend>
          <div className="setup-chips">
            {f.options?.map((o) => (
              <label key={o} className="setup-chip">
                <input type="checkbox" name={f.name} value={o} />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      );
    case "select":
      return (
        <div className={`setup-field ${span}`}>
          <label htmlFor={id} className="setup-label">
            {label}
          </label>
          <select id={id} name={f.name} required={f.required} defaultValue="" className="setup-input">
            <option value="" disabled={f.required}>
              Choose…
            </option>
            {f.options?.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      );
    case "textarea":
      return (
        <div className={`setup-field ${span}`}>
          <label htmlFor={id} className="setup-label">
            {label}
          </label>
          <textarea id={id} name={f.name} required={f.required} rows={4} placeholder={f.placeholder} className="setup-input" />
        </div>
      );
    default:
      return (
        <div className={`setup-field ${span}`}>
          <label htmlFor={id} className="setup-label">
            {label}
          </label>
          <input
            id={id}
            name={f.name}
            type={f.type}
            required={f.required}
            autoComplete={f.autoComplete}
            placeholder={f.placeholder}
            min={f.type === "number" ? 1 : undefined}
            className="setup-input"
          />
        </div>
      );
  }
}

/** The built-in application: one fieldset per step, all inside one form so every answer is sent together. */
function Wizard({ preview }: { preview: boolean }) {
  const steps = apply.steps;
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"filling" | "sending" | "done" | "error">("filling");
  const form = useRef<HTMLFormElement>(null);
  const last = step === steps.length - 1;

  // Each step is checked before moving on, so the browser's own messages point at the right field.
  const stepIsValid = () => {
    const fieldset = form.current?.querySelector(`[data-step="${step}"]`);
    for (const el of fieldset?.querySelectorAll<HTMLInputElement>("input, select, textarea") ?? []) {
      if (!el.checkValidity()) {
        el.reportValidity();
        return false;
      }
    }
    return true;
  };

  const go = (to: number) => {
    setStep(to);
    form.current?.querySelector(".setup-main")?.scrollTo({ top: 0 });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stepIsValid()) return;
    if (preview || !apply.action) return setStatus("done");
    setStatus("sending");
    try {
      await fetch(apply.action, { method: "POST", body: new FormData(e.currentTarget), mode: "no-cors" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={form} noValidate onSubmit={submit} className="setup">
      <aside className="setup-rail">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="setup-logo" />
        <p className="setup-product">{apply.product}</p>
        <ol className="setup-steps">
          {steps.map((s, i) => (
            <li key={s.title} data-state={status === "done" || i < step ? "done" : i === step ? "current" : "todo"}>
              <span className="setup-num" aria-hidden="true">
                {status === "done" || i < step ? "✓" : i + 1}
              </span>
              {s.title}
            </li>
          ))}
        </ol>
      </aside>

      <div className="setup-main">
        {preview && (
          <p className="setup-preview">Preview: this form isn&apos;t connected yet, so nothing you enter is sent anywhere.</p>
        )}

        {status === "done" ? (
          <div className="setup-done" role="status">
            <p className="setup-done-mark" aria-hidden="true">
              ✓
            </p>
            <h2 className="newsletter-heading">{preview ? "That's the whole form" : apply.done.heading}</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/75">
              {preview ? "In preview nothing was sent. Once the form is connected, applicants see this:" : apply.done.body}
            </p>
            {preview && <p className="mt-2 text-[16px] leading-relaxed text-ink/75">“{apply.done.body}”</p>}
          </div>
        ) : (
          <>
            {steps.map((s, i) => (
              <fieldset key={s.title} data-step={i} hidden={i !== step} className="setup-step">
                <legend className="setup-title">
                  <span className="setup-count">
                    Step {i + 1} of {steps.length}
                  </span>
                  {s.title}
                </legend>
                <div className="setup-grid">
                  {s.fields.map((f) => (
                    <Field key={f.name} field={f} />
                  ))}
                </div>
              </fieldset>
            ))}

            <div className="setup-footer">
              <div className="setup-progress" aria-hidden="true">
                <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
              </div>
              {status === "error" && <p className="text-sm text-[#b8473a]">Something went wrong. Please try again.</p>}
              <div className="ml-auto flex gap-2">
                <button type="button" className="setup-btn" onClick={() => go(step - 1)} disabled={step === 0}>
                  Back
                </button>
                {last ? (
                  <button type="submit" className="setup-btn setup-btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Submit application"}
                  </button>
                ) : (
                  <button type="button" className="setup-btn setup-btn-primary" onClick={() => stepIsValid() && go(step + 1)}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

/** Before applications open: an "installing…" screen with the mailing list. */
function ComingSoon() {
  return (
    <div className="px-6 pb-6 pt-7 sm:px-12 sm:pb-8 sm:pt-10">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="h-auto w-20 sm:w-24" />
        <div>
          <p className="eyebrow">{apply.product}</p>
          <h2 className="newsletter-heading">{apply.soon.heading}</h2>
        </div>
      </div>
      <div className="setup-installing" aria-hidden="true">
        <span />
      </div>
      <p className="mt-4 text-[16px] leading-relaxed text-ink/75">{apply.soon.body}</p>
      <div className="mt-2">
        <Newsletter heading={false} />
      </div>
    </div>
  );
}

/** The apply window or section: an outside application, the built-in form, or "coming soon". */
export function ApplyBody() {
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setPreview(new URLSearchParams(window.location.search).get("apply") === "preview");
  }, []);

  if (links.apply) {
    return (
      <div className="grid gap-4 px-6 pb-8 pt-7 sm:px-12 sm:pt-10">
        <p className="eyebrow">{apply.product}</p>
        <h2 className="newsletter-heading">{apply.external.heading}</h2>
        <p className="text-[16px] leading-relaxed text-ink/75">{apply.external.body}</p>
        <a href={links.apply} target="_blank" rel="noreferrer" className="btn-rose justify-self-start">
          {apply.external.button}
        </a>
      </div>
    );
  }
  if (apply.action || preview) return <Wizard preview={!apply.action} />;
  return <ComingSoon />;
}
