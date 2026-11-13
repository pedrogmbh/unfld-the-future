import { createFileRoute } from "@tanstack/react-router";
import { renderAgentsMd } from "@/lib/machine";

export const Route = createFileRoute("/agents.md")({
  server: {
    handlers: {
      GET: () =>
        new Response(renderAgentsMd(), {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            Vary: "Accept, Accept-Encoding",
          },
        }),
    },
  },
});
