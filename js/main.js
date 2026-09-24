/* ============================================================
   CORREKT SOWERS S.A. — script commun à toutes les pages
   Menu mobile, lien actif, étapes de l'écloserie,
   plan du site d'élevage, validation des formulaires.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- menu mobile + lien actif ---------- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
  }

  if (nav) {
    var fichier = location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a").forEach(function (a) {
      if (a.getAttribute("href") === fichier) {
        a.classList.add("actif");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------- étapes du processus (page alevins) ---------- */
  var DETAILS = {
    1: ["Sélection des géniteurs",
        "Nous gardons une population de géniteurs séparée du circuit de production, avec un registre par famille. Les sujets sont pesés tous les trimestres et réformés dès que la croissance de leur descendance décroche."],
    2: ["Incubation contrôlée",
        "Les œufs sont récoltés à la main puis placés en bouteilles d'incubation à 28 °C. L'eau est filtrée et renouvelée en continu ; le taux d'éclosion est relevé pour chaque ponte et reporté sur la fiche du lot."],
    3: ["Grossissement et tri",
        "Les larves passent de l'aliment en poudre au micro-granulé en trois semaines. Elles sont ensuite triées par taille, comptées et mises à jeun 24 heures avant le transport en sacs oxygénés."]
  };

  var proc = document.getElementById("proc");
  if (proc) {
    var titre = document.getElementById("proc-titre");
    var texte = document.getElementById("proc-texte");
    var etapes = proc.querySelectorAll(".proc__etape");

    var choisir = function (etape) {
      etapes.forEach(function (e) { e.classList.toggle("actif", e === etape); });
      var d = DETAILS[etape.dataset.etape];
      if (d) { titre.textContent = d[0]; texte.textContent = d[1]; }
    };

    etapes.forEach(function (etape) {
      var pion = etape.querySelector(".proc__pion");
      pion.addEventListener("click", function () { choisir(etape); });
      pion.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choisir(etape); }
      });
    });
  }

  /* ---------- zones du plan (page site d'élevage) ---------- */
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

  var plan = document.querySelector(".plan");
  if (plan) {
    var zTitre = document.getElementById("zone-titre");
    var zTexte = document.getElementById("zone-texte");

    plan.querySelectorAll(".plan__pt").forEach(function (g) {
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");

      var ouvrir = function () {
        var z = ZONES[g.dataset.zone];
        if (!z) return;
        zTitre.textContent = z[0];
        zTexte.textContent = z[1];
        plan.querySelectorAll(".plan__pt rect").forEach(function (r) {
          r.setAttribute("stroke", "none");
        });
        var rect = g.querySelector("rect");
        rect.setAttribute("stroke", "#8cc63f");
        rect.setAttribute("stroke-width", "4");
      };

      g.addEventListener("click", ouvrir);
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ouvrir(); }
      });
    });
  }

  /* ---------- formulaires ----------
     Pour un envoi réel, remplacez le bloc marqué ENVOI RÉEL
     par un fetch() vers votre script PHP ou votre service de formulaire. */
  function valider(form, etatId, message) {
    var etat = document.getElementById(etatId);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;

      form.querySelectorAll("[required]").forEach(function (ch) {
        var bloc = ch.closest(".champ");
        var vide = !ch.value.trim();
        var mailInvalide = ch.type === "email" &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ch.value.trim());
        var mauvais = vide || mailInvalide;
        bloc.classList.toggle("invalide", mauvais);
        if (mauvais && ok) { ch.focus(); ok = false; }
      });

      if (!ok) {
        etat.textContent = "Complétez les champs signalés avant d'envoyer.";
        etat.classList.add("visible");
        return;
      }

      /* ---- ENVOI RÉEL ----
      fetch("envoi.php", { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function () { etat.textContent = message; etat.classList.add("visible"); form.reset(); })
        .catch(function () { etat.textContent = "L'envoi a échoué. Réessayez ou appelez-nous."; etat.classList.add("visible"); });
      return;
      ---------------------- */

      etat.textContent = message;
      etat.classList.add("visible");
      form.reset();
    });

    form.querySelectorAll("input,textarea").forEach(function (ch) {
      ch.addEventListener("input", function () {
        ch.closest(".champ").classList.remove("invalide");
      });
    });
  }

  var fd = document.getElementById("form-devis");
  if (fd) valider(fd, "etat-devis", "Demande enregistrée. Notre équipe commerciale vous rappelle sous 48 heures ouvrées.");

  var fc = document.getElementById("form-contact");
  if (fc) valider(fc, "etat-contact", "Message envoyé. Nous vous répondons sous 48 heures ouvrées.");

  /* ---------- carrousel (poissons et étapes de vente) ---------- */
  document.querySelectorAll(".carrousel").forEach(function (carrousel) {
    var piste = carrousel.querySelector(".carrousel__piste");
    var diapos = carrousel.querySelectorAll(".carrousel__diapo");
    var prev = carrousel.querySelector(".carrousel__fleche--prev");
    var next = carrousel.querySelector(".carrousel__fleche--next");
    var puces = carrousel.querySelector(".carrousel__puces");
    var total = diapos.length;
    var index = 0;
    var minuteur = null;

    if (!total) return;

    /* puces de navigation, une par diapositive */
    var boutonsPuce = [];
    diapos.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "carrousel__puce";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Aller à la diapositive " + (i + 1) + " sur " + total);
      b.addEventListener("click", function () { aller(i); demarrerAuto(); });
      puces.appendChild(b);
      boutonsPuce.push(b);
    });

    function aller(i) {
      index = (i + total) % total;
      piste.style.transform = "translateX(-" + (index * 100) + "%)";
      boutonsPuce.forEach(function (b, j) { b.classList.toggle("actif", j === index); });
    }

    function demarrerAuto() {
      if (minuteur) clearInterval(minuteur);
      minuteur = setInterval(function () { aller(index + 1); }, 5000);
    }
    function arreterAuto() { if (minuteur) clearInterval(minuteur); }

    prev.addEventListener("click", function () { aller(index - 1); demarrerAuto(); });
    next.addEventListener("click", function () { aller(index + 1); demarrerAuto(); });

    /* pause au survol / au focus */
    carrousel.addEventListener("mouseenter", arreterAuto);
    carrousel.addEventListener("mouseleave", demarrerAuto);
    carrousel.addEventListener("focusin", arreterAuto);
    carrousel.addEventListener("focusout", demarrerAuto);

    /* clavier : flèches gauche/droite quand le carrousel a le focus */
    carrousel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { aller(index - 1); demarrerAuto(); }
      if (e.key === "ArrowRight") { aller(index + 1); demarrerAuto(); }
    });

    /* balayage tactile */
    var xDepart = null;
    piste.addEventListener("touchstart", function (e) { xDepart = e.touches[0].clientX; arreterAuto(); }, { passive: true });
    piste.addEventListener("touchend", function (e) {
      if (xDepart === null) return;
      var delta = e.changedTouches[0].clientX - xDepart;
      if (delta > 40) aller(index - 1);
      else if (delta < -40) aller(index + 1);
      xDepart = null;
      demarrerAuto();
    });

    aller(0);
    demarrerAuto();
  });

  /* ---------- année du pied de page ---------- */
  var annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();
})();
