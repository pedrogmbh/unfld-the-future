import { Link } from "@tanstack/react-router";
import { useMessages } from "@/lib/i18n";

export function NotFound() {
  const { chrome } = useMessages();
  return (
    <main className="flex min-h-[80dvh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[13px] tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-6xl">
        {chrome.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">{chrome.notFound.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
        >
          {chrome.notFound.home}
        </Link>
        <Link
          to="/api"
          className="inline-flex h-11 items-center rounded-full border border-border-strong px-5 text-sm font-medium"
        >
          {chrome.notFound.api}
        </Link>
        <a
          href="/llms.txt"
          className="inline-flex h-11 items-center px-2 text-sm text-muted hover:text-fg"
        >
          llms.txt
        </a>
      </div>
    </main>
  );
}
