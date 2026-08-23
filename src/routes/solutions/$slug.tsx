import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { interpolate } from "@/lib/i18n/interpolate";
import { getMessages } from "@/lib/i18n/messages";
import { useMessages } from "@/lib/i18n";
import { localizeSolutions } from "@/lib/i18n/localize";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params, context }) => {
    if (params.slug === "support") {
      throw redirect({
        to: "/solutions/$slug",
        params: { slug: "operations" },
        statusCode: 301,
      });
    }
    if (params.slug === "business") {
      throw redirect({
        to: "/solutions/$slug",
        params: { slug: "small-business" },
        statusCode: 301,
      });
    }
    if (params.slug === "security") {
      throw redirect({
        to: "/security",
        statusCode: 301,
      });
    }
    const s = localizeSolutions(context.locale).find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData, match }) => {
    const p = getMessages(match.context.locale).pages.solutions;
    if (!loaderData) {
      return buildPageHead({
        title: p.metaTitle,
        path: "/solutions",
        locale: match.context.locale,
      });
    }
    return buildPageHead({
      title: interpolate(p.detailTitle, { name: loaderData.name }),
      description: loaderData.line,
      path: `/solutions/${loaderData.slug}`,
      locale: match.context.locale,
    });
  },
  component: Solution,
});

function Solution() {
  const s = Route.useLoaderData();
  const { pages, chrome } = useMessages();
  const p = pages.solutions;
  const caps: readonly string[] =
    "capabilities" in s && Array.isArray(s.capabilities) ? s.capabilities : [];
  const audience = "audience" in s && typeof s.audience === "string" ? s.audience : "";

  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={s.name}
        lede={s.line}
        actions={
          <>
            <BtnLink to="/contact">{chrome.talkToUnfld}</BtnLink>
            {s.slug === "security" ? (
              <BtnLink to="/compliance" variant="secondary">
                {chrome.common.complianceDisclosures}
              </BtnLink>
            ) : (
              <BtnLink to="/build-with-us" variant="secondary">
                {chrome.common.buildWithUs}
              </BtnLink>
            )}
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        {audience && (
          <div className="mb-8 rounded-xl border border-border bg-bg-elevated p-6 max-w-2xl">
            <p className="text-[11px] font-mono tracking-[0.16em] text-subtle uppercase">
              {p.audience}
            </p>
            <p className="mt-2 text-sm text-fg leading-relaxed">{audience}</p>
          </div>
        )}
        <p className="max-w-2xl text-[16px] leading-relaxed text-muted">{s.body}</p>
        {caps.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {caps.map((t: string) => (
              <div key={t} className="rounded-xl border border-border p-5 text-sm">
                <p className="font-medium text-fg">{t}</p>
              </div>
            ))}
          </div>
        )}
        <p className="mt-12">
          <Link to="/solutions" className="text-sm text-muted hover:text-fg">
            {chrome.common.allSolutions}
          </Link>
        </p>
      </Section>
    </main>
  );
}
