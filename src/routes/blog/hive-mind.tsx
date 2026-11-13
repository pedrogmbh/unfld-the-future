import { createFileRoute } from "@tanstack/react-router";
import { HiveMindStory } from "@/components/blog/hive-mind/story";
import { PostShell } from "@/components/blog/post-shell";
import { buildPostHead } from "@/lib/blog/head";

export const Route = createFileRoute("/blog/hive-mind")({
  head: () => buildPostHead("hive-mind"),
  component: HiveMindPage,
});

function HiveMindPage() {
  return (
    <PostShell slug="hive-mind">
      <HiveMindStory />
    </PostShell>
  );
}
