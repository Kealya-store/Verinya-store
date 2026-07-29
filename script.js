// ==========================================================
// KAELYA — script.js
// 1) Envoie la commande du formulaire directement vers WhatsApp
// 2) Anime légèrement l'apparition des sections au scroll
// ==========================================================

// ⚠️ À MODIFIER : remplace par ton vrai numéro WhatsApp
// Format international sans le "+" ni le "0" du début : 213 + ton numéro
// Exemple : pour 05 55 12 34 56 → "213555123456"
const WHATSAPP_NUMBER = "213XXXXXXXXX";

// ⚠️ À MODIFIER : le nom du produit affiché dans le message WhatsApp
const PRODUCT_NAME = "[NOM DU PRODUIT]";

const form = document.getElementById("order-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const wilaya = document.getElementById("wilaya").value.trim();
    const qty = document.getElementById("qty").value;

    const message =
      `Bonjour Verinya, je veux commander :\n` +
      `Produit : ${PRODUCT_NAME}\n` +
      `Quantité : ${qty}\n` +
      `Nom : ${name}\n` +
      `Téléphone : ${phone}\n` +
      `Wilaya : ${wilaya}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

// Apparition douce des sections au scroll (respecte prefers-reduced-motion)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(".section, .hero");
  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
