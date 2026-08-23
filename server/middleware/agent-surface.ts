import {
  applyDocumentVary,
  handleAgentSurfaceRequest,
  shouldApplyDocumentVary,
} from "../../src/lib/agent-surface";

interface AgentEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export default async function agentSurfaceMiddleware(
  event: AgentEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const request = new Request(event.url, {
    method: event.req.method,
    headers: event.req.headers,
  });
  const handled = handleAgentSurfaceRequest(request);
  if (handled) return handled;

  const result = await next();
  if (
    result instanceof Response &&
    shouldApplyDocumentVary(event.url.pathname)
  ) {
    return applyDocumentVary(result);
  }
  return result;
}
