import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/blog/sentinela-cve");

function brandSvg(file, height) {
  const svg = readFileSync(join(root, "public/brand", file), "utf8");
  const [, , , width, viewHeight] = svg.match(/viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/);
  return svg
    .replace(/\s(?:width|height)="[^"]*"/g, "")
    .replaceAll('fill="currentColor"', 'fill="#f5f3eb"')
    .replace("<svg ", `<svg height="${height}" width="${height * Number(width) / Number(viewHeight)}" `);
}

const MARK = brandSvg("symbol.svg", 18);
const LOCKUP = brandSvg("lockup.svg", 28);

const ROWS = [
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0 a 8.8"],
  ["Project Manager", "weDevs"],
  ["SimpleForm", "WordPress"],
  ["Uncanny Toolkit", "9.8"],
  ["Ninja Forms", "WordPress"],
  ["GNOME Epiphany", "GNOME"],
  ["json-glib", "RHEL"],
  ["WebDyne", "Perl"],
  ["konflux-ci", "8.0 a 8.8"],
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
  @font-face { font-family: "Source Sans 3"; src: url("/fonts/SourceSans3-Regular.woff2") format("woff2"); font-weight: 400; }
  @font-face { font-family: "Source Sans 3"; src: url("/fonts/SourceSans3-Semibold.woff2") format("woff2"); font-weight: 600; }
  @font-face { font-family: "Barlow Condensed"; src: url("/fonts/BarlowCondensed-SemiBold.woff2") format("woff2"); font-weight: 600; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${width}px; height: ${height}px; background: #181b18; color: #f5f3eb; overflow: hidden; }
  body { font-family: "Source Sans 3", Arial, sans-serif; display: grid; grid-template-columns: 1.15fr 0.85fr; }
  .copy { padding: ${Math.round(height * 0.11)}px ${Math.round(width * 0.055)}px; display: flex; flex-direction: column; justify-content: space-between; min-width: 0; }
  .brand { display: flex; align-items: center; gap: 12px; font-weight: 600; letter-spacing: 0.28em; font-size: 15px; }
  .kicker { color: #eba937; letter-spacing: 0.18em; text-transform: uppercase; font-size: 15px; font-weight: 500; }
  h1 { margin-top: 22px; font-family: "Barlow Condensed", sans-serif; font-weight: 600; font-size: ${width > 1400 ? 68 : 52}px; line-height: 0.95; letter-spacing: -0.015em; }
  h1 span { display: block; color: #c0c6bb; white-space: nowrap; }
  .sub { margin-top: 28px; max-width: 34rem; color: #c0c6bb; font-size: ${width > 1400 ? 22 : 18}px; line-height: 1.45; font-weight: 400; }
  .by { font-family: "IBM Plex Mono", ui-monospace, monospace; color: #c0c6bb; font-size: 14px; }
  .stage { position: relative; margin: ${Math.round(height * 0.08)}px ${Math.round(width * 0.04)}px ${Math.round(height * 0.08)}px 0; border: 1px solid #3b403a; background: #21251f; overflow: hidden; display: flex; flex-direction: column; }
  .badge { display: flex; align-items: center; gap: 8px; padding: 14px 18px; border-bottom: 1px solid #f5f3eb; font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: 11px; letter-spacing: 0.18em; color: #c0c6bb; background: #21251f; }
  .rows { position: relative; flex: 1; overflow: hidden; }
  .row { display: grid; grid-template-columns: 52px 1fr auto; gap: 12px; align-items: baseline; padding: 12px 22px; border-bottom: 1px solid #3b403a; font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: 13px; color: #a1aa9b; }
  .name { color: #f5f3eb; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .fade { position: absolute; left: 0; right: 0; bottom: 0; height: 64px; background: linear-gradient(transparent, #21251f); }
</style>
</head>
<body>
  <div class="copy">
    <div>
      <div class="brand">${LOCKUP}</div>
      <p class="kicker" style="margin-top: ${width > 1400 ? 72 : 48}px">Sentinela CVE</p>
      <h1>Quem lê a CVE<span>quando ninguém tem tempo?</span></h1>
      <p class="sub">Vulnerabilidades novas chegam mais rápido do que qualquer time consegue ler. Colocamos um agente para ler por nós.</p>
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
