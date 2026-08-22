# AGENTS.md

Instructions for coding agents working on **UNFLD**. Read this before
editing. Visual language lives in [`DESIGN.md`](./DESIGN.md) — obey it.
Do not invent a second UI, stack, or brand.

---

## What this is

Institutional site for UNFLD, a product company and software house
trading as **UNFLD** (legal name **UNFOLDING THE FUTURE LTDA**).
Owned products in market: **FCR** (Ferramenta de Coleta, with Timac Agro),
**SiteCreator**, **Doutor Fiscal**, **Queravaga**, **Dialogus Psicossocial**.

North star: [x.ai](https://x.ai) visual/motion language (black field,
Inter Tight, IBM Plex Mono, grain, blur+y, stacked code windows). Copy
the *language*, not their name or products.

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
| Fonts | Inter Tight + IBM Plex Mono (loaded in `__root.tsx`) |

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
src/lib/site.ts                copy, nav, products, news, plans, offices
src/lib/highlight.tsx          syntax highlighter (code only)
src/lib/og/site.json           share-card identity { title: "UNFLD", card: "custom" }
src/components/site/           chrome + primitives (reuse these)
src/routes/                    file routes
src/routes/__root.tsx          fonts, grain, Header, Footer
src/router.tsx                 getRouter() + NotFound
public/images/                 cinematic stills
public/favicon.svg             fold mark
public/og.jpg                  OG image
DESIGN.md                      visual / motion / type contract
```

### Reuse, don’t rebuild

| Need | Use |
|---|---|
| Page title + lede | `PageHero` |
| Width + padding | `Section`, `Kicker` |
| Enter animation | `Reveal`, `Stagger`/`StaggerItem`, `WordStagger` |
| Product still | `ParallaxImage` |
| Product marketing page | `ProductPage` |
| Legal article | `LegalDoc` |
| API showcase | `CodeTabs` |
| Docs / news snippet | `CodeBlock` |
| CTA | `Btn` / `BtnLink` / `TextArrow` |
| Copy / sitemap | `src/lib/site.ts` |

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

News posts: `/news/$slug` + `getNews()`. Do not hardcode
`/news/queravaga` as a typed route — use `params={{ slug: "queravaga" }}`.

---

## UI / UX (summary — full spec in DESIGN.md)

- Pure black (`bg-bg`). One accent: white on black.
- **No hex in JSX.** Tokens only (`text-fg`, `bg-bg`, `border-border`).
- No extra brand color. Syntax hues exist **only** inside code.
- Hairline grids: `gap-px … border-border bg-border`, children `bg-bg`.
- Hero type: `font-display font-medium`, negative tracking, never all-caps.
- Kickers: uppercase `tracking-[0.18em] text-muted` — except the
  developer section kicker, which is sentence case (“For developers”).
- Buttons are pills. Primary fill white; secondary outlined.
  Press scale `0.96`.
- Name is **UNFLD** (five capitals). Mark from `logo.tsx` — do not redraw.

### Motion

Easing `[0.22, 1, 0.36, 1]`. Respect `prefers-reduced-motion`.

- `Reveal` — scroll enter (block elements only).
- `WordStagger` — **`animate` on mount**, never `whileInView` on inline
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
UI. CTAs: “Our products”, “Contact Sales”, “Open SiteCreator”,
“Try for free”.

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

## Do not

- Don’t introduce a brand color, a third font, or gradient-blob chrome.
- Don’t replace `motion` with CSS-only page enters “to simplify”.
- Don’t ship un-highlighted `<pre>` blocks.
- Don’t add a second header/footer.
- Don’t commit `node_modules`, `.vercel`, `.grok`, `screenshots/`,
  `attachments/`, or secrets.

When unsure, copy `/` or `/api` and check `DESIGN.md`.
