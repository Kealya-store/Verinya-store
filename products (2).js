// ==========================================================
// CONFIGURATION DU SITE VERINYA STORE
// ==========================================================
// 1) WhatsApp : format 213 + ton numéro SANS le 0 du début.
//    Exemple : 0551 23 45 67  ->  "213551234567"
//    Tant que la valeur reste "213XXXXXXXXX", le site affiche
//    un avertissement en console et les boutons préviennent
//    l'utilisateur au lieu d'ouvrir un lien cassé.
// ==========================================================

const SITE_CONFIG = {
  whatsappNumber: "213XXXXXXXXX",

  // Texte affiché dans le pied de page (généré automatiquement)
  brand: "Verinya Store",
  baseline: "Livraison dans toute l'Algérie · Paiement à la livraison",
};

// Vrai uniquement si le numéro a bien été remplacé
SITE_CONFIG.isWhatsappReady = /^213\d{8,10}$/.test(SITE_CONFIG.whatsappNumber);

// Numéro joliment formaté pour l'affichage : +213 551 23 45 67
SITE_CONFIG.whatsappDisplay = SITE_CONFIG.isWhatsappReady
  ? "+" + SITE_CONFIG.whatsappNumber.replace(/^(213)(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5")
  : "";

// Construit un lien wa.me à partir d'un message
function buildWhatsappLink(message) {
  if (!SITE_CONFIG.isWhatsappReady) return null;
  return "https://wa.me/" + SITE_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message || "");
}

// Ouvre WhatsApp, ou prévient proprement si le numéro n'est pas configuré
function openWhatsapp(message) {
  const lien = buildWhatsappLink(message);
  if (!lien) {
    alert(
      "Le numéro WhatsApp du site n'est pas encore configuré.\n" +
      "Ouvre assets/js/config.js et remplace 213XXXXXXXXX par ton vrai numéro."
    );
    return false;
  }
  window.open(lien, "_blank");
  return true;
}

if (!SITE_CONFIG.isWhatsappReady) {
  console.warn(
    "[Verinya] Numéro WhatsApp non configuré. Édite assets/js/config.js -> whatsappNumber."
  );
}
