import { LOCALE_META, LOCALES } from "@/lib/i18n/locales";
import { useLocale, useMessages, useSetLocale } from "@/lib/i18n";
import { interpolate } from "@/lib/i18n/interpolate";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const { chrome } = useMessages();

  return (
    <div
      role="group"
      aria-label={chrome.language}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono text-[11px]",
        className,
      )}
    >
      {LOCALES.map((code, index) => {
        const meta = LOCALE_META[code];
        const active = code === locale;
        return (
          <span key={code} className="inline-flex items-center gap-1">
            {index > 0 ? <span className="text-subtle">/</span> : null}
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={active}
              aria-label={interpolate(chrome.switchTo, { name: meta.native })}
              title={meta.native}
              className={cn(
                "transition-colors duration-150",
                active
                  ? "text-fg font-medium"
                  : "text-subtle hover:text-muted",
              )}
            >
              {compact ? meta.short : meta.short}
            </button>
          </span>
        );
      })}
    </div>
  );
}
