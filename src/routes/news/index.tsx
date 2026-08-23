import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale, useMessages } from "@/lib/i18n";
import { localizeNews } from "@/lib/i18n/localize";

export const Route = createFileRoute("/news/")({
  head: ({ match }) => {
    const p = getMessages(match.context.locale).pages.news;
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/news",
      locale: match.context.locale,
    });
  },
  component: NewsIndex,
});

function NewsIndex() {
  const locale = useLocale();
  const { pages } = useMessages();
  const p = pages.news;
  const posts = localizeNews(locale);
  return (
    <main>
      <PageHero
        kicker={p.kicker}
        title={p.title}
        titleSecond={p.titleSecond}
        lede={p.lede}
      />
      <Section className="pb-24 sm:pb-32">
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to="/news/$slug"
                params={{ slug: post.slug }}
                className="grid gap-2 py-8 transition-colors hover:opacity-80 sm:grid-cols-[9rem_1fr] sm:gap-10"
              >
                <p className="font-mono text-[13px] text-subtle">{post.date}</p>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {post.standfirst}
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
