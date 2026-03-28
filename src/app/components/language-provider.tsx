import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { getLanguageFromPathname, localizePath, stripLanguagePrefix, switchPathLanguage, type Language } from "../lib/locale";
import { translate } from "../lib/translations";

interface LanguageContextValue {
  language: Language;
  direction: "ltr" | "rtl";
  t: (key: string) => string;
  localizePath: (path: string) => string;
  switchLanguage: (nextLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const language = getLanguageFromPathname(location.pathname);
  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = direction;
    root.classList.toggle("rtl", direction === "rtl");
  }, [direction, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      t: (key) => translate(language, key),
      localizePath: (path) => localizePath(path, language),
      switchLanguage: (nextLanguage) => {
        if (nextLanguage === language) {
          return;
        }

        navigate(switchPathLanguage(location.pathname, nextLanguage, location.search, location.hash));
      },
    }),
    [direction, language, location.hash, location.pathname, location.search, navigate],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useLocalizedPath() {
  const { localizePath: localize } = useLanguage();
  return localize;
}

export function useCanonicalPath() {
  const location = useLocation();
  return stripLanguagePrefix(location.pathname);
}
