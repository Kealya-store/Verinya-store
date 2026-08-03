// ==========================================================
// VERINYA STORE - Génération automatique des produits
// ==========================================================

// Détermine le chemin de base
function getBasePath() {
    return window.location.pathname.includes("/pages/")
        ? "../"
        : "";
}

// Génère une carte produit
function createProductCard(product) {

    const base = getBasePath();

    return `
        <a href="${base}produit.html?id=${product.id}" class="product-card">

            <img src="${base}${product.image}" alt="${product.nom}">

            <h3>${product.nom}</h3>

            <p>${product.description}</p>

            <div class="badge-group">

                <span class="badge">
                    ${product.prix}
                </span>

                ${
                    product.personnalisable
                    ? `<span class="badge badge-custom">
                        Personnalisable
                       </span>`
                    : ""
                }

            </div>

        </a>
    `;
}

// Affiche les produits
function renderProducts(containerId, categorie = null) {

    const container = document.getElementById(containerId);

    if (!container) return;

    let liste = products;

    if (categorie) {
        liste = products.filter(p => p.categorie === categorie);
    }

    container.innerHTML = "";

    liste.forEach(product => {
        container.innerHTML += createProductCard(product);
    });

}