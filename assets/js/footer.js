// ==========================================================
// FOOTER : lien WhatsApp branché sur assets/js/config.js
// Nécessite config.js chargé AVANT ce fichier.
// Corrige le bug où le numéro WhatsApp du footer était
// écrit en dur dans chaque page HTML au lieu de venir
// de la config centrale.
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".footer-contact");
  if (!el || typeof SITE_CONFIG === "undefined") return;

  const numero = (SITE_CONFIG.whatsappNumber || "").trim();
  const estConfigure = numero && !numero.toUpperCase().includes("X");

  if (estConfigure) {
    el.innerHTML =
      'WhatsApp : <a href="https://wa.me/' + numero +
      '" target="_blank" rel="noopener" style="color:var(--ivory);text-decoration:underline;">' +
      numero + "</a>";
  } else {
    el.textContent = "WhatsApp : numéro à configurer dans assets/js/config.js";
  }
});
