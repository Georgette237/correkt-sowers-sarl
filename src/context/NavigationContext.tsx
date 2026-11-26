import React, { createContext, useContext, useEffect, useState } from 'react';
import type { PageId } from '../data/siteData';
import { useLanguage } from './LanguageContext';

export interface ContactIntent {
  subjectIndex?: number;
  note?: string;
}

interface NavigationContextValue {
  currentPage: PageId;
  contactIntent: ContactIntent | null;
  navigate: (page: PageId, options?: { anchor?: string; intent?: ContactIntent }) => void;
  clearContactIntent: () => void;
}

const VALID_PAGES: PageId[] = ['accueil', 'alevins', 'poissons', 'elevage', 'actualites', 'contact'];

function pageFromHash(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, '').split('#')[0] as PageId;
  return VALID_PAGES.includes(raw) ? raw : 'accueil';
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>(pageFromHash);
  const [contactIntent, setContactIntent] = useState<ContactIntent | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(pageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const meta = t.meta[currentPage];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
  }, [currentPage, t]);

  const navigate = (page: PageId, options?: { anchor?: string; intent?: ContactIntent }) => {
    if (options?.intent) {
      setContactIntent(options.intent);
    }
    setCurrentPage(page);
    window.history.replaceState(null, '', `#${page}`);

    window.requestAnimationFrame(() => {
      if (options?.anchor) {
        const el = document.getElementById(options.anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        contactIntent,
        navigate,
        clearContactIntent: () => setContactIntent(null),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
