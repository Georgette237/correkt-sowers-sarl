import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="haut"
      aria-label={t.lightbox.scrollToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUp size={22} />
    </button>
  );
};
