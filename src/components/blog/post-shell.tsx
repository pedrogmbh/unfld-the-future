import { Link } from "@tanstack/react-router";
import { useMessages } from "@/lib/i18n";
import { formatBlogDate, getPost, nextPost, postByline } from "@/lib/blog/posts";

export function PostShell({ slug, children }: { slug: string; children: React.ReactNode }) {
  const post = getPost(slug);
  const next = nextPost(slug);
  const { pages } = useMessages();
  const t = pages.blog;
  const dateLabel = formatBlogDate(post.date, post.inLanguage);

  return (
    <main>
      <article lang={post.inLanguage}>
        <header className="px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12">
          <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/blog"
              className="inline-flex min-h-11 items-center text-[13px] font-medium text-muted transition-colors duration-150 hover:text-fg"
            >
              ← {t.backToBlog}
            </Link>
            <p className="pb-2 font-mono text-[12px] text-subtle sm:pb-0 sm:text-right">
              <span className="text-muted">{postByline(post)}</span>
              <span aria-hidden="true"> · </span>
              <time dateTime={post.date}>{dateLabel}</time>
            </p>
          </div>
        </header>
        {children}
        <footer className="border-t border-border px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
                {t.by}
              </p>
              <p className="mt-4 font-display text-2xl font-medium tracking-tight">
                {postByline(post)}
              </p>
              <p className="mt-2 font-mono text-[13px] text-subtle">
                <time dateTime={post.updated ?? post.date}>{dateLabel}</time>
                <span aria-hidden="true"> · </span>
                {post.inLanguage}
              </p>
            </div>
            {next ? (
              <Link
                to="/blog/$slug"
                params={{ slug: next.slug }}
                className="group block max-w-md min-w-0"
              >
                <p className="text-[13px] font-medium tracking-[0.18em] text-gold uppercase">
                  {t.next}
                </p>
                <p className="mt-4 font-display text-2xl font-medium tracking-tight transition-opacity duration-150 group-hover:opacity-70">
                  {next.title}
                </p>
              </Link>
            ) : (
              <Link
                to="/blog"
                className="inline-flex min-h-11 items-center text-[15px] font-medium text-fg"
              >
                ← {t.backToBlog}
              </Link>
            )}
          </div>
        </footer>
      </article>
    </main>
  );
}
