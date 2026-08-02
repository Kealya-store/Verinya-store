// ==========================================================
// PAGE COMMANDE
// Récupère le produit + les options choisies dans l'URL,
// affiche un récap, puis envoie tout sur WhatsApp avec
// les infos de livraison saisies dans le formulaire.
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products.find(p => p.id === productId);

  const recapEl = document.getElementById("recap");
  const form = document.getElementById("commande-form");

  if (!product) {
    if (recapEl) {
      recapEl.innerHTML = "<p>Produit introuvable. Retourne au <a href='catalogue.html'>catalogue</a> pour choisir un produit.</p>";
    }
    if (form) form.style.display = "none";
    return;
  }

  const version = params.get("version") || "origine";
  const couleur = params.get("couleur") || "";
  const taille = params.get("taille") || "";
  const quantite = params.get("quantite") || "1";
  const technique = params.get("technique") || "";
  const position = params.get("position") || "";
  const texte = params.get("texte") || "";
  const logo = params.get("logo") || "";

  // Récap affiché au client
  let recapHtml = `
    <div style="display:flex; gap:16px; align-items:center; margin-bottom:20px;">
      <img src="${product.image}" alt="${product.nom}" style="width:90px; height:90px; object-fit:cover; border-radius:10px;">
      <div>
        <h3 style="margin:0 0 4px;">${product.nom}</h3>
        <p style="margin:0; color:var(--clay-deep); font-weight:600;">${product.prix}</p>
      </div>
    </div>
    <div class="badge-group">
      <span class="badge">Couleur : ${couleur}</span>
      <span class="badge">Taille : ${taille}</span>
      <span class="badge">Quantité : ${quantite}</span>
      <span class="badge ${version === 'personnalise' ? 'badge-custom' : ''}">
        ${version === "personnalise" ? "Personnalisé" : "Produit d'origine"}
      </span>
    </div>
  `;

  if (version === "personnalise") {
    recapHtml += `
      <div style="margin-top:14px; font-size:0.9rem; color:var(--ink-soft);">
        ${technique ? "Technique : " + technique + "<br>" : ""}
        ${position ? "Position : " + position + "<br>" : ""}
        ${texte ? "Texte : " + texte + "<br>" : ""}
        ${logo ? "Logo : " + logo : ""}
      </div>
    `;
  }

  if (recapEl) recapEl.innerHTML = recapHtml;

  // Envoi du formulaire -> WhatsApp
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nom = document.getElementById("nom").value.trim();
      const telephone = document.getElementById("telephone").value.trim();
      const ville = document.getElementById("ville").value.trim();
      const adresse = document.getElementById("adresse").value.trim();
      const note = document.getElementById("note").value.trim();

      let message = `Bonjour, je souhaite passer commande :\n\n`;
      message += `Produit : ${product.nom}\n`;
      message += `Couleur : ${couleur}\n`;
      message += `Taille : ${taille}\n`;
      message += `Quantité : ${quantite}\n`;
      message += `Version : ${version === "personnalise" ? "Personnalisé" : "Produit d'origine"}\n`;

      if (version === "personnalise") {
        if (technique) message += `Technique : ${technique}\n`;
        if (position) message += `Position : ${position}\n`;
        if (texte) message += `Texte à ajouter : ${texte}\n`;
        if (logo) message += `Logo : ${logo} (je t'enverrai le fichier ici sur WhatsApp)\n`;
      }

      message += `\nMes informations de livraison :\n`;
      message += `Nom : ${nom}\n`;
      message += `Téléphone : ${telephone}\n`;
      message += `Wilaya / Ville : ${ville}\n`;
      message += `Adresse : ${adresse}\n`;
      if (note) message += `Note : ${note}\n`;
      message += `\nPaiement à la livraison.`;

      const numero = (typeof SITE_CONFIG !== "undefined") ? SITE_CONFIG.whatsappNumber : "213XXXXXXXXX";
      const lien = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

      window.open(lien, "_blank");
    });
  }

});
