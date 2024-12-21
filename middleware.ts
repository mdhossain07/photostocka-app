import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "bn"];
const defaultLocale = "en";

function getLocaleFromRequest(request: NextRequest) {
  // Check if a locale is stored in cookies
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptedLanguage = request.headers.get("Accept-Language");
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export default function Middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieLocale = request.cookies.get("locale")?.value;

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameLocale) {
    const locale = getLocaleFromRequest(request);
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
    response.cookies.set("locale", locale, { path: "/" });
    return response;
  }

  if (pathnameLocale !== cookieLocale) {
    const response = NextResponse.next();
    response.cookies.set("locale", pathnameLocale, { path: "/" });
    return response;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|image|assets|.*\\..*|_next).*)",
  ],
};
