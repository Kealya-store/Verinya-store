// ==========================================================
// VERINYA STORE - Base de données des produits
// ==========================================================

const DEFAULT_COULEURS = [
    "Blanc",
    "Noir",
    "Gris",
    "Bleu Marine",
    "Rouge",
    "Vert"
];

const DEFAULT_TAILLES = [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
];

const DEFAULT_TECHNIQUES = [
    "Broderie",
    "DTF",
    "Sérigraphie",
    "Flocage"
];

const products = [

{
id:"tshirt-classique",
nom:"T-Shirt Classique",
categorie:"tshirts",
prix:"À partir de 1200 DA",
image:"assets/img/tshirt.jpg",
description:"T-Shirt 100% coton disponible vierge ou personnalisé.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"tshirt-oversize",
nom:"T-Shirt Oversize",
categorie:"tshirts",
prix:"À partir de 1600 DA",
image:"assets/img/oversize.jpg",
description:"Coupe oversize moderne.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"polo-simple",
nom:"Polo Classique",
categorie:"polos",
prix:"À partir de 1800 DA",
image:"assets/img/polo.jpg",
description:"Polo professionnel.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"polo-long",
nom:"Polo Manches Longues",
categorie:"polos",
prix:"À partir de 2100 DA",
image:"assets/img/polo-long.jpg",
description:"Polo manches longues.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"tricot-simple",
nom:"Tricot Classique",
categorie:"tricots",
prix:"À partir de 2400 DA",
image:"assets/img/tricot.jpg",
description:"Tricot professionnel.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"tricot-polo",
nom:"Tricot Polo",
categorie:"tricots",
prix:"À partir de 2600 DA",
image:"assets/img/tricot-polo.jpg",
description:"Tricot style polo.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"hoodie-classique",
nom:"Hoodie Classique",
categorie:"hoodies",
prix:"À partir de 2900 DA",
image:"assets/img/hoodie.jpg",
description:"Hoodie personnalisable.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"hoodie-zippe",
nom:"Hoodie Zippé",
categorie:"hoodies",
prix:"À partir de 3200 DA",
image:"assets/img/hoodie-zippe.jpg",
description:"Hoodie avec fermeture.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"tablier",
nom:"Tablier Cuisine",
categorie:"cuisine",
prix:"À partir de 900 DA",
image:"assets/img/tablier.jpg",
description:"Tablier professionnel.",
couleurs:DEFAULT_COULEURS,
tailles:["Unique"],
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"chemise-cuisine",
nom:"Chemise Cuisine",
categorie:"cuisine",
prix:"À partir de 2500 DA",
image:"assets/img/chemise-cuisine.jpg",
description:"Chemise cuisine professionnelle.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"gilet",
nom:"Gilet Travail",
categorie:"travail",
prix:"À partir de 1700 DA",
image:"assets/img/gilet.jpg",
description:"Gilet professionnel.",
couleurs:["Jaune","Orange"],
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"dossard-ouvert",
nom:"Dossard Ouvert",
categorie:"travail",
prix:"À partir de 850 DA",
image:"assets/img/dossard-ouvert.jpg",
description:"Dossard ouvert.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"dossard-ferme",
nom:"Dossard Fermé",
categorie:"travail",
prix:"À partir de 950 DA",
image:"assets/img/dossard-ferme.jpg",
description:"Dossard fermé.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:DEFAULT_TECHNIQUES
},

{
id:"dossard-sport",
nom:"Dossard Sport",
categorie:"sport",
prix:"À partir de 700 DA",
image:"assets/img/sport.jpg",
description:"Dossard sportif.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:["Flocage","Sublimation"]
},

{
id:"maillot-sport",
nom:"Maillot Sport",
categorie:"sport",
prix:"À partir de 1900 DA",
image:"assets/img/maillot.jpg",
description:"Maillot personnalisé.",
couleurs:DEFAULT_COULEURS,
tailles:DEFAULT_TAILLES,
personnalisable:true,
techniques:["Flocage","Sublimation"]
}

];