/**
 * Dev/preview half of the agent surface: markdown negotiation, OpenAPI,
 * catalog API, and agent-instructions. The deployed half lives in
 * server/middleware/agent-surface.ts.
 */
export function agentSurfacePlugin() {
  return {
    name: "unfld-agent-surface",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url ?? "";
          const method = (req.method ?? "GET").toUpperCase();
          if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
            next();
            return;
          }

          const host = String(
            req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost:8080",
          );
          const proto = String(
            req.headers["x-forwarded-proto"] ??
              ((req.socket && req.socket.encrypted) ? "https" : "http"),
          );
          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value === undefined) continue;
            if (Array.isArray(value)) {
              for (const item of value) headers.append(key, item);
            } else {
              headers.set(key, value);
            }
          }

          const request = new Request(`${proto}://${host}${rawUrl}`, {
            method,
            headers,
          });

          const mod = await server.ssrLoadModule("/src/lib/agent-surface.ts");
          const response = mod.handleAgentSurfaceRequest(request);
          if (!response) {
            next();
            return;
          }

          res.statusCode = response.status;
          response.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });
          if (method === "HEAD" || method === "OPTIONS") {
            res.end();
            return;
          }
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (err) {
          console.error("[unfld] agent-surface handler failed:", err);
          next();
        }
      });
    },
  };
}
