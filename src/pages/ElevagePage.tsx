import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { SiteIcon } from '../components/Icons';
import { SmartImage } from '../components/SmartImage';

type ZoneKey = 'etang' | 'ecloserie' | 'pregros' | 'bassins' | 'eau';

interface ElevagePageProps {
  onZoomImage: (src: string, alt: string) => void;
}

export const ElevagePage: React.FC<ElevagePageProps> = ({ onZoomImage }) => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();
  const [selectedZone, setSelectedZone] = useState<ZoneKey>('etang');

  const zoneInfo = t.elevage.zones[selectedZone];

  const goToVisitContact = () => {
    navigate('contact', {
      anchor: 'ecrire',
      intent: {
        subjectIndex: 2,
        note:
          locale === 'fr'
            ? "Demande de rendez-vous pour visiter le site d'élevage (mardi ou jeudi matin)"
            : 'Request to schedule a farm visit (Tuesday or Thursday morning)',
      },
    });
  };

  return (
    <section className="page" id="page-elevage">
      <div className="section section--serre" style={{ background: 'var(--vert-profond)', color: '#eaf3e6' }}>
        <div className="wrap flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 style={{ color: '#fff' }}>{t.elevage.heroTitle}</h1>
            <p className="lead" style={{ color: '#c6dcc6', marginTop: 14, marginBottom: 0 }}>
              {t.elevage.heroLead}
            </p>
          </div>
          <button type="button" className="btn btn--accent shrink-0 self-start md:self-center" onClick={goToVisitContact}>
            {t.elevage.heroCta}
          </button>
        </div>
      </div>

      <div className="section">
        <div className="wrap duo" style={{ gridTemplateColumns: '1.15fr .85fr' }}>
          <div className="plan">
            <svg viewBox="0 0 700 540" aria-label={t.elevage.heroTitle}>
              <rect width="700" height="540" fill="#dfeada" />
              <path d="M0 410c120-30 200 20 330-10s250-60 370-20v160H0z" fill="#cfe0c6" />
              <path d="M40 40h620v460H40z" fill="none" stroke="#9db995" strokeDasharray="6 7" />

              <g
                className="plan__pt"
                tabIndex={0}
                role="button"
                aria-label={t.elevage.zones.etang.label}
                onClick={() => setSelectedZone('etang')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone('etang');
                  }
                }}
              >
                <rect
                  x="70"
                  y="70"
                  width="560"
                  height="90"
                  rx="10"
                  fill="#2f7d8f"
                  stroke={selectedZone === 'etang' ? '#8cc63f' : 'none'}
                  strokeWidth={4}
                />
                <text x="350" y="122" textAnchor="middle" fill="#eefbfd" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.etang.svgLines[0]}
                </text>
              </g>

              <g
                className="plan__pt"
                tabIndex={0}
                role="button"
                aria-label={t.elevage.zones.ecloserie.label}
                onClick={() => setSelectedZone('ecloserie')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone('ecloserie');
                  }
                }}
              >
                <rect
                  x="70"
                  y="180"
                  width="230"
                  height="100"
                  rx="10"
                  fill="#1f6b32"
                  stroke={selectedZone === 'ecloserie' ? '#8cc63f' : 'none'}
                  strokeWidth={4}
                />
                <text x="185" y="238" textAnchor="middle" fill="#eaf7e8" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.ecloserie.svgLines[0]}
                </text>
              </g>

              <g
                className="plan__pt"
                tabIndex={0}
                role="button"
                aria-label={t.elevage.zones.pregros.label}
                onClick={() => setSelectedZone('pregros')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone('pregros');
                  }
                }}
              >
                <rect
                  x="340"
                  y="180"
                  width="290"
                  height="100"
                  rx="10"
                  fill="#3f9153"
                  stroke={selectedZone === 'pregros' ? '#8cc63f' : 'none'}
                  strokeWidth={4}
                />
                <text x="485" y="238" textAnchor="middle" fill="#eefbfd" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.pregros.svgLines[0]}
                </text>
              </g>

              <g
                className="plan__pt"
                tabIndex={0}
                role="button"
                aria-label={t.elevage.zones.bassins.label}
                onClick={() => setSelectedZone('bassins')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone('bassins');
                  }
                }}
              >
                <rect
                  x="70"
                  y="300"
                  width="290"
                  height="170"
                  rx="10"
                  fill="#17505c"
                  stroke={selectedZone === 'bassins' ? '#8cc63f' : 'none'}
                  strokeWidth={4}
                />
                <text x="215" y="380" textAnchor="middle" fill="#eefbfd" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.bassins.svgLines[0]}
                </text>
                <text x="215" y="404" textAnchor="middle" fill="#eefbfd" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.bassins.svgLines[1] || ''}
                </text>
              </g>

              <g
                className="plan__pt"
                tabIndex={0}
                role="button"
                aria-label={t.elevage.zones.eau.label}
                onClick={() => setSelectedZone('eau')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone('eau');
                  }
                }}
              >
                <rect
                  x="400"
                  y="300"
                  width="230"
                  height="170"
                  rx="10"
                  fill="#14401f"
                  stroke={selectedZone === 'eau' ? '#8cc63f' : 'none'}
                  strokeWidth={4}
                />
                <text x="515" y="380" textAnchor="middle" fill="#eaf7e8" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.eau.svgLines[0]}
                </text>
                <text x="515" y="404" textAnchor="middle" fill="#eaf7e8" fontFamily="Archivo" fontSize="19" fontWeight="700">
                  {t.elevage.zones.eau.svgLines[1] || ''}
                </text>
              </g>
            </svg>
          </div>

          <div className="zone-info" aria-live="polite">
            <p className="fil">{t.elevage.planLabel}</p>
            <h2 style={{ fontSize: '1.5rem' }}>{zoneInfo.label}</h2>
            <p>{zoneInfo.description}</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--texte-doux)', margin: 0 }}>{t.elevage.planHint}</p>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="center-title" style={{ textAlign: 'center' }}>
            {t.elevage.overviewTitle}
          </h2>
          <p className="lead" style={{ textAlign: 'center', margin: '0 auto 30px', maxWidth: '56ch' }}>
            {t.elevage.overviewLead}
          </p>

          <div className="grille g3">
            {t.elevage.overviewCards.map((card) => (
              <article key={card.title} className="espece">
                <div className="visuel">
                  <SmartImage
                    src={SITE_IMAGES[card.imageKey]}
                    alt={card.alt}
                    onClick={() => onZoomImage(SITE_IMAGES[card.imageKey], card.alt)}
                  />
                </div>
                <div className="espece__corps">
                  <span className="meta">{card.meta}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap">
          <div className="grille g3">
            {t.elevage.infraCards.map((card) => (
              <article key={card.title} className="carte">
                <SiteIcon name={card.icon} className="carte__ico" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="grille g2" style={{ marginTop: 22 }}>
            <div className="visuel visuel--large">
              <SmartImage
                src={SITE_IMAGES.elevageEquipe}
                alt={t.elevage.infraImg1Alt}
                onClick={() => onZoomImage(SITE_IMAGES.elevageEquipe, t.elevage.infraImg1Alt)}
              />
            </div>
            <div className="visuel visuel--large">
              <SmartImage
                src={SITE_IMAGES.elevageVueCiel}
                alt={t.elevage.infraImg2Alt}
                onClick={() => onZoomImage(SITE_IMAGES.elevageVueCiel, t.elevage.infraImg2Alt)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section section--profond">
        <div className="wrap duo">
          <div>
            <h2 style={{ color: '#fff' }}>{t.elevage.teamTitle}</h2>
            <p>{t.elevage.teamText}</p>
            <button type="button" className="btn btn--clair" style={{ marginTop: 12 }} onClick={goToVisitContact}>
              {t.elevage.teamCta}
            </button>
          </div>
          <div>
            <div className="chiffres" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {t.elevage.teamStats.map((st) => (
                <div key={st.label} className="chiffre">
                  <b>{st.value}</b>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
