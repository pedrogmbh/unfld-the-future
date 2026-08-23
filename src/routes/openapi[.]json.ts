import { createFileRoute } from "@tanstack/react-router";
import { jsonHeaders, renderOpenApiJson } from "@/lib/catalog-api";

export const Route = createFileRoute("/openapi.json")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderOpenApiJson(), {
          headers: jsonHeaders({
            "Cache-Control": "public, max-age=3600",
          }),
        }),
    },
  },
});
