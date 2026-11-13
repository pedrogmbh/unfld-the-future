import { mergeVary, pickAccept, type MediaType } from "@/lib/accept";
import { renderAgentsMd } from "@/lib/machine";
import {
  isKnownDocumentPath,
  normalizePath,
  renderDocumentMarkdown,
  renderNotFoundMarkdown,
} from "@/lib/markdown-pages";

const MACHINE_FILES: Record<
  string,
  { body: () => string; type: string }
> = {
  "/agents.md": {
    body: renderAgentsMd,
    type: "text/markdown; charset=utf-8",
  },
};

function isDocumentPath(pathname: string): boolean {
  const path = pathname || "/";
  return (
    !path.startsWith("/__grok/") &&
    !path.startsWith("/@") &&
    !path.startsWith("/node_modules") &&
    !/\.[a-z0-9]+$/i.test(path)
  );
}

function withDefaultVary(headers: Headers): Headers {
  const next = new Headers(headers);
  next.set("Vary", mergeVary(next.get("Vary"), ["Accept", "Accept-Encoding"]));
  return next;
}

function textResponse(
  body: string,
  status: number,
  contentType: string,
): Response {
  return new Response(body, {
    status,
    headers: withDefaultVary(
      new Headers({
        "Content-Type": contentType,
        "Cache-Control": status === 200 ? "public, max-age=300" : "no-store",
        "X-Content-Type-Options": "nosniff",
      }),
    ),
  });
}

function markdownResponse(body: string, status: number): Response {
  return textResponse(body, status, "text/markdown; charset=utf-8");
}

/**
 * Intercept GETs that must not fall through to the HTML app:
 * Agent instructions and Accept: text/markdown.
 * Returns null when the React document should render.
 */
export function handleAgentSurfaceRequest(request: Request): Response | null {
  const method = request.method.toUpperCase();
  if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
    return null;
  }

  const url = new URL(request.url);
  const path = normalizePath(url.pathname);

  const machine = MACHINE_FILES[path];
  if (machine) {
    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: withDefaultVary(new Headers({ Allow: "GET, HEAD, OPTIONS" })),
      });
    }
    return textResponse(machine.body(), 200, machine.type);
  }

  if (!isDocumentPath(path)) return null;

  const offered: MediaType[] = ["text/html", "text/markdown"];
  const chosen = pickAccept(request.headers.get("accept"), offered);

  const known = isKnownDocumentPath(path);

  if (chosen === "text/markdown") {
    const body = known
      ? (renderDocumentMarkdown(path) ?? renderNotFoundMarkdown(path))
      : renderNotFoundMarkdown(path);
    return markdownResponse(body, known ? 200 : 404);
  }

  if (chosen === null && request.headers.get("accept")) {
    return markdownResponse(
      renderNotFoundMarkdown(path).replace(
        "does not match anything UNFLD publishes.",
        "cannot be served in a type listed in Accept. Request text/html or text/markdown.",
      ),
      known ? 406 : 404,
    );
  }

  return null;
}

export function applyDocumentVary(response: Response): Response {
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;
  const headers = withDefaultVary(response.headers);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function shouldApplyDocumentVary(pathname: string): boolean {
  return isDocumentPath(normalizePath(pathname));
}
