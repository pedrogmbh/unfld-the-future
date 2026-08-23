import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  CANONICAL_HOST,
  CANONICAL_ORIGIN,
  canonicalHostRedirect,
  canonicalRedirectLocation,
  requestPublicHost,
} from "../src/lib/canonical-host.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function request(url, { host, forwardedHost, method = "GET" } = {}) {
  const headers = new Headers();
  if (host) headers.set("host", host);
  if (forwardedHost) headers.set("x-forwarded-host", forwardedHost);
  return new Request(url, { method, headers });
}

test("canonical origin matches SITE.url", () => {
  assert.equal(CANONICAL_HOST, "www.unfld.com.br");
  assert.equal(CANONICAL_ORIGIN, "https://www.unfld.com.br");
  const site = readFileSync(join(root, "src/lib/site.ts"), "utf8");
  assert.match(site, /url:\s*"https:\/\/www\.unfld\.com\.br"/);
});

test("requestPublicHost prefers X-Forwarded-Host and strips port", () => {
  const headers = new Headers({
    host: "something.vercel.app",
    "x-forwarded-host": "UNFLD.dev:443",
  });
  assert.equal(requestPublicHost(headers), "unfld.dev");
});

test("canonical host does not redirect", () => {
  const req = request("https://www.unfld.com.br/compliance?ref=1", {
    host: "www.unfld.com.br",
  });
  assert.equal(canonicalRedirectLocation(req), null);
  assert.equal(canonicalHostRedirect(req), null);
});

test("alias host keeps path and query", () => {
  const req = request("https://unfld.dev/compliance?utm=1&q=a+b", {
    host: "unfld.dev",
  });
  assert.equal(
    canonicalRedirectLocation(req),
    "https://www.unfld.com.br/compliance?utm=1&q=a+b",
  );
});

test("apex domain redirects to www", () => {
  const req = request("https://unfld.com.br/", { host: "unfld.com.br" });
  assert.equal(canonicalRedirectLocation(req), "https://www.unfld.com.br/");
});

test("forwarded alias wins over rewritten Vercel Host", () => {
  const req = request("https://project.vercel.app/news/queravaga", {
    host: "project.vercel.app",
    forwardedHost: "unfld.dev",
  });
  assert.equal(
    canonicalRedirectLocation(req),
    "https://www.unfld.com.br/news/queravaga",
  );
});

test("local and grok hosts are left alone", () => {
  const cases = [
    ["http://localhost:8080/compliance", { host: "localhost:8080" }],
    ["http://127.0.0.1:8081/", { host: "127.0.0.1:8081" }],
    [
      "https://guest.grok-sandbox.com/compliance",
      { host: "guest.grok-sandbox.com" },
    ],
    ["https://wild-race.grok.me/", { host: "wild-race.grok.me" }],
  ];
  for (const [url, opts] of cases) {
    assert.equal(canonicalRedirectLocation(request(url, opts)), null, url);
  }
});

test("production vercel host redirects to canonical", () => {
  const req = request("https://unfld-the-future.vercel.app/docs?search=api", {
    host: "unfld-the-future.vercel.app",
  });
  assert.equal(
    canonicalRedirectLocation(req, { VERCEL_ENV: "production" }),
    "https://www.unfld.com.br/docs?search=api",
  );
});

test("GET is 301 and other methods are 308", () => {
  const get = canonicalHostRedirect(
    request("https://unfld.dev/api", { host: "unfld.dev" }),
  );
  assert.equal(get?.status, 301);
  assert.equal(get?.headers.get("location"), "https://www.unfld.com.br/api");

  const post = canonicalHostRedirect(
    request("https://unfld.dev/api", { host: "unfld.dev", method: "POST" }),
  );
  assert.equal(post?.status, 308);
  assert.equal(post?.headers.get("location"), "https://www.unfld.com.br/api");
});

test("Vercel preview deploys do not redirect", () => {
  const req = request("https://unfld.dev/compliance", { host: "unfld.dev" });
  assert.equal(
    canonicalRedirectLocation(req, { VERCEL_ENV: "preview" }),
    null,
  );
});

test("nitro middleware is wired first and uses the shared helper", () => {
  const middleware = readFileSync(
    join(root, "server/middleware/00-canonical-host.ts"),
    "utf8",
  );
  assert.match(middleware, /canonicalHostRedirect/);
  const vite = readFileSync(join(root, "vite.config.ts"), "utf8");
  assert.match(vite, /serverDir:\s*"\.\/server"/);
});
