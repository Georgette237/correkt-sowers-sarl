import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { useCookies } from '../context/CookieContext';
import { SmartImage } from './SmartImage';

export const Footer: React.FC = () => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();
  const { openModal } = useCookies();

  const address = locale === 'fr' ? siteConfig.addressFr : siteConfig.addressEn;

  return (
    <footer className="pied">
      <div className="wrap">
        <div className="pied__grille">
          <div>
            <a
              className="logo"
              href="#accueil"
              aria-label="Correkt Sowers"
              onClick={(e) => {
                e.preventDefault();
                navigate('accueil');
              }}
              style={{
                marginBottom: 16,
                display: 'inline-block',
                background: '#fff',
                padding: '10px 14px',
                borderRadius: 10,
              }}
            >
              <SmartImage
                src={SITE_IMAGES.logo}
                alt="Correkt Sowers Sarl"
                width={600}
                height={731}
                isLogo
                style={{ height: 68, width: 'auto' }}
              />
            </a>
            <p style={{ fontSize: '0.92rem', color: '#b7d4bb', maxWidth: '32ch' }}>{t.footer.tagline}</p>
          </div>

          <div>
            <h4>{t.footer.productsTitle}</h4>
            <ul>
              {t.footer.productsLinks.map((item) => (
                <li key={item.label}>
                  <button type="button" className="pied__link" onClick={() => navigate(item.page)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.exploreTitle}</h4>
            <ul>
              {t.footer.exploreLinks.map((item) => (
                <li key={item.label}>
                  <button type="button" className="pied__link" onClick={() => navigate(item.page)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.contactTitle}</h4>
            <ul>
              <li>
                <a href={siteConfig.getLink('telCommercial')}>{siteConfig.telCommercial}</a>
              </li>
              <li>
                <a href={siteConfig.getLink('wa')} target="_blank" rel="noopener noreferrer">
                  WhatsApp : {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.getLink('mail')}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">
                  <b>Correkt Sowers Sarl</b> {t.footer.facebookSuffix}
                </a>
              </li>
              <li>{address}</li>
            </ul>
          </div>
        </div>

        <div className="pied__bas">
          <span>
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <span>{t.footer.credit}</span>
            <button type="button" className="pied__link underline" onClick={openModal}>
              {t.footer.manageCookies}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
