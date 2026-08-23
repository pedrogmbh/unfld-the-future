import { createFileRoute } from "@tanstack/react-router";
import { handleCatalogApi } from "@/lib/catalog-api";

function catalogFromRequest(request: Request) {
  const path = new URL(request.url).pathname.replace(/^\/api\/v1\/?/, "");
  return handleCatalogApi(request, path);
}

export const Route = createFileRoute("/api/v1/$")({
  server: {
    handlers: {
      GET: ({ request }) => catalogFromRequest(request),
      HEAD: ({ request }) => catalogFromRequest(request),
      OPTIONS: ({ request }) => catalogFromRequest(request),
    },
  },
});
