import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.detailLocales.map(
    (detailLocale) => detailLocale.code,
  );

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = match(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (["next.svg", "vercel.svg"]) return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.detailLocales.every(
    (locale) =>
      !pathname.startsWith(`/${locale.code}/`) &&
      pathname !== `/${locale.code}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/public/` and `/api/`
  // Next.js always considers /public as /public/index. Therefore, a matcher of /public/:path will match.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public/:path*).*)"],
};
