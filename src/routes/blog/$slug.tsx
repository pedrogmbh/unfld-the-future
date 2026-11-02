import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  loader: () => {
    throw notFound();
  },
});
