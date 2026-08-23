import { createFileRoute, notFound } from "@tanstack/react-router";
import { WorkCase } from "@/components/site/work-page";
import { getWork, pageTitle } from "@/lib/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return work;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: pageTitle(
          loaderData
            ? loaderData.client === loaderData.title
              ? loaderData.title
              : `${loaderData.client} — ${loaderData.title}`
            : "Selected work",
        ),
      },
      {
        name: "description",
        content: loaderData?.lede ?? "Selected work from UNFLD.",
      },
    ],
  }),
  component: WorkPost,
});

function WorkPost() {
  const work = Route.useLoaderData();
  return <WorkCase work={work} />;
}
