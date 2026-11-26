/* ============================================================
   CORREKT SOWERS SARL — script commun (jQuery)
   Menu, carrousel du héros, étapes de l'écloserie, plan du site,
   apparitions au défilement, compteurs, agrandissement des images,
   formulaires envoyés sur WhatsApp.
   Nécessite : jquery.min.js, config.js, footer.js (dans cet ordre).
   ============================================================ */
(function ($) {
  "use strict";

  var CS = window.CS || {};
  var $win = $(window);
  var reduit = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  $(function () {

    /* ---------- coordonnées issues de config.js ---------- */
    $("[data-cs]").each(function () {
      var v = CS[$(this).data("cs")];
      if (v) $(this).text(v);
    });
    $("[data-cs-lien]").each(function () {
      $(this).attr("href", CS.lien($(this).data("csLien")));
    });

    /* ---------- menu mobile + lien actif ---------- */
    var $nav = $("#nav"), $burger = $("#burger");
    $burger.on("click", function () {
      var ouvert = $nav.toggleClass("ouvert").hasClass("ouvert");
      $burger.attr("aria-expanded", ouvert ? "true" : "false");
    });
    $nav.find("a").on("click", function () {
      $nav.removeClass("ouvert");
      $burger.attr("aria-expanded", "false");
    });
    var fichier = location.pathname.split("/").pop() || "index.html";
    $nav.find("a").filter(function () { return $(this).attr("href") === fichier; })
      .addClass("actif").attr("aria-current", "page");

    /* ---------- année (au cas où le pied de page serait statique) ---------- */
    $("#annee").text(new Date().getFullYear());

    /* ============================================================
       CARROUSEL DU HÉROS (accueil) — défilement automatique, 10 s
       ============================================================ */
    var $diapos = $("#heros-diapos .heros__diapo");
    if ($diapos.length > 1) {
      var DELAI = 10000;
      var courant = 0, minuteur = null;
      var $puces = $("#heros-puces");
      var $barre = $(".heros__barre span");

      $diapos.each(function (k) {
        $("<button type='button' class='heros__puce'></button>")
          .toggleClass("actif", k === 0)
          .attr("aria-label", "Image " + (k + 1) + " sur " + $diapos.length)
          .on("click", function () { aller(k); demarrer(); })
          .appendTo($puces);
      });

      var lancerBarre = function () {
        $barre.stop(true).css("width", 0);
        if (!reduit) $barre.animate({ width: "100%" }, DELAI, "linear");
      };
      /* une image n'est téléchargée que lorsqu'elle va passer à l'écran */
      var charger = function (k) {
        var $i = $diapos.eq((k + $diapos.length) % $diapos.length);
        var src = $i.attr("data-src");
        if (src) $i.attr("src", src).removeAttr("data-src");
      };
      var aller = function (n) {
        charger(n); charger(n + 1);
        $diapos.eq(courant).removeClass("actif");
        $puces.children().eq(courant).removeClass("actif");
        courant = (n + $diapos.length) % $diapos.length;
        $diapos.eq(courant).addClass("actif");
        $puces.children().eq(courant).addClass("actif");
        lancerBarre();
      };
      var demarrer = function () {
        clearInterval(minuteur);
        minuteur = setInterval(function () { aller(courant + 1); }, DELAI);
        lancerBarre();
      };

      /* on met le défilement en pause quand l'onglet n'est pas visible */
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) { clearInterval(minuteur); $barre.stop(true); }
        else demarrer();
      });
      charger(1);
      demarrer();
    }

    /* ---------- entrée du texte du héros ---------- */
    if (!reduit) {
      $(".heros__in").children().each(function (k) {
        $(this).css({ opacity: 0, position: "relative", top: 28 })
          .delay(150 + k * 170)
          .animate({ opacity: 1, top: 0 }, 750, "swing");
      });
    }

    /* ---------- texte tapé (page contact) ---------- */
    $(".js-typed").each(function () {
      var $s = $(this);
      var mots = String($s.data("mots")).split("|");
      if (reduit) { $s.text(mots[0]); return; }
      var m = 0, c = 0, sens = 1;
      (function tick() {
        var mot = mots[m], d = 85;
        c += sens;
        $s.text(mot.slice(0, c));
        if (sens === 1 && c === mot.length) { sens = -1; d = 1700; }
        else if (sens === -1 && c === 0) { sens = 1; m = (m + 1) % mots.length; d = 380; }
        else if (sens === -1) d = 40;
        setTimeout(tick, d);
      })();
    });

    /* ============================================================
       ÉTAPES DE L'ÉCLOSERIE (page alevins) — texte + image
       ============================================================ */
    var $proc = $("#proc");
    if ($proc.length) {
      var $etapes = $proc.find(".proc__etape");
      var $pImg = $("#proc-img"), $pTitre = $("#proc-titre"),
          $pTexte = $("#proc-texte"), $pNum = $("#proc-num");
      var $pBloc = $("#proc-detail").find(".proc-detail__img img, .proc-detail__txt");
      var $pTxt = $("#proc-detail .proc-detail__txt");

      /* préchargement des images des étapes */
      $etapes.each(function () { (new Image()).src = $(this).data("img"); });

      var choisir = function ($e) {
        if ($e.hasClass("actif")) return;
        $etapes.removeClass("actif");
        $e.addClass("actif");
        var d = $e.data();
        $pBloc.stop(true).fadeTo(reduit ? 0 : 200, 0).promise().done(function () {
          $pImg.attr({ src: d.img, alt: d.alt });
          $pTitre.text(d.titre);
          $pTexte.text(d.texte);
          $pNum.text("Étape " + d.etape + " sur " + $etapes.length);
          $pTxt.css({ position: "relative", left: reduit ? 0 : -26 });
          $pBloc.fadeTo(reduit ? 0 : 380, 1);
          $pTxt.animate({ left: 0 }, reduit ? 0 : 380);
        });
      };

      $etapes.on("click", function () { choisir($(this)); });
      $etapes.find(".proc__pion").on("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          choisir($(this).closest(".proc__etape"));
        }
      });
    }

    /* ============================================================
       ZONES DU PLAN (page site d'élevage)
       ============================================================ */
    var ZONES = {
      etang: ["Étang",
        "Réserve d'eau douce en amont du site, qui alimente l'écloserie et les bassins. Elle sert aussi de zone tampon en cas de coupure d'approvisionnement et accueille quelques géniteurs en reproduction naturelle."],
      ecloserie: ["Écloserie",
        "Bâtiment fermé, accès réservé au personnel formé. Bouteilles d'incubation, bacs de larves et eau chauffée à 28 °C en circuit fermé. C'est ici que commence la traçabilité de chaque lot."],
      pregros: ["Pré-grossissement",
        "Bacs couverts où les alevins passent au granulé et sont triés par calibre. Densité réduite et deux vidanges par semaine pour garder une eau propre."],
      bassins: ["Bassins de grossissement",
        "18 bassins bâchés de 200 m³, aérés et vidangeables un par un. Chaque bassin a sa fiche : mise en charge, ration, pesées d'échantillon et date de récolte prévue."],
      eau: ["Traitement de l'eau",
        "Décantation, filtration mécanique et recirculation partielle. L'eau sortante traverse un bassin planté avant rejet, ce qui limite la charge en matière organique."]
    };

    var $plan = $(".plan");
    if ($plan.length) {
      var $zInfo = $("#zone-titre, #zone-texte");
      $plan.find(".plan__pt").attr({ tabindex: 0, role: "button" }).each(function () {
        var $g = $(this);
        var ouvrir = function () {
          var z = ZONES[$g.data("zone")];
          if (!z) return;
          $zInfo.stop(true).fadeTo(reduit ? 0 : 150, 0).promise().done(function () {
            $("#zone-titre").text(z[0]);
            $("#zone-texte").text(z[1]);
            $zInfo.fadeTo(reduit ? 0 : 320, 1);
          });
          $plan.find(".plan__pt rect").attr("stroke", "none");
          $g.find("rect").attr({ stroke: "#8cc63f", "stroke-width": 4 });
        };
        $g.on("click", ouvrir);
        $g.on("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ouvrir(); }
        });
      });
    }

    /* ============================================================
       FORMULAIRES — validation puis envoi sur WhatsApp
       ============================================================ */
    function formulaire($f, $etat, opts) {
      var montrer = function (contenu) {
        $etat.empty().append(contenu).addClass("visible").hide().fadeIn(300);
      };

      $f.on("submit", function (e) {
        e.preventDefault();
        var premier = null;

        $f.find("[required]").each(function () {
          var $c = $(this), v = $.trim($c.val());
          var mauvais = !v;
          if (!mauvais && $c.attr("type") === "email")
            mauvais = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
          if (!mauvais && $c.attr("type") === "tel")
            mauvais = v.replace(/\D/g, "").length < 8;
          $c.closest(".champ").toggleClass("invalide", mauvais);
          if (mauvais && !premier) premier = $c;
        });

        if (premier) {
          premier.focus();
          montrer("Complétez les champs signalés avant d'envoyer.");
          return;
        }

        if (!CS.waValide || !CS.waValide()) {
          montrer("Le numéro WhatsApp de l'entreprise n'est pas encore renseigné (fichier js/config.js).");
          return;
        }

        var url = CS.lien("wa") + "?text=" + encodeURIComponent(opts.message($f));
        var fenetre = window.open(url, "_blank");
        if (!fenetre) window.location.href = url;

        montrer([
          document.createTextNode(opts.confirmation + " "),
          $("<a>").attr({ href: url, target: "_blank", rel: "noopener" }).text("Ouvrir WhatsApp")
        ]);
        $f[0].reset();
      });

      $f.find("input,textarea,select").on("input change", function () {
        $(this).closest(".champ").removeClass("invalide");
      });
    }

    var val = function ($f, nom) { return $.trim($f.find("[name='" + nom + "']").val()); };

    var $fd = $("#form-devis");
    if ($fd.length) {
      formulaire($fd, $("#etat-devis"), {
        confirmation: "Votre demande est prête : envoyez-la dans la conversation WhatsApp qui s'ouvre.",
        message: function ($f) {
          return [
            "*Demande de cotation d'alevins*",
            "Nom : " + val($f, "nom"),
            "Téléphone : " + val($f, "tel"),
            "Email : " + val($f, "email"),
            "Espèce souhaitée : " + val($f, "espece"),
            "Quantité et date de mise en charge : " + val($f, "message")
          ].join("\n");
        }
      });
    }

    var $fc = $("#form-contact");
    if ($fc.length) {
      formulaire($fc, $("#etat-contact"), {
        confirmation: "Votre message est prêt : envoyez-le dans la conversation WhatsApp qui s'ouvre.",
        message: function ($f) {
          return [
            "*Message depuis le site Correkt Sowers*",
            "Nom : " + val($f, "nom"),
            "Email : " + val($f, "email"),
            "Message : " + val($f, "message")
          ].join("\n");
        }
      });
    }

    /* ============================================================
       EFFETS AU DÉFILEMENT : apparitions, compteurs, parallaxe,
       en-tête compact, bouton « haut de page »
       ============================================================ */

    /* --- apparitions --- */
    var $rv = $();
    if (!reduit) {
      var SEL = ".section .carte, .espece, .fiche, .recap, .frise__etape, .chiffre, .apercu, " +
                ".proc__etape, .zone-info, .section .duo__media, .engagement, .etape-ligne__txt, .etape-ligne__img";
      $rv = $(SEL).not(".proc-detail *").each(function () {
        var $el = $(this);
        $el.addClass("rv");
        if ($el.is(".etape-ligne__txt")) $el.addClass("rv-g");
        if ($el.is(".etape-ligne__img")) $el.addClass("rv-d");
      });
    }

    var revele = function () {
      var bas = $win.scrollTop() + $win.height() - 50;
      $rv = $rv.filter(function () {
        var el = this, $el = $(el);
        if ($el.offset().top > bas) return true;
        var rang = $el.parent().children(".rv, .rv-in").index(el);
        var delai = Math.max(rang, 0) % 4 * 110;
        setTimeout(function () {
          $el.addClass("rv-in");
          /* on rend la main aux styles d'origine une fois l'effet terminé */
          setTimeout(function () { $el.removeClass("rv rv-in rv-g rv-d"); }, 900);
        }, delai);
        return false;
      });
    };

    /* --- compteurs --- */
    var $compt = $(".chiffre b").filter(function () { return /\d/.test($(this).text()); });
    if (!reduit) {
      $compt.each(function () {
        var $b = $(this), t = $b.text(), m = t.match(/\d+(?:[.,]\d+)?/)[0];
        var dec = /[.,]\d/.test(m) ? m.split(/[.,]/)[1].length : 0;
        $b.data({ t: t, m: m, dec: dec, cible: parseFloat(m.replace(",", ".")) });
        $b.text(t.replace(m, (0).toFixed(dec).replace(".", ",")));
      });
    } else { $compt = $(); }

    var compter = function () {
      var bas = $win.scrollTop() + $win.height() - 30;
      $compt = $compt.filter(function () {
        var $b = $(this);
        if ($b.offset().top > bas) return true;
        var d = $b.data();
        $({ v: 0 }).animate({ v: d.cible }, {
          duration: 1500,
          step: function (now) {
            $b.text(d.t.replace(d.m, now.toFixed(d.dec).replace(".", ",")));
          },
          complete: function () { $b.text(d.t); }
        });
        return false;
      });
    };

    /* --- parallaxe de l'image de fond du héros --- */
    var $fonds = $(".heros > .heros__fond, .heros > .heros__diapos");

    /* --- bouton haut de page --- */
    var $haut = $("<button type='button' class='haut' aria-label='Retour en haut de la page'>" +
      "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 15l6-6 6 6'/></svg></button>")
      .appendTo("body").hide()
      .on("click", function () { $("html,body").stop(true).animate({ scrollTop: 0 }, reduit ? 0 : 600); });

    var $entete = $(".entete");
    var attente = false;
    var auDefilement = function () {
      var y = $win.scrollTop();
      $entete.toggleClass("entete--compact", y > 40);
      if (y > 600) $haut.fadeIn(200); else $haut.fadeOut(200);

      if (!reduit) {
        $fonds.each(function () {
          var $h = $(this).parent(), haut = $h.offset().top, h = $h.outerHeight();
          var decal = Math.min(Math.max((y - haut) * 0.25, 0), h * 0.12);
          $(this).css("transform", "translateY(" + decal + "px)");
        });
      }
      revele();
      compter();
    };
    $win.on("scroll resize", function () {
      if (attente) return;
      attente = true;
      requestAnimationFrame(function () { attente = false; auDefilement(); });
    });
    auDefilement();

    /* ============================================================
       IMAGES : agrandissement au clic (lightbox)
       ============================================================ */
    var $lb = $(
      "<div class='lb' role='dialog' aria-modal='true' aria-label='Image agrandie'>" +
        "<button type='button' class='lb__x' aria-label='Fermer'>&times;</button>" +
        "<figure class='lb__in'><img alt=''><figcaption></figcaption></figure>" +
      "</div>"
    ).appendTo("body").hide();

    var fermer = function () { $lb.stop(true).fadeOut(200); };
    $(document).on("click",
      ".visuel img, .etape-ligne__img img, .fiche__photo img, .proc-detail__img img, .apercu__img img",
      function () {
        if ($(this).closest("a").length) return;
        $lb.find("img").attr({ src: this.currentSrc || this.src, alt: this.alt });
        $lb.find("figcaption").text(this.alt);
        $lb.stop(true).fadeIn(reduit ? 0 : 250);
      });
    $lb.on("click", fermer);
    $(document).on("keydown", function (e) { if (e.key === "Escape") fermer(); });

  });
})(jQuery);
