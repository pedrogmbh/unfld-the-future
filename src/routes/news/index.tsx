import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { news, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: pageTitle("News") },
      {
        name: "description",
        content:
          "What UNFLD is building—and what we are learning from the work. Product releases, field notes, and company announcements.",
      },
    ],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  return (
    <main>
      <PageHero
        kicker="News & updates"
        title="What UNFLD is building"
        titleSecond="—and what we are learning."
        lede="Product releases, field notes, company decisions, and evidence from the systems we operate."
      />
      <Section className="pb-24 sm:pb-32">
        <ul className="divide-y divide-border border-y border-border">
          {news.map((p) => (
            <li key={p.slug}>
              <Link
                to="/news/$slug"
                params={{ slug: p.slug }}
                className="grid gap-2 py-8 transition-colors hover:opacity-80 sm:grid-cols-[9rem_1fr] sm:gap-10"
              >
                <p className="font-mono text-[13px] text-subtle">{p.date}</p>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {p.standfirst}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
