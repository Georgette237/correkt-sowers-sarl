/* ============================================================
   CORREKT SOWERS — coordonnées de l'entreprise (UN SEUL ENDROIT)
   Modifiez les valeurs ici : le pied de page, la page Contact et
   les formulaires (envoi WhatsApp) se mettent à jour partout.
   ============================================================ */
window.CS = {
  /* WhatsApp : format international, chiffres uniquement,
     sans « + », sans espaces. Ex. Cameroun : 237677123456 */
  whatsapp: "2376XXXXXXXX",
  whatsappAffiche: "+237 6XX XX XX XX",

  telCommercial: "+237 6XX XX XX XX",
  telTechnique: "+237 6XX XX XX XX",

  email: "contact@correktsowers.com",
  facebook: "https://www.facebook.com/profile.php?id=61591505319191",
  adresse: "Yaoundé, Centre, Cameroun",

  /* le numéro WhatsApp est-il renseigné ? */
  waValide: function () {
    return /^\d{9,15}$/.test(String(this.whatsapp).replace(/\D/g, ""));
  },
  /* liens prêts à l'emploi */
  lien: function (type) {
    var chiffres = function (s) { return String(s).replace(/[^\d+]/g, ""); };
    switch (type) {
      case "wa":   return "https://wa.me/" + String(this.whatsapp).replace(/\D/g, "");
      case "mail": return "mailto:" + this.email;
      case "fb":   return this.facebook;
      case "telCommercial": return "tel:" + chiffres(this.telCommercial);
      case "telTechnique":  return "tel:" + chiffres(this.telTechnique);
    }
    return "#";
  }
};
