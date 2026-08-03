// ==========================================================
// FORMULAIRE DE CONTACT -> WhatsApp
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const message = document.getElementById("message").value.trim();

    let texte = `Bonjour, je vous contacte via le site Verinya Store.\n\n`;
    texte += `Nom : ${nom}\n`;
    texte += `Téléphone : ${telephone}\n\n`;
    texte += `Message :\n${message}`;

    const numero = (typeof SITE_CONFIG !== "undefined") ? SITE_CONFIG.whatsappNumber : "213XXXXXXXXX";
    const lien = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    window.open(lien, "_blank");
  });

});
