import React, { createContext, useContext, useState } from 'react';

export interface CookiePreferences {
  essential: true;
  preferences: boolean;
  media: boolean;
  decided: boolean;
}

interface CookieContextValue {
  prefs: CookiePreferences;
  bannerVisible: boolean;
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  acceptAll: () => void;
  acceptEssentialOnly: () => void;
  saveCustom: (preferences: boolean, media: boolean) => void;
}

const STORAGE_KEY = 'cs_cookie_prefs';

const defaultPrefs: CookiePreferences = {
  essential: true,
  preferences: true,
  media: true,
  decided: false,
};

const CookieContext = createContext<CookieContextValue | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prefs, setPrefs] = useState<CookiePreferences>(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
        return {
          essential: true,
          preferences: Boolean(parsed.preferences),
          media: Boolean(parsed.media),
          decided: Boolean(parsed.decided),
        };
      }
    } catch {
      // ignore storage errors
    }
    return defaultPrefs;
  });

  const [modalOpen, setModalOpen] = useState(false);

  const persist = (next: CookiePreferences) => {
    setPrefs(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const acceptAll = () => {
    persist({ essential: true, preferences: true, media: true, decided: true });
    setModalOpen(false);
  };

  const acceptEssentialOnly = () => {
    persist({ essential: true, preferences: false, media: false, decided: true });
    setModalOpen(false);
  };

  const saveCustom = (preferences: boolean, media: boolean) => {
    persist({ essential: true, preferences, media, decided: true });
    setModalOpen(false);
  };

  return (
    <CookieContext.Provider
      value={{
        prefs,
        bannerVisible: !prefs.decided,
        modalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false),
        acceptAll,
        acceptEssentialOnly,
        saveCustom,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export function useCookies(): CookieContextValue {
  const ctx = useContext(CookieContext);
  if (!ctx) throw new Error('useCookies must be used within CookieProvider');
  return ctx;
}
