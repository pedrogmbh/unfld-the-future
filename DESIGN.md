# UNFLD Design System

The approved visual identity is **Célula aberta**, introduced in November 2026.
The master assets and brand guide live in `public/brand/`. The website uses
TanStack Start, React, Tailwind v4 and `motion/react`.

## Brand

UNFLD has five capital letters and is pronounced “unfold”. The legal name is
UNFOLDING THE FUTURE LTDA. Formal contracts and proposals use the legal name.

The isotipo is an open hive cell formed from two parallel folds on a 30-degree
grid. Its origin is the shared understanding between UNFLD’s founder and former
CTO. The gap between the folds draws a U. The lettering is custom vector artwork.

Use `Mark` and `Lockup` from `src/components/site/logo.tsx`. Geometry lives in
`brand-mark.ts`. The default mark is Honey and the lettering inherits its
surrounding text color. The existing `bevel={false}` prop selects one ink.

Use the standalone mark where the company name already appears. Leave clear
space equal to one quarter of the mark’s width around every signature. Minimum
widths are 24 px for the mark and 96 px for the full signature. The 16 px favicon
has a dedicated optical master. Preserve orientation, proportions and the gap
between the folds.

Canonical assets are `/brand/lockup.svg`, `/brand/symbol.svg`, and their
`-ink.svg` versions. `/logo.svg` is used by structured metadata. The approved
manual and kit are downloadable from `/legal/brand-guidelines`.

## Color

Define colors in `src/styles.css` under `@theme`. JSX consumes token classes.

| Token | Value | Use |
|---|---|---|
| `bg` | #181B18 | Ink, main digital field |
| `fg`, `paper` | #F5F3EB | Paper, primary text and reading surfaces |
| `accent`, `gold` | #EBA937 | Honey, isotipo, primary actions, focus and kickers |
| `accent-fg` | #181B18 | Text on Honey |
| `ochre` | #805113 | Links on Paper |
| `shale` | #555C56 | Secondary text on Paper |
| `bg-elevated` | #21251F | Menus and elevated panels |
| `bg-subtle` | #292E27 | Inset panels |
| `muted` | #C0C6BB | Secondary text on Ink |
| `subtle` | #A1AA9B | Captions and metadata on Ink |
| `border` | #3B403A | Decorative separators |
| `border-strong` | #697160 | Control boundaries |
| `status` | #7CBA8C | Operational dot beside its written label |

Honey on Ink measures 8.49:1 contrast. Ink on Paper measures 15.64:1.
Ochre on Paper measures 6.09:1. Slate on Paper measures 6.19:1.

Honey is a deliberate accent in digital layouts. Use it for the primary action
and brand signature. Use an Ink signature and text on a full Honey field.
Formal proposals use the black signature on white paper.

Syntax colors belong inside code windows. Status has a written label and a
static dot. Keep gradients confined to existing code-stage lighting.

## Typography

All fonts are self-hosted in `public/fonts/`, declared in `faces.css`.
The display and regular text fonts preload in `__root.tsx`.

- **Barlow Condensed Semibold** is `font-display`. Use it for headlines, section
  titles and covers. Use 600 weight with modest negative tracking.
- **Source Sans 3 Regular and Semibold** is `font-sans`. Use it for paragraphs,
  navigation, buttons and reading. Body leads use 18–20 px with generous leading.
- **IBM Plex Mono** is `font-mono`, reserved for code and technical metadata.
- Use the supplied vector lettering for the UNFLD wordmark.

Headline type balances at natural word boundaries. Retain the hierarchy in
`PageHero` and existing product templates. Do not stretch type or artificially
reconstruct the wordmark from a font. The downloadable Word template uses Arial
at 11 pt for compatibility in tender documents.

## Layout and images

Content uses `max-w-6xl` with `px-5 sm:px-8 lg:px-12`. The fixed header is
80 px high. Desktop navigation starts at 1280 px. The header contains the logo,
navigation and the contact action. Header and footer omit language selectors.
The header omits WhatsApp, and the footer omits the operational status indicator.

The homepage pairs display typography with the approved Honey paper folds.
Responsive AVIF and WebP variants live at `/images/hive-fold-*`. The image is
visible on mobile and has explicit dimensions, localized alt text and a stable
aspect ratio. The 1200 × 630 share card uses the same mark and photographic study.

Use negative space, hairline divisions and restrained rectangular controls.
Primary buttons have Honey fill, Ink text and 4 px corners. Secondary actions
use outlines. Existing card grids and product layouts use the shared tokens.

Keep `w-full min-w-0` on nested flex and grid children that can overflow.
Code may scroll within its panel. The page must fit a 390 px viewport.
Use `Section`, `PageHero`, `BtnLink`, `LegalDoc`, and the existing templates.

Product and team-history imagery remains specific to its subject. The corporate
identity frames those images. Keep image alt text, intrinsic dimensions and lazy
loading below the fold.

## Motion and interaction

Use `motion/react` primitives in `reveal.tsx`. Easing is
`[0.22, 1, 0.36, 1]`. Respect reduced motion. Press scales to 0.96.

`WordStagger` animates on mount and keeps text readable in server-rendered HTML.
`Reveal` runs on block elements. Header menu transitions last 180 ms and use a
90 ms leave delay. Code tilt is mouse-only and skips reduced motion.

Closed mobile menus include `invisible pointer-events-none opacity-0`.
The global focus ring is Honey with a 3 px offset. Grain stays subtle and
pointer-transparent. Avoid autoplay loops or moving status dots.

## Content and implementation

Use calm, precise language, concrete verbs and supported claims. Product names
are proper nouns. Company-owned products are Dialogus Psicossocial, Oluart, Unifikar and Telemedicina.

Keep navigation and company data in `src/lib/site.ts` and localized copy in the
four message bundles. Brand guidance is translated in all four locales.

Preserve `getRouter()`, `PreviewHostBridge`, `grokPwaPlugin()`, the existing
header/footer, auth-off configuration and static product architecture. Keep
`npm run dev` on port 8080.

Validate typechecking, localization, the production build, and existing tests.
Inspect desktop and mobile pages, menu and language interactions, fonts, assets
and the browser console. A successful HTTP response alone is insufficient.
