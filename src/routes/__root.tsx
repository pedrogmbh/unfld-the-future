import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import appCss from "../styles.css?url";
import { LocaleProvider } from "@/lib/i18n/provider";
import { resolveRequestLocale } from "@/lib/i18n/resolve";
import { setCurrentLocale } from "@/lib/i18n/runtime";
import { getDefaultI18n } from "@/lib/i18n/instance";
import { getMessages } from "@/lib/i18n/messages";
import { DEFAULT_LOCALE, LOCALE_META, type Locale } from "@/lib/i18n/locales";

const APP_NAME = "UNFLD";

export type RouterContext = {
  locale: Locale;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async ({ location }) => {
    try {
      const locale = await resolveRequestLocale(location.search);
      setCurrentLocale(locale);
      await getDefaultI18n().changeLanguage(locale);
      return { locale };
    } catch {
      setCurrentLocale(DEFAULT_LOCALE);
      return { locale: DEFAULT_LOCALE };
    }
  },
  head: ({ match }) => {
    const locale = match.context.locale ?? "en-US";
    const description = getMessages(locale).pages.root.description;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: APP_NAME },
        { name: "theme-color", content: "#181B18" },
        { name: "description", content: description },
      ],
      links: [
        { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "/rss.xml",
          title: "UNFLD Blog",
        },
        { rel: "stylesheet", href: appCss },
        { rel: "stylesheet", href: "/fonts/faces.css" },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/BarlowCondensed-SemiBold.woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/SourceSans3-Regular.woff2",
          crossOrigin: "anonymous",
        },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      ],
    };
  },
  component: Root,
});

function Root() {
  const { locale } = Route.useRouteContext();
  return (
    <html lang={LOCALE_META[locale].html} className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <div className="grain" aria-hidden="true" />
        <LocaleProvider initialLocale={locale}>
          <AuthProvider>
            <Header />
            <Outlet />
            <Footer />
          </AuthProvider>
        </LocaleProvider>
        <Scripts />
      </body>
    </html>
  );
}
