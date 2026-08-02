// ==========================================================
// VERINYA STORE — Script global (à charger sur TOUTES les pages)
// ----------------------------------------------------------
// 1. Menu burger mobile (injecté automatiquement, aucun HTML à modifier)
// 2. Pied de page : numéro WhatsApp réel + lien cliquable
// 3. Images manquantes : remplacées par un visuel de secours
//    (le site ne montre plus d'images cassées)
// ==========================================================

(function () {
  "use strict";

  // ---------- Chemin relatif : pages/ est un niveau plus bas ----------
  const BASE = window.location.pathname.includes("/pages/") ? "../" : "";

  // ---------- 1. Menu burger ----------
  function initBurger() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    nav.id = nav.id || "main-nav";

    const btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Ouvrir le menu");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", nav.id);
    btn.innerHTML = '<span></span><span></span><span></span>';

    nav.parentNode.insertBefore(btn, nav);

    btn.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      btn.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Referme le menu après un clic sur un lien
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- 2. Pied de page WhatsApp ----------
  function initFooter() {
    const el = document.querySelector(".footer-contact");
    if (!el || typeof SITE_CONFIG === "undefined") return;

    if (SITE_CONFIG.isWhatsappReady) {
      el.innerHTML =
        'WhatsApp : <a href="https://wa.me/' +
        SITE_CONFIG.whatsappNumber +
        '" target="_blank" rel="noopener">' +
        SITE_CONFIG.whatsappDisplay +
        "</a>";
    } else {
      el.textContent = "WhatsApp : numéro à configurer dans assets/js/config.js";
      el.classList.add("footer-contact--todo");
    }
  }

  // ---------- 3. Images de secours ----------
  const FALLBACK =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
        '<rect width="400" height="300" fill="#EFE8DB"/>' +
        '<path d="M150 190l40-50 30 36 22-26 38 40z" fill="#C9BCA6"/>' +
        '<circle cx="150" cy="120" r="16" fill="#C9BCA6"/>' +
        '<text x="200" y="245" font-family="sans-serif" font-size="17" fill="#8C8577" ' +
        'text-anchor="middle">Photo à venir</text></svg>'
    );

  function guardImage(img) {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "1";
    img.addEventListener("error", function () {
      if (img.src === FALLBACK) return;
      img.src = FALLBACK;
      img.classList.add("img-placeholder");
    });
    // Image déjà en échec au moment où le script tourne
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  }

  function initImages() {
    document.querySelectorAll("img").forEach(function (img) {
      // Chargement paresseux + réservation d'espace (évite les sauts de mise en page)
      if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
      if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
      guardImage(img);
    });

    // Les produits sont injectés par render.js après coup
    new MutationObserver(function (list) {
      list.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.tagName === "IMG") guardImage(n);
          n.querySelectorAll && n.querySelectorAll("img").forEach(guardImage);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    initBurger();
    initFooter();
    initImages();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.VERINYA_BASE = BASE;
})();
