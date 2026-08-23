import { useEffect, useState } from "react";
import { Btn } from "@/components/site/buttons";

export function CookieChoices({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("unfld-privacy");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed?.analytics === "boolean") setAnalytics(parsed.analytics);
        if (typeof parsed?.ads === "boolean") setAds(parsed.ads);
      }
    } catch {
      /* ignore */
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const savePreferences = (options: { analytics: boolean; ads: boolean }) => {
    try {
      localStorage.setItem("unfld-privacy", JSON.stringify(options));
    } catch {
      /* ignore */
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-bg/70"
        aria-label="Close privacy choices"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-labelledby="privacy-choices-title"
        className="relative w-full max-w-lg rounded-xl border border-border-strong bg-bg-elevated p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        <p
          id="privacy-choices-title"
          className="font-display text-xl font-medium tracking-tight"
        >
          Privacy choices
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Essential cookies keep the site working securely. Optional cookies help us
          understand traffic only with your consent. We do not sell personal information.
        </p>
        <ul className="mt-5 space-y-3">
          <Toggle
            label="Essential"
            hint="Required for security, authentication, and core functionality."
            ariaLabel="Essential cookies"
            checked
            locked
          />
          <Toggle
            label="Analytics"
            hint="Aggregated usage telemetry to improve performance and products."
            ariaLabel="Analytics cookies"
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            label="Advertising"
            hint="Off by default. Third-party marketing cookies."
            ariaLabel="Advertising cookies"
            checked={ads}
            onChange={setAds}
          />
        </ul>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <Btn
              variant="secondary"
              size="sm"
              onClick={() => {
                setAnalytics(false);
                setAds(false);
                savePreferences({ analytics: false, ads: false });
              }}
            >
              Reject optional
            </Btn>
            <Btn
              variant="secondary"
              size="sm"
              onClick={() => {
                setAnalytics(true);
                setAds(true);
                savePreferences({ analytics: true, ads: true });
              }}
            >
              Accept optional
            </Btn>
          </div>
          <div className="flex justify-end gap-2">
            <Btn variant="secondary" size="sm" onClick={onClose}>
              Cancel
            </Btn>
            <Btn
              size="sm"
              onClick={() => {
                savePreferences({ analytics, ads });
              }}
            >
              Save choices
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  hint,
  ariaLabel,
  checked,
  locked,
  onChange,
}: {
  label: string;
  hint: string;
  ariaLabel: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <li className="flex items-start justify-between gap-4 rounded-lg border border-border px-3 py-3">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted">{hint}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-label={ariaLabel}
        aria-checked={checked}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-0.5 h-6 w-10 shrink-0 rounded-full transition-colors duration-150 ${
          checked ? "bg-fg" : "bg-border-strong"
        } ${locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-bg transition-transform duration-150 ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </button>
    </li>
  );
}
