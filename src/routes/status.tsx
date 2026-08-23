import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";

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
  const { pages } = useMessages();
  const p = pages.status;
  const services = [
    { domain: "unfld.com.br", role: p.corporate, status: p.operational },
    { domain: "sitecreator.com.br", role: "SiteCreator", status: p.operational },
    { domain: "doutorfiscal.com", role: "Doutor Fiscal", status: p.operational },
    { domain: "dialoguspsicossocial.com.br", role: "Dialogus", status: p.operational },
    { domain: "queravaga.com", role: "Queravaga", status: p.operational },
    { domain: "App Store (FCR)", role: p.fcrRole, status: p.operational },
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
                key={s.domain}
                className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 last:border-0"
              >
                <div>
                  <p className="font-mono text-[13px]">{s.domain}</p>
                  <p className="text-[12px] text-subtle">{s.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-sm text-fg">{s.status}</p>
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
