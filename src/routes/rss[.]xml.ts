import { createFileRoute } from "@tanstack/react-router";
import { renderRss } from "@/lib/blog/rss";
import { machineHeaders } from "@/lib/machine";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderRss(), {
          headers: machineHeaders("application/rss+xml; charset=utf-8"),
        }),
    },
  },
});
