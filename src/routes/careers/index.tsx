import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { roles, SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeInterview, localizeOffices } from "@/lib/i18n/localize";

export const Route = createFileRoute("/careers/")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.careers;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/careers",
      locale: match.context.locale,
    });
  },
  component: Careers,
});

function Careers() {
  const locale = useLocale();
  const { pages, chrome } = useMessages();
  const p = pages.careers;
  const interviewSteps = localizeInterview(locale);
  const officeList = localizeOffices(locale);
  const [emptyBefore, emptyAfter] = p.emptyBody.split("{{email}}");
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
        actions={
          <BtnLink to="/careers/open-roles">{p.viewRoles}</BtnLink>
        }
      />

      <Section className="pb-16">
        <Kicker>{p.workKicker}</Kicker>
        <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight">
          {p.workTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {p.workLede}
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            [p.t1Title, p.t1Body],
            [p.t2Title, p.t2Body],
            [p.t3Title, p.t3Body],
          ].map(([t, d]) => (
            <article key={t} className="bg-bg p-7">
              <h3 className="font-medium">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <Kicker>{p.joinKicker}</Kicker>
            <h2 className="font-display text-3xl font-medium tracking-tight">
              {p.openRoles}
            </h2>
          </div>
          <Link
            to="/careers/open-roles"
            className="text-[13px] text-muted hover:text-fg"
          >
            {chrome.common.allRolesArrow}
          </Link>
        </div>
        {roles.length > 0 ? (
          <ul className="divide-y divide-border border-y border-border">
            {roles.slice(0, 5).map((r) => (
              <li key={r.id}>
                <Link
                  to="/careers/open-roles"
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-muted">
                    {r.locations.join(" · ")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-border p-8 text-center sm:p-12">
            <p className="font-display text-xl font-medium">
              {p.emptyTitle}
            </p>
            <p className="mt-3 text-sm text-muted">
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

      <Section className="py-16">
        <Kicker>{p.expectKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.interviewTitle}
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {interviewSteps.map((s) => (
            <li key={s.n}>
              <p className="font-mono text-[12px] text-subtle">{s.n}</p>
              <h3 className="mt-3 font-display text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="py-16 pb-24 sm:pb-32">
        <Kicker>{p.officeKicker}</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          {p.officeTitle}
        </h2>
        <div className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/images/office.jpg"
            alt={p.officeAlt}
            className="aspect-[16/7] w-full object-cover"
          />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {officeList.map((o) => (
            <div key={o.city}>
              <p className="font-medium">{o.city}</p>
              <p className="text-sm text-muted">{o.role}</p>
              <p className="font-mono text-[11px] text-subtle">{o.coords}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
