/* ============================================================
   CORREKT SOWERS SARL — Script commun dynamique (100% JS + jQuery)
   Initialise : traduction FR/EN, en-tête, pied de page, cookies,
   carrousel, étapes écloserie, plan SVG, actualités & lecteur vidéo,
   formulaires WhatsApp, compteurs, lightbox, haut de page et
   secours d'images si le dossier images/ n'est pas encore copié.
   ============================================================ */
(function ($) {
  "use strict";

  var CS = window.CS || {};
  var $win = $(window);
  var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Secours automatique si une image locale est absente ---------- */
  function attacherSecoursImages() {
    $("img").each(function () {
      var img = this;
      if (img.dataset.fallbackBound) return;
      img.dataset.fallbackBound = "1";

      var appliquerSecours = function () {
        var $img = $(img);
        if ($img.closest(".logo").length) {
          $img.replaceWith(
            '<span class="logo-fallback">' +
              '<span class="logo-fallback__badge"><svg viewBox="0 0 64 40" aria-hidden="true"><path fill="currentColor" d="M2 20c8-13 22-18 33-18 9 0 16 4 21 9l6-7v32l-6-7c-5 5-12 9-21 9C24 38 10 33 2 20Z"/><circle cx="42" cy="16" r="2.4" fill="#14401f"/></svg></span>' +
              '<span class="logo-fallback__txt"><b>CORREKT SOWERS</b><span>SARL · YAOUNDÉ</span></span>' +
            "</span>"
          );
        } else if ($img.hasClass("heros__fond")) {
          $img.css("opacity", 0);
        } else {
          var alt = $img.attr("alt") || "Correkt Sowers Sarl";
          $img.replaceWith(
            '<div class="img-fallback" role="img" aria-label="' + alt.replace(/"/g, "&quot;") + '">' +
              '<svg viewBox="0 0 64 40" aria-hidden="true"><path fill="currentColor" d="M2 20c8-13 22-18 33-18 9 0 16 4 21 9l6-7v32l-6-7c-5 5-12 9-21 9C24 38 10 33 2 20Z"/><circle cx="42" cy="16" r="2.4" fill="#14401f"/></svg>' +
              "<span>" + alt + "</span>" +
            "</div>"
          );
        }
      };

      img.addEventListener("error", appliquerSecours);
      if (img.complete && img.naturalWidth === 0) {
        appliquerSecours();
      }
    });
  }

  $(function () {
    /* 1. Initialisation langue + header + footer + cookies */
    var lang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
    if (window.CS_SET_LANG) {
      window.CS_SET_LANG(lang);
    }

    attacherSecoursImages();

    /* 2. Coordonnées dynamiques issues de config.js */
    $("[data-cs]").each(function () {
      var v = CS[$(this).data("cs")];
      if (v) $(this).text(v);
    });
    $("[data-cs-lien]").each(function () {
      $(this).attr("href", CS.lien($(this).data("csLien")));
    });

    /* 3. Carrousel du héros (accueil) — 10 s */
    var $diapos = $("#heros-diapos .heros__diapo");
    if ($diapos.length > 1) {
      var DELAI = 10000;
      var courant = 0;
      var minuteur = null;
      var $puces = $("#heros-puces");
      var $barre = $(".heros__barre span");

      $diapos.each(function (k) {
        $("<button type='button' class='heros__puce'></button>")
          .toggleClass("actif", k === 0)
          .attr("aria-label", "Image " + (k + 1) + " / " + $diapos.length)
          .on("click", function () {
            aller(k);
            demarrer();
          })
          .appendTo($puces);
      });

      var lancerBarre = function () {
        $barre.stop(true).css("width", 0);
        if (!reduit) $barre.animate({ width: "100%" }, DELAI, "linear");
      };

      var aller = function (n) {
        $diapos.eq(courant).removeClass("actif");
        $puces.children().eq(courant).removeClass("actif");
        courant = (n + $diapos.length) % $diapos.length;
        $diapos.eq(courant).addClass("actif");
        $puces.children().eq(courant).addClass("actif");
        lancerBarre();
      };

      var demarrer = function () {
        clearInterval(minuteur);
        minuteur = setInterval(function () {
          aller(courant + 1);
        }, DELAI);
        lancerBarre();
      };

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          clearInterval(minuteur);
          $barre.stop(true);
        } else {
          demarrer();
        }
      });

      demarrer();
    }

    /* 4. Texte tapé dynamique (page contact) */
    var typedTimer = null;
    function lancerTyped() {
      clearTimeout(typedTimer);
      var $s = $(".js-typed");
      if (!$s.length) return;
      var curLang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
      var motsStr = window.CS_I18N && window.CS_I18N[curLang] ? window.CS_I18N[curLang].typedWords : $s.data("mots");
      var mots = String(motsStr).split("|");
      if (reduit) {
        $s.text(mots[0]);
        return;
      }
      var m = 0;
      var c = 0;
      var sens = 1;
      function tick() {
        var mot = mots[m];
        var d = 85;
        c += sens;
        $s.text(mot.slice(0, c));
        if (sens === 1 && c === mot.length) {
          sens = -1;
          d = 1700;
        } else if (sens === -1 && c === 0) {
          sens = 1;
          m = (m + 1) % mots.length;
          d = 380;
        } else if (sens === -1) {
          d = 40;
        }
        typedTimer = setTimeout(tick, d);
      }
      tick();
    }
    lancerTyped();

    /* 5. Étapes de l'écloserie (page alevins) */
    var $proc = $("#proc");
    var etapeCourante = 0;
    function afficherEtape(idx, animer) {
      if (!$proc.length) return;
      etapeCourante = idx;
      var curLang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
      var dict = window.CS_I18N[curLang];
      var step = dict.alevinsSteps[idx];
      if (!step) return;

      $proc.find(".proc__etape").removeClass("actif").eq(idx).addClass("actif");
      var $pImg = $("#proc-img");
      var $pTitre = $("#proc-titre");
      var $pTexte = $("#proc-texte");
      var $pNum = $("#proc-num");
      var $pBloc = $("#proc-detail").find(".proc-detail__img, .proc-detail__txt");

      var appliquer = function () {
        if ($pImg.length) $pImg.attr({ src: step.img, alt: step.alt });
        $pTitre.text(step.titre);
        $pTexte.text(step.texte);
        $pNum.text(dict.ui.stepPrefix + " " + (idx + 1) + " " + dict.ui.stepOf + " " + dict.alevinsSteps.length);
      };

      if (!animer || reduit) {
        appliquer();
      } else {
        $pBloc.stop(true).fadeTo(180, 0).promise().done(function () {
          appliquer();
          $pBloc.fadeTo(320, 1);
        });
      }
    }

    if ($proc.length) {
      $proc.find(".proc__etape").each(function (i) {
        $(this).on("click", function () {
          afficherEtape(i, true);
        });
        $(this).find(".proc__pion").on("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            afficherEtape(i, true);
          }
        });
      });
    }

    /* 6. Zones du plan SVG (page site d'élevage) */
    var $plan = $(".plan");
    var zoneCourante = "etang";
    function afficherZone(zoneKey, animer) {
      if (!$plan.length) return;
      zoneCourante = zoneKey;
      var curLang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
      var z = window.CS_I18N[curLang].zones[zoneKey];
      if (!z) return;

      var $zInfo = $("#zone-titre, #zone-texte");
      var maj = function () {
        $("#zone-titre").text(z[0]);
        $("#zone-texte").text(z[1]);
      };
      if (!animer || reduit) {
        maj();
      } else {
        $zInfo.stop(true).fadeTo(150, 0).promise().done(function () {
          maj();
          $zInfo.fadeTo(280, 1);
        });
      }
      $plan.find(".plan__pt rect").attr("stroke", "none");
      $plan.find('.plan__pt[data-zone="' + zoneKey + '"] rect').attr({ stroke: "#8cc63f", "stroke-width": 4 });
    }

    if ($plan.length) {
      $plan.find(".plan__pt").attr({ tabindex: 0, role: "button" }).each(function () {
        var $g = $(this);
        var ouvrir = function () {
          afficherZone($g.data("zone"), true);
        };
        $g.on("click", ouvrir);
        $g.on("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            ouvrir();
          }
        });
      });
    }

    /* 7. Page Actualités : filtres + lecteur vidéo/documentaire */
    var $filtres = $(".actu-filtre");
    if ($filtres.length) {
      $filtres.on("click", function () {
        var cat = $(this).data("filtre");
        $filtres.removeClass("actif").attr("aria-selected", "false");
        $(this).addClass("actif").attr("aria-selected", "true");
        $(".media-carte").each(function () {
          var kind = $(this).data("kind");
          $(this).toggle(cat === "all" || kind === cat);
        });
      });

      /* ---- Vraies vidéos : une entrée par carte (id = data-open-media) ----
         src     : fichier MP4 (H.264/AAC) placé dans le dossier videos/
         poster  : image affichée avant la lecture
         youtube : (option) identifiant YouTube au lieu de src
         times   : (option) secondes de début de chaque chapitre */
      var VIDEOS = window.CS_VIDEOS || {
        "act-1": { src: "videos/ferme-yaounde.mp4",   poster: "images/img (58).jpg" },
        "act-2": { src: "videos/sacs-oxygenes.mp4",   poster: "images/img (74).jpg" },
        "act-4": { src: "videos/ecloserie.mp4",       poster: "images/img (8).jpg" },
        "act-5": { src: "videos/peche-selective.mp4", poster: "images/img (18).jpg" }
      };

      var ouvrirLecteur = function (id) {
        var curLang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
        var dict = window.CS_I18N[curLang];
        var item = dict.actualitesMedia[id];
        if (!item) return;

        $("#cs-lecteur").remove();
        var chapitresHtml = item.chapters
          .map(function (c, i) {
            return '<button type="button" class="lecteur-chapitre' + (i === 0 ? " actif" : "") + '" data-idx="' + i + '">' + c + "</button>";
          })
          .join("");

        var media = VIDEOS[id];
        var ecranInterne;
        if (media && media.youtube) {
          ecranInterne =
            '<iframe src="https://www.youtube-nocookie.com/embed/' + media.youtube + '?autoplay=1&rel=0" title="' + item.title +
            '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
        } else if (media && media.src) {
          ecranInterne =
            '<video id="cs-lecteur-video" controls autoplay playsinline preload="metadata" poster="' + (media.poster || item.img) + '">' +
            '<source src="' + media.src + '" type="video/mp4"></video>' +
            '<button type="button" class="lecteur-fermer lecteur-fermer--video" id="cs-lecteur-x" aria-label="' + dict.ui.close + '">&times;</button>' +
            '<p class="lecteur-erreur" id="cs-lecteur-erreur" hidden>Vidéo momentanément indisponible.</p>';
        } else {
          media = null;
          ecranInterne = [
          '      <img src="' + item.img + '" alt="' + item.title + '">',
          '      <div class="lecteur-voile">',
          '        <div class="lecteur-haut">',
          '          <span class="lecteur-badge">' + item.kindLabel + "</span>",
          '          <button type="button" class="lecteur-fermer" id="cs-lecteur-x" aria-label="' + dict.ui.close + '">&times;</button>',
          "        </div>",
          "        <div>",
          '          <div class="lecteur-controles">',
          '            <button type="button" class="lecteur-play" id="cs-lecteur-play" aria-label="Lecture / Pause">&#9658;</button>',
          "            <div>",
          '              <h3 style="margin:0;color:#fff;font-size:1.15rem">' + item.title + "</h3>",
          '              <p id="cs-lecteur-chap-courant" style="margin:4px 0 0;font-size:.82rem;color:#d6ecd8">' + item.chapters[0] + "</p>",
          "            </div>",
          "          </div>",
          '          <div class="lecteur-barre"><span id="cs-lecteur-prog" style="width:' + Math.round((1 / item.chapters.length) * 100) + '%"></span></div>',
          "        </div>",
          "      </div>",
          ].join("\n");
        }

        var modalHtml = [
          '<div class="lecteur-overlay" id="cs-lecteur" role="dialog" aria-modal="true" aria-label="' + item.title + '">',
          '  <div class="lecteur-boite">',
          '    <div class="lecteur-ecran' + (media ? " lecteur-ecran--video" : "") + '">',
          ecranInterne,
          "    </div>",
          '    <div class="lecteur-corps">',
          '      <p style="font-size:.95rem;color:var(--texte-doux);margin:0 0 14px">' + item.summary + "</p>",
          '      <div style="font-family:Archivo,sans-serif;font-size:.76rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--vert-profond)">' + dict.texts["actu.chapters"] + "</div>",
          '      <div class="lecteur-chapitres">' + chapitresHtml + "</div>",
          "    </div>",
          "  </div>",
          "</div>",
        ].join("\n");

        $("body").append(modalHtml);
        attacherSecoursImages();

        var playing = true;
        $("#cs-lecteur-play").html("&#10074;&#10074;").on("click", function () {
          playing = !playing;
          $(this).html(playing ? "&#10074;&#10074;" : "&#9658;");
        });

        $(".lecteur-chapitre").on("click", function () {
          var idx = parseInt($(this).data("idx"), 10);
          $(".lecteur-chapitre").removeClass("actif");
          $(this).addClass("actif");
          $("#cs-lecteur-chap-courant").text(item.chapters[idx]);
          $("#cs-lecteur-prog").css("width", Math.round(((idx + 1) / item.chapters.length) * 100) + "%");
          var vid = document.getElementById("cs-lecteur-video");
          var t = media && media.times ? media.times[idx] : undefined;
          if (vid && typeof t === "number") {
            vid.currentTime = t;
            vid.play();
          }
        });

        $("#cs-lecteur-video source").on("error", function () {
          $("#cs-lecteur-erreur").prop("hidden", false);
        });

        $("#cs-lecteur-x").on("click", function () {
          $("#cs-lecteur").remove();
        });
        $("#cs-lecteur").on("click", function (e) {
          if (e.target === this) $("#cs-lecteur").remove();
        });
      };

      $(document).on("click", "[data-open-media]", function () {
        ouvrirLecteur($(this).data("openMedia"));
      });
    }

    /* 8. Pré-sélection fluide de l'objet de contact via ?sujet=0..4 */
    var $cSujet = $("#c-sujet");
    if ($cSujet.length && window.location.search) {
      var match = window.location.search.match(/[?&]sujet=(\d+)/);
      if (match) {
        var idx = parseInt(match[1], 10);
        if ($cSujet.find("option").eq(idx).length) {
          $cSujet.prop("selectedIndex", idx);
        }
      }
    }

    /* 9. Validation des formulaires + envoi WhatsApp */
    function formulaire($f, $etat, opts) {
      var montrer = function (contenu) {
        $etat.empty().append(contenu).addClass("visible").hide().fadeIn(260);
      };

      $f.on("submit", function (e) {
        e.preventDefault();
        var curLang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
        var ui = window.CS_I18N[curLang].ui;
        var premier = null;

        $f.find("[required]").each(function () {
          var $c = $(this);
          var v = $.trim($c.val());
          var mauvais = !v;
          if (!mauvais && $c.attr("type") === "email") {
            mauvais = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
          }
          if (!mauvais && $c.attr("type") === "tel") {
            mauvais = v.replace(/\D/g, "").length < 8;
          }
          $c.closest(".champ").toggleClass("invalide", mauvais);
          if (mauvais && !premier) premier = $c;
        });

        if (premier) {
          premier.focus();
          montrer(ui.formInvalid);
          return;
        }

        if (!CS.waValide || !CS.waValide()) {
          montrer(ui.waMissing);
          return;
        }

        var url = CS.lien("wa") + "?text=" + encodeURIComponent(opts.message($f));
        var fenetre = window.open(url, "_blank");
        if (!fenetre) window.location.href = url;

        montrer([
          document.createTextNode(opts.confirmation(ui) + " "),
          $("<a>").attr({ href: url, target: "_blank", rel: "noopener noreferrer" }).text(ui.openWa),
        ]);
        $f[0].reset();
      });

      $f.find("input,textarea,select").on("input change", function () {
        $(this).closest(".champ").removeClass("invalide");
      });
    }

    var val = function ($f, nom) {
      return $.trim($f.find("[name='" + nom + "']").val());
    };

    var $fd = $("#form-devis");
    if ($fd.length) {
      formulaire($fd, $("#etat-devis"), {
        confirmation: function (ui) {
          return ui.devisConfirm;
        },
        message: function ($f) {
          return [
            "*Demande de cotation d'alevins*",
            "Nom : " + val($f, "nom"),
            "Téléphone : " + val($f, "tel"),
            "Email : " + val($f, "email"),
            "Espèce souhaitée : " + val($f, "espece"),
            "Quantité et date de mise en charge : " + val($f, "message"),
          ].join("\n");
        },
      });
    }

    var $fc = $("#form-contact");
    if ($fc.length) {
      formulaire($fc, $("#etat-contact"), {
        confirmation: function (ui) {
          return ui.contactConfirm;
        },
        message: function ($f) {
          return [
            "*Message depuis le site Correkt Sowers*",
            "Objet : " + val($f, "sujet"),
            "Nom : " + val($f, "nom"),
            "Email : " + val($f, "email"),
            "Message : " + val($f, "message"),
          ].join("\n");
        },
      });
    }

    /* 10. Effets au défilement : apparitions, en-tête compact, haut de page */
    var $rv = $();
    if (!reduit) {
      var SEL =
        ".section .carte, .espece, .fiche, .recap, .frise__etape, .chiffre, " +
        ".proc__etape, .zone-info, .section .duo__media, .engagement, .etape-ligne__txt, .etape-ligne__img, .media-carte, .partenaire-carte";
      $rv = $(SEL)
        .not(".proc-detail *")
        .each(function () {
          var $el = $(this);
          $el.addClass("rv");
          if ($el.is(".etape-ligne__txt")) $el.addClass("rv-g");
          if ($el.is(".etape-ligne__img")) $el.addClass("rv-d");
        });
    }

    var revele = function () {
      var bas = $win.scrollTop() + $win.height() - 40;
      $rv = $rv.filter(function () {
        var el = this;
        var $el = $(el);
        if ($el.offset().top > bas) return true;
        var rang = $el.parent().children(".rv, .rv-in").index(el);
        var delai = (Math.max(rang, 0) % 4) * 90;
        setTimeout(function () {
          $el.addClass("rv-in");
          setTimeout(function () {
            $el.removeClass("rv rv-in rv-g rv-d");
          }, 800);
        }, delai);
        return false;
      });
    };

    var $haut = $(
      "<button type='button' class='haut' aria-label='Retour en haut de la page'>" +
        "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 15l6-6 6 6'/></svg></button>"
    )
      .appendTo("body")
      .hide()
      .on("click", function () {
        $("html,body").stop(true).animate({ scrollTop: 0 }, reduit ? 0 : 500);
      });

    var attente = false;
    var auDefilement = function () {
      var y = $win.scrollTop();
      $(".entete").toggleClass("entete--compact", y > 40);
      if (y > 520) $haut.fadeIn(200);
      else $haut.fadeOut(200);
      revele();
    };

    $win.on("scroll resize", function () {
      if (attente) return;
      attente = true;
      requestAnimationFrame(function () {
        attente = false;
        auDefilement();
      });
    });
    auDefilement();

    /* 11. Lightbox d'agrandissement au clic */
    var $lb = $(
      "<div class='lb' role='dialog' aria-modal='true' aria-label='Image agrandie'>" +
        "<button type='button' class='lb__x' aria-label='Fermer'>&times;</button>" +
        "<figure class='lb__in'><img alt=''><figcaption></figcaption></figure>" +
      "</div>"
    ).appendTo("body");

    var fermerLb = function () {
      $lb.stop(true).fadeOut(180);
    };

    $(document).on(
      "click",
      ".visuel img, .etape-ligne__img img, .fiche__photo img, .proc-detail__img img, .partenaire-carte__thumb img, [data-zoom-photo]",
      function () {
        if ($(this).closest("a").length) return;
        var src = this.currentSrc || this.src;
        var alt = this.alt;
        if (!src) {
          var $cardImg = $(this).closest(".media-carte").find(".media-carte__visuel img");
          if ($cardImg.length) {
            src = $cardImg[0].currentSrc || $cardImg[0].src;
            alt = $cardImg[0].alt;
          }
        }
        if (!src) return;
        $lb.find("img").attr({ src: src, alt: alt });
        $lb.find("figcaption").text(alt);
        $lb.stop(true).fadeIn(reduit ? 0 : 220);
      }
    );

    $lb.on("click", fermerLb);
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        fermerLb();
        $("#cs-lecteur").remove();
      }
    });

    /* Mise à jour des blocs dynamiques quand la langue change */
    window.CS_ON_LANG_CHANGE = function () {
      lancerTyped();
      afficherEtape(etapeCourante, false);
      afficherZone(zoneCourante, false);
    };
    afficherEtape(etapeCourante, false);
    afficherZone(zoneCourante, false);
  });
})(jQuery);
