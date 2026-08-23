import { createFileRoute } from "@tanstack/react-router";
import { renderOpenApiJson } from "@/lib/catalog-api";

export const Route = createFileRoute("/openapi.json")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderOpenApiJson(), {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            Vary: "Accept, Accept-Encoding",
          },
        }),
    },
  },
});
