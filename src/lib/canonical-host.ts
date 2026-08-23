/** Production origin — keep in lockstep with `SITE.url` in `src/lib/site.ts`. */
export const CANONICAL_ORIGIN = "https://www.unfld.com.br";
export const CANONICAL_HOST = "www.unfld.com.br";

const SKIP_EXACT = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
  "::1",
  "vercel.app",
  "vercel.com",
  "grok.me",
  "grok-sandbox.com",
]);

const SKIP_SUFFIXES = [
  ".vercel.app",
  ".vercel.com",
  ".grok.me",
  ".grok-sandbox.com",
  ".localhost",
  ".local",
];

function hostnameFromHeader(value: string): string {
  const raw = value.split(",")[0]?.trim() ?? "";
  if (raw.startsWith("[")) {
    const end = raw.indexOf("]");
    return (end === -1 ? raw : raw.slice(0, end + 1)).toLowerCase();
  }
  return raw.split(":")[0]?.toLowerCase() ?? "";
}

/**
 * Public hostname the visitor used. Prefer X-Forwarded-Host: Vercel/Envoy
 * rewrite `Host` to `*.vercel.app`, and Bunny may fetch the origin the same way.
 */
export function requestPublicHost(headers: Headers): string {
  return hostnameFromHeader(
    headers.get("x-forwarded-host") ?? headers.get("host") ?? "",
  );
}

function isIpAddress(host: string): boolean {
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return true;
  return host.startsWith("[") && host.endsWith("]");
}

export function isExemptHost(host: string): boolean {
  if (!host) return true;
  if (host === CANONICAL_HOST) return true;
  if (SKIP_EXACT.has(host)) return true;
  if (SKIP_SUFFIXES.some((suffix) => host.endsWith(suffix))) return true;
  if (isIpAddress(host)) return true;
  return false;
}

function isPreviewOrDevDeploy(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env.VERCEL_ENV === "preview" || env.VERCEL_ENV === "development";
}

/** Absolute canonical URL, or null when this request should not redirect. */
export function canonicalRedirectLocation(
  request: Request,
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  if (isPreviewOrDevDeploy(env)) return null;
  const host = requestPublicHost(request.headers);
  if (isExemptHost(host)) return null;

  const url = new URL(request.url);
  const path = url.pathname || "/";
  return `${CANONICAL_ORIGIN}${path}${url.search}`;
}

export function canonicalHostRedirect(request: Request): Response | null {
  const location = canonicalRedirectLocation(request);
  if (!location) return null;

  const method = (request.method || "GET").toUpperCase();
  const status = method === "GET" || method === "HEAD" ? 301 : 308;
  return new Response(null, {
    status,
    headers: {
      Location: location,
      "Cache-Control": "public, max-age=3600",
      Vary: "Host, X-Forwarded-Host",
    },
  });
}
