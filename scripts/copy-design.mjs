// @ts-check
/**
 * Publish DESIGN.md at /design.md by copying it into public/ on every Vite
 * build and dev-server start. The copy is UTF-8 (no BOM); responses declare
 * `charset=utf-8` so browsers do not fall back to Latin-1.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

export const DESIGN_SOURCE = "DESIGN.md";
export const DESIGN_PUBLIC = join("public", "design.md");
export const DESIGN_CONTENT_TYPE = "text/markdown; charset=utf-8";

const UTF8 = new TextDecoder("utf-8", { fatal: true });

/**
 * Decode DESIGN.md bytes as UTF-8. A leading BOM is stripped; invalid
 * sequences throw rather than becoming U+FFFD.
 *
 * @param {Buffer | Uint8Array} bytes
 * @returns {string}
 */
export function decodeDesignUtf8(bytes) {
  const start =
    bytes.length >= 3 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf ? 3 : 0;
  return UTF8.decode(bytes.subarray(start));
}

/**
 * @param {string} root
 */
export function copyDesignDoc(root) {
  const text = decodeDesignUtf8(readFileSync(join(root, DESIGN_SOURCE)));
  mkdirSync(join(root, "public"), { recursive: true });
  writeFileSync(join(root, DESIGN_PUBLIC), text, { encoding: "utf8" });
}

/**
 * @param {string | undefined} url
 * @returns {boolean}
 */
export function isDesignMdPath(url) {
  return (url ?? "").split("?", 1)[0] === "/design.md";
}

/**
 * Serve /design.md before Vite's public-dir handler so the charset is not
 * dropped from `text/markdown`.
 *
 * @param {{ use: (fn: import("http").RequestListener) => void }} middlewares
 * @param {string} root
 */
function serveDesignMd(middlewares, root) {
  middlewares.use((req, res, next) => {
    if (!isDesignMdPath(req.url)) {
      next();
      return;
    }
    const method = (req.method ?? "GET").toUpperCase();
    if (method !== "GET" && method !== "HEAD") {
      next();
      return;
    }
    try {
      const body = Buffer.from(decodeDesignUtf8(readFileSync(join(root, DESIGN_PUBLIC))), "utf8");
      res.statusCode = 200;
      res.setHeader("content-type", DESIGN_CONTENT_TYPE);
      res.setHeader("cache-control", "public, max-age=3600");
      res.setHeader("x-content-type-options", "nosniff");
      res.setHeader("content-length", String(body.byteLength));
      if (method === "HEAD") res.end();
      else res.end(body);
    } catch (err) {
      console.error("[unfld] /design.md handler failed:", err);
      next();
    }
  });
}

/**
 * @returns {import("vite").Plugin}
 */
export function copyDesignPlugin() {
  /** @type {string} */
  let root = process.cwd();
  return {
    name: "unfld-copy-design",
    configResolved(config) {
      root = config.root;
    },
    buildStart() {
      this.addWatchFile(join(root, DESIGN_SOURCE));
      copyDesignDoc(root);
    },
    configureServer(server) {
      // Immediate (not a post-hook) so we run before Vite's public-dir sirv.
      serveDesignMd(server.middlewares, root);
      const source = join(root, DESIGN_SOURCE);
      server.watcher.add(source);
      server.watcher.on("change", (file) => {
        if (relative(root, file) === DESIGN_SOURCE) copyDesignDoc(root);
      });
    },
    configurePreviewServer(server) {
      serveDesignMd(server.middlewares, root);
    },
  };
}
