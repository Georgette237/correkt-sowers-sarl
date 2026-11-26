# Correkt Sowers Sarl — Site vitrine

Site web de **Correkt Sowers Sarl**, pisciculture basée à Yaoundé (Centre, Cameroun) : production d'alevins (tilapia du Nil, clarias), poissons frais de consommation et accompagnement des techniciens.

Le site est statique (HTML, CSS, JavaScript avec jQuery). Il n'a besoin ni de base de données ni de serveur spécial.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : carrousel automatique (10 s), présentation, histoire, chiffres clés |
| `alevins.html` | Espèces disponibles, étapes « Du géniteur à la livraison » (texte + image), formulaire de cotation envoyé sur WhatsApp |
| `poissons.html` | Du stade alevin à la vente (image + grammage par espèce), conduite d'un bassin en 5 étapes, nutrition |
| `elevage.html` | Plan interactif du site d'élevage, zones, équipe |
| `contact.html` | Coordonnées avec logos officiels, formulaire envoyé sur WhatsApp, carte Google Maps |

## Structure des dossiers

```
site/
├── index.html
├── alevins.html
├── poissons.html
├── elevage.html
├── contact.html
├── README.md
├── css/
│   └── style.css          Tous les styles du site
├── js/
│   ├── jquery.min.js      jQuery 3.7.1 (en local, sans CDN)
│   ├── config.js          Coordonnées de l'entreprise (à modifier ici)
│   ├── footer.js          Pied de page commun à toutes les pages
│   └── main.js            Menu, carrousel, étapes, formulaires, effets
└── images/                À ajouter : photos et logo (voir ci-dessous)
```

> Le dossier `images/` n'est pas fourni avec le code: il doit contenir vos photos, avec les noms utilisés dans les pages (par exemple `images/img (40).jpg`).

## Lancer le site

**En local :** double-cliquez sur `index.html`. Le site s'ouvre dans le navigateur et fonctionne sans serveur.

**En ligne :** envoyez tout le contenu du dossier sur votre hébergement (dossier `public_html` ou équivalent), en gardant la même arborescence.

## Configuration : `js/config.js`

C'est le seul fichier à modifier pour changer les coordonnées. Le pied de page, la page Contact et les formulaires se mettent à jour partout.

```js
whatsapp: "2376XXXXXXXX",        // chiffres uniquement, sans + ni espaces
whatsappAffiche: "+237 6XX XX XX XX",
telCommercial: "+237 6XX XX XX XX",
telTechnique: "+237 6XX XX XX XX",
email: "contact@correktsowers.com",
facebook: "https://www.facebook.com/profile.php?id=61591505319191",
adresse: "Yaoundé, Centre, Cameroun"
```

**À faire avant la mise en ligne :** remplacer les `X` par les vrais numéros. Tant que `whatsapp` contient des `X`, les formulaires affichent que le numéro n'est pas configuré.

## Formulaires

Les formulaires de `alevins.html` (cotation) et de `contact.html` (message) vérifient les champs, puis ouvrent une conversation WhatsApp avec le message déjà rédigé. Le visiteur n'a plus qu'à appuyer sur « Envoyer » dans WhatsApp.

Aucune donnée n'est stockée sur le site : le message n'existe que dans WhatsApp.

## Modifications courantes

**Changer le pied de page** : modifier `js/footer.js`. Le changement s'applique aux 5 pages. Chaque page contient seulement `<div id="pied-site"></div>`.

**Changer les images du carrousel d'accueil** : dans `index.html`, modifier les balises `<img class="heros__fond heros__diapo ...">`. Les images après la première utilisent `data-src` pour se charger progressivement ; gardez cet attribut.

**Changer l'image ou le texte d'une étape des alevins** : dans `alevins.html`, chaque étape porte les attributs `data-img`, `data-alt`, `data-titre` et `data-texte`.

**Changer les étapes de conduite d'un bassin** : dans `poissons.html`, chaque étape est un bloc `<li class="etape-ligne">` avec le texte à gauche et l'image à droite. Copiez un bloc pour en ajouter un.

**Changer les textes du plan d'élevage** : dans `js/main.js`, objet `ZONES`.

**Changer la durée du carrousel** : dans `js/main.js`, variable `DELAI` (en millisecondes, `10000` = 10 secondes).

**Changer les couleurs et les tailles** : dans `css/style.css`, variables en haut du fichier (`:root`).

## Effets dynamiques (jQuery)

- Carrousel d'accueil automatique, avec barre de progression
- Apparition progressive des blocs au défilement
- Compteurs animés dans les chiffres clés
- Légère parallaxe sur l'image du haut de page
- Agrandissement des images au clic (touche `Échap` pour fermer)
- En-tête qui se réduit au défilement, bouton « haut de page »
- Texte qui se tape tout seul sur la page Contact

Les effets sont désactivés pour les visiteurs qui ont demandé moins d'animations dans leur système.

## Bon à savoir

- **Affichage mobile :** les pages utilisent `width=1280` dans la balise `viewport`, donc le site s'affiche comme sur un grand écran, même sur téléphone. Le menu burger ne s'active alors pas. Pour un site adapté au téléphone, remplacer par `width=device-width` sur les 5 pages et vérifier l'affichage.
- **Poids des images :** pour garder le site rapide, compressez les photos (environ 1600 px de large et moins de 300 Ko, en JPG ou WebP).
- **Polices :** Archivo et Karla sont chargées depuis Google Fonts ; sans connexion, le navigateur utilise une police de remplacement.
- **Carte :** la carte de la page Contact est intégrée depuis Google Maps et nécessite une connexion internet.

## Technologies

HTML5, CSS3, JavaScript, jQuery 3.7.1. Logos de marque : [Simple Icons](https://simpleicons.org) (licence CC0). Icônes téléphone et repère : [Lucide](https://lucide.dev) (licence ISC).

## Contact

Correkt Sowers Sarl — Yaoundé, Centre, Cameroun
