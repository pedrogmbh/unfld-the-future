import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { solutions } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
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
    const s = solutions.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return buildPageHead({
        title: "Solutions",
        path: "/solutions",
      });
    }
    return buildPageHead({
      title: `${loaderData.name} Solutions`,
      description: loaderData.line,
      path: `/solutions/${loaderData.slug}`,
    });
  },
  component: Solution,
});

function Solution() {
  const s = Route.useLoaderData();
  const caps: readonly string[] =
    "capabilities" in s && Array.isArray(s.capabilities) ? s.capabilities : [];
  const audience = "audience" in s && typeof s.audience === "string" ? s.audience : "";

  return (
    <main>
      <PageHero
        kicker="Solutions"
        title={s.name}
        lede={s.line}
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            {s.slug === "security" ? (
              <BtnLink to="/compliance" variant="secondary">
                Compliance disclosures
              </BtnLink>
            ) : (
              <BtnLink to="/build-with-us" variant="secondary">
                Build with us
              </BtnLink>
            )}
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        {audience && (
          <div className="mb-8 rounded-xl border border-border bg-bg-elevated p-6 max-w-2xl">
            <p className="text-[11px] font-mono tracking-[0.16em] text-subtle uppercase">
              Target audience & stakeholders
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
            ← All solutions
          </Link>
        </p>
      </Section>
    </main>
  );
}
