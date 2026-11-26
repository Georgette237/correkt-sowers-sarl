import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { SiteIcon } from '../components/Icons';
import { SmartImage } from '../components/SmartImage';

interface AlevinsPageProps {
  onZoomImage: (src: string, alt: string) => void;
}

export const AlevinsPage: React.FC<AlevinsPageProps> = ({ onZoomImage }) => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();
  const [activeStep, setActiveStep] = useState(0);

  const [nom, setNom] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [espece, setEspece] = useState(t.alevins.form.speciesOptions[0]);
  const [message, setMessage] = useState('');
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});
  const [statusMessage, setStatusMessage] = useState<{ text: string; waUrl?: string } | null>(null);

  const currentStep = t.alevins.steps[activeStep];

  const scrollToDevis = () => {
    const el = document.getElementById('devis');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};
    if (!nom.trim()) errors.nom = true;
    if (tel.replace(/\D/g, '').length < 8) errors.tel = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) errors.email = true;
    if (!message.trim()) errors.message = true;

    setInvalidFields(errors);
    if (Object.keys(errors).length > 0) {
      setStatusMessage({ text: t.alevins.form.formInvalid });
      return;
    }

    if (!siteConfig.isWhatsAppValid()) {
      setStatusMessage({ text: t.alevins.form.waMissing });
      return;
    }

    const body = [
      t.alevins.form.waHeader,
      `${t.alevins.form.nameLabel} : ${nom.trim()}`,
      `${t.alevins.form.phoneLabel} : ${tel.trim()}`,
      `${t.alevins.form.emailLabel} : ${email.trim()}`,
      `${t.alevins.form.speciesLabel} : ${espece}`,
      `${t.alevins.form.msgLabel} : ${message.trim()}`,
    ].join('\n');

    const url = `${siteConfig.getLink('wa')}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatusMessage({ text: t.alevins.form.waSuccess, waUrl: url });
    setNom('');
    setTel('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="page" id="page-alevins">
      <div className="heros">
        <SmartImage
          className="heros__fond"
          src={SITE_IMAGES.alevinsHero}
          alt={locale === 'fr' ? "Alevins dans un bac d'écloserie" : 'Fingerlings in hatchery tank'}
          loading="eager"
        />
        <div className="heros__in">
          <div className="heros__slab">
            <h1>{t.alevins.heroTitle}</h1>
            <p>{t.alevins.heroSubtitle}</p>
            <div className="heros__cta">
              <button type="button" className="btn btn--accent" onClick={scrollToDevis}>
                {t.alevins.heroCta}
              </button>
              <button
                type="button"
                className="btn btn--clair"
                onClick={() => navigate('contact', { anchor: 'ecrire', intent: { subjectIndex: 0 } })}
              >
                {t.alevins.heroSecondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap duo">
          <div>
            <p className="fil">{t.alevins.defEyebrow}</p>
            <h2>{t.alevins.defTitle}</h2>
            <p>{t.alevins.defP1}</p>
            <p>{t.alevins.defP2}</p>

            <p className="fil" style={{ marginTop: 28 }}>
              {t.alevins.whereEyebrow}
            </p>
            <h2>{t.alevins.whereTitle}</h2>
            <p>{t.alevins.whereP}</p>
          </div>
          <div className="duo__media">
            <div className="visuel visuel--haut">
              <SmartImage
                src={SITE_IMAGES.alevinsDef}
                alt={t.alevins.defImgAlt}
                onClick={() => onZoomImage(SITE_IMAGES.alevinsDef, t.alevins.defImgAlt)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>{t.alevins.speciesTitle}</h2>
          <p className="lead" style={{ maxWidth: '60ch' }}>
            {t.alevins.speciesLead}
          </p>

          <div className="grille g3" style={{ marginTop: 32 }}>
            {t.alevins.species.map((sp) => (
              <article key={sp.name} className="espece">
                <div className="visuel">
                  <SmartImage
                    src={SITE_IMAGES[sp.imageKey]}
                    alt={sp.alt}
                    onClick={() => onZoomImage(SITE_IMAGES[sp.imageKey], sp.alt)}
                  />
                </div>
                <div className="espece__corps">
                  <span className="meta">{sp.scientific}</span>
                  <h3>{sp.name}</h3>
                  <p>{sp.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--feuille">
        <div className="wrap">
          <h2 className="center-title" style={{ textAlign: 'center' }}>
            {t.alevins.procTitle}
          </h2>
          <p className="lead" style={{ textAlign: 'center', margin: '0 auto' }}>
            {t.alevins.procLead}
          </p>

          <div className="proc" id="proc">
            {t.alevins.steps.map((step, idx) => (
              <div
                key={step.shortTitle}
                className={`proc__etape ${activeStep === idx ? 'actif' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <button
                  type="button"
                  className="proc__pion"
                  aria-label={step.shortTitle}
                  aria-pressed={activeStep === idx}
                >
                  <SiteIcon name={step.icon} />
                </button>
                <h3>{step.shortTitle}</h3>
                <p>{step.shortDesc}</p>
              </div>
            ))}
          </div>

          <div className="proc-detail" id="proc-detail" aria-live="polite">
            <div className="proc-detail__img">
              <SmartImage
                src={SITE_IMAGES[currentStep.imageKey]}
                alt={currentStep.alt}
                onClick={() => onZoomImage(SITE_IMAGES[currentStep.imageKey], currentStep.alt)}
              />
            </div>
            <div className="proc-detail__txt">
              <p className="proc-detail__num">
                {t.alevins.stepPrefix} {activeStep + 1} {t.alevins.stepOf} {t.alevins.steps.length}
              </p>
              <h3>{currentStep.fullTitle}</h3>
              <p>{currentStep.fullDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2>{t.alevins.conditionsTitle}</h2>
          <p className="lead" style={{ maxWidth: '60ch' }}>
            {t.alevins.conditionsLead}
          </p>

          <div className="grille g3" style={{ marginTop: 30 }}>
            {t.alevins.conditions.map((cond) => (
              <article key={cond.title} className="carte">
                <SiteIcon name={cond.icon} className="carte__ico" />
                <h3>{cond.title}</h3>
                <p>{cond.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--feuille" id="devis">
        <div className="wrap duo">
          <div>
            <h2>{t.alevins.quoteTitle}</h2>
            <p>{t.alevins.quoteText}</p>
            <ul className="puces" style={{ marginTop: 20, marginBottom: 24 }}>
              {t.alevins.quoteBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ligne"
              onClick={() => navigate('contact', { anchor: 'ecrire', intent: { subjectIndex: 0 } })}
            >
              {t.alevins.form.directContactCta}
            </button>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className={`champ ${invalidFields.nom ? 'invalide' : ''}`}>
              <label htmlFor="d-nom">{t.alevins.form.nameLabel}</label>
              <input
                id="d-nom"
                type="text"
                autoComplete="name"
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value);
                  setInvalidFields((p) => ({ ...p, nom: false }));
                }}
                required
              />
              <span className="erreur">{t.alevins.form.nameError}</span>
            </div>

            <div className={`champ ${invalidFields.tel ? 'invalide' : ''}`}>
              <label htmlFor="d-tel">{t.alevins.form.phoneLabel}</label>
              <input
                id="d-tel"
                type="tel"
                autoComplete="tel"
                placeholder={t.alevins.form.phonePlaceholder}
                value={tel}
                onChange={(e) => {
                  setTel(e.target.value);
                  setInvalidFields((p) => ({ ...p, tel: false }));
                }}
                required
              />
              <span className="erreur">{t.alevins.form.phoneError}</span>
            </div>

            <div className={`champ ${invalidFields.email ? 'invalide' : ''}`}>
              <label htmlFor="d-mail">{t.alevins.form.emailLabel}</label>
              <input
                id="d-mail"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setInvalidFields((p) => ({ ...p, email: false }));
                }}
                required
              />
              <span className="erreur">{t.alevins.form.emailError}</span>
            </div>

            <div className="champ">
              <label htmlFor="d-espece">{t.alevins.form.speciesLabel}</label>
              <select id="d-espece" value={espece} onChange={(e) => setEspece(e.target.value)}>
                {t.alevins.form.speciesOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className={`champ ${invalidFields.message ? 'invalide' : ''}`}>
              <label htmlFor="d-msg">{t.alevins.form.msgLabel}</label>
              <textarea
                id="d-msg"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setInvalidFields((p) => ({ ...p, message: false }));
                }}
                required
              />
              <span className="erreur">{t.alevins.form.msgError}</span>
            </div>

            <button className="btn btn--plein" type="submit">
              {t.alevins.form.submitBtn}
            </button>

            {statusMessage && (
              <p className="form__etat" role="status">
                {statusMessage.text}{' '}
                {statusMessage.waUrl && (
                  <a href={statusMessage.waUrl} target="_blank" rel="noopener noreferrer">
                    {t.alevins.form.openWa}
                  </a>
                )}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
