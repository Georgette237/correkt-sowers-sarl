import React, { useEffect, useState } from 'react';
import { HERO_SLIDES, SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { SiteIcon } from '../components/Icons';
import { SmartImage } from '../components/SmartImage';

interface HomePageProps {
  onZoomImage: (src: string, alt: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onZoomImage }) => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();
  const [slideIndex, setSlideIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((k) => k + 1);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    setSlideIndex(idx);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="page" id="page-accueil">
      <div className="heros">
        <div className="heros__diapos">
          {HERO_SLIDES.map((slide, idx) => (
            <SmartImage
              key={slide.src}
              src={slide.src}
              alt={locale === 'fr' ? slide.altFr : slide.altEn}
              className={`heros__fond heros__diapo ${idx === slideIndex ? 'actif' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        <div className="heros__puces" aria-label="Images du diaporama">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`heros__puce ${idx === slideIndex ? 'actif' : ''}`}
              aria-label={`Slide ${idx + 1} / ${HERO_SLIDES.length}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>

        <div className="heros__barre" key={progressKey}>
          <span
            style={{
              width: '100%',
              animation: 'progressFill 10s linear forwards',
            }}
          />
        </div>

        <div className="heros__in">
          <div className="heros__slab">
            <h1>{t.home.heroTitle}</h1>
            <p>{t.home.heroSubtitle}</p>
            <div className="heros__cta">
              <button
                type="button"
                className="btn btn--accent"
                onClick={() => navigate('contact', { anchor: 'ecrire', intent: { subjectIndex: 0 } })}
              >
                {t.home.heroPrimaryCta}
              </button>
              <button type="button" className="btn btn--clair" onClick={() => navigate('alevins')}>
                {t.home.heroSecondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2 style={{ maxWidth: '22ch' }}>{t.home.introTitle}</h2>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            {t.home.introLead}
          </p>

          <div className="grille g3" style={{ marginTop: 38 }}>
            {t.home.cards.map((card) => (
              <article key={card.title} className="carte">
                <SiteIcon name={card.icon} className="carte__ico" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap duo" style={{ gridTemplateColumns: '.95fr 1.05fr' }}>
          <div className="duo__media">
            <div className="visuel visuel--haut">
              <SmartImage
                src={SITE_IMAGES.teamHistory}
                alt={
                  locale === 'fr'
                    ? "L'équipe fondatrice de Correkt Sowers sur le premier site"
                    : 'Correkt Sowers founding team on the first farm site'
                }
                onClick={() =>
                  onZoomImage(
                    SITE_IMAGES.teamHistory,
                    locale === 'fr'
                      ? "L'équipe fondatrice de Correkt Sowers sur le premier site"
                      : 'Correkt Sowers founding team on the first farm site'
                  )
                }
              />
            </div>
          </div>
          <div>
            <p className="fil">{t.home.historyEyebrow}</p>
            <h2>{t.home.historyTitle}</h2>
            <p>{t.home.historyText}</p>

            <ol className="frise">
              {t.home.timeline.map((step, idx) => (
                <li key={step.title} className="frise__etape">
                  <span className="frise__pastille">{idx + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap duo">
          <div>
            <h2>{t.home.followTitle}</h2>
            <p>{t.home.followText}</p>
            <ul className="puces" style={{ margin: '22px 0 28px' }}>
              {t.home.followBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--plein"
              onClick={() => navigate('contact', { anchor: 'ecrire', intent: { subjectIndex: 3 } })}
            >
              {t.home.followCta}
            </button>
          </div>
          <div className="duo__media">
            <div className="visuel visuel--large">
              <SmartImage
                src={SITE_IMAGES.closeBasins}
                alt={locale === 'fr' ? 'Vue rapprochée des bassins de production' : 'Close-up of production basins'}
                onClick={() =>
                  onZoomImage(
                    SITE_IMAGES.closeBasins,
                    locale === 'fr' ? 'Vue rapprochée des bassins de production' : 'Close-up of production basins'
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section section--profond">
        <div className="wrap">
          <div className="chiffres">
            {t.home.stats.map((stat) => (
              <div key={stat.label} className="chiffre">
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2 className="center-title" style={{ textAlign: 'center' }}>
            {t.home.recapTitle}
          </h2>
          <p className="lead" style={{ textAlign: 'center', margin: '0 auto 32px', maxWidth: '58ch' }}>
            {t.home.recapLead}
          </p>

          <div className="grille g4">
            {t.home.recapItems.map((item) => (
              <a
                key={item.page}
                className="recap"
                href={`#${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.page);
                }}
              >
                <div className="recap__img">
                  <SmartImage src={SITE_IMAGES[item.imageKey]} alt={item.title} />
                </div>
                <div className="recap__corps">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="recap__fleche">{item.cta}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="center-title">{t.home.bottomTitle}</h2>
          <p className="lead" style={{ margin: '0 auto 28px', maxWidth: '58ch' }}>
            {t.home.bottomLead}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="btn btn--plein"
              onClick={() => navigate('contact', { anchor: 'ecrire' })}
            >
              {t.home.bottomCta}
            </button>
            <button type="button" className="btn btn--ligne" onClick={() => navigate('actualites')}>
              {t.home.bottomSecondaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
