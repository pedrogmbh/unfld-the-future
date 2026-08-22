import { Reveal, WordStagger } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  titleSecond,
  lede,
  actions,
  className,
}: {
  kicker?: string;
  title: string;
  titleSecond?: string;
  lede?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "w-full px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {kicker ? (
          <Reveal>
            <p className="mb-6 text-[13px] font-medium tracking-[0.18em] text-muted uppercase">
              {kicker}
            </p>
          </Reveal>
        ) : null}
        <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-fg">
          <WordStagger text={title} />
          {titleSecond ? (
            <>
              <br />
              <WordStagger text={titleSecond} />
            </>
          ) : null}
        </h1>
        {lede ? (
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
              {lede}
            </p>
          </Reveal>
        ) : null}
        {actions ? (
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
