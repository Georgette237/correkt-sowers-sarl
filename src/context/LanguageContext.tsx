import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Locale, type SiteTranslations } from '../i18n/translations';

interface LanguageContextValue {
  locale: Locale;
  t: SiteTranslations;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
}

const STORAGE_KEY = 'cs_locale';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      // ignore storage errors
    }
    return 'fr';
  });

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    try {
      window.localStorage.setItem(STORAGE_KEY, loc);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
