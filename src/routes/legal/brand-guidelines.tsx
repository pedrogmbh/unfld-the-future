import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/site/logo";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle, SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/brand-guidelines")({
  head: () => ({ meta: [{ title: pageTitle("Brand Guidelines") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc kicker="Brand" title="UNFLD Brand Guidelines" updated="August 22, 2026">
      <p>
        UNFLD stands for UNFOLDING THE FUTURE: the belief that meaningful progress is built by turning difficult work into systems people can use. The brand should feel precise, calm, practical, and in motion. Use these guidelines when referencing UNFLD, our products, or partner engagements.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-bg-subtle">
          <span className="inline-flex items-center gap-3 text-fg">
            <Mark className="size-8" />
            <span className="font-display text-2xl font-semibold tracking-[0.28em]">
              UNFLD
            </span>
          </span>
        </div>
        <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-fg">
          <span className="inline-flex items-center gap-3 text-bg">
            <Mark className="size-8" />
            <span className="font-display text-2xl font-semibold tracking-[0.28em]">
              UNFLD
            </span>
          </span>
        </div>
      </div>

      <H>Name & legal identity</H>
      <p>
        UNFLD is spelled in five capital letters. It is pronounced “unfold.”
        Do not write Unfld, Unfold, or UNFOLD in product or press, except when
        explaining pronunciation. In contracts, formal agreements, and invoices, use the full legal name
        UNFOLDING THE FUTURE LTDA (CNPJ {SITE.cnpj}). The trading name
        and the legal name are not interchangeable on formal legal documents.
      </p>
      <H>Voice & communication</H>
      <p>
        Write with concrete verbs, specific proof, and short sentences. Prefer what the product changes over what the company claims to be. Avoid borrowed futurism, unexplained superlatives, theatrical aggression, and claims the product cannot evidence.
      </p>
      <H>The fold mark</H>
      <p>
        The fold mark is three polygons suggesting a plane unfolding. Use it
        with the wordmark, or alone when the brand name is already established on the surface.
        Clear space: the width of one fold wing on all sides. Do not rotate,
        recolor, distort, or add decorative shadows.
      </p>
      <H>Color system</H>
      <p>
        Primary field: pure black (#000000). Primary type: off-white (#F5F5F5). Muted type: neutral gray (#8A8A8A). No extra brand colors, purple, gold, or gradient blobs in chrome. The only accent is crisp white on black, or black on white.
      </p>
      <H>Typography</H>
      <p>
        Inter Tight for display titles and interface elements. IBM Plex Mono for code, coordinates, timestamps, and technical metadata.
        Headlines are tight, slightly negatively tracked, never all-caps for
        long sentences. The wordmark itself is tracked out.
      </p>
      <H>Restrictions</H>
      <p>
        Do not place the mark on busy photographs without proper gradient masking. Do not lock it up with third-party logos without permission. Do not imitate another company’s visual identity, information architecture, or voice. Inspiration must be transformed into a system recognizably ours.
      </p>
      <H>Questions & approvals</H>
      <p>
        For brand asset requests or approval questions:{" "}
        <a href={`mailto:${SITE.brand}`} className="text-fg underline-offset-4 hover:underline">
          {SITE.brand}
        </a>
        .
      </p>
    </LegalDoc>
  );
}
