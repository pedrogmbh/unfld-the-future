import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const JSON_LOCALES = ["pt-BR", "es-AR", "fr-FR"];

export function flattenKeys(value, prefix = "", out = []) {
  if (typeof value === "string") {
    out.push(prefix);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      flattenKeys(item, prefix ? `${prefix}.${index}` : String(index), out);
    });
    return out;
  }
  if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value)) {
      flattenKeys(nested, prefix ? `${prefix}.${key}` : key, out);
    }
  }
  return out;
}

export function leafMap(value, prefix = "", out = new Map()) {
  if (typeof value === "string") {
    out.set(prefix, value);
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      leafMap(item, prefix ? `${prefix}.${index}` : String(index), out);
    });
    return out;
  }
  if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value)) {
      leafMap(nested, prefix ? `${prefix}.${key}` : key, out);
    }
  }
  return out;
}

function loadJsonLocale(locale) {
  return JSON.parse(
    readFileSync(join(root, "src/locales", `${locale}.json`), "utf8"),
  );
}

export function loadEnglishMessages() {
  const dumped = spawnSync(
    process.execPath,
    ["--experimental-strip-types", join(root, "scripts/dump-en-us.mts")],
    { encoding: "utf8", cwd: root },
  );
  if (dumped.status !== 0) {
    throw new Error(
      `Failed to dump en-US messages:\n${dumped.stderr || dumped.stdout}`,
    );
  }
  return JSON.parse(dumped.stdout);
}

export function compareLocaleKeys() {
  const english = loadEnglishMessages();
  const expected = new Set(flattenKeys(english));
  const englishLeaves = leafMap(english);
  const errors = [];

  for (const locale of JSON_LOCALES) {
    const bundle = loadJsonLocale(locale);
    const actual = new Set(flattenKeys(bundle));
    const leaves = leafMap(bundle);

    for (const key of expected) {
      if (!actual.has(key)) errors.push(`${locale} missing ${key}`);
    }
    for (const key of actual) {
      if (!expected.has(key)) errors.push(`${locale} extra ${key}`);
    }
    for (const [key, value] of leaves) {
      const source = englishLeaves.get(key) ?? "";
      if (source.length > 0 && value.length === 0) {
        errors.push(`${locale} empty ${key}`);
      }
      if (value.startsWith("⟦") && value.endsWith("⟧")) {
        errors.push(`${locale} missing-marker ${key}`);
      }
    }
  }

  return {
    count: expected.size,
    locales: ["en-US", ...JSON_LOCALES],
    errors,
  };
}

function main() {
  const result = compareLocaleKeys();
  if (result.errors.length) {
    console.error(
      `i18n key check failed (${result.errors.length}):\n${result.errors.slice(0, 80).join("\n")}`,
    );
    process.exit(1);
  }
  console.log(
    `i18n ok: ${result.count} keys across ${result.locales.join(", ")}`,
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main();
}
