import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/blog/sentinela-cve");

const MARK = `<svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
  <path fill="#f5f5f5" d="M6 24 L16 6 L18.4 6 L8.4 24 Z"/>
  <path fill="#f5f5f5" opacity="0.55" d="M16 6 L26 24 L23.2 24 L16 10.2 Z"/>
  <path fill="#f5f5f5" opacity="0.28" d="M11.2 24 H20.8 L16 14.8 Z"/>
</svg>`;

const ROWS = [
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0–8.8"],
  ["Project Manager", "weDevs"],
  ["SimpleForm", "WordPress"],
  ["Uncanny Toolkit", "9.8"],
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0–8.8"],
  ["Project Manager", "weDevs"],
  ["SimpleForm", "WordPress"],
  ["Uncanny Toolkit", "9.8"],
];

function html(width, height) {
  const rows = ROWS.map(
    ([name, note]) =>
      `<div class="row"><span>CVE</span><span class="name">${name}</span><span>${note}</span></div>`,
  ).join("");
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face { font-family: "Inter Tight"; src: url("file:///usr/share/fonts/truetype/macos/Inter-Medium.ttf") format("truetype"); font-weight: 500; }
  @font-face { font-family: "Inter Tight"; src: url("file:///usr/share/fonts/truetype/macos/Inter-SemiBold.ttf") format("truetype"); font-weight: 600; }
  @font-face { font-family: "Inter Tight"; src: url("file:///usr/share/fonts/truetype/macos/Inter-Regular.ttf") format("truetype"); font-weight: 400; }
  @font-face { font-family: "IBM Plex Mono"; src: url("file:///tmp/IBMPlexMono-Regular.ttf") format("truetype"); font-weight: 400; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${width}px; height: ${height}px; background: #000; color: #f5f5f5; overflow: hidden; }
  body { font-family: "Inter Tight", Inter, sans-serif; display: grid; grid-template-columns: 1.15fr 0.85fr; }
  .copy { padding: ${Math.round(height * 0.11)}px ${Math.round(width * 0.055)}px; display: flex; flex-direction: column; justify-content: space-between; min-width: 0; }
  .brand { display: flex; align-items: center; gap: 12px; font-weight: 600; letter-spacing: 0.28em; font-size: 15px; }
  .kicker { color: #e3b26a; letter-spacing: 0.18em; text-transform: uppercase; font-size: 15px; font-weight: 500; }
  h1 { margin-top: 22px; font-weight: 500; font-size: ${width > 1400 ? 76 : 54}px; line-height: 0.95; letter-spacing: -0.045em; }
  h1 span { display: block; color: #8a8a8a; }
  .sub { margin-top: 28px; max-width: 34rem; color: #8a8a8a; font-size: ${width > 1400 ? 22 : 18}px; line-height: 1.45; font-weight: 400; }
  .by { font-family: "IBM Plex Mono", ui-monospace, monospace; color: #8a8a8a; font-size: 14px; }
  .stage { position: relative; margin: ${Math.round(height * 0.08)}px ${Math.round(width * 0.04)}px ${Math.round(height * 0.08)}px 0; border: 1px solid #1a1a1a; background: #0f0f0f; overflow: hidden; display: flex; flex-direction: column; }
  .badge { display: flex; align-items: center; gap: 8px; padding: 14px 18px; border-bottom: 1px solid #f5f5f5; font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: 11px; letter-spacing: 0.18em; color: #8a8a8a; background: #0f0f0f; }
  .rows { position: relative; flex: 1; overflow: hidden; }
  .row { display: grid; grid-template-columns: 52px 1fr auto; gap: 12px; align-items: baseline; padding: 12px 22px; border-bottom: 1px solid #1a1a1a; font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: 13px; color: #5c5c5c; }
  .name { color: #f5f5f5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .fade { position: absolute; left: 0; right: 0; bottom: 0; height: 64px; background: linear-gradient(transparent, #0f0f0f); }
</style>
</head>
<body>
  <div class="copy">
    <div>
      <div class="brand">${MARK}<span>UNFLD</span></div>
      <p class="kicker" style="margin-top: ${width > 1400 ? 72 : 48}px">Sentinela CVE</p>
      <h1>A CVE é publicada.<span>O Sentinela já a leu.</span></h1>
      <p class="sub">Cada CVE nova no @CVEnew. O registro oficial. Evidência — ou silêncio.</p>
    </div>
    <p class="by">Pedro Viana, CEO da UNFLD · 2 de novembro de 2026</p>
  </div>
  <div class="stage" aria-hidden="true">
    <div class="badge">${MARK}<span>SENTINELA</span></div>
    <div class="rows">${rows}<div class="fade"></div></div>
  </div>
</body>
</html>`;
}

async function shoot(page, width, height) {
  await page.setViewportSize({ width, height });
  await page.setContent(html(width, height), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  return page.screenshot({ type: "png", clip: { x: 0, y: 0, width, height } });
}

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({ deviceScaleFactor: 1 });
const og = await shoot(page, 1200, 630);
const cover = await shoot(page, 1600, 900);
await browser.close();

await sharp(og).png({ compressionLevel: 9 }).toFile(join(outDir, "og.png"));
await sharp(cover).webp({ quality: 82 }).toFile(join(outDir, "cover.webp"));
await sharp(cover).avif({ quality: 55 }).toFile(join(outDir, "cover.avif"));
console.log("wrote", outDir);
