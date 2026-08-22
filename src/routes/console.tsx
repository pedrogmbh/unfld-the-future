import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn } from "@/components/site/buttons";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/console")({
  head: () => ({ meta: [{ title: pageTitle("Console") }] }),
  component: Console,
});

function Console() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [done, setDone] = useState(false);

  return (
    <main className="flex min-h-[85dvh] items-center justify-center px-5 py-28">
      <div className="w-full max-w-md">
        <p className="text-[13px] tracking-[0.18em] text-muted uppercase">
          Console
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          {done
            ? "You are in."
            : mode === "in"
              ? "Log into your account"
              : "Create an account"}
        </h1>
        <p className="mt-3 text-sm text-muted">
          The UNFLD Console is the gateway to Relay keys, Pulse, and billing.
        </p>

        {done ? (
          <div className="mt-8 rounded-xl border border-border p-6">
            <p className="text-sm text-muted">
              Preview session started. In production this is a full workspace
              with keys, usage, and team seats.
            </p>
            <Link
              to="/api"
              className="mt-4 inline-block text-sm font-medium hover:opacity-70"
            >
              Continue to API docs →
            </Link>
          </div>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <Field label="Work email" type="email" autoComplete="email" />
            <Field
              label="Password"
              type="password"
              autoComplete={mode === "in" ? "current-password" : "new-password"}
            />
            <Btn className="w-full" type="submit">
              {mode === "in" ? "Continue" : "Create account"}
            </Btn>
            <p className="text-center text-sm text-muted">
              {mode === "in" ? "Don't have an account? " : "Already have one? "}
              <button
                type="button"
                className="text-fg underline-offset-4 hover:underline"
                onClick={() => setMode(mode === "in" ? "up" : "in")}
              >
                {mode === "in" ? "Sign up" : "Log in"}
              </button>
            </p>
            <p className="text-center text-[12px] text-subtle">
              By continuing you agree to the{" "}
              <Link to="/legal/terms-of-service" className="underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/legal/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </main>
  );
}

function Field({
  label,
  type,
  autoComplete,
}: {
  label: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-muted">{label}</span>
      <input
        required
        type={type}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-lg border border-border-strong bg-bg-elevated px-3 text-sm text-fg outline-none transition-colors focus:border-fg/40"
      />
    </label>
  );
}
