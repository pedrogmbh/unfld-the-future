import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CodeBlock } from "@/components/site/code-block";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";
import { buildPageHead } from "@/lib/meta";
import { useMessages } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n/messages";
import { localizeNewsPost } from "@/lib/i18n/localize";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params, context }) => {
    const post = localizeNewsPost(params.slug, context.locale);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, match }) => {
    if (!loaderData) {
      return buildPageHead({
        title: getMessages(match.context.locale).pages.news.metaTitle,
        path: "/news",
        locale: match.context.locale,
      });
    }
    return buildPageHead({
      title: loaderData.title,
      description: loaderData.standfirst,
      path: `/news/${loaderData.slug}`,
      type: "article",
      locale: match.context.locale,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: loaderData.title,
        description: loaderData.standfirst,
        datePublished: loaderData.date,
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
          logo: `${SITE.url}/favicon.svg`,
        },
        author: {
          "@type": "Organization",
          name: SITE.name,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE.url}/news/${loaderData.slug}`,
        },
      },
    });
  },
  component: NewsPost,
});

function NewsPost() {
  const post = Route.useLoaderData();
  const { chrome } = useMessages();
  return (
    <main>
      <PageHero kicker={post.date} title={post.title} lede={post.standfirst} />
      <Section className="pb-24 sm:pb-32">
        <article className="max-w-2xl space-y-6 text-[16px] leading-[1.7] text-muted">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </article>
        {post.code ? (
          <div className="mt-12 max-w-2xl">
            <CodeBlock code={post.code.content} filename={post.code.filename} />
          </div>
        ) : null}
        <p className="mt-16">
          <Link to="/news" className="text-sm text-muted hover:text-fg">
            {chrome.common.allPostsBack}
          </Link>
        </p>
      </Section>
    </main>
  );
}
