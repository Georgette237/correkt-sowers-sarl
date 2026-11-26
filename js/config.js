/* ============================================================
   CORREKT SOWERS SARL — Coordonnées centralisées
   Modifiez les valeurs ici : l'en-tête, le pied de page,
   la page Contact et les formulaires WhatsApp se mettent à jour.
   ============================================================ */
window.CS = {
  whatsapp: "2376XXXXXXXX",
  whatsappAffiche: "+237 6XX XX XX XX",

  telCommercial: "+237 6XX XX XX XX",
  telTechnique: "+237 6XX XX XX XX",

  email: "contact@correktsowers.com",
  facebook: "https://www.facebook.com/profile.php?id=61591505319191",
  adresseFr: "Yaoundé, Centre, Cameroun",
  adresseEn: "Yaoundé, Centre Region, Cameroon",
  gpsLat: 3.7515,
  gpsLng: 11.4835,

  waValide: function () {
    return /^\d{9,15}$/.test(String(this.whatsapp).replace(/\D/g, ""));
  },

  lien: function (type) {
    var chiffres = function (s) {
      return String(s).replace(/[^\d+]/g, "");
    };
    switch (type) {
      case "wa":
        return "https://wa.me/" + String(this.whatsapp).replace(/\D/g, "");
      case "mail":
        return "mailto:" + this.email;
      case "fb":
        return this.facebook;
      case "telCommercial":
        return "tel:" + chiffres(this.telCommercial);
      case "telTechnique":
        return "tel:" + chiffres(this.telTechnique);
      default:
        return "#";
    }
  },
};
