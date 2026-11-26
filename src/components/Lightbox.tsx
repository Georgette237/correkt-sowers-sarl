import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SmartImage } from './SmartImage';

interface LightboxProps {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!image) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={t.lightbox.dialogLabel}
      onClick={onClose}
    >
      <button type="button" className="lb__x" aria-label={t.lightbox.close} onClick={onClose}>
        &times;
      </button>
      <figure className="lb__in" onClick={(e) => e.stopPropagation()}>
        <SmartImage src={image.src} alt={image.alt} loading="eager" />
        <figcaption>{image.alt}</figcaption>
      </figure>
    </div>
  );
};
