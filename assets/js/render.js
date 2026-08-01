// ==========================================================
// AFFICHAGE DES PRODUITS
// Utilisé par catalogue.html ET par toutes les pages
// dans /pages/ (tshirts.html, polos.html, etc.)
// ==========================================================

// Détecte si on est dans le dossier /pages/ pour corriger les liens
function getBasePath() {
  return window.location.pathname.includes("/pages/") ? "../" : "";
}

// Construit une carte produit cliquable
function createProductCard(product) {
  const base = getBasePath();

  const card = document.createElement("a");
  card.href = base + "produit.html?id=" + product.id;
  card.className = "product-card";
  card.dataset.category = product.categorie;

  card.innerHTML = `
    <img src="${base}${product.image}" alt="${product.nom}">
    <h3>${product.nom}</h3>
    <p>${product.description}</p>
    <div class="badge-group">
      <span class="badge">${product.prix}</span>
      <span class="badge badge-custom">Personnalisable</span>
    </div>
  `;

  return card;
}

// Affiche les produits dans un conteneur, avec filtre optionnel par catégorie
function renderProducts(containerId, categoryFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const list = categoryFilter
    ? products.filter(p => p.categorie === categoryFilter)
    : products;

  if (list.length === 0) {
    container.innerHTML = "<p>Aucun produit disponible pour le moment.</p>";
    return;
  }

  list.forEach(p => container.appendChild(createProductCard(p)));
}
