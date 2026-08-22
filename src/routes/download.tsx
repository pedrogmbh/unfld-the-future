import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/download")({
  head: () => ({ meta: [{ title: pageTitle("Download") }] }),
  component: Download,
});

function Download() {
  return (
    <main>
      <PageHero
        kicker="Download"
        title="UNFLD on every"
        titleSecond="surface."
        lede="Forge apps, Pulse, and Build — web, iOS, Android, and desktop. Same account. Same Relay backend."
      />
      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            id="web"
            title="Web"
            body="Forge, Pulse, and the Console run in the browser. No install."
            cta="Open in browser"
            to="/console"
          />
          <Card
            id="ios"
            title="iOS"
            body="Forge and Pulse on iPhone and iPad. Biometrics, offline cache, widgets."
            cta="App Store"
            href="https://apps.apple.com"
          />
          <Card
            id="android"
            title="Android"
            body="The same products on Play. Material where it belongs, UNFLD everywhere else."
            cta="Google Play"
            href="https://play.google.com"
          />
          <Card
            id="desktop"
            title="Desktop · Build"
            body="macOS, Windows, and Linux. The harness we use to make UNFLD products."
            cta="macOS"
            extra
          />
        </div>
      </Section>
    </main>
  );
}

function Card({
  id,
  title,
  body,
  cta,
  to,
  href,
  extra,
}: {
  id: string;
  title: string;
  body: string;
  cta: string;
  to?: string;
  href?: string;
  extra?: boolean;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-xl border border-border p-7 sm:p-8"
    >
      <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <BtnLink to={to} href={href} variant="secondary" size="sm">
          {cta}
        </BtnLink>
        {extra ? (
          <>
            <BtnLink href="#desktop" variant="secondary" size="sm">
              Windows
            </BtnLink>
            <BtnLink href="#desktop" variant="secondary" size="sm">
              Linux
            </BtnLink>
          </>
        ) : null}
      </div>
    </article>
  );
}
