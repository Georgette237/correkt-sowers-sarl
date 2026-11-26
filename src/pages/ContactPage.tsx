import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { useCookies } from '../context/CookieContext';
import { SiteIcon } from '../components/Icons';
import { SmartImage } from '../components/SmartImage';

export const ContactPage: React.FC = () => {
  const { locale, t } = useLanguage();
  const { navigate, contactIntent, clearContactIntent } = useNavigation();
  const { prefs, openModal } = useCookies();

  const [typedText, setTypedText] = useState(t.contact.heroWords[0]);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(t.contact.form.subjectOptions[0]);
  const [message, setMessage] = useState('');
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});
  const [statusMessage, setStatusMessage] = useState<{ text: string; waUrl?: string } | null>(null);

  useEffect(() => {
    if (contactIntent) {
      if (
        typeof contactIntent.subjectIndex === 'number' &&
        t.contact.form.subjectOptions[contactIntent.subjectIndex]
      ) {
        setSubject(t.contact.form.subjectOptions[contactIntent.subjectIndex]);
      }
      if (contactIntent.note && !message) {
        setMessage(contactIntent.note);
      }
      clearContactIntent();
    }
  }, [contactIntent, t.contact.form.subjectOptions, message, clearContactIntent]);

  useEffect(() => {
    setSubject(t.contact.form.subjectOptions[0]);
  }, [locale, t.contact.form.subjectOptions]);

  useEffect(() => {
    const words = t.contact.heroWords;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedText(words[0]);
      return;
    }

    let wordIdx = 0;
    let charIdx = 0;
    let direction = 1;
    let timerId: number;

    const tick = () => {
      const current = words[wordIdx];
      charIdx += direction;
      setTypedText(current.slice(0, charIdx));

      let delay = 85;
      if (direction === 1 && charIdx === current.length) {
        direction = -1;
        delay = 1700;
      } else if (direction === -1 && charIdx === 0) {
        direction = 1;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 360;
      } else if (direction === -1) {
        delay = 40;
      }

      timerId = window.setTimeout(tick, delay);
    };

    timerId = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timerId);
  }, [t.contact.heroWords]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, boolean> = {};
    if (!nom.trim()) errors.nom = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) errors.email = true;
    if (!message.trim()) errors.message = true;

    setInvalidFields(errors);
    if (Object.keys(errors).length > 0) {
      setStatusMessage({ text: t.contact.form.formInvalid });
      return;
    }

    if (!siteConfig.isWhatsAppValid()) {
      setStatusMessage({ text: t.contact.form.waMissing });
      return;
    }

    const body = [
      t.contact.form.waHeader,
      `${t.contact.form.subjectLabel} : ${subject}`,
      `${t.contact.form.nameLabel} : ${nom.trim()}`,
      `${t.contact.form.emailLabel} : ${email.trim()}`,
      `${t.contact.form.msgLabel} : ${message.trim()}`,
    ].join('\n');

    const url = `${siteConfig.getLink('wa')}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatusMessage({ text: t.contact.form.waSuccess, waUrl: url });
    setNom('');
    setEmail('');
    setMessage('');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="page" id="page-contact">
      <div className="heros heros--contact">
        <SmartImage
          className="heros__fond"
          src={SITE_IMAGES.contactHero}
          alt={
            locale === 'fr'
              ? 'Les installations de Correkt Sowers Sarl à Yaoundé'
              : 'Correkt Sowers Sarl facilities in Yaoundé'
          }
          loading="eager"
        />
        <div className="heros__in">
          <div className="heros__slab">
            <h1>{t.contact.heroTitle}</h1>
            <p className="heros__dyn">
              {t.contact.heroDynamicPrefix}
              <span
                className="font-bold text-[#bfe86a] border-r-2 border-[#bfe86a] pr-1"
                aria-live="off"
              >
                {typedText}
              </span>
            </p>
            <div className="heros__cta">
              <button type="button" className="btn btn--accent" onClick={() => scrollTo('ecrire')}>
                {t.contact.heroWriteBtn}
              </button>
              <button type="button" className="btn btn--clair" onClick={() => scrollTo('carte')}>
                {t.contact.heroMapBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="ecrire">
        <div className="wrap duo" style={{ gridTemplateColumns: '1.1fr .9fr', alignItems: 'start' }}>
          <div>
            <h2>{t.contact.writeTitle}</h2>
            <p className="lead">{t.contact.writeLead}</p>

            <form className="form" onSubmit={handleSubmit} noValidate style={{ marginTop: 24 }}>
              <div className="champ">
                <label htmlFor="c-sujet">{t.contact.form.subjectLabel}</label>
                <select id="c-sujet" value={subject} onChange={(e) => setSubject(e.target.value)}>
                  {t.contact.form.subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`champ ${invalidFields.nom ? 'invalide' : ''}`}>
                <label htmlFor="c-nom">{t.contact.form.nameLabel}</label>
                <input
                  id="c-nom"
                  type="text"
                  autoComplete="name"
                  value={nom}
                  onChange={(e) => {
                    setNom(e.target.value);
                    setInvalidFields((p) => ({ ...p, nom: false }));
                  }}
                  required
                />
                <span className="erreur">{t.contact.form.nameError}</span>
              </div>

              <div className={`champ ${invalidFields.email ? 'invalide' : ''}`}>
                <label htmlFor="c-mail">{t.contact.form.emailLabel}</label>
                <input
                  id="c-mail"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setInvalidFields((p) => ({ ...p, email: false }));
                  }}
                  required
                />
                <span className="erreur">{t.contact.form.emailError}</span>
              </div>

              <div className={`champ ${invalidFields.message ? 'invalide' : ''}`}>
                <label htmlFor="c-msg">{t.contact.form.msgLabel}</label>
                <textarea
                  id="c-msg"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setInvalidFields((p) => ({ ...p, message: false }));
                  }}
                  required
                />
                <span className="erreur">{t.contact.form.msgError}</span>
              </div>

              <button className="btn btn--plein" type="submit">
                {t.contact.form.submitBtn}
              </button>

              {statusMessage && (
                <p className="form__etat" role="status">
                  {statusMessage.text}{' '}
                  {statusMessage.waUrl && (
                    <a href={statusMessage.waUrl} target="_blank" rel="noopener noreferrer">
                      {t.contact.form.openWa}
                    </a>
                  )}
                </p>
              )}
            </form>
          </div>

          <div className="grille" style={{ gap: 22 }}>
            <div className="carte">
              <h3>{t.contact.coordsTitle}</h3>
              <div className="coord" style={{ marginTop: 14 }}>
                <div className="coord__item">
                  <span className="coord__ico coord__ico--tel">
                    <SiteIcon name="phone" />
                  </span>
                  <span>
                    <a href={siteConfig.getLink('telCommercial')}>
                      <b>{siteConfig.telCommercial}</b>
                    </a>
                    <span>{t.contact.coordsItems.commercial}</span>
                  </span>
                </div>

                <div className="coord__item">
                  <span className="coord__ico coord__ico--tel">
                    <SiteIcon name="phone" />
                  </span>
                  <span>
                    <a href={siteConfig.getLink('telTechnique')}>
                      <b>{siteConfig.telTechnique}</b>
                    </a>
                    <span>{t.contact.coordsItems.technique}</span>
                  </span>
                </div>

                <div className="coord__item">
                  <span className="coord__ico coord__ico--wa">
                    <SiteIcon name="whatsapp" />
                  </span>
                  <span>
                    <a href={siteConfig.getLink('wa')} target="_blank" rel="noopener noreferrer">
                      <b>{siteConfig.whatsappDisplay}</b>
                    </a>
                    <span>{t.contact.coordsItems.whatsapp}</span>
                  </span>
                </div>

                <div className="coord__item">
                  <span className="coord__ico coord__ico--fb">
                    <SiteIcon name="facebook" />
                  </span>
                  <span>
                    <a href={siteConfig.getLink('fb')} target="_blank" rel="noopener noreferrer">
                      <b>Correkt Sowers Sarl</b>
                    </a>
                    <span>{t.contact.coordsItems.facebook}</span>
                  </span>
                </div>

                <div className="coord__item">
                  <span className="coord__ico coord__ico--gm">
                    <SiteIcon name="gmail" />
                  </span>
                  <span>
                    <a href={siteConfig.getLink('mail')}>
                      <b>{siteConfig.email}</b>
                    </a>
                    <span>{t.contact.coordsItems.email}</span>
                  </span>
                </div>

                <div className="coord__item">
                  <span className="coord__ico coord__ico--pin">
                    <SiteIcon name="repere" />
                  </span>
                  <span>
                    <b>{t.contact.coordsItems.address}</b>
                    <span>{t.contact.coordsItems.addressDesc}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="carte carte--vert">
              <h3>{t.contact.resellerTitle}</h3>
              <p>{t.contact.resellerText}</p>
              <button
                type="button"
                className="btn btn--clair"
                style={{ marginTop: 18, alignSelf: 'flex-start' }}
                onClick={() => navigate('actualites', { anchor: 'partenaires' })}
              >
                {t.contact.resellerCta}
              </button>
            </div>

            <div className="carte">
              <h3>{t.contact.hoursTitle}</h3>
              <p>
                {t.contact.hoursLines.map((line, idx) => (
                  <React.Fragment key={line}>
                    {line}
                    {idx < t.contact.hoursLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="carte">
              <h3>{t.contact.goodToKnowTitle}</h3>
              <ul className="puces">
                {t.contact.goodToKnowBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section section--feuille" id="carte">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="center-title">{t.contact.mapTitle}</h2>
          <p className="lead" style={{ margin: '0 auto 8px' }}>
            {t.contact.mapLead}
          </p>
          <p className="coords">
            GPS : {siteConfig.gps.dms}{' '}
            <span>
              ({siteConfig.gps.lat} ; {siteConfig.gps.lng})
            </span>
          </p>

          <div className="carte-loc">
            {prefs.media ? (
              <iframe
                title={t.contact.mapTitle}
                src={`https://maps.google.com/maps?q=${siteConfig.gps.lat},${siteConfig.gps.lng}&z=18&hl=${locale}&t=k&output=embed`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-3">
                <p className="text-sm text-[#445347] m-0">
                  {locale === 'fr'
                    ? 'La carte interactive est désactivée par vos préférences de cookies.'
                    : 'Interactive map is disabled by your cookie preferences.'}
                </p>
                <button type="button" className="btn btn--plein" onClick={openModal}>
                  {t.footer.manageCookies}
                </button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 22 }}>
            <a
              className="btn btn--plein"
              href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.gps.lat},${siteConfig.gps.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.openMapsBtn}
            </a>
            <a
              className="btn btn--ligne"
              href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.gps.lat},${siteConfig.gps.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.directionsBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
