# UNFLD Design System

This file is the contract for anyone editing the site. Match what is here.
Do not invent a second visual language. When in doubt, copy an existing
page (`/` and `/api`) rather than a generic SaaS template.

**North star:** the visual, motion, and typographic language of
[x.ai](https://x.ai) — pure black, Inter Tight, IBM Plex Mono, grain,
staggered blur+y, stacked macOS code windows, hairline grids. We copy the
*language*, not the name, products, or copy. Stay on TanStack Start +
React + Tailwind v4 + `motion` (`motion/react`). Do not switch to Next.js
or Framer.

Public-facing brand rules (name, mark, color) also live at
`/legal/brand-guidelines`. This file is the implementation spec.

---

## Brand

| | |
|---|---|
| Name | **UNFLD** — five capitals, pronounced “unfold”. Never Unfld, Unfold, UNFOLD in UI. |
| Legal | UNFOLDING THE FUTURE LTDA (CNPJ 62.855.761/0001-82). Trading name: UNFLD. |
| Tagline | Unfold the future. |
| Story | A software house that also ships its own products. We still build for others. We operate FCR, SiteCreator, Doutor Fiscal, Queravaga, and Dialogus Psicossocial. |
| Products | Owned (in market): FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus Psicossocial. Site families still on the IA: Forge (apps), Build (engineering), Studio (creative), Pulse (intelligence), Relay (API) — to be updated. |
| HQ | São Paulo — Rua Avanhandava, 126, Bela Vista. |

**Mark** — three polygons suggesting a plane unfolding. Source:
`src/components/site/logo.tsx` (`Mark`) and `public/favicon.svg`. Use
`currentColor`. Clear space: one fold-wing on all sides. Do not rotate,
recolor, add shadows, or redraw.

**Wordmark** — `UNFLD` in Inter Tight, `font-semibold`,
`tracking-[0.28em]`, 13px in the header. Always locked up with the mark
in chrome; mark may stand alone only when the name is already on the
surface.

**Tone** — calm, precise, first-person plural. Short sentences. No hype,
no emoji, no exclamation marks in product UI. Prefer “we ship” over
“we empower”. Em-dashes and middots (`·`) are on-brand.

---

## Color

All color lives in `src/styles.css` under `@theme`. Consume tokens as
Tailwind utilities (`bg-bg`, `text-muted`, `border-border`). **No raw
hex in JSX.** No `text-white` / `bg-black` literals — use `text-fg` /
`bg-bg`.

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `bg` | `#000000` | Page, chrome, primary field |
| `bg-elevated` | `#0a0a0a` | Dropdowns, elevated panels |
| `bg-subtle` | `#111111` | Inset fills, selected pills |
| `window` | `#0b0b0b` | Front code window |
| `window-mid` | `#141414` | Stacked card (middle) |
| `window-back` | `#1c1c1c` | Stacked card (back) |
| `window-stage` | `#0f0f0f` | Code stage behind the stack |

### Type / chrome

| Token | Hex | Use |
|---|---|---|
| `fg` | `#f5f5f5` | Primary text, primary buttons |
| `muted` | `#8a8a8a` | Body, nav idle, secondary lines |
| `subtle` | `#5c5c5c` | Kickers’ quieter cousin, captions, footer meta |
| `border` | `#1a1a1a` | Hairlines, card grids |
| `border-strong` | `#2a2a2a` | Outlined buttons, dropdown chrome |

### Accent

There is **one** accent: white on black.

| Token | Hex | Use |
|---|---|---|
| `accent` | `#ffffff` | Primary buttons, “Try for free” |
| `accent-fg` | `#000000` | Text on primary buttons |

No purple, gold, blue, or gradient **brand fills**. Syntax highlighting
(below) is the only place extra hues appear, and only inside code.

### Syntax (code only)

| Token | Hex | Role |
|---|---|---|
| `code-kw` | `#c792ea` | Keywords (`import`, `from`, `const`, `print`, `curl`) |
| `code-fn` | `#82aaff` | Calls (`getenv(`, `create(`, `user(`) |
| `code-str` | `#e3b26a` | Strings |
| `code-num` | `#f78c6c` | Numbers, `$ENV` vars |
| `code-cmt` | `#5b6b73` | Comments |
| `code-punct` | `#6b6b6b` | Punctuation |
| (plain / prop) | `fg/88`–`fg/85` | Identifiers, PascalCase types, properties |

Highlighter: `src/lib/highlight.tsx`. PascalCase + `(` is a **type**
(white), not a function. Lowercase + `(` is a function (blue).

### Traffic lights

`traffic-red` `#ff5f57` · `traffic-amber` `#febc2e` · `traffic-green` `#28c840`.
Only on code-window chrome.

### Selection / focus

Selection is inverted: white fill, black type. Focus ring is
`1px solid rgba(255,255,255,0.55)` with 3px offset.

---

## Typography

Two families, loaded in `src/routes/__root.tsx`:

- **Inter Tight** — display and UI (`font-display`, `font-sans`)
- **IBM Plex Mono** — code, coordinates, numeric labels (`font-mono`)

Weights in use: 400, 500, 600, 700. Body is 400; UI labels 500;
wordmark 600.

### Scale (use these, don’t invent)

| Role | Size | Tracking | Leading | Weight |
|---|---|---|---|---|
| Hero h1 (home) | `clamp(3.2rem, 11vw, 8.4rem)` | `-0.05em` | `0.9` | 500 |
| Page h1 | `clamp(2.6rem, 8vw, 6.5rem)` | `-0.045em` | `0.95` | 500 |
| Section h2 | `clamp(1.8rem, 4vw, 3.75rem)` | tight / `-0.035em` | `1.05` | 500 |
| Card / feature h3 | `text-xl`–`text-2xl` | `tracking-tight` | — | 500 |
| Lede | `17px` / `sm:text-lg` | — | relaxed | 400, `text-muted` |
| Body | `15px`–`16px` | — | `1.6`–`1.7` | 400, `text-muted` |
| Nav / button | `13px` | `tracking-wide` on buttons | — | 500 |
| Kicker | `13px` | `0.18em` | — | 500, **uppercase**, `text-muted` |
| Footer col title | `11px` | `0.18em` | — | 500, uppercase, `text-subtle` |
| Code | `12.5px` | — | `1.7` | 400, `font-mono` |
| Wordmark | `13px` | `0.28em` | — | 600 |

Headlines: `font-display font-medium`, never all-caps, never italic for
hero type. `text-wrap: balance` on h1–h3, `pretty` on p.

A second line of a hero in `text-muted` is on-brand
(“One API.” / “Every modality.”).

Kickers in the developer section stay **sentence case**
(“For developers”). Everywhere else, kickers are uppercase.

This site uses precise `text-[13px]`-style sizes to match x.ai. That is
allowed **for type**. New *colors* still go in `@theme`.

---

## Layout

- Content column: `max-w-6xl`, horizontal padding `px-5 sm:px-8 lg:px-12`.
- Header inner: `max-w-[88rem]`, height `3.6rem`.
- Footer inner: `max-w-7xl`.
- Always `w-full min-w-0` on nested flex/grid children that can overflow
  (especially code).
- `overflow-x: clip` on `html`/`body`. Never introduce page-level
  horizontal scroll.
- Page top offset: heroes start at `pt-28` / `sm:pt-36` to clear the
  fixed header.

### Section rhythm

- Home / product blocks: `py-20 sm:py-28`.
- Closing sections: `pb-24 sm:pb-32`.
- Spacing scale is 4/8-based. Prefer `gap-3`, `mt-8`, `mt-10`, `p-6`/`p-8`.

### Hairline grids

The signature card grid is **1px gaps on a border-colored field**:

```
grid gap-px overflow-hidden rounded-xl border border-border bg-border
  sm:grid-cols-2 lg:grid-cols-3
```

Children are `bg-bg` (or `bg-bg` → `hover:bg-bg-elevated`). Do not put
box-shadows on these cards. Hover may lift `~2px` (`-translate-y-0.5`).

### Images

- Wrapper: `overflow-hidden rounded-xl`.
- Photo: `aspect-[16/8]` (hero/product) or `aspect-[16/9]` (company tiles),
  `object-cover`, `outline outline-1 -outline-offset-1 outline-fg/10`.
- Use `ParallaxImage` from `src/components/site/reveal.tsx` for full-bleed
  stills. Cinematic, dark, geometric — existing set in `public/images/`.
- No stock-looking people, no gradient blobs, no illustration kits.

### Grain

A fixed film-grain overlay (`.grain` in `styles.css`, mounted in
`__root.tsx`) sits at `z-80`, opacity `0.045`, `mix-blend-mode: overlay`.
Do not remove it. Do not add a second global overlay.

---

## Motion

Library: **`motion/react`** (Framer Motion). Respect
`prefers-reduced-motion` on every animation — `useReducedMotion()`, and
the CSS kill-switch already in `styles.css`.

**Easing:** `[0.22, 1, 0.36, 1]` everywhere (smooth decelerate).
**Press:** `scale(0.96)` — never smaller than `0.95`.
**Icon swap (Copy → Check):** scale `0.25↔1`, opacity, blur `4px`,
`duration-300`, `cubic-bezier(0.2, 0, 0, 1)`.

### Primitives (`src/components/site/reveal.tsx`)

Use these. Don’t hand-roll a second enter animation.

| Primitive | When | Recipe |
|---|---|---|
| `Reveal` | Blocks entering on scroll | opacity 0→1, y 22→0, blur 10→0, 0.8s, `once` |
| `Stagger` + `StaggerItem` | Grids, lists | stagger 0.06–0.08s, item y 18 + blur 8, 0.7s |
| `WordStagger` | Hero / page titles | **`animate` on mount** (not `whileInView` — inline spans miss IO). 0.07s per word, 0.75s, nbsp between words |
| `ParallaxImage` | Large stills | y ±42, scale 1.14→1.02, skipped on reduced motion |

`whileInView` must use a **block** element (`div`/`section`). Do not put
`whileInView` on an inline `span`.

### Dropdowns / overlays

Header menus and “Try for free” split:

```
enter: opacity 0, y 6, scale 0.97, blur 4px → rest, 180ms
exit:  opacity 0, y 4, scale 0.99, blur 2px, 180ms
```

Hover intent delay on leave: **90ms**. Chevron rotates 180°.

### Code window (`CodeTabs`)

- Stage fades in: y 32, blur 12px, 0.9s.
- Lines paint in with color: x 10, blur 6px, stagger **0.035s**, 0.45s.
- Pointer (mouse only): stacked cards parallax + 3D tilt
  (`rotateX` ±7, `rotateY` ±9, perspective 1100). Springs:
  `{ stiffness: 55, damping: 18, mass: 0.55 }`.
- No tilt / no parallax on touch or reduced motion.

### What not to add

- Bounce / spring with `bounce > 0` on UI chrome.
- Marquees, gradient-blob orbits, cursor-follower blobs.
- Layout animations that reflow the page (`layout` on large grids).
- Animating `width`/`height`/`top` — transform and opacity only.
- Auto-playing loops on hero type.

---

## Components (reuse these)

All under `src/components/site/`.

| File | Role |
|---|---|
| `logo.tsx` | Mark + wordmark |
| `header.tsx` | Fixed nav, hover menus, Contact Sales, Try-for-free split, mobile overlay |
| `footer.tsx` | Six-column sitemap + legal + privacy choices |
| `buttons.tsx` | `Btn`, `BtnLink` (primary / secondary / ghost), `TextArrow` |
| `page-hero.tsx` | Inner-page hero (kicker, WordStagger title, lede, actions) |
| `section.tsx` | `Section` (max-w-6xl), `Kicker`, `Hairline` |
| `reveal.tsx` | Motion primitives |
| `code-tabs.tsx` | Developer showcase: stacked window + language pills |
| `code-block.tsx` | Smaller colored window for docs / news |
| `product-page.tsx` | Product template (hero + parallax still + feature grid + quote) |
| `legal-doc.tsx` | Legal article shell |
| `not-found.tsx` | 404 |
| `cookie-choices.tsx` | Privacy dialog |

Copy, nav, products, news, plans: **`src/lib/site.ts`**. Don’t scatter
sitemap links.

### Header

- Transparent over the hero; `bg-bg/80 backdrop-blur-md` + bottom border
  after 8px scroll (or when the mobile menu is open).
- Desktop: Products, Solutions, Developer, Company (chevrons) · Pricing · News.
- Right: outlined **Contact Sales** + white split **Try for free**.
- Mobile: hamburger → two-line morph. Overlay is
  `fixed inset-0 z-40 bg-bg`. **Closed state must include `invisible`
  and `pointer-events-none`**, not only `opacity-0` (opacity-0 overlays
  still paint into screenshots and steal clicks).
- Do not read `footer.*` at module top-level in `header.tsx` — keep
  `navMenus()` inside the component (SSR chunk cycle).

### Buttons

- Pill (`rounded-full`).
- Primary: `bg-accent text-accent-fg`, hover opacity 85%.
- Secondary: `border-border-strong`, hover `border-fg/40 bg-fg/5`.
- Heights: sm 36px, md 44px, lg 48px. Header CTAs are 36px.
- Always `active:scale-[0.96]`.

### Code surfaces

**Showcase (`CodeTabs`)** — homepage developer section, `/api`.
Stacked dark plates, crop marks (8×8 `bg-bg` squares), grain + spotlight
on the stage (`.code-stage`), traffic lights, Copy, language pills
**below** the stack. Selected pill is **black / `bg-bg` with white type**,
not a white pill. Languages: Python, TypeScript, TypeScript (OpenAI SDK),
cURL.

**Inline (`CodeBlock`)** — docs, news. One window, optional filename,
same highlighter, no stack / no tilt.

Never ship a `<pre>` of un-highlighted code. Always run `highlight` /
`highlightLines`.

---

## Imagery

Cinematic stills, near-black, geometric fold / plane / architecture.
Current set in `public/images/`:

`hero-fold.jpg` `forge.jpg` `build.jpg` `studio.jpg` `pulse.jpg`
`relay.jpg` `infra.jpg` `office.jpg` `hq.jpg`

OG card: `public/og.jpg` + `src/lib/og/site.json` (`title: "UNFLD"`,
`card: "custom"`). Favicon: `public/favicon.svg`.

If you add a still, keep the same grade (black void, cool metal, no
people-first stock).

---

## Voice in UI

- Product names are proper nouns. Owned products: FCR, SiteCreator, Doutor Fiscal, Queravaga, Dialogus Psicossocial. Site families still in the IA: Forge, Build, Studio, Pulse, Relay.
- API product is **Relay**; the intelligence model is **pulse-2**.
- CTAs: “Our products”, “Get API Key”, “Read Docs”, “Contact Sales”,
  “Try for free”. Title case, no “Learn more” without a destination.
- Dates: `Aug 18, 2026`.
- Stats are sparse and specific (`15+`, `5`, `2019`).

---

## Adding a page

1. New route in `src/routes/` via `createFileRoute`.
2. Wrap in `<main>`. Use `PageHero` + `Section`. Set
   `head: () => ({ meta: [{ title: pageTitle("Name") }] })`.
3. Enter content with `Reveal` / `Stagger`. Titles through `WordStagger`
   (already inside `PageHero`).
4. Link it from `footer` in `src/lib/site.ts` (and header menu if it
   belongs there).
5. Product pages go through `ProductPage`. Legal pages through
   `LegalDoc`.
6. Do not add auth, a database, or a second header/footer.

Mobile (~390px): tap targets ≥ 40–44px, no horizontal overflow, hero
type must remain visible (WordStagger uses mount `animate`, not
`whileInView`).

---

## Do

- Edit tokens in `@theme`, then use utilities.
- Match x.ai density: lots of black, little chrome, type doing the work.
- Keep motion cinematic and slow on enter; snappy (150–200ms) on hover.
- Keep syntax colors only inside code.
- Leave the grain, the hairline grids, and the fold mark alone.

## Don’t

- Don’t introduce a brand color (purple buttons, blue links, gold rules).
- Don’t add Inter / Geist / a third font. Inter Tight + IBM Plex Mono.
- Don’t drop Framer-style gradient meshes, glassmorphism, or emoji icons.
- Don’t replace `motion` with CSS-only page enters “to simplify”.
- Don’t put `og:*` tags in `__root.tsx`.
- Don’t hide the Grok/Remix pill or strip `PreviewHostBridge`.
- Don’t bind a new look to one page — if the home is black and a new
  page is a white dashboard, you broke the system.

---

## File map

```
src/styles.css                 tokens, grain, code-stage, crop marks
src/lib/site.ts                copy, nav, products, news, plans
src/lib/highlight.tsx          syntax highlighter
src/components/site/*          chrome + primitives
src/routes/__root.tsx          fonts, grain, header/footer shell
src/routes/index.tsx           home (reference composition)
public/images/                 cinematic stills
public/favicon.svg             fold mark
public/og.jpg                  share card
```
