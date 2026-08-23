import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  beforeLoad: () => {
    throw redirect({
      to: "/api",
      statusCode: 301,
    });
  },
});
