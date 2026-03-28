export const supportedLanguages = ["en", "ar"] as const;

export type Language = (typeof supportedLanguages)[number];

export function isSupportedLanguage(value: string | undefined | null): value is Language {
  return value === "en" || value === "ar";
}

export function getLanguageFromPathname(pathname: string): Language {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function stripLanguagePrefix(pathname: string): string {
  if (pathname === "/ar") {
    return "/";
  }

  if (pathname.startsWith("/ar/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function localizePath(path: string, language: Language) {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }

  if (path.startsWith("#")) {
    return path;
  }

  const normalizedPath = stripLanguagePrefix(path.startsWith("/") ? path : `/${path}`);

  if (language === "en") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? "/ar" : `/ar${normalizedPath}`;
}

export function switchPathLanguage(pathname: string, language: Language, search = "", hash = "") {
  return `${localizePath(stripLanguagePrefix(pathname), language)}${search}${hash}`;
}
