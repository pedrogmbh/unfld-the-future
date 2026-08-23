import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeOwnedProducts } from "@/lib/i18n/localize";

export const Route = createFileRoute("/status")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.status;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/status",
      locale: match.context.locale,
    });
  },
  component: Status,
});

function Status() {
  const locale = useLocale();
  const { pages } = useMessages();
  const p = pages.status;
  const services = [
    { name: SITE.name, role: p.corporate },
    ...localizeOwnedProducts(locale).map((product) => ({
      name: product.shortName,
      role: product.kicker,
    })),
  ];
  const [contactBefore, contactAfter] = p.contact.split("{{email}}");
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
      />
      <Section className="pb-24 sm:pb-32">
        <div className="rounded-xl border border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="text-sm font-medium">{p.monitored}</p>
            <p className="text-[12px] text-subtle">{p.editorial}</p>
          </div>
          <ul>
            {services.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-0"
              >
                <div>
                  <p className="text-sm text-fg">{s.name}</p>
                  <p className="text-[12px] text-subtle">{s.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="size-2 rounded-full bg-status"
                  />
                  <p className="text-sm text-fg">{p.operational}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-muted">
          {contactBefore}
          <a
            href={`mailto:${SITE.security}`}
            className="text-fg underline-offset-4 hover:underline"
          >
            {SITE.security}
          </a>
          {contactAfter}
        </p>
      </Section>
    </main>
  );
}
