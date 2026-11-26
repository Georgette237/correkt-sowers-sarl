/* ============================================================
   PIED DE PAGE CENTRALISÉ — injecté sur chaque page dans #pied-site
   ============================================================ */
(function ($) {
  "use strict";

  window.CS_RENDER_FOOTER = function (lang) {
    var C = window.CS || {};
    var F = window.CS_I18N && window.CS_I18N[lang] ? window.CS_I18N[lang].footer : null;
    if (!F) return;

    var adresse = lang === "en" ? C.adresseEn : C.adresseFr;

    var html = [
      '<footer class="pied" id="pied-site">',
      '  <div class="wrap">',
      '    <div class="pied__grille">',
      "      <div>",
      '        <a class="logo" href="index.html" aria-label="Correkt Sowers" style="margin-bottom:16px;display:inline-block;background:#fff;padding:10px 14px;border-radius:10px">',
      '          <img src="images/img (97).jpg" alt="Correkt Sowers Sarl" width="600" height="731" style="height:68px;width:auto;display:block">',
      "        </a>",
      '        <p style="font-size:.92rem;color:#b7d4bb;max-width:32ch">' + F.tagline + "</p>",
      "      </div>",
      "      <div>",
      "        <h4>" + F.productsTitle + "</h4>",
      "        <ul>",
      '          <li><a href="alevins.html">' + F.p1 + "</a></li>",
      '          <li><a href="alevins.html">' + F.p2 + "</a></li>",
      '          <li><a href="alevins.html">' + F.p3 + "</a></li>",
      '          <li><a href="poissons.html">' + F.p4 + "</a></li>",
      "        </ul>",
      "      </div>",
      "      <div>",
      "        <h4>" + F.exploreTitle + "</h4>",
      "        <ul>",
      '          <li><a href="index.html">' + F.e1 + "</a></li>",
      '          <li><a href="elevage.html">' + F.e2 + "</a></li>",
      '          <li><a href="actualites.html">' + F.e3 + "</a></li>",
      '          <li><a href="contact.html">' + F.e4 + "</a></li>",
      "        </ul>",
      "      </div>",
      "      <div>",
      "        <h4>" + F.contactTitle + "</h4>",
      "        <ul>",
      '          <li><a href="' + C.lien("telCommercial") + '">' + C.telCommercial + "</a></li>",
      '          <li><a href="' + C.lien("wa") + '" target="_blank" rel="noopener noreferrer">WhatsApp : ' + C.whatsappAffiche + "</a></li>",
      '          <li><a href="' + C.lien("mail") + '">' + C.email + "</a></li>",
      '          <li><a href="' + C.facebook + '" target="_blank" rel="noopener noreferrer"><b>Correkt Sowers Sarl</b> ' + F.fbSuffix + "</a></li>",
      "          <li>" + adresse + "</li>",
      "        </ul>",
      "      </div>",
      "    </div>",
      '    <div class="pied__bas">',
      "      <span>© " + new Date().getFullYear() + " " + F.rights + "</span>",
      '      <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center">',
      "        <span>" + F.credit + "</span>",
      '        <button type="button" class="pied__link" id="cs-open-cookies" style="text-decoration:underline">' + F.manageCookies + "</button>",
      "      </div>",
      "    </div>",
      "  </div>",
      "</footer>",
    ].join("\n");

    $("#pied-site").replaceWith(html);

    $("#cs-open-cookies").on("click", function () {
      if (window.CS_OPEN_COOKIE_MODAL) window.CS_OPEN_COOKIE_MODAL();
    });
  };
})(jQuery);
