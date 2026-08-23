import assert from "node:assert/strict";
import { test } from "node:test";
import { compareLocaleKeys } from "./check-i18n.mjs";

test("locale trees have identical keys and no empty or marker values", () => {
  const result = compareLocaleKeys();
  assert.equal(
    result.errors.length,
    0,
    result.errors.slice(0, 20).join("\n"),
  );
  assert.ok(result.count > 1000, `expected a full message tree, got ${result.count} keys`);
});
