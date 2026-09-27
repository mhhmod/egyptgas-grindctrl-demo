"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; toggle: () => void }>({
  lang: "en",
  setLang: () => {},
  toggle: () => {}
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "ar" : "en")), []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === "ar" ? "ar" : "en";
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

export type Bilingual = { en: string; ar: string };
export function pick(b: Bilingual, lang: Lang): string {
  return lang === "ar" ? b.ar : b.en;
}
