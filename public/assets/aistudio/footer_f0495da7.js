/* ============================================================
   PIED DE PAGE CENTRALISÉ — modifié ici, il change sur toutes
   les pages. Chaque page contient simplement :
       <div id="pied-site"></div>
   Les coordonnées viennent de js/config.js.
   ============================================================ */
(function ($) {
  "use strict";
  $(function () {
    var C = window.CS || {};
    var html = [
      '<footer class="pied">',
      '  <div class="wrap">',
      '    <div class="pied__grille">',
      '      <div>',
      '        <a class="logo" href="index.html" aria-label="Correkt Sowers, retour à l\'accueil" style="margin-bottom:16px;display:inline-block;background:#fff;padding:10px 14px;border-radius:10px">',
      '          <img src="images/img (97).jpg" alt="Correkt Sowers Sarl" width="600" height="731" style="height:76px;width:auto;display:block">',
      '        </a>',
      '        <p style="font-size:.9rem;color:#a9c8ad;max-width:32ch">Pisciculture durable à Yaoundé : alevins, poissons de consommation et accompagnement des éleveurs.</p>',
      '      </div>',
      '      <div>',
      '        <h4>Produits</h4>',
      '        <ul>',
      '          <li><a href="alevins.html">Tilapia du Nil</a></li>',
      '          <li><a href="alevins.html">Clarias</a></li>',
      '          <li><a href="alevins.html">Alevins pré-grossis</a></li>',
      '          <li><a href="poissons.html">Poisson frais</a></li>',
      '        </ul>',
      '      </div>',
      '      <div>',
      '        <h4>Contact</h4>',
      '        <ul>',
      '          <li><a href="' + C.lien("telCommercial") + '">' + C.telCommercial + '</a></li>',
      '          <li><a href="' + C.lien("wa") + '" target="_blank" rel="noopener">WhatsApp : ' + C.whatsappAffiche + '</a></li>',
      '          <li><a href="' + C.lien("mail") + '">' + C.email + '</a></li>',
      '          <li><a href="' + C.facebook + '" target="_blank" rel="noopener"><b>Correkt Sowers Sarl</b> sur Facebook</a></li>',
      '          <li>' + C.adresse + '</li>',
      '        </ul>',
      '      </div>',
      '    </div>',
      '    <div class="pied__bas">',
      '      <span>© ' + new Date().getFullYear() + ' Correkt Sowers Sarl. Tous droits réservés.</span>',
      '      <span>Site conçu pour la pisciculture camerounaise.</span>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join("\n");
    $("#pied-site").replaceWith(html);
  });
})(jQuery);
