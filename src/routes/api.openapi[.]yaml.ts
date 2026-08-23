import { createFileRoute } from "@tanstack/react-router";
import { renderOpenApiYaml } from "@/lib/catalog-api";

export const Route = createFileRoute("/api/openapi.yaml")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderOpenApiYaml(), {
          headers: {
            "Content-Type": "application/yaml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            Vary: "Accept, Accept-Encoding",
          },
        }),
    },
  },
});
