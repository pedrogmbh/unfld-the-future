import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle, roles, SITE } from "@/lib/site";

export const Route = createFileRoute("/careers/open-roles")({
  head: () => ({
    meta: [
      { title: pageTitle("Open roles") },
      {
        name: "description",
        content:
          "Open work at UNFLD. Every listed role is approved, funded, and actively reviewed by the team it will join.",
      },
    ],
  }),
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
        title="Open work"
        titleSecond="at UNFLD."
        lede="Every role below is approved, funded, and actively reviewed by the team it will join."
      />
      <Section className="pb-24 sm:pb-32">
        {roles.length > 0 ? (
          <>
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
                <li
                  key={r.id}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
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
                This is a preview — we logged your interest in this role.
              </p>
            ) : null}
          </>
        ) : (
          <div className="rounded-xl border border-border p-8 text-center sm:p-14">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              No open roles right now.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
              We review every introduction personally. You can introduce yourself, describe your background, and share work you are proud of at{" "}
              <a
                href={`mailto:${SITE.careers}`}
                className="text-fg underline-offset-4 hover:underline"
              >
                {SITE.careers}
              </a>
              .
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
