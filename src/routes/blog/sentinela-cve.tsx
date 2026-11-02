import { createFileRoute } from "@tanstack/react-router";
import { PostShell } from "@/components/blog/post-shell";
import { SentinelaPost } from "@/components/blog/sentinela-cve/post";
import { buildPostHead } from "@/lib/blog/head";

export const Route = createFileRoute("/blog/sentinela-cve")({
  head: () => buildPostHead("sentinela-cve"),
  component: SentinelaPage,
});

function SentinelaPage() {
  return (
    <PostShell slug="sentinela-cve">
      <SentinelaPost />
    </PostShell>
  );
}
