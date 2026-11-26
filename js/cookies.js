/* ============================================================
   GESTION DES COOKIES — Bandeau + fenêtre de personnalisation
   Fonctionne en HTTP/HTTPS et en ouverture locale file://
   ============================================================ */
(function ($) {
  "use strict";

  var KEY = "cs_cookie_prefs";

  function readStateFromWindowName(key) {
    try {
      var data = window.name && window.name.charAt(0) === "{" ? JSON.parse(window.name) : {};
      return data[key] || null;
    } catch (e) {
      return null;
    }
  }

  function writeStateToWindowName(key, val) {
    try {
      var data = window.name && window.name.charAt(0) === "{" ? JSON.parse(window.name) : {};
      data[key] = val;
      window.name = JSON.stringify(data);
    } catch (e) {
      // ignore
    }
  }

  function getPrefs() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    var fromWin = readStateFromWindowName(KEY);
    if (fromWin) return fromWin;
    return { essential: true, preferences: true, media: true, decided: false };
  }

  function savePrefs(prefs) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch (e) {
      // ignore
    }
    writeStateToWindowName(KEY, prefs);
    applyMediaConsent(prefs);
  }

  function applyMediaConsent(prefs) {
    var $mapWrap = $("#cs-map-container");
    if (!$mapWrap.length) return;
    var lang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
    var C = window.CS || {};
    var txt = window.CS_I18N && window.CS_I18N[lang] ? window.CS_I18N[lang].cookies : {};

    if (prefs.media) {
      var src =
        "https://maps.google.com/maps?q=" +
        C.gpsLat +
        "," +
        C.gpsLng +
        "&z=18&hl=" +
        lang +
        "&t=k&output=embed";
      $mapWrap.html(
        '<iframe title="Google Maps - Correkt Sowers Sarl" src="' +
          src +
          '" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>'
      );
    } else {
      $mapWrap.html(
        '<div class="carte-loc--bloque">' +
          "<p>" +
          (txt.mapBlocked || "La carte interactive est désactivée par vos préférences de cookies.") +
          "</p>" +
          '<button type="button" class="btn btn--plein" id="cs-map-enable-cookies">' +
          (txt.manageBtn || "Gérer les cookies") +
          "</button></div>"
      );
      $("#cs-map-enable-cookies").on("click", function () {
        window.CS_OPEN_COOKIE_MODAL();
      });
    }
  }

  function renderUI() {
    var lang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
    var T = window.CS_I18N && window.CS_I18N[lang] ? window.CS_I18N[lang].cookies : null;
    if (!T) return;

    $("#cs-cookie-banner, #cs-cookie-modal").remove();
    var prefs = getPrefs();

    if (!prefs.decided) {
      var banner = [
        '<aside class="cookie-banniere" id="cs-cookie-banner" role="region" aria-label="' + T.bannerTitle + '">',
        '  <div class="cookie-banniere__texte">',
        "    <strong>" + T.bannerTitle + "</strong>",
        "    <span>" + T.bannerText + "</span>",
        "  </div>",
        '  <div class="cookie-banniere__actions">',
        '    <button type="button" class="cookie-btn" id="cs-ck-custom">' + T.customize + "</button>",
        '    <button type="button" class="cookie-btn" id="cs-ck-ess">' + T.essentialOnly + "</button>",
        '    <button type="button" class="cookie-btn cookie-btn--primaire" id="cs-ck-all">' + T.acceptAll + "</button>",
        "  </div>",
        "</aside>",
      ].join("\n");
      $("body").append(banner);

      $("#cs-ck-all").on("click", function () {
        savePrefs({ essential: true, preferences: true, media: true, decided: true });
        $("#cs-cookie-banner").remove();
      });
      $("#cs-ck-ess").on("click", function () {
        savePrefs({ essential: true, preferences: false, media: false, decided: true });
        $("#cs-cookie-banner").remove();
      });
      $("#cs-ck-custom").on("click", function () {
        window.CS_OPEN_COOKIE_MODAL();
      });
    }

    applyMediaConsent(prefs);
  }

  window.CS_OPEN_COOKIE_MODAL = function () {
    var lang = window.CS_GET_LANG ? window.CS_GET_LANG() : "fr";
    var T = window.CS_I18N && window.CS_I18N[lang] ? window.CS_I18N[lang].cookies : null;
    if (!T) return;

    $("#cs-cookie-modal").remove();
    var prefs = getPrefs();

    var modal = [
      '<div class="cookie-modal-fond" id="cs-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cs-ck-title">',
      '  <div class="cookie-modal">',
      '    <div class="cookie-modal__entete">',
      "      <div>",
      '        <h2 id="cs-ck-title">' + T.modalTitle + "</h2>",
      '        <p style="font-size:.9rem;color:var(--texte-doux);margin:6px 0 0">' + T.modalIntro + "</p>",
      "      </div>",
      '      <button type="button" class="cookie-modal__close" id="cs-ck-close" aria-label="' + T.close + '">&times;</button>',
      "    </div>",
      '    <div class="cookie-option" style="cursor:default">',
      "      <div><b>" + T.essentialTitle + "</b><span>" + T.essentialDesc + "</span></div>",
      '      <span class="cookie-badge">' + T.essentialBadge + "</span>",
      "    </div>",
      '    <label class="cookie-option">',
      "      <div><b>" + T.preferencesTitle + "</b><span>" + T.preferencesDesc + "</span></div>",
      '      <input type="checkbox" id="cs-ck-pref" ' + (prefs.preferences ? "checked" : "") + ">",
      "    </label>",
      '    <label class="cookie-option">',
      "      <div><b>" + T.mediaTitle + "</b><span>" + T.mediaDesc + "</span></div>",
      '      <input type="checkbox" id="cs-ck-media" ' + (prefs.media ? "checked" : "") + ">",
      "    </label>",
      '    <div class="cookie-modal__actions">',
      '      <button type="button" class="cookie-btn" id="cs-ck-modal-ess">' + T.essentialOnly + "</button>",
      '      <button type="button" class="cookie-btn cookie-btn--primaire" id="cs-ck-save">' + T.savePrefs + "</button>",
      "    </div>",
      "  </div>",
      "</div>",
    ].join("\n");

    $("body").append(modal);

    var closeModal = function () {
      $("#cs-cookie-modal").remove();
    };
    $("#cs-ck-close").on("click", closeModal);
    $("#cs-cookie-modal").on("click", function (e) {
      if (e.target === this) closeModal();
    });
    $("#cs-ck-modal-ess").on("click", function () {
      savePrefs({ essential: true, preferences: false, media: false, decided: true });
      closeModal();
      $("#cs-cookie-banner").remove();
    });
    $("#cs-ck-save").on("click", function () {
      savePrefs({
        essential: true,
        preferences: $("#cs-ck-pref").is(":checked"),
        media: $("#cs-ck-media").is(":checked"),
        decided: true,
      });
      closeModal();
      $("#cs-cookie-banner").remove();
    });
  };

  window.CS_RENDER_COOKIES = renderUI;
})(jQuery);
