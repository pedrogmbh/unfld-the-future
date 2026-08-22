import { createFileRoute } from "@tanstack/react-router";
import { machineHeaders, renderLlmsTxt } from "@/lib/machine";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderLlmsTxt(), {
          headers: machineHeaders("text/plain; charset=utf-8"),
        }),
    },
  },
});
