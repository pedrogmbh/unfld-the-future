import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api")({
  component: ApiLayout,
});

function ApiLayout() {
  return <Outlet />;
}
