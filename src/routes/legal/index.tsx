import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeFooter } from "@/lib/i18n/localize";

export const Route = createFileRoute("/legal/")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.legalIndex;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/legal",
      locale: match.context.locale,
    });
  },
  component: LegalIndex,
});

function LegalIndex() {
  const locale = useLocale();
  const { pages } = useMessages();
  const p = pages.legalIndex;
  const legalLinks = localizeFooter(locale).legal;
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        lede={p.lede}
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              {p.terms}
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/terms-of-service" label={p.tos} />
              <Item
                to="/legal/terms-of-service-enterprise"
                label={p.enterprise}
              />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              {p.policies}
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/acceptable-use-policy" label={p.aup} />
              <Item to="/legal/privacy-policy" label={p.privacy} />
              <Item to="/legal/cookie-policy" label={p.cookies} />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              {p.other}
            </h2>
            <ul className="mt-4 space-y-3">
              <Item to="/legal/brand-guidelines" label={p.brand} />
              <Item to="/security" label={p.security} />
              <Item to="/compliance" label={p.compliance} />
              <Item to="/contact" label={p.legalRequest} />
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] tracking-[0.16em] text-subtle uppercase">
              {p.quick}
            </h2>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <Item key={l.to} to={l.to} label={l.label} />
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Item({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link to={to as never} className="text-[15px] hover:opacity-70">
        {label}
      </Link>
    </li>
  );
}
