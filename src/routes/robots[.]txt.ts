import { createFileRoute } from "@tanstack/react-router";
import { machineHeaders, renderRobotsTxt } from "@/lib/machine";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderRobotsTxt(), {
          headers: machineHeaders("text/plain; charset=utf-8"),
        }),
    },
  },
});
