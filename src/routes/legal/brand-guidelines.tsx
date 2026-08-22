import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/site/logo";
import { H, LegalDoc } from "@/components/site/legal-doc";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/legal/brand-guidelines")({
  head: () => ({ meta: [{ title: pageTitle("Brand Guidelines") }] }),
  component: Page,
});

function Page() {
  return (
    <LegalDoc kicker="Brand" title="UNFLD Brand Guidelines" updated="August 1, 2026">
      <p>
        Use these guidelines if you write about UNFLD, build on Relay, or
        partner with us. Do not redraw the mark. Do not invent a new one. The
        trading name is UNFLD. The legal name is UNFOLDING THE FUTURE LTDA.
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

      <H>Name</H>
      <p>
        UNFLD is spelled in five capital letters. It is pronounced “unfold.”
        Do not write Unfld, Unfold, or UNFOLD in product or press, except when
        explaining pronunciation. In contracts and invoices, use the legal name
        UNFOLDING THE FUTURE LTDA (CNPJ 62.855.761/0001-82). The trading name
        and the legal name are not interchangeable on legal documents.
      </p>
      <H>Mark</H>
      <p>
        The fold mark is three polygons suggesting a plane unfolding. Use it
        with the wordmark, or alone when the name is already on the surface.
        Clear space: the width of one fold wing on all sides. Do not rotate,
        recolor, or add shadows.
      </p>
      <H>Color</H>
      <p>
        Primary field: #000000. Primary type: #F5F5F5. Muted: #8A8A8A. No
        purple, no gold, no gradients as brand fills. The only accent is white
        on black, or black on white.
      </p>
      <H>Type</H>
      <p>
        Inter Tight for display and UI. IBM Plex Mono for code and coordinates.
        Headlines are tight, slightly negatively tracked, never all-caps for
        long sentences. The wordmark itself is tracked out.
      </p>
      <H>Do not</H>
      <p>
        Do not put the mark on a busy photograph. Do not lock it up with another
        logo without permission. Do not use the fold as a decorative spinner.
        Do not mimic x.ai, SpaceX, or any other company’s identity and call it
        UNFLD.
      </p>
      <H>Questions</H>
      <p>brand@unfld.com</p>
    </LegalDoc>
  );
}
