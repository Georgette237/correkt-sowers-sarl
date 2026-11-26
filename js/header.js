/* ============================================================
   EN-TÊTE CENTRALISÉ — injecté sur chaque page dans #entete-site
   Inclut : logo, navigation principale (dont Actualités),
   bouton de traduction FR <-> EN, et menu mobile accessible.
   ============================================================ */
(function ($) {
  "use strict";

  window.CS_RENDER_HEADER = function (lang) {
    var L = window.CS_I18N && window.CS_I18N[lang] ? window.CS_I18N[lang].nav : null;
    if (!L) return;

    var fichier = location.pathname.split("/").pop() || "index.html";
    if (fichier === "") fichier = "index.html";

    var liens = [
      { href: "index.html", label: L.home },
      { href: "alevins.html", label: L.alevins },
      { href: "poissons.html", label: L.poissons },
      { href: "elevage.html", label: L.elevage },
      { href: "actualites.html", label: L.actualites },
      { href: "contact.html", label: L.contact },
    ];

    var navHtml = liens
      .map(function (item) {
        var actif = item.href === fichier ? ' class="actif" aria-current="page"' : "";
        return '<a href="' + item.href + '"' + actif + ">" + item.label + "</a>";
      })
      .join("\n      ");

    var html = [
      '<header class="entete" id="entete-site">',
      '  <div class="wrap entete__in">',
      '    <a class="logo" href="index.html" aria-label="' + L.logoAria + '">',
      '      <img src="images/img (97).jpg" alt="Correkt Sowers Sarl" width="600" height="731" style="height:54px;width:auto;display:block">',
      "    </a>",
      '    <nav class="nav" id="nav" aria-label="Navigation principale">',
      "      " + navHtml,
      "    </nav>",
      '    <div class="entete__actions">',
      '      <button type="button" class="lang-btn" id="cs-lang-toggle" title="' + L.langTitle + '" aria-label="' + L.langTitle + '">',
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      "        <span>" + (lang === "fr" ? "FR → EN" : "EN → FR") + "</span>",
      "      </button>",
      '      <button class="burger" id="burger" type="button" aria-label="' + L.openMenu + '" aria-expanded="false" aria-controls="nav">',
      "        <span></span><span></span><span></span>",
      "      </button>",
      "    </div>",
      "  </div>",
      "</header>",
    ].join("\n");

    $("#entete-site").replaceWith(html);

    var $nav = $("#nav");
    var $burger = $("#burger");
    $burger.on("click", function () {
      var ouvert = $nav.toggleClass("ouvert").hasClass("ouvert");
      $burger.attr("aria-expanded", ouvert ? "true" : "false");
      $burger.attr("aria-label", ouvert ? L.closeMenu : L.openMenu);
    });
    $nav.find("a").on("click", function () {
      $nav.removeClass("ouvert");
      $burger.attr("aria-expanded", "false");
    });
    $("#cs-lang-toggle").on("click", function () {
      if (window.CS_SET_LANG) {
        window.CS_SET_LANG(lang === "fr" ? "en" : "fr");
      }
    });
  };
})(jQuery);
