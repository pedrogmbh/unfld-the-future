import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import {
  DESIGN_CONTENT_TYPE,
  DESIGN_PUBLIC,
  DESIGN_SOURCE,
  copyDesignDoc,
  copyDesignPlugin,
  decodeDesignUtf8,
  isDesignMdPath,
} from "./copy-design.mjs";

function makeWorkspace(source) {
  const root = mkdtempSync(join(tmpdir(), "copy-design-"));
  if (typeof source === "string") {
    writeFileSync(join(root, DESIGN_SOURCE), source, { encoding: "utf8" });
  } else if (source !== undefined) {
    writeFileSync(join(root, DESIGN_SOURCE), source);
  }
  return root;
}

test("copies DESIGN.md to public/design.md", () => {
  const root = makeWorkspace("# UNFLD Design System\n");
  copyDesignDoc(root);
  assert.equal(readFileSync(join(root, DESIGN_PUBLIC), "utf8"), "# UNFLD Design System\n");
});

test("creates public/ when it is missing", () => {
  const root = makeWorkspace("contract\n");
  copyDesignDoc(root);
  assert.equal(readFileSync(join(root, "public", "design.md"), "utf8"), "contract\n");
});

test("overwrites a stale public/design.md", () => {
  const root = makeWorkspace("fresh\n");
  mkdirSync(join(root, "public"));
  writeFileSync(join(root, DESIGN_PUBLIC), "stale\n");
  copyDesignDoc(root);
  assert.equal(readFileSync(join(root, DESIGN_PUBLIC), "utf8"), "fresh\n");
});

test("throws when DESIGN.md is missing", () => {
  const root = makeWorkspace();
  assert.throws(() => copyDesignDoc(root), /ENOENT/);
});

test("round-trips UTF-8 punctuation and Latin letters", () => {
  const text = "HQ | São Paulo — “unfold”.\n";
  const root = makeWorkspace(text);
  copyDesignDoc(root);
  const bytes = readFileSync(join(root, DESIGN_PUBLIC));
  assert.equal(bytes.toString("utf8"), text);
  assert.equal(bytes[0], 0x48); // H — no BOM
  assert.ok(bytes.includes(0xc3) && bytes.includes(0xa3)); // ã
  assert.ok(bytes.includes(0xe2) && bytes.includes(0x80) && bytes.includes(0x94)); // —
});

test("strips a UTF-8 BOM from the source", () => {
  const root = makeWorkspace(
    Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from("UNFLD", "utf8")]),
  );
  copyDesignDoc(root);
  const bytes = readFileSync(join(root, DESIGN_PUBLIC));
  assert.equal(bytes[0], 0x55); // U
  assert.equal(bytes.toString("utf8"), "UNFLD");
});

test("rejects invalid UTF-8 instead of inserting replacement characters", () => {
  const root = makeWorkspace(Buffer.from([0x80]));
  assert.throws(() => copyDesignDoc(root), TypeError);
  assert.throws(() => decodeDesignUtf8(Buffer.from([0xff])), TypeError);
});

test("plugin copies on buildStart using the resolved root", () => {
  const root = makeWorkspace("from plugin\n");
  const plugin = copyDesignPlugin();
  plugin.configResolved({ root });
  plugin.buildStart.call({ addWatchFile() {} });
  assert.equal(readFileSync(join(root, DESIGN_PUBLIC), "utf8"), "from plugin\n");
});

test("serves /design.md as markdown with an explicit UTF-8 charset", () => {
  assert.equal(DESIGN_CONTENT_TYPE, "text/markdown; charset=utf-8");
  assert.equal(isDesignMdPath("/design.md"), true);
  assert.equal(isDesignMdPath("/design.md?cache=1"), true);
  assert.equal(isDesignMdPath("/DESIGN.md"), false);
  assert.equal(isDesignMdPath("/agents.md"), false);
});
