import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle, roles } from "@/lib/site";

export const Route = createFileRoute("/careers/open-roles")({
  head: () => ({ meta: [{ title: pageTitle("Open roles") }] }),
  component: OpenRoles,
});

function OpenRoles() {
  const teams = ["All", ...Array.from(new Set(roles.map((r) => r.team)))];
  const [team, setTeam] = useState("All");
  const [sent, setSent] = useState<string | null>(null);

  const filtered = useMemo(
    () => (team === "All" ? roles : roles.filter((r) => r.team === team)),
    [team],
  );

  return (
    <main>
      <PageHero
        kicker="Careers"
        title="Open roles"
        lede="We hire people who have done exceptional work — and want to own the next thing. Applications are read by the team you would join."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="mb-8 flex flex-wrap gap-2">
          {teams.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTeam(t)}
              className={`h-9 rounded-full px-3.5 text-[13px] font-medium ${
                team === t
                  ? "bg-accent text-accent-fg"
                  : "border border-border-strong text-muted hover:text-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {filtered.map((r) => (
            <li key={r.id} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">{r.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {r.team} · {r.locations.join(", ")} · {r.type}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSent(r.id)}
                className="h-10 shrink-0 rounded-full bg-accent px-4 text-[13px] font-medium text-accent-fg"
              >
                {sent === r.id ? "Application noted" : "Apply"}
              </button>
            </li>
          ))}
        </ul>
        {sent ? (
          <p className="mt-6 text-sm text-muted">
            This is a preview — we logged your interest in this role. In production,
            this would open the full application with a statement of exceptional work.
          </p>
        ) : null}
      </Section>
    </main>
  );
}
