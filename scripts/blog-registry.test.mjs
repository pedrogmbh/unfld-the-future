import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function field(block, name) {
  const match = block.match(new RegExp(`${name}:\\s*"([^"]+)"`));
  assert.ok(match, `missing ${name}`);
  return match[1];
}

function registryPosts() {
  const source = readFileSync(join(root, "src/lib/blog/posts.ts"), "utf8");
  const body = source.slice(source.indexOf("export const posts"));
  const blocks = body.split(/\n {2}\{\n/).slice(1);
  assert.ok(blocks.length > 0, "registry is empty");
  return blocks.map((block) => ({
    slug: field(block, "slug"),
    cover: field(block, "cover"),
    ogImage: field(block, "ogImage"),
  }));
}

function pngSize(buf) {
  assert.equal(buf.toString("ascii", 1, 4), "PNG");
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

test("blog registry slugs are unique and each post is wired", () => {
  const posts = registryPosts();
  const slugs = posts.map((post) => post.slug);
  assert.equal(new Set(slugs).size, slugs.length, `duplicate slugs: ${slugs.join(", ")}`);

  for (const post of posts) {
    const route = join(root, "src/routes/blog", `${post.slug}.tsx`);
    assert.equal(existsSync(route), true, `missing route for ${post.slug}`);
    assert.match(readFileSync(route, "utf8"), new RegExp(`buildPostHead\\("${post.slug}"\\)`));

    for (const rel of [post.cover, post.ogImage]) {
      assert.ok(rel.startsWith(`/blog/${post.slug}/`), `${rel} is outside the post folder`);
      const file = join(root, "public", rel);
      assert.equal(existsSync(file), true, `missing asset ${rel}`);
      assert.ok(statSync(file).size > 1024, `${rel} is empty`);
    }

    if (post.ogImage.endsWith(".png")) {
      const size = pngSize(readFileSync(join(root, "public", post.ogImage)));
      assert.deepEqual(size, { width: 1200, height: 630 }, `${post.ogImage} must be 1200×630`);
    }
  }
});
