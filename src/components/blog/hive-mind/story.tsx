import { Link } from "@tanstack/react-router";
import { useInView } from "motion/react";
import { RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { hiveMindCopy } from "./copy";
import { getPost } from "@/lib/blog/posts";
import { MARK_INNER_PATH, MARK_OUTER_PATH } from "@/components/site/brand-mark";
import { Section } from "@/components/site/section";
import "./story.css";

function FoldStudy() {
  const copy = hiveMindCopy[useLocale()];
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { once: true, amount: 0.45 });
  const [replay, setReplay] = useState(0);
  return (
    <figure className="my-14">
      <div
        ref={stage}
        className="hive-stage relative grid min-h-72 place-items-center overflow-hidden bg-accent py-8 text-bg sm:min-h-96"
      >
        <svg
          key={replay}
          viewBox="-32 -30 160 156"
          role="img"
          aria-label={copy.studyAlt}
          className={`h-64 w-full sm:h-80 ${visible ? "hive-assemble" : ""}`}
          fill="currentColor"
        >
          <path className="hive-outer" d={MARK_OUTER_PATH} />
          <path className="hive-inner" d={MARK_INNER_PATH} />
        </svg>
        <button
          type="button"
          className="absolute right-4 bottom-3 inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-current motion-reduce:hidden"
          onClick={() => setReplay((value) => value + 1)}
        >
          <RotateCcw size={15} aria-hidden="true" /> {copy.replay}
        </button>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        {copy.studyCaption}
      </figcaption>
    </figure>
  );
}

export function HiveMindStory() {
  const locale = useLocale();
  const copy = hiveMindCopy[locale];
  const post = getPost("hive-mind", locale);
  return (
    <>
      <Section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="grid items-center gap-9 border-t border-border pt-10 lg:grid-cols-[1.03fr_1fr] lg:gap-14 lg:pt-12">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Hive Mind</p>
            <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(3.4rem,7.2vw,6.9rem)] leading-[0.94] tracking-[-0.025em]">
              {post.title}
            </h1>
            <p className="mt-7 max-w-md text-xl leading-relaxed text-muted">{copy.opening}</p>
          </div>
          <picture>
            <source
              type="image/avif"
              srcSet="/images/hive-fold-800.avif 800w, /images/hive-fold-1600.avif 1600w"
              sizes="(min-width: 1024px) 550px, 100vw"
            />
            <img
              src="/images/hive-fold-800.webp"
              srcSet="/images/hive-fold-800.webp 800w, /images/hive-fold-1600.webp 1600w"
              sizes="(min-width: 1024px) 550px, 100vw"
              width={1600}
              height={1067}
              fetchPriority="high"
              alt={copy.leadAlt}
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
          </picture>
        </div>
      </Section>

      <Section className="pb-16 sm:pb-24">
        <div className="hive-reading">
          <p>{copy.mentor}</p>
          <p>{copy.expression}</p>
          <p>{copy.journey}</p>
          <p>{copy.identity}</p>
        </div>
      </Section>

      <section className="bg-paper px-5 py-14 text-bg sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <figure>
            <img
              src="/blog/hive-mind/dobras.webp"
              width={1440}
              height={960}
              loading="lazy"
              decoding="async"
              alt={copy.paperAlt}
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-shale">{copy.paperCaption}</figcaption>
          </figure>
          <div>
            <h2 className="max-w-sm font-display text-[clamp(2.8rem,5.3vw,4.8rem)] leading-[0.99]">
              {copy.interval}
            </h2>
            <p className="mt-6 text-lg leading-relaxed">{copy.wall}</p>
            <p className="mt-4 text-lg leading-relaxed">{copy.fold}</p>
          </div>
        </div>
      </section>

      <Section className="py-16 sm:py-24">
        <div className="hive-reading">
          <h2>{copy.uTitle}</h2>
          <p>{copy.look}</p>
        </div>
        <FoldStudy />
        <div className="hive-reading">
          <p>{copy.recognition}</p>
          <p>{copy.heritage}</p>
        </div>
        <figure className="mx-auto mt-12 grid max-w-4xl gap-px border border-border bg-border sm:grid-cols-2">
          <div className="grid h-48 content-between bg-bg-subtle p-6 sm:h-56 sm:p-8">
            <span className="text-sm text-muted">{copy.oldLabel}</span>
            <img
              src="/blog/hive-mind/anterior.webp"
              width={600}
              height={230}
              alt={copy.oldAlt}
              className="h-16 w-auto max-w-full object-contain object-left"
              loading="lazy"
            />
          </div>
          <div className="grid h-48 content-between bg-bg p-6 sm:h-56 sm:p-8">
            <span className="text-sm text-muted">{copy.newLabel}</span>
            <img
              src="/brand/lockup.svg"
              width={427}
              height={96}
              alt={copy.newAlt}
              className="h-16 w-auto max-w-full object-contain object-left"
              loading="lazy"
            />
          </div>
        </figure>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <div className="hive-reading border-t border-border pt-12">
          <h2>{copy.future}</h2>
          <p>{copy.team}</p>
          <p>{copy.ending}</p>
          <p className="hive-signature">Pedro Viana</p>
          <Link
            to="/legal/brand-guidelines"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-gold underline underline-offset-4"
          >
            {copy.guide} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </>
  );
}
