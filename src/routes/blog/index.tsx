import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { useLocale, useMessages } from "@/lib/i18n";
import { organizationId } from "@/lib/jsonld";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { formatBlogDate, postByline, publishedPosts } from "@/lib/blog/posts";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: ({ match }) => {
    const locale = match.context.locale;
    const p = getMessages(locale).pages.blog;
    const entries = publishedPosts();
    return buildPageHead({
      title: p.metaTitle,
      description: p.metaDescription,
      path: "/blog",
      locale,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${SITE.name} ${p.metaTitle}`,
        description: p.metaDescription,
        url: `${SITE.url}/blog`,
        inLanguage: locale,
        publisher: { "@id": organizationId() },
        blogPost: entries.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: post.inLanguage,
          url: `${SITE.url}/blog/${post.slug}`,
          image: `${SITE.url}${post.ogImage}`,
        })),
      },
    });
  },
  component: BlogIndex,
});

function BlogIndex() {
  const locale = useLocale();
  const { pages } = useMessages();
  const t = pages.blog;
  const [featured, ...rest] = publishedPosts();

  return (
    <main>
      <PageHero kicker={t.kicker} title={t.title} lede={t.lede} />
      {featured ? (
        <Section className="pb-16">
          <article lang={featured.inLanguage}>
            <p className="font-mono text-[12px] tracking-[0.16em] text-subtle uppercase">
              {t.featured}
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group mt-6 block min-w-0"
            >
              <div className="overflow-hidden rounded-xl">
                <picture>
                  <source srcSet={featured.cover.replace(/\.webp$/, ".avif")} type="image/avif" />
                  <img
                    src={featured.cover}
                    alt={featured.coverAlt}
                    width={1600}
                    height={900}
                    fetchPriority="high"
                    className="aspect-[16/9] w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </picture>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-subtle">
                <time dateTime={featured.date}>{formatBlogDate(featured.date, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.inLanguage}</span>
                <span aria-hidden="true">·</span>
                <span>{postByline(featured)}</span>
              </div>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(1.8rem,4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] transition-opacity duration-150 group-hover:opacity-80">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
                {featured.description}
              </p>
              <p className="mt-6 text-[15px] font-medium text-fg">
                {t.read} <span aria-hidden="true">→</span>
              </p>
            </Link>
          </article>
        </Section>
      ) : null}
      {rest.length > 0 ? (
        <Section className="pb-24 sm:pb-32">
          <ul className="divide-y divide-border border-y border-border">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  lang={post.inLanguage}
                  className="grid min-w-0 gap-2 py-8 transition-opacity duration-150 hover:opacity-80 sm:grid-cols-[11rem_1fr] sm:gap-10"
                >
                  <p className="font-mono text-[13px] text-subtle">
                    <time dateTime={post.date}>{formatBlogDate(post.date, locale)}</time>
                  </p>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <div className="h-8 sm:h-16" />
      )}
    </main>
  );
}
