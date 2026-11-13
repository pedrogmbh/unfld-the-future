# AGENTS.md

Instructions for coding agents working on **UNFLD**. Read this before
editing. Visual language lives in [`DESIGN.md`](./DESIGN.md) — obey it.
Do not invent a second UI, stack, or brand.

---

## What this is

Institutional site for UNFLD, a product company and software house
trading as **UNFLD** (legal name **UNFOLDING THE FUTURE LTDA**).
Owned products in market: **Dialogus Psicossocial**, **Oluart**, **Unifikar**, **Telemedicina**. Do not add FCR,
Ferramenta de Coleta, or Timac Agro back to the public site.

The approved identity is **Célula aberta**. Honey on Ink, custom UNFLD
lettering, and an open hive cell formed by two parallel folds. Use the
masters in public/brand and the rules in DESIGN.md.

Public repo: [pedrogmbh/unfld-the-future](https://github.com/pedrogmbh/unfld-the-future).
Default branch: `main`.

---

## Stack (do not switch)

| Layer | Choice |
|---|---|
| App | TanStack Start (`src/router.tsx` exports **`getRouter()`**) |
| UI | React 19 |
| Style | Tailwind v4 — tokens in `src/styles.css` `@theme` |
| Motion | `motion/react` (Framer Motion) |
| Icons | `lucide-react` |
| Fonts | Barlow Condensed Semibold for display, Source Sans 3 for UI and body, IBM Plex Mono for code |

Do **not** migrate to Next.js, Framer, or another CSS framework.

Auth **off**. Database **off**. No `@/lib/db` in app routes, no login
pages, no migrations for product data. Site copy is static in
`src/lib/site.ts`.

---

## Commands

```bash
npm install
npm run dev          # 0.0.0.0:8080 — keep this running
npm run typecheck
npm run build
npm run preview      # production build on 127.0.0.1:8081
```

Always start via `npm run dev`, never `vite` / `npx vite` directly.
Keep [`startup.sh`](./startup.sh) in sync with the dev command; it must
stay at `/workspace/startup.sh`, bind `0.0.0.0:8080`, and be idempotent.

Do not ask the user to run commands, open localhost, or QA in a terminal.
Verify yourself.

---

## Architecture

```
src/styles.css                 tokens, grain, code-stage
src/lib/site.ts                copy, nav, products, plans, offices
src/lib/highlight.tsx          syntax highlighter (code only)
src/lib/og/site.json           share-card identity { title: "UNFLD", card: "custom" }
src/components/site/           chrome + primitives (reuse these)
src/routes/                    file routes
src/routes/__root.tsx          fonts, grain, Header, Footer
src/router.tsx                 getRouter() + NotFound
public/images/                 cinematic stills
public/favicon.svg             open hive cell
public/og.jpg                  OG image
DESIGN.md                      visual / motion / type contract
```

### Reuse, don’t rebuild

| Need                   | Use                                              |
| ---------------------- | ------------------------------------------------ |
| Page title + lede      | `PageHero`                                       |
| Width + padding        | `Section`, `Kicker`                              |
| Enter animation        | `Reveal`, `Stagger`/`StaggerItem`, `WordStagger` |
| Product still          | `ParallaxImage`                                  |
| Product marketing page | `ProductPage`                                    |
| Legal article          | `LegalDoc`                                       |
| Code snippet           | `CodeBlock`                                      |
| CTA                    | `Btn` / `BtnLink` / `TextArrow`                  |
| Copy / sitemap         | `src/lib/site.ts`                                |

---

## Routing

TanStack file routes in `src/routes/`. Every page:

```ts
export const Route = createFileRoute("/path")({
  head: () => ({ meta: [{ title: pageTitle("Name") }] }),
  component: Page,
});
```

Wrap content in `<main>`. Link new pages from `footer` in `site.ts`
(and the header menu if they belong there).


---

## UI / UX (summary — full spec in DESIGN.md)

- Ink (`bg-bg`, #181B18), Paper text, Honey primary action and isotipo.
- **No hex in JSX.** Tokens only (`text-fg`, `bg-bg`, `border-border`, `text-gold`).
- Honey (`#EBA937`) identifies the mark, kickers, focus and primary actions. Syntax hues stay inside code.
- Header and footer omit language selectors. The header omits WhatsApp.
- Footer omits the operational status indicator.
- Hairline grids: `gap-px … border-border bg-border`, children `bg-bg`.
- Hero type: `font-display font-semibold`, Barlow Condensed, slight negative tracking.
- Kickers: uppercase `tracking-[0.18em] text-gold`.
- Buttons have restrained 4px corners. Primary fill Honey with Ink text; secondary outlined.
  Press scale `0.96`.
- Name is **UNFLD** (five capitals). Approved Célula aberta mark and custom lettering from `logo.tsx` and `public/brand/`. Keep ¼ of the mark width as clear space. The legacy `bevel={false}` prop selects one-color rendering.

### Motion

Easing `[0.22, 1, 0.36, 1]`. Respect `prefers-reduced-motion`.

- `Reveal` — scroll enter (block elements only).
- `WordStagger`: CSS rise on mount, text stays opaque in the SSR HTML.
  Never start it at `opacity: 0`, and never use `whileInView` on inline
  spans (IntersectionObserver misses them; hero text stays invisible).
- Header menus: 180ms blur+y+scale; 90ms hover-intent delay on leave.
- Code stack: mouse-only parallax/tilt; skip on touch and reduced motion.
- Closed mobile menu: `pointer-events-none invisible opacity-0`
  (opacity alone is not enough).

### Code

Always highlight via `highlight` / `highlightLines`. PascalCase + `(`
is a **type** (white), not a function. Language pills: selected = black
fill + white type, not a white pill.

---

## Content / voice

Edit copy in `src/lib/site.ts`, not scattered through routes.

Calm, precise, first-person plural. No hype, no emoji, no `!` in product
UI. CTAs: “Our products”, “Contact Sales”, “Open product”.

---

## Hard rules

1. **Do not** put `og:*` / `twitter:card` in `__root.tsx`.
2. **Keep** `grokPwaPlugin()`, `public/__grok/`, `server/middleware/grok-pwa.ts`,
   and `<PreviewHostBridge />`. Do not hide the Grok/Remix pill.
3. **Keep** `export function getRouter()` in `src/router.tsx` and
   `defaultErrorComponent` (leave `error.message` visible).
4. **Do not** delete `startup.sh` or bind loopback-only for the preview.
5. **Do not** read `footer.*` at **module top-level** in `header.tsx`
   (SSR circular chunk). Call `navMenus()` inside the component.
6. **Do not** create `.env` files. **Do not** add auth routes unless
   the user names accounts / sign-in / per-user data.
7. Mobile (~390px): no horizontal overflow; `w-full min-w-0` on nested
   flex/grid children that contain code.
8. Never stop at HTTP 200. Confirm the page actually renders (desktop +
   mobile), console clean. After source changes, rebuild before trusting
   `npm run preview` — a running preview serves the previous build.

---

## Adding a page

1. `src/routes/<path>.tsx` with `createFileRoute` + `pageTitle`.
2. `PageHero` + `Section`. Motion via `Reveal` / `Stagger`.
3. Register in `src/lib/site.ts` footer (and header if needed).
4. Products → `ProductPage`. Legal → `LegalDoc`.
5. Typecheck. Eyeball desktop and mobile.

---

## Blog posts

No CMS. No MDX. Every post is a hand-built page at its own URL, with its
own layout.

| Piece              | Where                                                  |
| ------------------ | ------------------------------------------------------ |
| Registry           | `src/lib/blog/posts.ts`                                |
| Head + BlogPosting | `src/lib/blog/head.ts` (`buildPostHead`)               |
| RSS                | `src/lib/blog/rss.ts`, route `src/routes/rss[.]xml.ts` |
| Index              | `src/routes/blog/index.tsx`                            |
| Post route         | `src/routes/blog/<slug>.tsx`                           |
| Unknown slug       | `src/routes/blog/$slug.tsx` throws not-found           |
| Shell              | `src/components/blog/post-shell.tsx`                   |
| Post UI            | `src/components/blog/<slug>/`                          |
| Assets             | `public/blog/<slug>/`                                  |

Registry fields: `slug`, `title`, `description`, `date` (ISO `YYYY-MM-DD`),
optional `updated`, `cover`, `ogImage` (1200×630), `tags`, `author`
`{ name, role }`, `inLanguage`, optional `draft`, optional `byline`,
optional `coverAlt`.

`draft: true` hides the post from the index, sitemap, RSS, and llms.txt.
The route file still has to exist. `publishedPosts()` is what
`machinePages()` reads, so a published post lands in `sitemap.xml`,
`llms.txt`, and `agents.md` with `lastmod`.

A new post:

1. Add one registry entry. Slugs are unique.
2. Add `src/routes/blog/<slug>.tsx` with `head: () => buildPostHead("<slug>")` and `PostShell`.
3. Build the layout under `src/components/blog/<slug>/`. The shell supplies the back link, the byline, and the next post. Inside it, the layout is free. Do not reuse another post as a template.
4. Put the cover and the OG image in `public/blog/<slug>/`. OG is 1200×630. Raster images are AVIF or WebP, with `width` and `height` on the `<img>`.
5. Shell strings live in `pages.blog` and `chrome.nav.blog`, in all four locales. `npm run check:i18n` must pass. The post body stays in `inLanguage` on every site locale.

Performance and access, on every post:

- Route JS stays around 50 KB gzipped beyond the shared chunks.
- LCP under 2.5s. CLS near 0. Animate transform and opacity, not layout.
- Respect `prefers-reduced-motion`. The static frame has to carry the same facts. Animation is not the only place a fact appears.
- One `h1`. Semantic sections. Alt text. The global focus ring. Contrast from the tokens in `DESIGN.md`.
- Tokens only. No hex in JSX. Honey is the primary brand accent.

`node --test scripts/blog-registry.test.mjs` checks that every registry
slug has a route file, a cover, and an OG image, and that slugs are unique.
PNG OG images must be 1200×630.

---

## Do not

- Keep Honey accents deliberate. Use the supplied folds, fonts and logo masters. Code uses the existing monospace face.
- Don’t replace `motion` with CSS-only page enters “to simplify”.
- Don’t ship un-highlighted `<pre>` blocks.
- Don’t add a second header/footer.
- Don’t commit `node_modules`, `.vercel`, `.grok`, `screenshots/`,
  `attachments/`, or secrets.

When unsure, copy `/` and check `DESIGN.md`.
