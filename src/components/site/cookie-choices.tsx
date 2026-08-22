import { useEffect, useState } from "react";
import { Btn } from "@/components/site/buttons";

export function CookieChoices({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState(true);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

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
        className="relative w-full max-w-md rounded-xl border border-border-strong bg-bg-elevated p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        <p
          id="privacy-choices-title"
          className="font-display text-xl font-medium tracking-tight"
        >
          Privacy choices
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Essential cookies keep the site working. Optional cookies help us
          understand traffic. We do not sell personal information.
        </p>
        <ul className="mt-5 space-y-3">
          <Toggle
            label="Essential"
            hint="Required for security and basic function."
            checked
            locked
          />
          <Toggle
            label="Analytics"
            hint="Anonymous usage to improve products."
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            label="Advertising"
            hint="Off by default. We rarely use this."
            checked={ads}
            onChange={setAds}
          />
        </ul>
        <div className="mt-6 flex justify-end gap-2">
          <Btn variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Btn>
          <Btn
            size="sm"
            onClick={() => {
              try {
                localStorage.setItem(
                  "unfld-privacy",
                  JSON.stringify({ analytics, ads }),
                );
              } catch {
                /* ignore */
              }
              onClose();
            }}
          >
            Save
          </Btn>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  hint,
  checked,
  locked,
  onChange,
}: {
  label: string;
  hint: string;
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
        aria-checked={checked}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-0.5 h-6 w-10 shrink-0 rounded-full transition-colors duration-150 ${
          checked ? "bg-fg" : "bg-border-strong"
        } ${locked ? "opacity-60" : ""}`}
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
