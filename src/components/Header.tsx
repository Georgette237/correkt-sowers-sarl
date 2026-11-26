import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { SITE_IMAGES, type PageId } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { SmartImage } from './SmartImage';

export const Header: React.FC = () => {
  const { locale, t, toggleLocale } = useLanguage();
  const { currentPage, navigate } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: Array<{ page: PageId; label: string }> = [
    { page: 'accueil', label: t.nav.home },
    { page: 'alevins', label: t.nav.alevins },
    { page: 'poissons', label: t.nav.poissons },
    { page: 'elevage', label: t.nav.elevage },
    { page: 'actualites', label: t.nav.actualites },
    { page: 'contact', label: t.nav.contact },
  ];

  const handleNav = (page: PageId) => {
    setMenuOpen(false);
    navigate(page);
  };

  return (
    <header className={`entete ${compact ? 'entete--compact' : ''}`}>
      <div className="wrap entete__in">
        <a
          className="logo"
          href="#accueil"
          aria-label="Correkt Sowers, retour à l'accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNav('accueil');
          }}
        >
          <SmartImage
            src={SITE_IMAGES.logo}
            alt="Correkt Sowers Sarl"
            width={600}
            height={731}
            isLogo
            loading="eager"
          />
        </a>

        <nav className={`nav ${menuOpen ? 'ouvert' : ''}`} id="nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.page}
              type="button"
              className={`nav__link ${currentPage === item.page ? 'actif' : ''}`}
              aria-current={currentPage === item.page ? 'page' : undefined}
              onClick={() => handleNav(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="entete__actions">
          <button
            type="button"
            className="lang-btn"
            onClick={toggleLocale}
            title={t.nav.langToggleTitle}
            aria-label={t.nav.langToggleTitle}
          >
            <Globe size={16} aria-hidden="true" />
            <span>{locale === 'fr' ? 'FR → EN' : 'EN → FR'}</span>
          </button>

          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
