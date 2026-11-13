import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { COMPANY_RECORD } from "@/lib/govtech";
import { SITE, formatAddress } from "@/lib/site";
import { interpolate, useMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CompanyRecord() {
  const { govtech, chrome } = useMessages();
  const t = govtech.record;
  const fields: { label: string; value: string; copy?: boolean; mono?: boolean }[] = [
    { label: t.legalName, value: SITE.legal, copy: true },
    { label: t.tradingName, value: SITE.trading, copy: true },
    { label: t.cnpj, value: SITE.cnpj, copy: true, mono: true },
    { label: t.nire, value: COMPANY_RECORD.nire, copy: true, mono: true },
    { label: t.ccm, value: COMPANY_RECORD.ccm, copy: true, mono: true },
    { label: t.nature, value: `${SITE.legalNatureCode} · ${SITE.legalNature}` },
    { label: t.size, value: t.sizeValue },
    { label: t.primaryCnae, value: `${COMPANY_RECORD.cnaePrimary} · ${t.primaryCnaeName}`, mono: false },
    { label: t.secondaryCnae, value: COMPANY_RECORD.cnaeSecondary.join(" · "), mono: true },
    { label: t.hq, value: formatAddress(), copy: true },
    { label: t.signature, value: t.signatureValue },
    { label: t.email, value: SITE.sales, copy: true },
  ];

  return (
    <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {fields.map((field) => (
        <div key={field.label} className="flex min-w-0 items-start justify-between gap-4 bg-bg p-5 sm:p-6">
          <div className="min-w-0">
            <dt className="text-[12px] tracking-[0.12em] text-subtle uppercase">{field.label}</dt>
            <dd className={cn("mt-2 break-words text-[15px] leading-snug text-fg", field.mono && "font-mono text-[14px]")}>
              {field.value}
            </dd>
          </div>
          {field.copy ? (
            <CopyButton
              value={field.value}
              label={interpolate(t.copyAria, { field: field.label })}
              idle={t.copy}
              done={chrome.copied}
            />
          ) : null}
        </div>
      ))}
    </dl>
  );
}

function CopyButton({ value, label, idle, done }: { value: string; label: string; idle: string; done: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      title={copied ? done : idle}
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-xs border transition-[color,border-color,transform] duration-150 active:scale-[0.96]",
        copied ? "border-gold text-gold" : "border-border text-subtle hover:border-border-strong hover:text-fg",
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      <span className="sr-only" aria-live="polite">
        {copied ? done : ""}
      </span>
    </button>
  );
}
