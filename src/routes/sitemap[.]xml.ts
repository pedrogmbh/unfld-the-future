import { createFileRoute } from "@tanstack/react-router";
import { machineHeaders, renderSitemap } from "@/lib/machine";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderSitemap(), {
          headers: machineHeaders("application/xml; charset=utf-8"),
        }),
    },
  },
});
