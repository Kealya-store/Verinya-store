// ==========================================================
// PRODUITS VERINYA STORE
// Pour ajouter un produit : copie un bloc {...} et modifie-le.
// Pour changer les couleurs/tailles d'UN produit précis, ajoute-lui
// ses propres champs "couleurs" et/ou "tailles" (sinon les valeurs
// par défaut ci-dessous sont utilisées).
// ==========================================================

const DEFAULT_COULEURS = ["Blanc", "Noir", "Gris", "Bleu marine", "Rouge", "Vert"];
const DEFAULT_TAILLES = ["XS", "S", "M", "L", "XL", "XXL"];

const products = [

{
id:"tshirt-classique",
nom:"T-Shirt Classique",
categorie:"tshirts",
prix:"À partir de 1200 DA",
image:"assets/img/tshirt.jpg",
description:"T-Shirt 100% coton disponible vierge ou personnalisé."
},

{
id:"tshirt-oversize",
nom:"T-Shirt Oversize",
categorie:"tshirts",
prix:"À partir de 1600 DA",
image:"assets/img/oversize.jpg",
description:"Coupe oversize moderne, idéale pour les marques et événements."
},

{
id:"polo-simple",
nom:"Polo Classique",
categorie:"polos",
prix:"À partir de 1800 DA",
image:"assets/img/polo.jpg",
description:"Polo professionnel personnalisable."
},

{
id:"polo-long",
nom:"Polo Manches Longues",
categorie:"polos",
prix:"À partir de 2100 DA",
image:"assets/img/polo-long.jpg",
description:"Polo manches longues pour entreprises."
},

{
id:"tricot-simple",
nom:"Tricot Simple",
categorie:"tricots",
prix:"À partir de 2400 DA",
image:"assets/img/tricot.jpg",
description:"Tricot professionnel confortable."
},

{
id:"tricot-polo",
nom:"Tricot Polo",
categorie:"tricots",
prix:"À partir de 2600 DA",
image:"assets/img/tricot-polo.jpg",
description:"Tricot style polo."
},

{
id:"hoodie-classique",
nom:"Hoodie Classique",
categorie:"hoodies",
prix:"À partir de 2900 DA",
image:"assets/img/hoodie.jpg",
description:"Hoodie personnalisable, capuche simple."
},

{
id:"hoodie-zippe",
nom:"Hoodie Zippé",
categorie:"hoodies",
prix:"À partir de 3200 DA",
image:"assets/img/hoodie-zippe.jpg",
description:"Hoodie avec fermeture zippée, personnalisable."
},

{
id:"tablier",
nom:"Tablier de Cuisine",
categorie:"cuisine",
prix:"À partir de 900 DA",
image:"assets/img/tablier.jpg",
description:"Tablier professionnel."
},

{
id:"chemise-cuisine",
nom:"Chemise de Cuisine",
categorie:"cuisine",
prix:"À partir de 2500 DA",
image:"assets/img/chemise-cuisine.jpg",
description:"Chemise de cuisine professionnelle."
},

{
id:"gilet",
nom:"Gilet de Travail",
categorie:"travail",
prix:"À partir de 1700 DA",
image:"assets/img/gilet.jpg",
description:"Gilet de sécurité personnalisable."
},

{
id:"dossard-ouvert",
nom:"Dossard Ouvert",
categorie:"travail",
prix:"À partir de 850 DA",
image:"assets/img/dossard-ouvert.jpg",
description:"Dossard ouvert professionnel."
},

{
id:"dossard-ferme",
nom:"Dossard Fermé",
categorie:"travail",
prix:"À partir de 950 DA",
image:"assets/img/dossard-ferme.jpg",
description:"Dossard fermé personnalisable."
},

{
id:"dossard-sport",
nom:"Dossard Sport",
categorie:"sport",
prix:"À partir de 700 DA",
image:"assets/img/sport.jpg",
description:"Dossard pour clubs et événements sportifs."
},

{
id:"maillot-sport",
nom:"Maillot Personnalisable",
categorie:"sport",
prix:"À partir de 1900 DA",
image:"assets/img/maillot.jpg",
description:"Maillot de sport personnalisable, floqué au nom de l'équipe."
}

];
