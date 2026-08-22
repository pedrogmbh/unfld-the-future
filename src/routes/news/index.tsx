import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { news, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/news/")({
  head: () => ({ meta: [{ title: pageTitle("News") }] }),
  component: NewsIndex,
});

function NewsIndex() {
  return (
    <main>
      <PageHero
        kicker="News"
        title="Research, product,"
        titleSecond="and company."
        lede="Announcements from UNFLD — products we ship, places we open, and the long unfold from software house to product company."
      />
      <Section className="pb-24 sm:pb-32">
        <ul className="divide-y divide-border border-y border-border">
          {news.map((p) => (
            <li key={p.slug}>
              <Link
                to="/news/$slug"
                params={{ slug: p.slug }}
                className="grid gap-2 py-8 sm:grid-cols-[9rem_1fr] sm:gap-10"
              >
                <p className="text-[13px] text-subtle">{p.date}</p>
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
