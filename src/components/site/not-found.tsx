import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="flex min-h-[80dvh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[13px] tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-6xl">
        This page folded away.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The URL does not match anything we ship. Head home, or browse products.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Back to UNFLD
      </Link>
    </main>
  );
}
