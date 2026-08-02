// ==========================================================
// FORMULAIRE DE DEVIS -> WhatsApp
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("devis-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const entreprise = document.getElementById("entreprise").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const produit = document.getElementById("produit").value;
    const quantite = document.getElementById("quantite").value.trim();
    const personnalisation = document.getElementById("personnalisation").value.trim();
    const delai = document.getElementById("delai").value.trim();

    let texte = `Bonjour, je souhaite une demande de devis :\n\n`;
    texte += `Nom : ${nom}\n`;
    if (entreprise) texte += `Entreprise / Association : ${entreprise}\n`;
    texte += `Téléphone : ${telephone}\n`;
    texte += `Produit(s) : ${produit}\n`;
    if (quantite) texte += `Quantité estimée : ${quantite}\n`;
    if (personnalisation) texte += `Personnalisation : ${personnalisation}\n`;
    if (delai) texte += `Délai souhaité : ${delai}\n`;

      openWhatsapp(texte); // défini dans config.js (vérifie que le numéro est configuré)
  });

});
