import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { useCookies } from '../context/CookieContext';
import { useLanguage } from '../context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const { prefs, bannerVisible, modalOpen, openModal, closeModal, acceptAll, acceptEssentialOnly, saveCustom } =
    useCookies();
  const { t } = useLanguage();
  const [prefToggle, setPrefToggle] = useState(prefs.preferences);
  const [mediaToggle, setMediaToggle] = useState(prefs.media);

  useEffect(() => {
    setPrefToggle(prefs.preferences);
    setMediaToggle(prefs.media);
  }, [prefs, modalOpen]);

  return (
    <>
      {bannerVisible && !modalOpen && (
        <aside className="cookie-banniere" role="region" aria-label={t.cookies.bannerTitle}>
          <div className="cookie-banniere__texte">
            <div className="flex items-center gap-2 mb-1">
              <Cookie size={16} className="text-[#1f6b32] shrink-0" aria-hidden="true" />
              <strong>{t.cookies.bannerTitle}</strong>
            </div>
            <span>{t.cookies.bannerText}</span>
          </div>
          <div className="cookie-banniere__actions">
            <button type="button" className="cookie-btn" onClick={openModal}>
              {t.cookies.customize}
            </button>
            <button type="button" className="cookie-btn" onClick={acceptEssentialOnly}>
              {t.cookies.essentialOnly}
            </button>
            <button type="button" className="cookie-btn cookie-btn--primaire" onClick={acceptAll}>
              {t.cookies.acceptAll}
            </button>
          </div>
        </aside>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white border border-[#d5e0d1] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 id="cookie-modal-title" className="text-xl font-bold text-[#14401f] m-0">
                  {t.cookies.modalTitle}
                </h2>
                <p className="text-sm text-[#445347] mt-1 mb-0">{t.cookies.modalIntro}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label={t.cookies.close}
                className="w-10 h-10 rounded-full grid place-items-center bg-[#f4f5f1] text-[#16251a] hover:bg-[#e4efe0] cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 my-5">
              <div className="p-3.5 rounded-xl bg-[#f4f5f1] border border-[#d5e0d1] flex items-start justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-[#14401f]">{t.cookies.essentialTitle}</div>
                  <p className="text-xs text-[#445347] mt-0.5 mb-0">{t.cookies.essentialDesc}</p>
                </div>
                <span className="text-xs font-bold text-[#1f6b32] shrink-0 pt-0.5">{t.cookies.essentialBadge}</span>
              </div>

              <label className="p-3.5 rounded-xl bg-white border border-[#d5e0d1] flex items-start justify-between gap-4 cursor-pointer">
                <div>
                  <div className="font-bold text-sm text-[#16251a]">{t.cookies.preferencesTitle}</div>
                  <p className="text-xs text-[#445347] mt-0.5 mb-0">{t.cookies.preferencesDesc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefToggle}
                  onChange={(e) => setPrefToggle(e.target.checked)}
                  className="w-5 h-5 accent-[#1f6b32] mt-0.5 shrink-0 cursor-pointer"
                />
              </label>

              <label className="p-3.5 rounded-xl bg-white border border-[#d5e0d1] flex items-start justify-between gap-4 cursor-pointer">
                <div>
                  <div className="font-bold text-sm text-[#16251a]">{t.cookies.mediaTitle}</div>
                  <p className="text-xs text-[#445347] mt-0.5 mb-0">{t.cookies.mediaDesc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={mediaToggle}
                  onChange={(e) => setMediaToggle(e.target.checked)}
                  className="w-5 h-5 accent-[#1f6b32] mt-0.5 shrink-0 cursor-pointer"
                />
              </label>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button type="button" className="cookie-btn" onClick={acceptEssentialOnly}>
                {t.cookies.essentialOnly}
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn--primaire"
                onClick={() => saveCustom(prefToggle, mediaToggle)}
              >
                {t.cookies.savePrefs}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
