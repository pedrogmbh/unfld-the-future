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
    meta: [
      { title: pageTitle(loaderData?.name ?? "Solutions") },
      {
        name: "description",
        content: loaderData?.line ?? "UNFLD Solutions.",
      },
    ],
  }),
  component: Solution,
});

function Solution() {
  const s = Route.useLoaderData();
  const caps: readonly string[] =
    "capabilities" in s && Array.isArray(s.capabilities) ? s.capabilities : [];

  return (
    <main>
      <PageHero
        kicker="Solutions"
        title={s.name}
        lede={s.line}
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/build-with-us" variant="secondary">
              Build with us
            </BtnLink>
          </>
        }
      />
      <Section className="pb-24 sm:pb-32">
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
