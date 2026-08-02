// ==========================================================
// FICHE PRODUIT
// Nécessite products.js chargé AVANT ce fichier
// Le bouton "Acheter" envoie vers commande.html avec toutes
// les options choisies, sans ouvrir WhatsApp directement.
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products.find(p => p.id === productId);

  const titleEl = document.getElementById("product-title");
  const descEl = document.getElementById("product-description");
  const priceEl = document.getElementById("product-price");
  const imageEl = document.getElementById("main-image");
  const customBlock = document.getElementById("custom-options");
  const buyBtn = document.getElementById("buy-btn");
  const couleurSelect = document.getElementById("couleur");
  const tailleSelect = document.getElementById("taille");

  if (!product) {
    if (titleEl) titleEl.textContent = "Produit introuvable";
    if (descEl) descEl.textContent = "Retourne au catalogue pour choisir un produit.";
    if (priceEl) priceEl.textContent = "";
    if (buyBtn) buyBtn.style.display = "none";
    return;
  }

  // Remplissage des infos produit
  if (titleEl) titleEl.textContent = product.nom;
  if (descEl) descEl.textContent = product.description;
  if (priceEl) priceEl.textContent = product.prix;
  if (imageEl) {
    imageEl.src = product.image;
    imageEl.alt = product.nom;
  }

  // Couleurs / tailles (celles du produit, sinon celles par défaut)
  const couleurs = product.couleurs || DEFAULT_COULEURS;
  const tailles = product.tailles || DEFAULT_TAILLES;

  if (couleurSelect) {
    couleurSelect.innerHTML = couleurs.map(c => `<option value="${c}">${c}</option>`).join("");
  }
  if (tailleSelect) {
    tailleSelect.innerHTML = tailles.map(t => `<option value="${t}">${t}</option>`).join("");
  }

  // Affiche / masque le bloc personnalisation selon le choix
  const versionInputs = document.querySelectorAll('input[name="version"]');
  function toggleCustomOptions() {
    const selected = document.querySelector('input[name="version"]:checked');
    if (!customBlock) return;
    if (selected && selected.value === "personnalise") {
      customBlock.classList.add("visible");
    } else {
      customBlock.classList.remove("visible");
    }
  }
  versionInputs.forEach(input => input.addEventListener("change", toggleCustomOptions));
  toggleCustomOptions();

  // Clic sur "Acheter" -> on part vers le formulaire de commande
  // avec toutes les options choisies dans l'URL
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      const selected = document.querySelector('input[name="version"]:checked');
      const version = selected ? selected.value : "origine";
      const quantite = document.getElementById("quantite")?.value || 1;
      const couleur = couleurSelect?.value || "";
      const taille = tailleSelect?.value || "";

      const data = {
        id: product.id,
        version: version,
        couleur: couleur,
        taille: taille,
        quantite: quantite
      };

      if (version === "personnalise") {
        data.technique = document.getElementById("technique")?.value || "";
        data.position = document.getElementById("position")?.value || "";
        data.texte = document.getElementById("texte-perso")?.value || "";
        data.logo = document.getElementById("logo-description")?.value || "";
      }

      const query = new URLSearchParams(data).toString();
      window.location.href = "commande.html?" + query;
    });
  }

});
