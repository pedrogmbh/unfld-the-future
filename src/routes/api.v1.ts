import { createFileRoute } from "@tanstack/react-router";
import { handleCatalogApi } from "@/lib/catalog-api";

export const Route = createFileRoute("/api/v1")({
  server: {
    handlers: {
      GET: ({ request }) => handleCatalogApi(request, ""),
      HEAD: ({ request }) => handleCatalogApi(request, ""),
      OPTIONS: ({ request }) => handleCatalogApi(request, ""),
    },
  },
});
