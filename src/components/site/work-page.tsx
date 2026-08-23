import { Link } from "@tanstack/react-router";
import { BtnLink, TextArrow } from "@/components/site/buttons";
import {
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { Kicker, Section } from "@/components/site/section";
import { cn } from "@/lib/utils";
import {
  type SelectedWork,
  workNeighbors,
} from "@/lib/site";

export function WorkStill({
  src,
  alt,
  className,
  aspect = "video",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "wide" | "photo";
}) {
  const ratio =
    aspect === "wide"
      ? "aspect-[16/8]"
      : aspect === "photo"
        ? "aspect-[16/9]"
        : "aspect-video";
  return (
    <div className={cn("overflow-hidden rounded-xl", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10",
          ratio,
        )}
      />
    </div>
  );
}

export function WorkFilm({
  id,
  hash,
  title,
}: {
  id: string;
  hash?: string;
  title: string;
}) {
  const params = new URLSearchParams({
    byline: "0",
    portrait: "0",
    title: "0",
    dnt: "1",
  });
  if (hash) params.set("h", hash);
  const src = `https://player.vimeo.com/video/${id}?${params.toString()}`;

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-fg/10">
      <div className="relative aspect-video w-full min-w-0 bg-window-stage">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function WorkTile({
  work,
  variant = "half",
}: {
  work: SelectedWork;
  variant?: "full" | "half";
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: work.slug }}
      className="group block min-w-0"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={work.image}
          alt=""
          className={cn(
            "w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-700 ease-out group-hover:scale-105",
            variant === "full" ? "aspect-[16/8]" : "aspect-[16/9]",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            {work.client}
            <span className="text-subtle"> · {work.year}</span>
          </p>
          <h3
            className={cn(
              "mt-2 font-display font-medium tracking-tight",
              variant === "full"
                ? "text-2xl sm:text-4xl"
                : "text-xl sm:text-2xl",
            )}
          >
            {work.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
        {work.line}
      </p>
      <TextArrow className="mt-3 text-[13px] text-muted group-hover:text-fg">
        Read
      </TextArrow>
    </Link>
  );
}

export function WorkCase({ work }: { work: SelectedWork }) {
  const { prev, next } = workNeighbors(work.slug);
  const facts = [
    ["Client", work.client],
    ["Year", work.year],
    ["Form", work.form],
    ["Field", work.field],
  ] as const;

  return (
    <main>
      <PageHero
        kicker={`${work.client} · ${work.year}`}
        title={work.title}
        lede={work.lede}
        actions={
          <>
            <BtnLink to="/work" variant="secondary">
              All work
            </BtnLink>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
          </>
        }
      />

      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ParallaxImage src={work.image} alt={work.title} />
        </div>
      </section>

      <Section className="py-16 sm:py-24">
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-bg p-6">
              <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {k}
              </dt>
              <dd className="mt-2 font-display text-lg font-medium tracking-tight">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <Kicker>The work</Kicker>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
              {work.outcome}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {work.story.map((p, i) => (
              <Reveal key={p.slice(0, 28)} delay={i * 0.06}>
                <p className="text-[16px] leading-[1.7] text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {work.film ? (
        <Section className="pb-16 sm:pb-24">
          <Reveal>
            <Kicker>On screen</Kicker>
            <div className="mt-6 w-full min-w-0">
              <WorkFilm
                id={work.film.id}
                hash={work.film.hash}
                title={work.film.title}
              />
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section className="pb-16 sm:pb-24">
        <Kicker>Stills</Kicker>
        <Stagger
          className="mt-6 grid gap-3 sm:grid-cols-2"
          delay={0.07}
        >
          {work.gallery.map((src, i) => (
            <StaggerItem
              key={src}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <WorkStill
                src={src}
                alt=""
                aspect={i === 0 ? "wide" : "photo"}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <div
          className={cn(
            "grid gap-px overflow-hidden rounded-xl border border-border bg-border",
            prev && next ? "sm:grid-cols-2" : "",
          )}
        >
          {prev ? (
            <Link
              to="/work/$slug"
              params={{ slug: prev.slug }}
              className="group bg-bg p-6 transition-colors hover:bg-bg-elevated sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                Previous
              </p>
              <p className="mt-3 font-display text-xl font-medium tracking-tight">
                {prev.title}
              </p>
              <p className="mt-1 text-sm text-muted">{prev.client}</p>
            </Link>
          ) : null}
          {next ? (
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group bg-bg p-6 transition-colors hover:bg-bg-elevated sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                Next
              </p>
              <p className="mt-3 font-display text-xl font-medium tracking-tight">
                {next.title}
              </p>
              <p className="mt-1 text-sm text-muted">{next.client}</p>
            </Link>
          ) : null}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              When the mission is yours,
              <br />
              <span className="text-muted">we build beside you.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Selected work from the history we carry. Custom systems we
              design and ship beside teams whose operation cannot be reduced
              to a template.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact">Talk to UNFLD</BtnLink>
              <BtnLink to="/build-with-us" variant="secondary">
                How we build
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
