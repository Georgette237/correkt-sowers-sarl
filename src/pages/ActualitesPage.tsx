import React, { useEffect, useState } from 'react';
import { Film, Play, Pause, X, Camera, Video } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import type { ActivityItem } from '../i18n/translations';
import { SmartImage } from '../components/SmartImage';

interface ActualitesPageProps {
  onZoomImage: (src: string, alt: string) => void;
}

type FilterKind = 'all' | 'photo' | 'video' | 'documentary';

export const ActualitesPage: React.FC<ActualitesPageProps> = ({ onZoomImage }) => {
  const { locale, t } = useLanguage();
  const { navigate } = useNavigation();
  const [filter, setFilter] = useState<FilterKind>('all');
  const [activeMedia, setActiveMedia] = useState<ActivityItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const filteredActivities = t.actualites.activities.filter(
    (item) => filter === 'all' || item.kind === filter
  );

  useEffect(() => {
    if (!activeMedia) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMedia(null);
        setIsPlaying(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMedia]);

  const openActivity = (item: ActivityItem) => {
    if (item.kind === 'photo') {
      onZoomImage(item.image, item.title);
      return;
    }
    setActiveMedia(item);
    setActiveChapter(0);
    setIsPlaying(true);
  };

  return (
    <section className="page" id="page-actualites">
      <div className="heros">
        <SmartImage
          className="heros__fond"
          src={SITE_IMAGES.elevageVueCiel}
          alt={
            locale === 'fr'
              ? 'Activités et reportages sur le site Correkt Sowers Sarl'
              : 'Field activities and documentaries at Correkt Sowers Sarl'
          }
          loading="eager"
        />
        <div className="heros__in">
          <div className="heros__slab">
            <h1>{t.actualites.heroTitle}</h1>
            <p>{t.actualites.heroSubtitle}</p>
            <div className="heros__cta">
              <button
                type="button"
                className="btn btn--accent"
                onClick={() =>
                  navigate('contact', {
                    anchor: 'ecrire',
                    intent: { subjectIndex: 4 },
                  })
                }
              >
                {t.actualites.heroCta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Activités : Images, Vidéos, Documentaires avec commentaires */}
      <div className="section">
        <div className="wrap">
          <p className="fil">{t.actualites.activitiesEyebrow}</p>
          <h2>{t.actualites.activitiesTitle}</h2>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            {t.actualites.activitiesLead}
          </p>

          <div className="actu-filtres" role="tablist" aria-label={t.actualites.activitiesTitle}>
            {(['all', 'photo', 'video', 'documentary'] as FilterKind[]).map((kind) => (
              <button
                key={kind}
                type="button"
                role="tab"
                aria-selected={filter === kind}
                className={`actu-filtre ${filter === kind ? 'actif' : ''}`}
                onClick={() => setFilter(kind)}
              >
                {t.actualites.filters[kind]}
              </button>
            ))}
          </div>

          <div className="grille g3">
            {filteredActivities.map((item) => {
              const isVideoOrDoc = item.kind === 'video' || item.kind === 'documentary';
              return (
                <article key={item.id} className="media-carte">
                  <div className="media-carte__visuel">
                    <SmartImage
                      src={item.image}
                      alt={item.title}
                      onClick={() => openActivity(item)}
                    />
                    {isVideoOrDoc && (
                      <button
                        type="button"
                        className="media-carte__play"
                        aria-label={`${t.actualites.watchLabel} : ${item.title}`}
                        onClick={() => openActivity(item)}
                      >
                        <span className="media-carte__play-btn">
                          <Play size={24} fill="currentColor" />
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="media-carte__corps">
                    <div className="media-carte__meta flex items-center gap-2">
                      {item.kind === 'photo' && <Camera size={15} aria-hidden="true" />}
                      {item.kind === 'video' && <Video size={15} aria-hidden="true" />}
                      {item.kind === 'documentary' && <Film size={15} aria-hidden="true" />}
                      <span>{t.actualites.kindLabels[item.kind]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.date}</span>
                      {item.duration && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.duration}</span>
                        </>
                      )}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.comment}</p>
                    <div className="mt-auto pt-4">
                      <button
                        type="button"
                        className="btn btn--ligne"
                        style={{ padding: '10px 18px', minHeight: 42, fontSize: '0.84rem' }}
                        onClick={() => openActivity(item)}
                      >
                        {isVideoOrDoc ? t.actualites.watchLabel : t.actualites.viewPhotoLabel}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partenaires : slogans + petites images sur la même page */}
      <div className="section section--feuille" id="partenaires">
        <div className="wrap">
          <p className="fil">{t.actualites.partnersEyebrow}</p>
          <h2>{t.actualites.partnersTitle}</h2>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            {t.actualites.partnersLead}
          </p>

          <div className="grille g2" style={{ marginTop: 32 }}>
            {t.actualites.partners.map((partner) => (
              <article key={partner.id} className="partenaire-carte">
                <div className="partenaire-carte__thumb">
                  <SmartImage
                    src={partner.image}
                    alt={partner.name}
                    onClick={() => onZoomImage(partner.image, `${partner.name} — ${partner.slogan}`)}
                  />
                </div>
                <div>
                  <p className="partenaire-carte__slogan">{partner.slogan}</p>
                  <p className="partenaire-carte__nom">
                    <strong>{partner.name}</strong> · {partner.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Appel à l'action vers Contact */}
      <div className="section section--profond">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="center-title" style={{ color: '#fff' }}>
            {t.actualites.ctaTitle}
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px', maxWidth: '56ch' }}>
            {t.actualites.ctaText}
          </p>
          <button
            type="button"
            className="btn btn--accent"
            onClick={() =>
              navigate('contact', {
                anchor: 'ecrire',
                intent: { subjectIndex: 4 },
              })
            }
          >
            {t.actualites.ctaButton}
          </button>
        </div>
      </div>

      {/* Lecteur interactif Vidéo / Documentaire */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-[205] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label={activeMedia.title}
          onClick={() => {
            setActiveMedia(null);
            setIsPlaying(false);
          }}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-white border border-[#d5e0d1] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-[#0c2a14] overflow-hidden">
              <SmartImage
                src={activeMedia.image}
                alt={activeMedia.title}
                className="w-full h-full object-cover opacity-80"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 flex flex-col justify-between p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#bfe86a]">
                    {t.actualites.kindLabels[activeMedia.kind]} · {activeMedia.duration}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMedia(null);
                      setIsPlaying(false);
                    }}
                    aria-label={t.actualites.closePlayer}
                    className="w-10 h-10 rounded-full grid place-items-center bg-white/15 hover:bg-white/30 cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      className="w-12 h-12 rounded-full grid place-items-center bg-[#8cc63f] text-[#0b2411] hover:bg-[#9ed650] cursor-pointer shrink-0"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                    </button>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white m-0">{activeMedia.title}</h3>
                      {activeMedia.videoChapters && activeMedia.videoChapters[activeChapter] && (
                        <p className="text-xs text-[#d6ecd8] m-0 mt-0.5">
                          {activeMedia.videoChapters[activeChapter]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/25 overflow-hidden">
                    <div
                      className="h-full bg-[#8cc63f] transition-all duration-300"
                      style={{
                        width: `${
                          activeMedia.videoChapters && activeMedia.videoChapters.length > 0
                            ? ((activeChapter + 1) / activeMedia.videoChapters.length) * 100
                            : 50
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-[#445347] mb-4">
                {activeMedia.videoSummary || activeMedia.comment}
              </p>

              {activeMedia.videoChapters && activeMedia.videoChapters.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#14401f] mb-2">
                    {t.actualites.chaptersTitle}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {activeMedia.videoChapters.map((chap, idx) => (
                      <button
                        key={chap}
                        type="button"
                        onClick={() => {
                          setActiveChapter(idx);
                          setIsPlaying(true);
                        }}
                        className={`text-left text-xs px-3 py-2.5 rounded-lg border transition-colors cursor-pointer ${
                          activeChapter === idx
                            ? 'bg-[#e4efe0] border-[#3f9153] text-[#14401f] font-bold'
                            : 'bg-[#f4f5f1] border-[#d5e0d1] text-[#445347] hover:border-[#3f9153]'
                        }`}
                      >
                        {chap}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
