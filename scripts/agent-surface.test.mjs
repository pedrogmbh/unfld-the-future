import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { mergeVary, pickAccept } from "./accept.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

test("pickAccept prefers markdown over html when q says so", () => {
  assert.equal(pickAccept("text/markdown", ["text/html", "text/markdown"]), "text/markdown");
  assert.equal(
    pickAccept("text/markdown, text/html;q=0.8", ["text/html", "text/markdown"]),
    "text/markdown",
  );
  assert.equal(pickAccept("text/html", ["text/html", "text/markdown"]), "text/html");
  assert.equal(pickAccept(null, ["text/html", "text/markdown"]), "text/html");
  assert.equal(pickAccept("*/*", ["text/html", "text/markdown"]), "text/html");
  assert.equal(
    pickAccept("text/markdown;q=0, text/html", ["text/html", "text/markdown"]),
    "text/html",
  );
  assert.equal(pickAccept("text/markdown;q=0", ["text/html", "text/markdown"]), null);
  assert.equal(pickAccept("text/markdown;q=0", ["text/markdown"]), null);
});

test("mergeVary keeps Accept once", () => {
  assert.equal(mergeVary("Origin", ["Accept", "Accept-Encoding"]), "Origin, Accept, Accept-Encoding");
  assert.equal(mergeVary("Accept", ["Accept", "Accept-Encoding"]), "Accept, Accept-Encoding");
});

test("catalog API source publishes operationIds and JSON error hints", () => {
  const src = read("src/lib/catalog-api.ts");
  for (const id of [
    "getCatalogIndex",
    "getOrganization",
    "listProducts",
    "getProduct",
    "listNews",
    "getNewsPost",
    "listWork",
    "getWork",
    "listPages",
    "getContact",
  ]) {
    assert.match(src, new RegExp(`operationId: "${id}"`));
  }
  assert.match(src, /error\.hint/);
  assert.match(src, /product_not_found/);
  assert.match(src, /openapi: "3\.1\.0"/);
});

test("llms.txt and agent instructions include when-to-use guidance", () => {
  const llms = read("src/lib/machine.ts");
  assert.match(llms, /## When to use this/);
  assert.match(llms, /openapi\.json/);
  assert.match(llms, /UNFLD API/);
  const agents = read("src/lib/catalog-api.ts");
  assert.match(agents, /When to use UNFLD/);
  assert.match(agents, /How an agent should call UNFLD/);
});

test("Organization JSON-LD includes contactPoint phone and address", () => {
  const src = read("src/lib/jsonld.ts");
  assert.match(src, /@type": "Organization"/);
  assert.match(src, /@type": "PostalAddress"/);
  assert.match(src, /@type": "ContactPoint"/);
  assert.match(src, /telephone: SITE.phoneHref/);
  assert.match(src, /email: SITE.sales/);
  assert.match(src, /UNFLD developer resources/);
  assert.match(src, /WebAPI/);
});

test("catalog API advertises rate-limit headers and versioning policy", () => {
  const src = read("src/lib/catalog-api.ts");
  for (const header of [
    "RateLimit",
    "RateLimit-Policy",
    "RateLimit-Limit",
    "RateLimit-Remaining",
    "RateLimit-Reset",
    "X-RateLimit-Limit",
    "Retry-After",
    "API-Version",
  ]) {
    assert.match(src, new RegExp(header.replaceAll("-", "\\-")));
  }
  assert.match(src, /\/api\/versioning/);
  assert.match(src, /Sunset/);
  assert.match(src, /180 days/);
});

test("OpenAPI schemas are nested objects with properties, not bare objects", () => {
  const src = read("src/lib/catalog-api.ts");
  assert.match(src, /\$ref: "#\/components\/schemas\/RateLimitInfo"/);
  assert.match(src, /\$ref: "#\/components\/schemas\/VersioningInfo"/);
  assert.match(src, /\$ref: "#\/components\/schemas\/CatalogLinks"/);
  assert.match(src, /\$ref: "#\/components\/schemas\/OrganizationAddress"/);
  assert.match(src, /\$ref: "#\/components\/schemas\/ProductFeature"/);
  assert.match(src, /\$ref: "#\/components\/schemas\/OrganizationJsonLd"/);
  assert.match(src, /additionalProperties: false/);
});

test("developer resources and versioning are registered for agents", () => {
  const machine = read("src/lib/machine.ts");
  assert.match(machine, /UNFLD developer resources/);
  assert.match(machine, /\/developers/);
  assert.match(machine, /\/api\/versioning/);
  const pages = read("src/lib/markdown-pages.ts");
  assert.match(pages, /\/developers/);
  assert.match(pages, /\/api\/versioning/);
  const site = read("src/lib/site.ts");
  assert.match(site, /developerSurface/);
  assert.match(site, /Deprecation and Sunset/);
});
