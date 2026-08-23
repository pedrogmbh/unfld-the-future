import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/buttons";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/reveal";
import { Kicker, Section } from "@/components/site/section";
import { buildPageHead } from "@/lib/meta";

export const Route = createFileRoute("/build-with-us")({
  head: () =>
    buildPageHead({
      title: "Build with UNFLD — Custom software",
      description:
        "We design and ship custom systems beside teams whose operation cannot be reduced to a template.",
      path: "/build-with-us",
    }),
  component: BuildWithUsPage,
});

const pillars = [
  {
    title: "Sit with the operation",
    body: "We begin with the people, constraints, and daily routines already inside the workflow. Technology follows understanding.",
  },
  {
    title: "Define the smallest outcome",
    body: "We identify the highest-leverage friction point and build the smallest verifiable system that resolves it.",
  },
  {
    title: "Prove in real use",
    body: "We test and validate in active operations with real teams, gathering direct evidence before expanding scope.",
  },
  {
    title: "Operate or transition",
    body: "We can operate the system under defined SLAs or execute a structured handover with documentation and training.",
  },
] as const;

const engagements = [
  {
    kicker: "Field intelligence",
    title: "Agronomy & operations",
    body: "Offline mobile tools, operational sync, and recommendation engines tailored to complex field protocols.",
  },
  {
    kicker: "Conversational workflows",
    title: "WhatsApp-first systems",
    body: "Guided routines, document intake, and transactional workflows meeting users directly where they already work.",
  },
  {
    kicker: "Occupational & compliance",
    title: "Documented risk systems",
    body: "Confidential listening, risk classification, and documented evidence designed to support review and management follow-up.",
  },
  {
    kicker: "Enterprise architecture",
    title: "Custom platforms",
    body: "Tailored software with agreed hosting configurations, role-based access, and designated team support recorded in the contract.",
  },
] as const;

export function BuildWithUsPage() {
  return (
    <main>
      <PageHero
        kicker="Custom systems"
        title="Build with UNFLD."
        lede="We design and ship custom systems beside teams whose operation cannot be reduced to a template. Understand the operation. Define the smallest outcome worth shipping. Prove it in use. Then scale what works."
        actions={
          <>
            <BtnLink to="/contact">Talk to UNFLD</BtnLink>
            <BtnLink to="/how-we-work" variant="secondary">
              How we work
            </BtnLink>
          </>
        }
      />

      <Section className="pb-16">
        <Kicker>Engagement model</Kicker>
        <h2 className="max-w-2xl font-display text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight">
          How we build beside you.
        </h2>
        <Stagger
          className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          delay={0.06}
        >
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col justify-between bg-bg p-7">
                <div>
                  <p className="font-mono text-xs text-subtle">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-lg font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="py-16">
        <Kicker>Focus areas</Kicker>
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Systems we build.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {engagements.map((e) => (
            <article
              key={e.title}
              className="rounded-xl border border-border p-7 sm:p-8"
            >
              <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
                {e.kicker}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-8 sm:p-12">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              When the product is ours, we operate it.
              <br />
              <span className="text-muted">
                When the mission is yours, we build beside you.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Start with a conversation about the operation you need to improve.
              We scope engagements realistically, without agency theatrics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink to="/contact">Talk to UNFLD</BtnLink>
              <BtnLink to="/work" variant="secondary">
                Selected work
              </BtnLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
