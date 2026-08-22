import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle, solutions } from "@/lib/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const s = solutions.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: pageTitle(loaderData?.name ?? "Solutions") }],
  }),
  component: Solution,
});

function Solution() {
  const s = Route.useLoaderData();
  return (
    <main>
      <PageHero
        kicker="Solutions"
        title={s.name}
        lede={s.line}
        actions={
          <>
            <BtnLink to="/contact">Talk to sales</BtnLink>
            <BtnLink to="/enterprise" variant="secondary">
              Enterprise
            </BtnLink>
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
        <p className="max-w-2xl text-[16px] leading-relaxed text-muted">{s.body}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            "Named onboarding",
            "SSO and SCIM",
            "No training on your data",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-border p-5 text-sm">
              {t}
            </div>
          ))}
        </div>
        <p className="mt-12">
          <Link to="/solutions" className="text-sm text-muted hover:text-fg">
            ← All solutions
          </Link>
        </p>
      </Section>
    </main>
  );
}
