import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";
import { NotFound } from "@/components/site/not-found";
import { DEFAULT_LOCALE } from "@/lib/i18n/locales";

export function getRouter() {
  return createRouter({
    routeTree,
    context: { locale: DEFAULT_LOCALE },
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}
