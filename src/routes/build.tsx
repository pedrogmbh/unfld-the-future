import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { pageTitle } from "@/lib/site";

export const Route = createFileRoute("/build")({
  head: () => ({ meta: [{ title: pageTitle("Build") }] }),
  component: Build,
});

function Build() {
  return (
    <ProductPage
      kicker="Build"
      title="Bring UNFLD to"
      titleSecond="your computer."
      lede="A product-engineering system for complex work. Agents, workflows, and a terminal that ships — the harness we use to make UNFLD products, now on yours."
      primary="Install Build"
      primaryTo="/download#desktop"
      secondary="Read the docs"
      secondaryTo="/docs"
      image="/images/build.jpg"
      imageAlt="A dark developer workstation running UNFLD Build"
      features={[
        {
          title: "Any codebase",
          body: "Works with the languages and tools you already have. No migration, no special repo layout.",
        },
        {
          title: "Workflows",
          body: "Orchestration that fans a task out across parallel agents, verifies the result, and reports back in one run.",
        },
        {
          title: "One command to install",
          body: "Desktop for macOS, Windows, and Linux. Also in the browser when you want a session without a local checkout.",
        },
        {
          title: "Agent dashboard",
          body: "See what each session is doing, reply to the ones that need you, and dispatch new work without losing the thread.",
        },
        {
          title: "Plugin marketplace",
          body: "Extend the harness with tools your team already runs — CI, issue trackers, design systems.",
        },
        {
          title: "The same bar as ours",
          body: "Build is not a demo. It is how Pulse 2, Relay, and Forge get made.",
        },
      ]}
      quote={{
        kicker: "Install",
        title: "One command. Any language. Right now.",
        body: "Open the Download page, install Build, and point it at a repository. The rest is the work.",
      }}
    />
  );
}
