#!/usr/bin/env node
const BASE = (process.env.UNFLD_API ?? "https://www.unfld.com.br").replace(/\/+$/, "");

const usage = `unfld — public catalog for UNFLD

Usage:
  unfld index
  unfld organization
  unfld products
  unfld product <slug>
  unfld news
  unfld work
  unfld pages
  unfld contact
  unfld spec

Env:
  UNFLD_API   API origin (default ${BASE})
`;

async function get(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "unfld-cli/1.0",
    },
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(text);
    process.exitCode = 1;
    return;
  }
  process.stdout.write(text);
}

const [cmd, arg] = process.argv.slice(2);
const routes = {
  index: "/api/v1",
  organization: "/api/v1/organization",
  products: "/api/v1/products",
  news: "/api/v1/news",
  work: "/api/v1/work",
  pages: "/api/v1/pages",
  contact: "/api/v1/contact",
  spec: "/openapi.json",
};

if (!cmd || cmd === "help" || cmd === "-h" || cmd === "--help") {
  process.stdout.write(usage);
} else if (cmd === "product") {
  if (!arg) {
    console.error("unfld product <slug>");
    process.exitCode = 1;
  } else {
    await get(`/api/v1/products/${encodeURIComponent(arg)}`);
  }
} else if (routes[cmd]) {
  await get(routes[cmd]);
} else {
  console.error(usage);
  process.exitCode = 1;
}
