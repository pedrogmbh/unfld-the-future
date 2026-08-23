import { createFileRoute, notFound } from "@tanstack/react-router";
import { WorkCase } from "@/components/site/work-page";
import { buildPageHead } from "@/lib/meta";
import { getMessages } from "@/lib/i18n/messages";
import { localizeWorkItem } from "@/lib/i18n/localize";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params, context }) => {
    const work = localizeWorkItem(params.slug, context.locale);
    if (!work) throw notFound();
    return work;
  },
  head: ({ loaderData, match }) => {
    const fallback = getMessages(match.context.locale).pages.work.metaTitle;
    if (!loaderData) {
      return buildPageHead({
        title: fallback,
        path: "/work",
        locale: match.context.locale,
      });
    }
    const title =
      loaderData.client === loaderData.title
        ? loaderData.title
        : `${loaderData.client} — ${loaderData.title}`;
    return buildPageHead({
      title,
      description: loaderData.lede,
      path: `/work/${loaderData.slug}`,
      locale: match.context.locale,
    });
  },
  component: WorkPost,
});

function WorkPost() {
  const work = Route.useLoaderData();
  return <WorkCase work={work} />;
}
