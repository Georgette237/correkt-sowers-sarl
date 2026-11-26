import type { PageId } from '../data/siteData';

export type Locale = 'fr' | 'en';

export interface ActivityItem {
  id: string;
  kind: 'photo' | 'video' | 'documentary';
  date: string;
  duration?: string;
  image: string;
  title: string;
  comment: string;
  videoChapters?: string[];
  videoSummary?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  role: string;
  slogan: string;
  image: string;
}

export interface SiteTranslations {
  meta: Record<PageId, { title: string; description: string }>;
  nav: {
    home: string;
    alevins: string;
    poissons: string;
    elevage: string;
    actualites: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    langToggleLabel: string;
    langToggleTitle: string;
    quickContact: string;
  };
  footer: {
    tagline: string;
    productsTitle: string;
    productsLinks: Array<{ label: string; page: PageId; anchor?: string }>;
    exploreTitle: string;
    exploreLinks: Array<{ label: string; page: PageId }>;
    contactTitle: string;
    facebookSuffix: string;
    rights: string;
    credit: string;
    manageCookies: string;
  };
  cookies: {
    bannerTitle: string;
    bannerText: string;
    acceptAll: string;
    essentialOnly: string;
    customize: string;
    modalTitle: string;
    modalIntro: string;
    essentialTitle: string;
    essentialDesc: string;
    essentialBadge: string;
    preferencesTitle: string;
    preferencesDesc: string;
    mediaTitle: string;
    mediaDesc: string;
    savePrefs: string;
    close: string;
  };
  lightbox: {
    dialogLabel: string;
    close: string;
    scrollToTop: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    introTitle: string;
    introLead: string;
    cards: Array<{ title: string; text: string; icon: 'alevin' | 'poisson' | 'labo' }>;
    historyEyebrow: string;
    historyTitle: string;
    historyText: string;
    timeline: Array<{ title: string; text: string }>;
    followTitle: string;
    followText: string;
    followBullets: string[];
    followCta: string;
    stats: Array<{ value: string; label: string }>;
    recapTitle: string;
    recapLead: string;
    recapItems: Array<{ page: PageId; title: string; text: string; cta: string; imageKey: 'recapAlevins' | 'recapPoissons' | 'recapElevage' | 'recapContact' }>;
    bottomTitle: string;
    bottomLead: string;
    bottomCta: string;
    bottomSecondaryCta: string;
  };
  alevins: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroSecondaryCta: string;
    defEyebrow: string;
    defTitle: string;
    defP1: string;
    defP2: string;
    whereEyebrow: string;
    whereTitle: string;
    whereP: string;
    defImgAlt: string;
    speciesTitle: string;
    speciesLead: string;
    species: Array<{ scientific: string; name: string; desc: string; imageKey: 'alevinsTilapia' | 'alevinsClarias' | 'alevinsPregrossis'; alt: string }>;
    procTitle: string;
    procLead: string;
    stepPrefix: string;
    stepOf: string;
    steps: Array<{
      shortTitle: string;
      shortDesc: string;
      fullTitle: string;
      fullDesc: string;
      imageKey: 'etapeSelection' | 'etapeIncubation' | 'etapeGrossissement';
      alt: string;
      icon: 'graine' | 'labo' | 'croissance';
    }>;
    conditionsTitle: string;
    conditionsLead: string;
    conditions: Array<{ title: string; text: string; icon: 'goutte' | 'graine' | 'bouclier' }>;
    quoteTitle: string;
    quoteText: string;
    quoteBullets: string[];
    form: {
      nameLabel: string;
      nameError: string;
      phoneLabel: string;
      phonePlaceholder: string;
      phoneError: string;
      emailLabel: string;
      emailError: string;
      speciesLabel: string;
      speciesOptions: string[];
      msgLabel: string;
      msgError: string;
      submitBtn: string;
      formInvalid: string;
      waMissing: string;
      waSuccess: string;
      openWa: string;
      directContactCta: string;
      waHeader: string;
    };
  };
  poissons: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    stageEyebrow: string;
    stageTitle: string;
    stageLead: string;
    stageCards: Array<{
      weight: string;
      value: string;
      title: string;
      text: string;
      imageKey: 'poissonsTilapia' | 'poissonsClarias' | 'poissonsTris';
      alt: string;
    }>;
    lifeTitle: string;
    lifeText: string;
    lifeBullets: string[];
    lifeImgAlt: string;
    engagements: Array<{ label: string; icon: 'croissance' | 'sante' | 'graine' | 'goutte' }>;
    conductTitle: string;
    conductLead: string;
    conductSteps: Array<{
      title: string;
      text: string;
      imageKey: 'poissonsCharge' | 'poissonsCalibrage' | 'poissonsRecolte' | 'poissonsFraicheur' | 'poissonsLivraison';
      alt: string;
    }>;
    nutritionTitle: string;
    nutritionLead: string;
    nutritionCards: Array<{ title: string; text: string; icon: 'graine' | 'labo' | 'croissance' | 'sante' }>;
    nutritionCta: string;
    receiveTitle: string;
    receiveCards: Array<{ title: string; text: string }>;
  };
  elevage: {
    heroTitle: string;
    heroLead: string;
    heroCta: string;
    planLabel: string;
    planHint: string;
    zones: Record<'etang' | 'ecloserie' | 'pregros' | 'bassins' | 'eau', { label: string; svgLines: string[]; description: string }>;
    overviewTitle: string;
    overviewLead: string;
    overviewCards: Array<{ meta: string; title: string; text: string; imageKey: 'elevageEtang' | 'elevageEcloserie' | 'elevagePregros'; alt: string }>;
    infraCards: Array<{ title: string; text: string; icon: 'bouclier' | 'bassin' | 'goutte' }>;
    infraImg1Alt: string;
    infraImg2Alt: string;
    teamTitle: string;
    teamText: string;
    teamCta: string;
    teamStats: Array<{ value: string; label: string }>;
  };
  actualites: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    activitiesEyebrow: string;
    activitiesTitle: string;
    activitiesLead: string;
    filters: {
      all: string;
      photo: string;
      video: string;
      documentary: string;
    };
    kindLabels: {
      photo: string;
      video: string;
      documentary: string;
    };
    watchLabel: string;
    viewPhotoLabel: string;
    closePlayer: string;
    chaptersTitle: string;
    activities: ActivityItem[];
    partnersEyebrow: string;
    partnersTitle: string;
    partnersLead: string;
    partners: PartnerItem[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  contact: {
    heroTitle: string;
    heroDynamicPrefix: string;
    heroWords: string[];
    heroWriteBtn: string;
    heroMapBtn: string;
    writeTitle: string;
    writeLead: string;
    prefillNotice: string;
    form: {
      nameLabel: string;
      nameError: string;
      emailLabel: string;
      emailError: string;
      subjectLabel: string;
      subjectOptions: string[];
      msgLabel: string;
      msgError: string;
      submitBtn: string;
      formInvalid: string;
      waMissing: string;
      waSuccess: string;
      openWa: string;
      waHeader: string;
    };
    coordsTitle: string;
    coordsItems: {
      commercial: string;
      technique: string;
      whatsapp: string;
      facebook: string;
      email: string;
      address: string;
      addressDesc: string;
    };
    resellerTitle: string;
    resellerText: string;
    resellerCta: string;
    hoursTitle: string;
    hoursLines: string[];
    goodToKnowTitle: string;
    goodToKnowBullets: string[];
    mapTitle: string;
    mapLead: string;
    openMapsBtn: string;
    directionsBtn: string;
  };
}

export const translations: Record<Locale, SiteTranslations> = {
  fr: {
    meta: {
      accueil: {
        title: 'Correkt Sowers Sarl — Alevins et poissons de consommation, Yaoundé',
        description:
          "Correkt Sowers Sarl, pisciculture durable à Yaoundé : production d'alevins de tilapia et clarias, poissons frais de consommation, accompagnement technique des éleveurs.",
      },
      alevins: {
        title: 'Nos alevins — Correkt Sowers Sarl',
        description:
          "Alevins de tilapia du Nil, de clarias et sujets pré-grossis, calibrés et livrés en sacs oxygénés depuis notre écloserie de Yaoundé.",
      },
      poissons: {
        title: 'Production de poissons — Correkt Sowers Sarl',
        description:
          "Poissons de consommation élevés en bassins suivis au quotidien : conduite d'élevage, nutrition et récolte programmée à la commande.",
      },
      elevage: {
        title: "Notre site d'élevage — Correkt Sowers Sarl",
        description:
          "Visite du site de Correkt Sowers : écloserie, pré-grossissement, bassins de grossissement et traitement de l'eau.",
      },
      actualites: {
        title: 'Actualités & Partenaires — Correkt Sowers Sarl',
        description:
          'Activités de terrain en images, vidéos et documentaires, et mise en valeur des partenaires de Correkt Sowers Sarl.',
      },
      contact: {
        title: 'Contact — Correkt Sowers Sarl',
        description:
          'Contactez Correkt Sowers Sarl à Yaoundé : commandes d’alevins, poisson frais, visites du site et demandes de partenariat.',
      },
    },
    nav: {
      home: 'Accueil',
      alevins: 'Nos alevins',
      poissons: 'Production de poissons',
      elevage: "Site d'élevage",
      actualites: 'Actualités',
      contact: 'Contact',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      langToggleLabel: 'EN',
      langToggleTitle: 'Switch website language to English',
      quickContact: 'Commander / Contact',
    },
    footer: {
      tagline: 'Pisciculture durable à Yaoundé : alevins, poissons de consommation et accompagnement des éleveurs.',
      productsTitle: 'Produits',
      productsLinks: [
        { label: 'Tilapia du Nil', page: 'alevins' },
        { label: 'Clarias', page: 'alevins' },
        { label: 'Alevins pré-grossis', page: 'alevins' },
        { label: 'Poisson frais', page: 'poissons' },
      ],
      exploreTitle: 'Découvrir',
      exploreLinks: [
        { label: 'Accueil', page: 'accueil' },
        { label: "Site d'élevage", page: 'elevage' },
        { label: 'Actualités & Partenaires', page: 'actualites' },
        { label: 'Contact', page: 'contact' },
      ],
      contactTitle: 'Contact',
      facebookSuffix: 'sur Facebook',
      rights: 'Correkt Sowers Sarl. Tous droits réservés.',
      credit: 'Site conçu pour la pisciculture camerounaise.',
      manageCookies: 'Gérer les cookies',
    },
    cookies: {
      bannerTitle: 'Gestion des cookies',
      bannerText:
        'Nous utilisons des cookies essentiels pour le fonctionnement du site, ainsi que des cookies de préférence (langue) et de lecture multimédia.',
      acceptAll: 'Tout accepter',
      essentialOnly: 'Essentiels uniquement',
      customize: 'Personnaliser',
      modalTitle: 'Préférences de cookies',
      modalIntro:
        'Choisissez les catégories de cookies que vous autorisez lors de votre visite sur Correkt Sowers Sarl.',
      essentialTitle: 'Cookies strictement nécessaires',
      essentialDesc: 'Indispensables à la navigation, à la sécurité des formulaires et à la mémorisation de vos choix de confidentialité.',
      essentialBadge: 'Toujours actifs',
      preferencesTitle: 'Préférences d’affichage et langue',
      preferencesDesc: 'Permet de conserver votre choix de langue (Français / Anglais) entre vos visites.',
      mediaTitle: 'Contenus vidéo et carte interactive',
      mediaDesc: 'Autorise l’affichage des cartes de localisation et le suivi des lecteurs documentaires.',
      savePrefs: 'Enregistrer mes préférences',
      close: 'Fermer',
    },
    lightbox: {
      dialogLabel: 'Image agrandie',
      close: 'Fermer',
      scrollToTop: 'Retour en haut de la page',
    },
    home: {
      heroTitle: 'Qualité et pisciculture durable.',
      heroSubtitle: "Nous produisons des alevins robustes et des poissons frais, du centre d'écloserie jusqu'à votre bassin.",
      heroPrimaryCta: 'Commander ou demander un devis',
      heroSecondaryCta: 'Découvrir nos alevins',
      introTitle: 'Correkt Sowers Sarl, leader en alevins et poissons de consommation.',
      introLead:
        "Bienvenue chez Correkt Sowers Sarl. Depuis Yaoundé, nous accompagnons éleveurs, restaurateurs et revendeurs avec des alevins fiables et des poissons frais, produits sur un site conçu pour maîtriser chaque étape : géniteurs suivis, eau contrôlée, récolte planifiée. Trois métiers, une même exigence : une génétique suivie, une eau maîtrisée et un accompagnement des éleveurs jusqu'à la récolte.",
      cards: [
        {
          title: "Production d'alevins",
          text: 'Tilapia et clarias issus de géniteurs sélectionnés, livrés calibrés et acclimatés à votre eau.',
          icon: 'alevin',
        },
        {
          title: 'Poissons frais',
          text: 'Poissons de consommation élevés sans traitement de routine, récoltés à la commande.',
          icon: 'poisson',
        },
        {
          title: 'Notre technologie',
          text: "Écloserie contrôlée, recirculation de l'eau et suivi sanitaire enregistré lot par lot.",
          icon: 'labo',
        },
      ],
      historyEyebrow: 'NOTRE HISTOIRE',
      historyTitle: "De deux bassins d'essai au leader régional",
      historyText:
        "Correkt Sowers Sarl est née à Yaoundé d'un constat simple : les éleveurs de la région manquaient d'alevins fiables et d'un interlocuteur technique de proximité. L'entreprise a démarré modestement, avec deux bassins d'essai et un stock de géniteurs sélectionnés à la main.",
      timeline: [
        {
          title: 'Les débuts',
          text: "Premier site d'essai à Yaoundé : deux bassins, un couple de géniteurs de tilapia et de clarias, et une méthode de suivi consignée sur papier.",
        },
        {
          title: "Construction de l'écloserie",
          text: "Mise en service d'une écloserie dédiée avec bouteilles d'incubation et bacs de pré-grossissement, pour fiabiliser la production d'alevins toute l'année.",
        },
        {
          title: 'Extension du site',
          text: "Agrandissement à 14 bassins de grossissement et mise en place d'un protocole de biosécurité et de traitement de l'eau.",
        },
        {
          title: "Aujourd'hui",
          text: 'Correkt Sowers Sarl fournit des éleveurs et revendeurs à Yaoundé et dans les régions voisines, avec une équipe technique présente sur site chaque jour.',
        },
      ],
      followTitle: "De l'alevin au marché, sans rupture de suivi",
      followText:
        "Chaque lot part de l'écloserie avec sa fiche : date de ponte, taux d'éclosion, calibre, densité conseillée. Vous savez exactement ce que vous mettez dans votre bassin.",
      followBullets: [
        'Alevins pré-grossis en bac avant livraison, pour limiter la mortalité au transfert.',
        'Eau analysée chaque jour : température, oxygène dissous, pH, ammoniaque.',
        'Conseil technique gratuit pendant les 30 premiers jours après livraison.',
      ],
      followCta: 'Parler à un technicien',
      stats: [
        { value: '1,2 M', label: 'alevins produits par an' },
        { value: '3', label: 'espèces maîtrisées : Tilapia, Clarias et Carpes' },
        { value: '14', label: 'bassins de grossissement' },
        { value: '30 j', label: 'de suivi technique après livraison' },
      ],
      recapTitle: "Tout Correkt Sowers Sarl en un coup d'œil",
      recapLead:
        "Quatre rubriques pour tout savoir sur nos alevins, notre production de poissons, notre site d'élevage et la façon de nous joindre.",
      recapItems: [
        {
          page: 'alevins',
          title: 'Nos alevins',
          text: "Espèces disponibles, définition, mode de production et conditions d'élevage.",
          cta: 'Découvrir →',
          imageKey: 'recapAlevins',
        },
        {
          page: 'poissons',
          title: 'Production de poissons',
          text: 'De l’alevin au poisson vendable : délais, mode de vie, vente et livraison.',
          cta: 'Découvrir →',
          imageKey: 'recapPoissons',
        },
        {
          page: 'elevage',
          title: "Site d'élevage",
          text: "Étang, écloserie, bassins, traitement de l'eau et équipe technique.",
          cta: 'Découvrir →',
          imageKey: 'recapElevage',
        },
        {
          page: 'contact',
          title: 'Nous',
          text: 'Localisation, téléphone, WhatsApp, réseaux sociaux et horaires.',
          cta: 'Découvrir →',
          imageKey: 'recapContact',
        },
      ],
      bottomTitle: 'Un projet de pisciculture en tête ?',
      bottomLead:
        'Dites-nous la taille de vos bassins et l’espèce visée, nous revenons vers vous avec un plan de mise en charge et un prix.',
      bottomCta: 'Nous contacter',
      bottomSecondaryCta: 'Voir nos actualités',
    },
    alevins: {
      heroTitle: "Nos alevins : l'excellence aquacole.",
      heroSubtitle: "Des sujets vigoureux, calibrés et prêts à la mise en charge, disponibles toute l'année.",
      heroCta: 'Demander une cotation',
      heroSecondaryCta: 'Contacter un technicien',
      defEyebrow: "C'EST QUOI, UN ALEVIN ?",
      defTitle: "Définition et rôle de l'alevin",
      defP1:
        "Un alevin est un jeune poisson issu de l'éclosion, encore loin de sa taille adulte, que l'on met en bassin pour le faire grandir jusqu'à la taille de consommation. C'est le point de départ de tout cycle d'élevage : la qualité de l'alevin conditionne la croissance, la santé et le rendement final du bassin.",
      defP2:
        "Chez Correkt Sowers Sarl, chaque alevin vendu est issu de géniteurs sélectionnés et suivis, ce qui garantit une croissance régulière et une bonne résistance une fois transféré chez l'éleveur.",
      whereEyebrow: 'OÙ SONT-ILS PRODUITS ?',
      whereTitle: 'Un site de production unique, à Yaoundé',
      whereP:
        "Tous nos alevins naissent et grandissent sur notre site d'élevage de Yaoundé, dans le Centre du Cameroun. L'extraction des œufs et des laitances, l'incubation et le pré-grossissement se déroulent dans notre écloserie, avant que les alevins ne soient acclimatés puis livrés aux éleveurs de la région et au-delà.",
      defImgAlt: 'Alevins nouvellement éclos dans un bac',
      speciesTitle: 'Les espèces disponibles',
      speciesLead: 'Chaque calibre est vendu au client, avec une fiche de lot et une densité de mise en charge conseillée.',
      species: [
        {
          scientific: 'Oreochromis niloticus',
          name: 'Tilapia du Nil',
          desc: 'Calibres 3 à 5 g et 8 à 12 g. Croissance régulière en étang comme en cage, bonne tolérance aux fortes densités.',
          imageKey: 'alevinsTilapia',
          alt: 'Alevins de tilapia du Nil',
        },
        {
          scientific: 'Clarias gariepinus',
          name: 'Clarias',
          desc: 'Calibres 2 à 4 g et 6 à 10 g. Résistant en eau peu oxygénée, adapté aux bassins hors-sol et aux bacs bâchés.',
          imageKey: 'alevinsClarias',
          alt: 'Alevins de clarias',
        },
        {
          scientific: 'Sur commande',
          name: 'Alevins pré-grossis',
          desc: 'Sujets de 15 à 30 g, déjà habitués au granulé. Ils raccourcissent d’environ six semaines votre cycle de production.',
          imageKey: 'alevinsPregrossis',
          alt: 'Alevins pré-grossis en bac',
        },
      ],
      procTitle: 'Du géniteur à la livraison',
      procLead: "Touchez une étape pour voir ce qui s'y passe.",
      stepPrefix: 'Étape',
      stepOf: 'sur',
      steps: [
        {
          shortTitle: '1. Sélection',
          shortDesc: 'Les géniteurs sont notés sur la croissance et la conformation, puis renouvelés tous les deux ans.',
          fullTitle: 'Sélection des géniteurs',
          fullDesc:
            'Nous gardons une population de géniteurs séparée du circuit de production, avec un registre par famille. Les sujets sont pesés tous les trimestres et réformés dès que la croissance de leur descendance décroche.',
          imageKey: 'etapeSelection',
          alt: 'Géniteurs de tilapia sélectionnés',
          icon: 'graine',
        },
        {
          shortTitle: '2. Incubation',
          shortDesc: 'Les œufs passent en incubation à 28 °C, en eau filtrée et renouvelée en continu.',
          fullTitle: 'Incubation contrôlée',
          fullDesc:
            "Les œufs sont récoltés à la main puis placés en bouteilles d'incubation à 28 °C. L'eau est filtrée et renouvelée en continu ; le taux d'éclosion est relevé pour chaque ponte et reporté sur la fiche du lot.",
          imageKey: 'etapeIncubation',
          alt: "Bacs d'incubation de l'écloserie",
          icon: 'labo',
        },
        {
          shortTitle: '3. Grossissement',
          shortDesc: "Les larves sont nourries à la poudre puis triées par taille avant le comptage et l'emballage.",
          fullTitle: 'Grossissement et tri',
          fullDesc:
            "Les larves passent de l'aliment en poudre au micro-granulé en trois semaines. Elles sont ensuite triées par taille, comptées et mises à jeun 24 heures avant le transport en sacs oxygénés.",
          imageKey: 'etapeGrossissement',
          alt: 'Alevins triés et mis en bac avant le transport',
          icon: 'croissance',
        },
      ],
      conditionsTitle: "Conditions d'existence de nos alevins",
      conditionsLead:
        "Un alevin fragile met tout un bassin en péril. Voici les conditions que nous maintenons du bac de naissance jusqu'à la livraison.",
      conditions: [
        {
          title: 'Eau contrôlée',
          text: "Température autour de 27-28 °C, oxygène dissous et pH mesurés chaque jour, renouvellement d'eau régulier en bac.",
          icon: 'goutte',
        },
        {
          title: 'Alimentation adaptée',
          text: 'Poudre fine puis micro-granulé selon l’âge, distribué en plusieurs petits repas pour limiter le stress alimentaire.',
          icon: 'graine',
        },
        {
          title: 'Faible densité',
          text: "Les bacs de pré-grossissement respectent une densité limitée par litre d'eau, pour réduire la compétition et la mortalité.",
          icon: 'bouclier',
        },
      ],
      quoteTitle: 'Demander une cotation',
      quoteText:
        'Indiquez l’espèce, la quantité et la date de mise en charge souhaitée. Nous répondons sous 48 heures ouvrées avec un prix et une date de disponibilité.',
      quoteBullets: [
        'Commande minimum : 500 alevins.',
        'Transport en sacs oxygénés, Yaoundé et régions voisines.',
        "Comptage contradictoire au départ de l'écloserie.",
      ],
      form: {
        nameLabel: 'Nom et prénom',
        nameError: 'Indiquez votre nom.',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '+237 6XX XX XX XX',
        phoneError: 'Indiquez un numéro joignable.',
        emailLabel: 'Email',
        emailError: "Cette adresse email n'est pas valide.",
        speciesLabel: 'Espèce souhaitée',
        speciesOptions: ['Tilapia du Nil', 'Clarias', 'Alevins pré-grossis', 'Je ne sais pas encore'],
        msgLabel: 'Quantité et date de mise en charge',
        msgError: 'Précisez votre besoin.',
        submitBtn: 'Envoyer la demande via WhatsApp',
        formInvalid: 'Complétez les champs signalés avant d’envoyer.',
        waMissing: "Le numéro WhatsApp de l'entreprise n'est pas encore renseigné (src/config/siteConfig.ts).",
        waSuccess: "Votre demande est prête : envoyez-la dans la conversation WhatsApp qui s'ouvre.",
        openWa: 'Ouvrir WhatsApp',
        directContactCta: 'Ou passer par la page Contact',
        waHeader: "*Demande de cotation d'alevins*",
      },
    },
    poissons: {
      heroTitle: 'Production de poissons.',
      heroSubtitle: "Des bassins conduits au quotidien, une récolte planifiée avec l'acheteur.",
      heroCta: 'Commander du poisson frais',
      stageEyebrow: "DE L'ALEVIN AU POISSON DE TABLE",
      stageTitle: 'Du stade alevin à la vente et à la consommation',
      stageLead:
        "Un alevin livré chez l'éleveur, ou mis en charge dans nos propres bassins, quitte ce statut dès qu'il dépasse quelques grammes et entre en phase de grossissement. Il y reste jusqu'à atteindre le calibre marchand, puis il est récolté, conditionné et vendu frais.",
      stageCards: [
        {
          weight: '300 à 600 g',
          value: '5 à 6 mois',
          title: 'Tilapia du Nil',
          text: "Délai moyen entre la mise en charge de l'alevin et un poisson consommable de 300 à 600 g.",
          imageKey: 'poissonsTilapia',
          alt: 'Tilapia du Nil de 300 à 600 g',
        },
        {
          weight: '400 g et plus',
          value: '3 à 4 mois',
          title: 'Clarias',
          text: 'Croissance un peu plus courte et régulière, jusqu’à un calibre de 400 g et plus.',
          imageKey: 'poissonsClarias',
          alt: 'Clarias de 400 g et plus',
        },
        {
          weight: '400 g minimum',
          value: 'Tris',
          title: 'Pendant le cycle',
          text: 'Le calibrage en cours d’élevage n’est pas possible en étang en sol : il se fait uniquement à la récolte, lorsque les poissons sont déjà grands. Nous ne retenons et ne trions que les sujets de 400 g minimum pour constituer les lots calibrés.',
          imageKey: 'poissonsTris',
          alt: 'Tri et calibrage des poissons à la récolte',
        },
      ],
      lifeTitle: 'Mode de vie en bassin',
      lifeText:
        "Nos poissons vivent en étang, à une densité surveillée pour leur laisser assez d'espace et d'oxygène. Ils sont nourris deux à trois fois par jour à heures régulières, et l'eau est renouvelée en continu pour rester claire et bien oxygénée.",
      lifeBullets: [
        "Poissons grégaires, élevés en groupe dans un même bassin par lot d'âge homogène.",
        'Aucun traitement antibiotique de routine, alimentation à base de granulés flottants.',
        "Surveillance quotidienne du comportement et de l'appétit par l'équipe technique.",
      ],
      lifeImgAlt: 'Poissons évoluant en bassin',
      engagements: [
        { label: 'Croissance rapide', icon: 'croissance' },
        { label: 'Santé animale', icon: 'sante' },
        { label: 'Alimentation durable', icon: 'graine' },
        { label: "Qualité de l'eau", icon: 'goutte' },
      ],
      conductTitle: 'Comment nous conduisons un bassin',
      conductLead:
        "De la mise en charge à la livraison, chaque bassin suit les mêmes étapes, notées sur sa fiche. Rien n'est laissé à l'appréciation.",
      conductSteps: [
        {
          title: 'Mise en charge et ration',
          text: "Un bassin est mis en charge à densité connue, avec une ration recalculée chaque semaine à partir d'une pesée d'échantillon. La quantité distribuée, la température et l'oxygène du matin sont notés sur la fiche du bassin.",
          imageKey: 'poissonsCharge',
          alt: 'Poissons évoluant dans un bassin mis en charge',
        },
        {
          title: 'Sélection et calibrage',
          text: "Après les 90 jours, les poissons sont sélectionnés une fois leur poids atteint une bonne représentation autour de 400 g, pour éviter que les plus gros ne prennent toute la nourriture. Les lots sont triés par taille pour répondre au calibre demandé par l'acheteur. Cette discipline nous donne des lots homogènes, ce qui compte autant pour le restaurateur que pour le revendeur.",
          imageKey: 'poissonsCalibrage',
          alt: 'Tri et calibrage des poissons après récolte',
        },
        {
          title: 'Récolte au bassin',
          text: 'Les poissons sont prélevés le matin même de la livraison, à l’épuisette ou au filet, pour partir au plus frais.',
          imageKey: 'poissonsRecolte',
          alt: 'Récolte de poissons au bassin',
        },
        {
          title: 'Fraîcheur préservée',
          text: 'Après la récolte, nos poissons sont manipulés avec soin afin de préserver leur fraîcheur et leur qualité. Ils sont également proposés sous différentes formes, notamment frais, nettoyés, marinés ou fumés, selon les préférences de nos clients, dans le respect des bonnes pratiques de transformation et de conservation.',
          imageKey: 'poissonsFraicheur',
          alt: 'Poissons mis en glace avant livraison',
        },
        {
          title: 'Livraison',
          text: 'La livraison a lieu le jour même, selon le volume et la date fixés avec le client.',
          imageKey: 'poissonsLivraison',
          alt: 'Caisses de poissons prêtes pour la livraison',
        },
      ],
      nutritionTitle: 'Nutrition',
      nutritionLead:
        'L’aliment représente la plus grosse part du coût de production : nous le choisissons sur la performance réelle, pas sur le prix au sac.',
      nutritionCards: [
        { title: 'Granulés flottants', text: 'Dosés selon la biomasse estimée, distribués en deux à trois repas.', icon: 'graine' },
        { title: 'Granulé adapté', text: 'Taille ajustée au calibre à chaque tri, pour limiter le gaspillage au fond.', icon: 'labo' },
        { title: 'Indice suivi', text: "Indice de consommation suivi par bassin et comparé d'un cycle à l'autre.", icon: 'croissance' },
        { title: 'Sans additif', text: 'Aucun facteur de croissance ni traitement antibiotique de routine.', icon: 'sante' },
      ],
      nutritionCta: 'Commander du poisson frais',
      receiveTitle: 'Ce que vous recevez',
      receiveCards: [
        {
          title: 'Poisson entier frais',
          text: 'Récolté le matin de la livraison, mis en glace immédiatement, calibre 300 à 600 g ou 700 g et plus.',
        },
        {
          title: 'Livraison programmée',
          text: 'Vous fixez le jour et le volume. Nous récoltons en conséquence, sans stock dormant.',
        },
        {
          title: 'Traçabilité du lot',
          text: "Chaque livraison porte le numéro de bassin, la date de mise en charge et l'aliment utilisé.",
        },
      ],
    },
    elevage: {
      heroTitle: "Notre site d'élevage.",
      heroLead: "Cinq zones séparées, un sens de circulation unique, de l'étang d'alimentation jusqu'au traitement de l'eau.",
      heroCta: 'Planifier une visite du site',
      planLabel: 'ZONE SÉLECTIONNÉE',
      planHint: 'Touchez une zone du plan pour en savoir plus.',
      zones: {
        etang: {
          label: 'Étang',
          svgLines: ['Étang'],
          description:
            "Réserve d'eau douce en amont du site, qui alimente l'écloserie et les bassins. Elle sert aussi de zone tampon en cas de coupure d'approvisionnement et accueille quelques géniteurs en reproduction naturelle.",
        },
        ecloserie: {
          label: 'Écloserie',
          svgLines: ['Écloserie'],
          description:
            "Bâtiment fermé, accès réservé au personnel formé. Bouteilles d'incubation, bacs de larves et eau chauffée à 28 °C en circuit fermé. C'est ici que commence la traçabilité de chaque lot.",
        },
        pregros: {
          label: 'Pré-grossissement',
          svgLines: ['Pré-grossissement'],
          description:
            'Bacs couverts où les alevins passent au granulé et sont triés par calibre. Densité réduite et deux vidanges par semaine pour garder une eau propre.',
        },
        bassins: {
          label: 'Bassins de stockage',
          svgLines: ['Bassins de', 'stockage'],
          description:
            "14 bassins de grossissement et de stockage aérés et vidangeables un par un. Chaque bassin a sa fiche : mise en charge, ration, pesées d'échantillon et date de récolte prévue.",
        },
        eau: {
          label: "Traitement de l'eau",
          svgLines: ['Traitement', "de l'eau"],
          description:
            "Décantation, filtration mécanique et recirculation partielle. L'eau sortante traverse un bassin planté avant rejet, ce qui limite la charge en matière organique.",
        },
      },
      overviewTitle: "Vue d'ensemble du site",
      overviewLead:
        "Trois espaces qui se succèdent, de l'arrivée de l'eau jusqu'à l'équipe qui fait tourner le site chaque jour.",
      overviewCards: [
        {
          meta: 'Zone 1',
          title: "L'étang",
          text: "Réserve d'eau douce qui alimente tout le site et sert de zone tampon en cas de coupure.",
          imageKey: 'elevageEtang',
          alt: "Étang d'alimentation en eau du site",
        },
        {
          meta: 'Zone 2',
          title: "L'écloserie",
          text: "Bâtiment fermé où naissent les alevins : bouteilles d'incubation et bacs de larves à 28 °C.",
          imageKey: 'elevageEcloserie',
          alt: "Bâtiment de l'écloserie",
        },
        {
          meta: 'Zone 3',
          title: 'Pré-grossissement',
          text: 'Bacs couverts où les alevins passent au granulé avant leur transfert en bassin.',
          imageKey: 'elevagePregros',
          alt: 'Bacs de pré-grossissement des alevins',
        },
      ],
      infraCards: [
        {
          title: 'Biosécurité',
          text: "Pédiluve à l'entrée, matériel dédié par zone et quarantaine systématique de tout poisson entrant sur le site.",
          icon: 'bouclier',
        },
        {
          title: 'Bassins de stockage',
          text: "Cet étang en terre, d'une superficie de 200 m², a fait l'objet d'un curage afin d'améliorer ses conditions d'exploitation et de faciliter la gestion des stocks piscicoles.",
          icon: 'bassin',
        },
        {
          title: "Gestion de l'eau",
          text: "Décantation, filtration et recirculation partielle. L'eau rejetée passe par un bassin planté avant de quitter le site.",
          icon: 'goutte',
        },
      ],
      infraImg1Alt: "Équipe technique sur le site d'élevage",
      infraImg2Alt: "Site d'élevage Correkt Sowers vu du ciel",
      teamTitle: 'Une équipe sur le site tous les jours',
      teamText:
        "Techniciens aquacoles, responsable qualité de l'eau et équipe de récolte. Les visites d'éleveurs sont possibles sur rendez-vous, le mardi et le jeudi matin.",
      teamCta: 'Demander une visite',
      teamStats: [
        { value: '5', label: 'zones séparées' },
        { value: '+300 m³', label: 'par bassin de stockage' },
        { value: '2×/jour', label: "contrôle de l'oxygène dissous" },
        { value: '100 %', label: 'des lots enregistrés' },
      ],
    },
    actualites: {
      heroTitle: 'Actualités, reportages et partenaires.',
      heroSubtitle:
        'Suivez nos activités sur le terrain en images, vidéos et documentaires, et découvrez les partenaires qui accompagnent la filière piscicole.',
      heroCta: 'Proposer un partenariat',
      activitiesEyebrow: 'VIE DU SITE ET TERRAIN',
      activitiesTitle: 'Nos activités en images, vidéos et documentaires',
      activitiesLead:
        'Chaque campagne de ponte, chaque récolte matinale et chaque session de formation est documentée avec de courts retours de notre équipe.',
      filters: {
        all: 'Toutes les activités',
        photo: 'Photos de terrain',
        video: 'Vidéos',
        documentary: 'Documentaires',
      },
      kindLabels: {
        photo: 'Reportage photo',
        video: 'Vidéo terrain',
        documentary: 'Mini-documentaire',
      },
      watchLabel: 'Lire la présentation',
      viewPhotoLabel: 'Agrandir la photo',
      closePlayer: 'Fermer le lecteur',
      chaptersTitle: 'Séquences du reportage',
      activities: [
        {
          id: 'act-1',
          kind: 'documentary',
          date: 'Campagne 2026',
          duration: '08 min 40',
          image: 'images/img (58).jpg',
          title: 'De la source à la récolte : immersion dans notre ferme de Yaoundé',
          comment:
            "Documentaire complet sur le fonctionnement des 5 zones du site, le curage de l'étang et la maîtrise de l'eau en circuit suivi.",
          videoSummary:
            "Ce mini-documentaire suit une journée type avec les techniciens de Correkt Sowers Sarl : contrôle matinal de l'oxygène dissous, gestion de l'écloserie à 28 °C et récolte programmée pour les clients de Yaoundé.",
          videoChapters: [
            "00:00 — L'étang tampon et l'alimentation en eau douce",
            "02:15 — L'écloserie et le suivi des pontes par famille",
            '05:10 — Pré-grossissement et passage au granulé flottant',
            '07:05 — Récolte au filet et mise en glace immédiate',
          ],
        },
        {
          id: 'act-2',
          kind: 'video',
          date: 'Activité récente',
          duration: '03 min 15',
          image: 'images/img (74).jpg',
          title: 'Conditionnement en sacs oxygénés avant livraison',
          comment:
            'Aperçu vidéo du comptage contradictoire et de la mise en sac oxygéné pour garantir une survie maximale lors du transport.',
          videoSummary:
            "Nos alevins sont mis à jeun 24 heures avant le départ, puis comptés devant l'éleveur et conditionnés sous oxygène pur pour voyager sereinement vers le Centre, le Littoral et l'Ouest.",
          videoChapters: [
            '00:00 — Jeûne et acclimatation thermique',
            '01:10 — Comptage contradictoire par lot',
            '02:05 — Gonflage à l’oxygène et départ vers les fermes',
          ],
        },
        {
          id: 'act-3',
          kind: 'photo',
          date: 'Terrain · Yaoundé',
          image: 'images/img (90).jpg',
          title: 'Accueil et formation pratique des jeunes pisciculteurs',
          comment:
            "Visite technique sur le site : calcul de la ration hebdomadaire, pesée d'échantillon et tenue du registre de bassin.",
        },
        {
          id: 'act-4',
          kind: 'documentary',
          date: 'Dossier technique',
          duration: '06 min 20',
          image: 'images/img (8).jpg',
          title: "Dans les coulisses de l'écloserie : incubation du tilapia et du clarias",
          comment:
            "Regard détaillé sur la sélection des géniteurs, l'incubation à 28 °C et le sevrage des larves au micro-granulé.",
          videoSummary:
            "Une plongée dans le bâtiment fermé de l'écloserie, où la biosécurité et la stabilité thermique assurent des taux d'éclosion réguliers toute l'année.",
          videoChapters: [
            '00:00 — Sélection trimestrielle des géniteurs',
            '02:00 — Bouteilles d’incubation et contrôle à 28 °C',
            '04:30 — Tri par calibre dès les premières semaines',
          ],
        },
        {
          id: 'act-5',
          kind: 'video',
          date: 'Récolte matinale',
          duration: '02 min 50',
          image: 'images/img (18).jpg',
          title: 'Pêche sélective et calibrage des lots de 400 g et plus',
          comment:
            "Comment l'équipe prélève les sujets marchands à l'aube pour préserver la fraîcheur jusqu'à la livraison.",
          videoSummary:
            'Chaque poisson destiné à la table ou à la transformation (frais, nettoyé, mariné ou fumé) est récolté le matin même sur commande.',
          videoChapters: [
            '00:00 — Coup de filet matinal en bassin',
            '01:15 — Tri sur table pour lots homogènes ≥ 400 g',
            '02:10 — Mise en glace et expédition directe',
          ],
        },
        {
          id: 'act-6',
          kind: 'photo',
          date: 'Aménagement',
          image: 'images/img (21).jpg',
          title: "Curage et entretien de l'étang d'alimentation",
          comment:
            "Travaux réguliers sur notre étang de 200 m² pour optimiser la qualité de l'eau et sécuriser les réserves en saison sèche.",
        },
      ],
      partnersEyebrow: 'ILS AVANCENT AVEC NOUS',
      partnersTitle: 'Nos partenaires et leurs engagements',
      partnersLead:
        'Éleveurs relais, fournisseurs d’aliments, restaurateurs et acteurs locaux partagent avec nous une vision concrète de la pisciculture camerounaise.',
      partners: [
        {
          id: 'p-1',
          name: 'Réseau Éleveurs du Centre',
          role: 'Fermes partenaires · Mise en charge',
          slogan: '« Des alevins vigoureux dès le premier jour, des récoltes prévisibles à chaque cycle. »',
          image: 'images/img (77).jpg',
        },
        {
          id: 'p-2',
          name: 'Nutrition Aquacole Locale',
          role: 'Partenaire aliment flottant',
          slogan: '« Un granulé équilibré et traçable pour valoriser chaque bassin sans gaspillage. »',
          image: 'images/img (76).jpg',
        },
        {
          id: 'p-3',
          name: 'Tables & Poissonneries de Yaoundé',
          role: 'Restauration & distribution',
          slogan: '« La fraîcheur du matin, livrée calibrée et prête pour nos cuisines. »',
          image: 'images/img (50).jpg',
        },
        {
          id: 'p-4',
          name: 'Relais Littoral & Ouest',
          role: 'Distributeurs agréés d’alevins',
          slogan: '« Rapprocher la génétique Correkt Sowers de chaque bassin régional. »',
          image: 'images/img (60).jpg',
        },
        {
          id: 'p-5',
          name: 'Atelier Transformation & Fumage',
          role: 'Valorisation post-récolte',
          slogan: '« Du poisson sain, nettoyé, mariné ou fumé dans le respect de l’hygiène. »',
          image: 'images/img (14).jpg',
        },
        {
          id: 'p-6',
          name: 'Accompagnement Technique Terrain',
          role: 'Appui aux nouveaux porteurs de projets',
          slogan: '« Transmettre les bons gestes d’élevage pour faire réussir chaque ferme. »',
          image: 'images/img (82).jpg',
        },
      ],
      ctaTitle: 'Vous souhaitez devenir partenaire ou visiter une activité ?',
      ctaText: 'Échangez directement avec notre équipe technique ou commerciale à Yaoundé.',
      ctaButton: 'Contacter Correkt Sowers Sarl',
    },
    contact: {
      heroTitle: 'Correkt Sowers Sarl',
      heroDynamicPrefix: 'Yaoundé, Cameroun · Écrivez-nous pour ',
      heroWords: ['vos alevins', 'du poisson frais', 'un conseil technique', 'visiter le site', 'devenir revendeur'],
      heroWriteBtn: 'Nous écrire',
      heroMapBtn: 'Voir la carte',
      writeTitle: 'Écrivez-nous',
      writeLead: 'Une commande, une question technique ou une demande de partenariat : nous répondons sous 48 heures ouvrées.',
      prefillNotice: 'Objet pré-rempli depuis votre parcours :',
      form: {
        nameLabel: 'Nom',
        nameError: 'Indiquez votre nom.',
        emailLabel: 'Email',
        emailError: "Cette adresse email n'est pas valide.",
        subjectLabel: 'Objet de votre demande',
        subjectOptions: [
          "Commande d'alevins",
          'Commande de poisson frais',
          "Visite du site d'élevage",
          'Conseil technique',
          'Devenir partenaire / revendeur',
        ],
        msgLabel: 'Message',
        msgError: 'Écrivez votre message.',
        submitBtn: 'Envoyer le message via WhatsApp',
        formInvalid: 'Complétez les champs signalés avant d’envoyer.',
        waMissing: "Le numéro WhatsApp de l'entreprise n'est pas encore renseigné (src/config/siteConfig.ts).",
        waSuccess: "Votre message est prêt : envoyez-le dans la conversation WhatsApp qui s'ouvre.",
        openWa: 'Ouvrir WhatsApp',
        waHeader: '*Message depuis le site Correkt Sowers*',
      },
      coordsTitle: 'Coordonnées',
      coordsItems: {
        commercial: 'Service commercial',
        technique: 'Support technique',
        whatsapp: 'WhatsApp, réponse rapide',
        facebook: 'Page Facebook',
        email: 'Réponse sous 48 h ouvrées',
        address: 'Yaoundé, Centre',
        addressDesc: 'Visites du site sur rendez-vous',
      },
      resellerTitle: 'Trouver un revendeur',
      resellerText: "Nos alevins sont aussi distribués par des partenaires agréés dans le Centre, le Littoral et l'Ouest.",
      resellerCta: 'Découvrir nos partenaires',
      hoursTitle: 'Horaires',
      hoursLines: ['Lundi à vendredi, 7 h 30 – 17 h.', 'Samedi, 8 h – 12 h.', 'Récoltes et livraisons le matin.'],
      goodToKnowTitle: 'Bon à savoir',
      goodToKnowBullets: [
        'Paiement en espèces, par Mobile Money ou par virement bancaire.',
        'Livraison possible à Yaoundé et dans les villes voisines, selon le volume commandé.',
        "Visite du site d'élevage sur rendez-vous, le mardi et le jeudi matin.",
      ],
      mapTitle: 'Nous trouver sur la carte',
      mapLead: "Site d'élevage et bureaux à Yaoundé, Centre du Cameroun.",
      openMapsBtn: 'Ouvrir dans Google Maps',
      directionsBtn: 'Itinéraire',
    },
  },
  en: {
    meta: {
      accueil: {
        title: 'Correkt Sowers Sarl — Fingerlings & Table Fish, Yaoundé',
        description:
          'Correkt Sowers Sarl, sustainable fish farming in Yaoundé: Nile tilapia and clarias fingerlings, fresh table fish, and technical farmer support.',
      },
      alevins: {
        title: 'Our Fingerlings — Correkt Sowers Sarl',
        description:
          'Nile tilapia, clarias, and pre-grown fingerlings, graded and delivered in oxygenated bags from our Yaoundé hatchery.',
      },
      poissons: {
        title: 'Fish Production — Correkt Sowers Sarl',
        description:
          'Market-size fish raised in daily-monitored ponds: pond management, nutrition, and scheduled harvest to order.',
      },
      elevage: {
        title: 'Our Fish Farm — Correkt Sowers Sarl',
        description:
          'Tour of the Correkt Sowers site: supply pond, hatchery, pre-growing tanks, grow-out basins, and water treatment.',
      },
      actualites: {
        title: 'News & Partners — Correkt Sowers Sarl',
        description:
          'Field activities through photos, videos, and documentaries, plus partner spotlights and slogans.',
      },
      contact: {
        title: 'Contact — Correkt Sowers Sarl',
        description:
          'Contact Correkt Sowers Sarl in Yaoundé: fingerling orders, fresh fish, farm visits, and partnership inquiries.',
      },
    },
    nav: {
      home: 'Home',
      alevins: 'Our Fingerlings',
      poissons: 'Fish Production',
      elevage: 'Fish Farm',
      actualites: 'News',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langToggleLabel: 'FR',
      langToggleTitle: 'Passer le site en français',
      quickContact: 'Order / Contact',
    },
    footer: {
      tagline: 'Sustainable aquaculture in Yaoundé: fingerlings, table fish, and hands-on farmer support.',
      productsTitle: 'Products',
      productsLinks: [
        { label: 'Nile Tilapia', page: 'alevins' },
        { label: 'Clarias Catfish', page: 'alevins' },
        { label: 'Pre-grown Fingerlings', page: 'alevins' },
        { label: 'Fresh Fish', page: 'poissons' },
      ],
      exploreTitle: 'Explore',
      exploreLinks: [
        { label: 'Home', page: 'accueil' },
        { label: 'Fish Farm', page: 'elevage' },
        { label: 'News & Partners', page: 'actualites' },
        { label: 'Contact', page: 'contact' },
      ],
      contactTitle: 'Contact',
      facebookSuffix: 'on Facebook',
      rights: 'Correkt Sowers Sarl. All rights reserved.',
      credit: 'Designed for Cameroonian aquaculture.',
      manageCookies: 'Cookie settings',
    },
    cookies: {
      bannerTitle: 'Cookie preferences',
      bannerText:
        'We use essential cookies to keep the site working reliably, alongside language preference and media playback cookies.',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      customize: 'Customize',
      modalTitle: 'Cookie settings',
      modalIntro:
        'Choose which cookie categories you allow while browsing Correkt Sowers Sarl.',
      essentialTitle: 'Strictly necessary cookies',
      essentialDesc: 'Required for core navigation, form validation, and saving your privacy preferences.',
      essentialBadge: 'Always active',
      preferencesTitle: 'Display & language preferences',
      preferencesDesc: 'Remembers your selected language (French / English) across visits.',
      mediaTitle: 'Video & interactive map embeds',
      mediaDesc: 'Allows embedded location maps and documentary player preferences.',
      savePrefs: 'Save preferences',
      close: 'Close',
    },
    lightbox: {
      dialogLabel: 'Enlarged image',
      close: 'Close',
      scrollToTop: 'Back to top',
    },
    home: {
      heroTitle: 'Quality & sustainable aquaculture.',
      heroSubtitle: 'We produce resilient fingerlings and fresh table fish, from our hatchery straight to your pond.',
      heroPrimaryCta: 'Order or request a quote',
      heroSecondaryCta: 'Explore our fingerlings',
      introTitle: 'Correkt Sowers Sarl, leader in fingerlings and table fish.',
      introLead:
        'Welcome to Correkt Sowers Sarl. From Yaoundé, we support fish farmers, restaurants, and distributors with reliable fingerlings and fresh fish raised on a farm built to control every step: tracked broodstock, monitored water, and scheduled harvests. Three activities, one standard: controlled genetics, clean water, and support through harvest.',
      cards: [
        {
          title: 'Fingerling production',
          text: 'Tilapia and clarias from selected broodstock, delivered graded and acclimated to your water.',
          icon: 'alevin',
        },
        {
          title: 'Fresh table fish',
          text: 'Market-size fish raised without routine antibiotics, harvested to order.',
          icon: 'poisson',
        },
        {
          title: 'Our technology',
          text: 'Controlled hatchery, water recirculation, and batch-by-batch health records.',
          icon: 'labo',
        },
      ],
      historyEyebrow: 'OUR STORY',
      historyTitle: 'From two trial ponds to a regional leader',
      historyText:
        'Correkt Sowers Sarl began in Yaoundé with a clear observation: local farmers lacked reliable fingerlings and a responsive technical partner. We started modestly with two trial ponds and hand-selected broodstock.',
      timeline: [
        {
          title: 'Early beginnings',
          text: 'First trial site in Yaoundé: two ponds, tilapia and clarias broodstock pairs, and paper logbooks for every batch.',
        },
        {
          title: 'Building the hatchery',
          text: 'Commissioned a dedicated hatchery with incubation jars and nursery tanks to supply fingerlings year-round.',
        },
        {
          title: 'Farm expansion',
          text: 'Expanded to 14 grow-out ponds and implemented strict biosecurity and water treatment protocols.',
        },
        {
          title: 'Today',
          text: 'Correkt Sowers Sarl supplies farmers and resellers in Yaoundé and neighboring regions, with technicians on site every day.',
        },
      ],
      followTitle: 'From fingerling to market, with unbroken tracking',
      followText:
        'Every batch leaves the hatchery with its record sheet: spawning date, hatch rate, size grade, and recommended stocking density. You know exactly what enters your pond.',
      followBullets: [
        'Pre-grown fingerlings conditioned in tanks before delivery to minimize transfer mortality.',
        'Daily water analysis: temperature, dissolved oxygen, pH, and ammonia.',
        'Free technical guidance for the first 30 days after delivery.',
      ],
      followCta: 'Talk to a technician',
      stats: [
        { value: '1.2 M', label: 'fingerlings produced per year' },
        { value: '3', label: 'mastered species: Tilapia, Clarias & Carp' },
        { value: '14', label: 'grow-out ponds' },
        { value: '30 d', label: 'of post-delivery technical support' },
      ],
      recapTitle: 'Correkt Sowers Sarl at a glance',
      recapLead:
        'Four key sections to learn everything about our fingerlings, table fish production, farm infrastructure, and how to reach us.',
      recapItems: [
        {
          page: 'alevins',
          title: 'Our Fingerlings',
          text: 'Available species, definitions, hatchery process, and rearing conditions.',
          cta: 'Explore →',
          imageKey: 'recapAlevins',
        },
        {
          page: 'poissons',
          title: 'Fish Production',
          text: 'From fingerling to market-ready fish: timelines, pond life, sales, and delivery.',
          cta: 'Explore →',
          imageKey: 'recapPoissons',
        },
        {
          page: 'elevage',
          title: 'Fish Farm',
          text: 'Supply pond, hatchery, grow-out basins, water treatment, and field team.',
          cta: 'Explore →',
          imageKey: 'recapElevage',
        },
        {
          page: 'contact',
          title: 'Contact Us',
          text: 'Location map, phone, WhatsApp, social channels, and opening hours.',
          cta: 'Explore →',
          imageKey: 'recapContact',
        },
      ],
      bottomTitle: 'Planning an aquaculture project?',
      bottomLead:
        'Share your pond dimensions and target species—we will reply with a stocking plan and pricing.',
      bottomCta: 'Contact us',
      bottomSecondaryCta: 'View our news',
    },
    alevins: {
      heroTitle: 'Our fingerlings: aquaculture excellence.',
      heroSubtitle: 'Vigorous, size-graded stock ready for pond stocking, available year-round.',
      heroCta: 'Request a quote',
      heroSecondaryCta: 'Contact a technician',
      defEyebrow: 'WHAT IS A FINGERLING?',
      defTitle: 'Definition and role of the fingerling',
      defP1:
        'A fingerling is a young fish hatched from eggs, still far from adult size, stocked in ponds to grow to market weight. It is the foundation of every cycle: fingerling quality determines growth speed, survival, and final pond yield.',
      defP2:
        'At Correkt Sowers Sarl, every fingerling comes from selected and tracked broodstock, ensuring uniform growth and strong resilience once transferred to your farm.',
      whereEyebrow: 'WHERE ARE THEY PRODUCED?',
      whereTitle: 'A single controlled production site in Yaoundé',
      whereP:
        'All our fingerlings are bred and raised on our Yaoundé farm in Central Cameroon. Egg collection, fertilization, incubation, and nursery pre-growing happen inside our hatchery before acclimation and delivery across the region.',
      defImgAlt: 'Newly hatched fingerlings in a nursery tank',
      speciesTitle: 'Available species',
      speciesLead: 'Each grade comes with a batch sheet and recommended stocking density.',
      species: [
        {
          scientific: 'Oreochromis niloticus',
          name: 'Nile Tilapia',
          desc: 'Grades 3–5 g and 8–12 g. Steady growth in earthen ponds or cages with strong tolerance to intensive stocking.',
          imageKey: 'alevinsTilapia',
          alt: 'Nile tilapia fingerlings',
        },
        {
          scientific: 'Clarias gariepinus',
          name: 'Clarias Catfish',
          desc: 'Grades 2–4 g and 6–10 g. Resilient in low-oxygen water, ideal for above-ground and lined tanks.',
          imageKey: 'alevinsClarias',
          alt: 'Clarias catfish fingerlings',
        },
        {
          scientific: 'Made to order',
          name: 'Pre-grown Fingerlings',
          desc: '15–30 g fish already weaned onto floating pellets, shortening your production cycle by roughly six weeks.',
          imageKey: 'alevinsPregrossis',
          alt: 'Pre-grown fingerlings in tank',
        },
      ],
      procTitle: 'From broodstock to delivery',
      procLead: 'Select a stage to inspect what happens at each step.',
      stepPrefix: 'Step',
      stepOf: 'of',
      steps: [
        {
          shortTitle: '1. Selection',
          shortDesc: 'Broodstock are scored for growth and body conformation and renewed every two years.',
          fullTitle: 'Broodstock selection',
          fullDesc:
            'We maintain a dedicated broodstock population separate from production, tracked by family registry. Fish are weighed quarterly and replaced whenever offspring growth slows.',
          imageKey: 'etapeSelection',
          alt: 'Selected tilapia broodstock',
          icon: 'graine',
        },
        {
          shortTitle: '2. Incubation',
          shortDesc: 'Eggs are incubated at 28 °C in continuously filtered and renewed water.',
          fullTitle: 'Controlled incubation',
          fullDesc:
            'Eggs are hand-harvested and placed in incubation jars at 28 °C. Water is continuously filtered and refreshed, and hatch rates are recorded on each batch sheet.',
          imageKey: 'etapeIncubation',
          alt: 'Hatchery incubation tanks',
          icon: 'labo',
        },
        {
          shortTitle: '3. Nursery growth',
          shortDesc: 'Larvae transition from starter powder to micro-pellets, then are graded and packed.',
          fullTitle: 'Nursery growth & grading',
          fullDesc:
            'Larvae shift from starter powder to micro-pellets within three weeks. They are then size-graded, counted, and fasted 24 hours before transport in oxygenated bags.',
          imageKey: 'etapeGrossissement',
          alt: 'Graded fingerlings ready for transport',
          icon: 'croissance',
        },
      ],
      conditionsTitle: 'Rearing conditions for our fingerlings',
      conditionsLead:
        'A weak fingerling puts an entire pond at risk. Here are the parameters we maintain from hatching through delivery.',
      conditions: [
        {
          title: 'Controlled water',
          text: 'Temperature around 27–28 °C, dissolved oxygen and pH checked daily, with regular tank water exchange.',
          icon: 'goutte',
        },
        {
          title: 'Tailored nutrition',
          text: 'Fine starter powder followed by age-matched micro-pellets fed in small meals to reduce feeding stress.',
          icon: 'graine',
        },
        {
          title: 'Low stocking density',
          text: 'Nursery tanks strictly limit biomass per liter to minimize competition and mortality.',
          icon: 'bouclier',
        },
      ],
      quoteTitle: 'Request a quote',
      quoteText:
        'Specify your desired species, quantity, and stocking date. We reply within 48 business hours with pricing and availability.',
      quoteBullets: [
        'Minimum order: 500 fingerlings.',
        'Delivery in oxygenated bags across Yaoundé and neighboring regions.',
        'Joint verification count upon departure from the hatchery.',
      ],
      form: {
        nameLabel: 'Full name',
        nameError: 'Please enter your name.',
        phoneLabel: 'Phone',
        phonePlaceholder: '+237 6XX XX XX XX',
        phoneError: 'Please enter a valid phone number.',
        emailLabel: 'Email',
        emailError: 'Please enter a valid email address.',
        speciesLabel: 'Preferred species',
        speciesOptions: ['Nile Tilapia', 'Clarias Catfish', 'Pre-grown Fingerlings', 'Not sure yet'],
        msgLabel: 'Quantity & target stocking date',
        msgError: 'Please describe your requirement.',
        submitBtn: 'Send request via WhatsApp',
        formInvalid: 'Please complete the highlighted fields before sending.',
        waMissing: 'Company WhatsApp number is not configured yet (src/config/siteConfig.ts).',
        waSuccess: 'Your request is ready: send it in the WhatsApp chat that just opened.',
        openWa: 'Open WhatsApp',
        directContactCta: 'Or use the Contact page',
        waHeader: '*Fingerling Quote Request*',
      },
    },
    poissons: {
      heroTitle: 'Fish production.',
      heroSubtitle: 'Daily-monitored ponds and harvests scheduled together with every buyer.',
      heroCta: 'Order fresh fish',
      stageEyebrow: 'FROM FINGERLING TO TABLE FISH',
      stageTitle: 'From fingerling stage to sale and consumption',
      stageLead:
        'Once stocked in a farm pond or our own basins, a fingerling enters the grow-out phase until it reaches market weight, then is harvested, chilled, and sold fresh.',
      stageCards: [
        {
          weight: '300 to 600 g',
          value: '5–6 months',
          title: 'Nile Tilapia',
          text: 'Average cycle from fingerling stocking to a marketable 300–600 g table fish.',
          imageKey: 'poissonsTilapia',
          alt: 'Nile tilapia 300 to 600 g',
        },
        {
          weight: '400 g & up',
          value: '3–4 months',
          title: 'Clarias Catfish',
          text: 'Slightly shorter, steady growth cycle up to 400 g and larger market grades.',
          imageKey: 'poissonsClarias',
          alt: 'Clarias catfish 400 g and above',
        },
        {
          weight: '400 g minimum',
          value: 'Grading',
          title: 'During the cycle',
          text: 'Mid-cycle grading is not practical in earthen ponds: sorting takes place at harvest when fish are mature. We only select fish of 400 g minimum for graded batches.',
          imageKey: 'poissonsTris',
          alt: 'Sorting and grading fish at harvest',
        },
      ],
      lifeTitle: 'Pond living conditions',
      lifeText:
        'Our fish live in ponds at monitored densities that ensure ample space and oxygen. They are fed two to three times daily on schedule, with continuous water exchange to keep basins clear and oxygenated.',
      lifeBullets: [
        'Schooling fish raised in uniform age cohorts within each basin.',
        'No routine antibiotic treatments; fed exclusively with floating pellets.',
        'Daily visual checks of behavior and appetite by our technical team.',
      ],
      lifeImgAlt: 'Fish swimming in grow-out pond',
      engagements: [
        { label: 'Steady growth', icon: 'croissance' },
        { label: 'Animal health', icon: 'sante' },
        { label: 'Sustainable feed', icon: 'graine' },
        { label: 'Water quality', icon: 'goutte' },
      ],
      conductTitle: 'How we manage a pond',
      conductLead:
        'From stocking to delivery, every pond follows the same documented steps recorded on its log sheet.',
      conductSteps: [
        {
          title: 'Stocking & feeding ration',
          text: 'Each pond is stocked at a known density with weekly rations recalculated from sample weighings. Feed weight, morning temperature, and oxygen are logged daily.',
          imageKey: 'poissonsCharge',
          alt: 'Fish in newly stocked pond',
        },
        {
          title: 'Selection & grading',
          text: 'After 90 days, fish reaching around 400 g are sorted by size so larger individuals do not dominate feed and buyers receive uniform batches.',
          imageKey: 'poissonsCalibrage',
          alt: 'Sorting and grading harvested fish',
        },
        {
          title: 'Pond harvest',
          text: 'Fish are harvested on the very morning of delivery using nets to guarantee peak freshness.',
          imageKey: 'poissonsRecolte',
          alt: 'Harvesting fish at the pond',
        },
        {
          title: 'Preserved freshness',
          text: 'After harvest, fish are carefully handled to preserve freshness. Offered fresh, cleaned, marinated, or smoked according to customer preference.',
          imageKey: 'poissonsFraicheur',
          alt: 'Fish packed on ice before delivery',
        },
        {
          title: 'Same-day delivery',
          text: 'Delivery takes place on the same day according to the volume and schedule agreed with the customer.',
          imageKey: 'poissonsLivraison',
          alt: 'Crates of fish ready for delivery',
        },
      ],
      nutritionTitle: 'Nutrition',
      nutritionLead:
        'Feed is the largest share of production cost: we choose pellets based on real conversion performance rather than bag price alone.',
      nutritionCards: [
        { title: 'Floating pellets', text: 'Portioned by estimated biomass across two to three daily meals.', icon: 'graine' },
        { title: 'Matched pellet size', text: 'Pellet diameter adjusted after each grading to cut waste.', icon: 'labo' },
        { title: 'Tracked FCR', text: 'Feed conversion ratio tracked per pond and compared across cycles.', icon: 'croissance' },
        { title: 'No additives', text: 'Zero growth hormones or routine antibiotic treatments.', icon: 'sante' },
      ],
      nutritionCta: 'Order fresh fish',
      receiveTitle: 'What you receive',
      receiveCards: [
        {
          title: 'Whole fresh fish',
          text: 'Harvested on delivery morning, iced immediately, available in 300–600 g or 700 g+ grades.',
        },
        {
          title: 'Scheduled delivery',
          text: 'You set the day and quantity. We harvest to match your order with no stale stock.',
        },
        {
          title: 'Batch traceability',
          text: 'Every delivery records the pond number, stocking date, and feed lot used.',
        },
      ],
    },
    elevage: {
      heroTitle: 'Our fish farm.',
      heroLead: 'Five distinct zones with one-way flow from the supply pond to water treatment.',
      heroCta: 'Schedule a farm visit',
      planLabel: 'SELECTED ZONE',
      planHint: 'Tap or click a zone on the map to learn more.',
      zones: {
        etang: {
          label: 'Supply Pond',
          svgLines: ['Supply Pond'],
          description:
            'Upstream freshwater reservoir feeding the hatchery and basins. Acts as a buffer reserve and hosts natural broodstock.',
        },
        ecloserie: {
          label: 'Hatchery',
          svgLines: ['Hatchery'],
          description:
            'Closed biosecure building restricted to trained staff. Incubation jars, larval tanks, and recirculating water heated to 28 °C.',
        },
        pregros: {
          label: 'Pre-growing',
          svgLines: ['Pre-growing'],
          description:
            'Covered nursery tanks where fingerlings transition to pellets and are size-graded with twice-weekly flushing.',
        },
        bassins: {
          label: 'Storage & Grow-out Ponds',
          svgLines: ['Storage', 'Ponds'],
          description:
            '14 aerated, individually drainable grow-out and holding ponds. Each basin keeps a full log of stocking, rations, and sampling.',
        },
        eau: {
          label: 'Water Treatment',
          svgLines: ['Water', 'Treatment'],
          description:
            'Settling, mechanical filtration, and partial recirculation. Outflow passes through a planted wetland basin before discharge.',
        },
      },
      overviewTitle: 'Site overview',
      overviewLead: 'Three connected areas from water intake to the daily operations team.',
      overviewCards: [
        {
          meta: 'Zone 1',
          title: 'The Pond',
          text: 'Freshwater reservoir feeding the entire site and providing buffer storage.',
          imageKey: 'elevageEtang',
          alt: 'Site freshwater supply pond',
        },
        {
          meta: 'Zone 2',
          title: 'The Hatchery',
          text: 'Closed facility where fingerlings hatch: incubation jars and 28 °C larval tanks.',
          imageKey: 'elevageEcloserie',
          alt: 'Hatchery building',
        },
        {
          meta: 'Zone 3',
          title: 'Pre-growing',
          text: 'Covered tanks where fingerlings adapt to pelleted feed before pond transfer.',
          imageKey: 'elevagePregros',
          alt: 'Pre-growing fingerling tanks',
        },
      ],
      infraCards: [
        {
          title: 'Biosecurity',
          text: 'Footbaths at entry, zone-dedicated equipment, and mandatory quarantine for incoming fish.',
          icon: 'bouclier',
        },
        {
          title: 'Storage ponds',
          text: 'This 200 m² earthen pond was dredged to improve operating conditions and streamline fish stock management.',
          icon: 'bassin',
        },
        {
          title: 'Water management',
          text: 'Settling, filtration, and partial recirculation with planted-basin polishing before discharge.',
          icon: 'goutte',
        },
      ],
      infraImg1Alt: 'Technical team on the fish farm',
      infraImg2Alt: 'Aerial view of Correkt Sowers fish farm',
      teamTitle: 'A team on site every day',
      teamText:
        'Aquaculture technicians, water-quality lead, and harvest crew. Farmer visits are available by appointment on Tuesday and Thursday mornings.',
      teamCta: 'Request a visit',
      teamStats: [
        { value: '5', label: 'separate zones' },
        { value: '+300 m³', label: 'per holding basin' },
        { value: '2×/day', label: 'dissolved oxygen checks' },
        { value: '100%', label: 'batches recorded' },
      ],
    },
    actualites: {
      heroTitle: 'News, documentaries & partners.',
      heroSubtitle:
        'Follow our field work through photos, videos, and documentaries, and meet the partners strengthening our aquaculture ecosystem.',
      heroCta: 'Become a partner',
      activitiesEyebrow: 'FIELD ACTIVITIES',
      activitiesTitle: 'Our activities in photos, videos, and documentaries',
      activitiesLead:
        'Every spawning campaign, morning harvest, and farmer training session is documented with short commentary from our team.',
      filters: {
        all: 'All activities',
        photo: 'Field photos',
        video: 'Videos',
        documentary: 'Documentaries',
      },
      kindLabels: {
        photo: 'Photo report',
        video: 'Field video',
        documentary: 'Mini-documentary',
      },
      watchLabel: 'Watch feature',
      viewPhotoLabel: 'View full photo',
      closePlayer: 'Close player',
      chaptersTitle: 'Feature chapters',
      activities: [
        {
          id: 'act-1',
          kind: 'documentary',
          date: '2026 Season',
          duration: '08 min 40',
          image: 'images/img (58).jpg',
          title: 'From spring to harvest: inside our Yaoundé farm',
          comment:
            'Full documentary on our 5 operational zones, pond dredging, and closed-loop water management.',
          videoSummary:
            'This mini-documentary follows a typical day with Correkt Sowers Sarl technicians: morning dissolved-oxygen readings, 28 °C hatchery routines, and scheduled harvests for Yaoundé buyers.',
          videoChapters: [
            '00:00 — Freshwater supply pond and buffer system',
            '02:15 — Biosecure hatchery and family broodstock logs',
            '05:10 — Pre-growing and transition to floating pellets',
            '07:05 — Net harvesting and immediate icing',
          ],
        },
        {
          id: 'act-2',
          kind: 'video',
          date: 'Recent activity',
          duration: '03 min 15',
          image: 'images/img (74).jpg',
          title: 'Oxygenated bag packing prior to delivery',
          comment:
            'Video highlight of joint counting and pure-oxygen bagging to ensure maximum survival during transport.',
          videoSummary:
            'Fingerlings are fasted for 24 hours before dispatch, counted alongside the buyer, and sealed with pure oxygen for safe travel across Centre, Littoral, and West regions.',
          videoChapters: [
            '00:00 — 24h fasting and thermal acclimation',
            '01:10 — Joint batch counting',
            '02:05 — Oxygen inflation and regional dispatch',
          ],
        },
        {
          id: 'act-3',
          kind: 'photo',
          date: 'Field · Yaoundé',
          image: 'images/img (90).jpg',
          title: 'Hands-on training session for emerging fish farmers',
          comment:
            'On-site workshop covering weekly feed calculations, sample weighings, and pond logbook tracking.',
        },
        {
          id: 'act-4',
          kind: 'documentary',
          date: 'Technical Feature',
          duration: '06 min 20',
          image: 'images/img (8).jpg',
          title: 'Behind the scenes in the hatchery: tilapia and clarias incubation',
          comment:
            'A close look at broodstock selection, 28 °C jar incubation, and larval weaning onto micro-pellets.',
          videoSummary:
            'Inside our restricted hatchery building, where biosecurity and stable water temperature guarantee consistent year-round hatch rates.',
          videoChapters: [
            '00:00 — Quarterly broodstock selection',
            '02:00 — Incubation jars at 28 °C',
            '04:30 — Early size grading',
          ],
        },
        {
          id: 'act-5',
          kind: 'video',
          date: 'Morning Harvest',
          duration: '02 min 50',
          image: 'images/img (18).jpg',
          title: 'Selective harvest and grading of 400 g+ lots',
          comment:
            'How our crew harvests market-size fish at dawn to preserve peak freshness through delivery.',
          videoSummary:
            'Fish prepared fresh, cleaned, marinated, or smoked are harvested on the same morning based on confirmed buyer orders.',
          videoChapters: [
            '00:00 — Dawn seine netting',
            '01:15 — Grading table for uniform ≥ 400 g lots',
            '02:10 — Icing and direct dispatch',
          ],
        },
        {
          id: 'act-6',
          kind: 'photo',
          date: 'Infrastructure',
          image: 'images/img (21).jpg',
          title: 'Dredging and maintenance of the supply pond',
          comment:
            'Scheduled maintenance on our 200 m² earthen reservoir to safeguard water quality during the dry season.',
        },
      ],
      partnersEyebrow: 'GROWING TOGETHER',
      partnersTitle: 'Our partners and their commitments',
      partnersLead:
        'Partner farms, feed suppliers, restaurants, and regional distributors share our practical vision for Cameroonian aquaculture.',
      partners: [
        {
          id: 'p-1',
          name: 'Centre Farmers Network',
          role: 'Partner grow-out farms',
          slogan: '“Strong fingerlings from day one, predictable harvests every cycle.”',
          image: 'images/img (77).jpg',
        },
        {
          id: 'p-2',
          name: 'Local Aquaculture Nutrition',
          role: 'Floating feed partner',
          slogan: '“Balanced, traceable pellets that maximize every pond without waste.”',
          image: 'images/img (76).jpg',
        },
        {
          id: 'p-3',
          name: 'Yaoundé Tables & Fishmongers',
          role: 'Hospitality & retail',
          slogan: '“Morning freshness, delivered size-graded and ready for our kitchens.”',
          image: 'images/img (50).jpg',
        },
        {
          id: 'p-4',
          name: 'Littoral & West Relays',
          role: 'Authorized fingerling distributors',
          slogan: '“Bringing Correkt Sowers genetics closer to every regional farm.”',
          image: 'images/img (60).jpg',
        },
        {
          id: 'p-5',
          name: 'Processing & Smoking Workshop',
          role: 'Post-harvest value addition',
          slogan: '“Wholesome fish, cleaned, marinated, or smoked to high hygiene standards.”',
          image: 'images/img (14).jpg',
        },
        {
          id: 'p-6',
          name: 'Field Technical Advisory',
          role: 'Support for new aquaculture entrepreneurs',
          slogan: '“Sharing proven farming habits so every new pond succeeds.”',
          image: 'images/img (82).jpg',
        },
      ],
      ctaTitle: 'Want to partner with us or schedule a field visit?',
      ctaText: 'Reach out directly to our technical or commercial team in Yaoundé.',
      ctaButton: 'Contact Correkt Sowers Sarl',
    },
    contact: {
      heroTitle: 'Correkt Sowers Sarl',
      heroDynamicPrefix: 'Yaoundé, Cameroon · Write to us for ',
      heroWords: ['your fingerlings', 'fresh fish', 'technical advice', 'a farm visit', 'becoming a reseller'],
      heroWriteBtn: 'Write to us',
      heroMapBtn: 'View map',
      writeTitle: 'Write to us',
      writeLead: 'Orders, technical questions, or partnership inquiries: we respond within 48 business hours.',
      prefillNotice: 'Pre-filled subject from your browsing:',
      form: {
        nameLabel: 'Name',
        nameError: 'Please enter your name.',
        emailLabel: 'Email',
        emailError: 'Please enter a valid email address.',
        subjectLabel: 'Inquiry subject',
        subjectOptions: [
          'Fingerling order',
          'Fresh fish order',
          'Fish farm visit',
          'Technical advice',
          'Become a partner / reseller',
        ],
        msgLabel: 'Message',
        msgError: 'Please write your message.',
        submitBtn: 'Send message via WhatsApp',
        formInvalid: 'Please complete the highlighted fields before sending.',
        waMissing: 'Company WhatsApp number is not configured yet (src/config/siteConfig.ts).',
        waSuccess: 'Your message is ready: send it in the WhatsApp chat that just opened.',
        openWa: 'Open WhatsApp',
        waHeader: '*Message from Correkt Sowers website*',
      },
      coordsTitle: 'Contact details',
      coordsItems: {
        commercial: 'Sales department',
        technique: 'Technical support',
        whatsapp: 'WhatsApp, fast response',
        facebook: 'Facebook page',
        email: 'Reply within 48 business hours',
        address: 'Yaoundé, Centre',
        addressDesc: 'Farm visits by appointment',
      },
      resellerTitle: 'Find a reseller',
      resellerText: 'Our fingerlings are also distributed through authorized partners in Centre, Littoral, and West.',
      resellerCta: 'View our partners',
      hoursTitle: 'Opening hours',
      hoursLines: ['Monday to Friday, 7:30 AM – 5:00 PM.', 'Saturday, 8:00 AM – 12:00 PM.', 'Morning harvests and deliveries.'],
      goodToKnowTitle: 'Good to know',
      goodToKnowBullets: [
        'Payment accepted in cash, Mobile Money, or bank transfer.',
        'Delivery available across Yaoundé and nearby cities depending on order volume.',
        'Farm visits by appointment on Tuesday and Thursday mornings.',
      ],
      mapTitle: 'Find us on the map',
      mapLead: 'Fish farm and offices in Yaoundé, Central Cameroon.',
      openMapsBtn: 'Open in Google Maps',
      directionsBtn: 'Directions',
    },
  },
};
