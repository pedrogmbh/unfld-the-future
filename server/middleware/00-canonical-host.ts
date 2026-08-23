/**
 * Send production aliases (unfld.dev, apex unfld.com.br, …) to the canonical
 * host. Path and query are preserved. Local, Vercel preview, and Grok hosts
 * are left alone so live-preview and `npm run dev` keep working.
 *
 * Filename prefix keeps this ahead of agent-surface / grok-pwa so those
 * handlers never answer on a non-canonical host.
 */
import { canonicalHostRedirect } from "../../src/lib/canonical-host";

interface CanonicalHostEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export default async function canonicalHostMiddleware(
  event: CanonicalHostEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const request = new Request(event.url, {
    method: event.req.method,
    headers: event.req.headers,
  });
  return canonicalHostRedirect(request) ?? next();
}
