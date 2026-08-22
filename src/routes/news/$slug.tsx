import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CodeBlock } from "@/components/site/code-block";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { getNews, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const post = getNews(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: pageTitle(loaderData?.title ?? "News") }],
  }),
  component: NewsPost,
});

function NewsPost() {
  const post = Route.useLoaderData();
  return (
    <main>
      <PageHero kicker={post.date} title={post.title} lede={post.standfirst} />
      <Section className="pb-24 sm:pb-32">
        <article className="max-w-2xl space-y-6 text-[16px] leading-[1.7] text-muted">
          {post.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </article>
        {post.code ? (
          <div className="mt-12 max-w-2xl">
            <CodeBlock code={post.code.content} filename={post.code.filename} />
          </div>
        ) : null}
        <p className="mt-16">
          <Link to="/news" className="text-sm text-muted hover:text-fg">
            ← All posts
          </Link>
        </p>
      </Section>
    </main>
  );
}
