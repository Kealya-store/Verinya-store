// ==========================================================
// CATALOGUE : affichage + filtres
// Nécessite products.js et render.js chargés AVANT ce fichier
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("catalog-grid");
  if (!grid) return; // on n'est pas sur la page catalogue

  // Affichage initial : tous les produits
  renderProducts("catalog-grid", null);

  const filters = document.querySelectorAll(".filter");

  filters.forEach(button => {
    button.addEventListener("click", () => {

      filters.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const value = button.dataset.filter;
      renderProducts("catalog-grid", value === "all" ? null : value);

    });
  });

});
