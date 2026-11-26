import React from 'react';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { SiteIcon } from '../components/Icons';
import { SmartImage } from '../components/SmartImage';

interface PoissonsPageProps {
  onZoomImage: (src: string, alt: string) => void;
}

export const PoissonsPage: React.FC<PoissonsPageProps> = ({ onZoomImage }) => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();

  const goToFishOrder = () => {
    navigate('contact', {
      anchor: 'ecrire',
      intent: {
        subjectIndex: 1,
        note: locale === 'fr' ? 'Commande de poisson frais (Tilapia / Clarias)' : 'Fresh fish order (Tilapia / Clarias)',
      },
    });
  };

  return (
    <section className="page" id="page-poissons">
      <div className="heros">
        <SmartImage
          className="heros__fond"
          src={SITE_IMAGES.poissonsHero}
          alt={locale === 'fr' ? 'Poissons de consommation prêts à la récolte' : 'Table fish ready for harvest'}
          loading="eager"
        />
        <div className="heros__in">
          <div className="heros__slab">
            <h1>{t.poissons.heroTitle}</h1>
            <p>{t.poissons.heroSubtitle}</p>
            <div className="heros__cta">
              <button type="button" className="btn btn--accent" onClick={goToFishOrder}>
                {t.poissons.heroCta}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <p className="fil">{t.poissons.stageEyebrow}</p>
          <h2>{t.poissons.stageTitle}</h2>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            {t.poissons.stageLead}
          </p>

          <div className="grille g3" style={{ marginTop: 28 }}>
            {t.poissons.stageCards.map((card) => (
              <article key={card.title} className="fiche fiche--photo">
                <div className="fiche__photo">
                  <SmartImage
                    src={SITE_IMAGES[card.imageKey]}
                    alt={card.alt}
                    onClick={() => onZoomImage(SITE_IMAGES[card.imageKey], card.alt)}
                  />
                  <span className="fiche__poids">{card.weight}</span>
                </div>
                <div className="fiche__corps">
                  <span className="fiche__valeur">{card.value}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="duo" style={{ marginTop: 48 }}>
            <div>
              <h2>{t.poissons.lifeTitle}</h2>
              <p>{t.poissons.lifeText}</p>
              <ul className="puces">
                {t.poissons.lifeBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="duo__media">
              <div className="visuel visuel--large">
                <SmartImage
                  src={SITE_IMAGES.poissonsModeVie}
                  alt={t.poissons.lifeImgAlt}
                  onClick={() => onZoomImage(SITE_IMAGES.poissonsModeVie, t.poissons.lifeImgAlt)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap">
          <div className="engagements">
            {t.poissons.engagements.map((eng) => (
              <div key={eng.label} className="engagement">
                <SiteIcon name={eng.icon} />
                <span>{eng.label}</span>
              </div>
            ))}
          </div>

          <h2>{t.poissons.conductTitle}</h2>
          <p className="lead" style={{ maxWidth: '66ch' }}>
            {t.poissons.conductLead}
          </p>

          <ol className="etapes">
            {t.poissons.conductSteps.map((step) => (
              <li key={step.title} className="etape-ligne">
                <div className="etape-ligne__txt">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <div className="etape-ligne__img">
                  <SmartImage
                    src={SITE_IMAGES[step.imageKey]}
                    alt={step.alt}
                    onClick={() => onZoomImage(SITE_IMAGES[step.imageKey], step.alt)}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section nutrition">
        <div className="wrap">
          <h2>{t.poissons.nutritionTitle}</h2>
          <p className="lead" style={{ maxWidth: '56ch' }}>
            {t.poissons.nutritionLead}
          </p>

          <div className="grille g4">
            {t.poissons.nutritionCards.map((card) => (
              <article key={card.title} className="carte">
                <SiteIcon name={card.icon} className="carte__ico" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <button type="button" className="btn btn--plein" style={{ marginTop: 34 }} onClick={goToFishOrder}>
            {t.poissons.nutritionCta}
          </button>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap">
          <h2>{t.poissons.receiveTitle}</h2>
          <div className="grille g3" style={{ marginTop: 26 }}>
            {t.poissons.receiveCards.map((card) => (
              <div key={card.title} className="carte">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
