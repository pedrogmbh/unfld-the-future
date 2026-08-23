import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { roles, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

export const Route = createFileRoute("/careers/open-roles")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.openRoles;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/careers/open-roles",
      locale: match.context.locale,
    });
  },
  component: OpenRoles,
});

function OpenRoles() {
  const { pages, chrome } = useMessages();
  const p = pages.openRoles;
  const teams = [chrome.common.all, ...Array.from(new Set(roles.map((r) => r.team)))];
  const [team, setTeam] = useState(chrome.common.all);
  const [sent, setSent] = useState<string | null>(null);
  const [emptyBefore, emptyAfter] = p.emptyBody.split("{{email}}");

  const filtered = useMemo(
    () => (team === chrome.common.all ? roles : roles.filter((r) => r.team === team)),
    [team, chrome.common.all],
  );

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
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
                    {sent === r.id ? chrome.common.applicationNoted : chrome.common.apply}
                  </button>
                </li>
              ))}
            </ul>
            {sent ? (
              <p className="mt-6 text-sm text-muted">
                {p.previewNote}
              </p>
            ) : null}
          </>
        ) : (
          <div className="rounded-xl border border-border p-8 text-center sm:p-14">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              {p.emptyTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
              {emptyBefore}
              <a
                href={`mailto:${SITE.careers}`}
                className="text-fg underline-offset-4 hover:underline"
              >
                {SITE.careers}
              </a>
              {emptyAfter}
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
