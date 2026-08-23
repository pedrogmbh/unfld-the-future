import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  beforeLoad: () => {
    throw redirect({
      to: "/how-we-work",
      statusCode: 301,
    });
  },
});
