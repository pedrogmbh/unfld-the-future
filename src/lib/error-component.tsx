import type { ErrorComponentProps } from "@tanstack/react-router";
import { getMessages } from "@/lib/i18n/messages";
import { getCurrentLocale } from "@/lib/i18n/runtime";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const chrome = getMessages(getCurrentLocale()).chrome;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <p className="text-[13px] tracking-[0.2em] text-muted uppercase">
        {chrome.error.kicker}
      </p>
      <h1 className="font-display text-2xl font-medium tracking-tight">
        {chrome.error.title}
      </h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || chrome.error.fallback}
      </p>
    </main>
  );
}
