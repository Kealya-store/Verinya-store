import type { CategoryId } from "./config";

export interface Product {
  id: string;
  nom: string;
  categorie: CategoryId;
  prix: string;
  image: string;
  description: string;
  couleurs: string[];
  tailles: string[];
  personnalisable: boolean;
  techniques: string[];
}

const DEFAULT_COULEURS = ["Blanc", "Noir", "Gris", "Bleu Marine", "Rouge", "Vert"];
const DEFAULT_TAILLES = ["S", "M", "L", "XL", "XXL"];
const DEFAULT_TECHNIQUES = ["Broderie", "DTF", "Sérigraphie", "Flocage"];

export const PRODUCTS: Product[] = [
  {
    id: "tshirt-classique",
    nom: "T-Shirt Classique",
    categorie: "tshirts",
    prix: "À partir de 1200 DA",
    image: "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "T-Shirt 100% coton disponible vierge ou personnalisé.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "tshirt-oversize",
    nom: "T-Shirt Oversize",
    categorie: "tshirts",
    prix: "À partir de 1600 DA",
    image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Coupe oversize moderne.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "polo-simple",
    nom: "Polo Classique",
    categorie: "polos",
    prix: "À partir de 1800 DA",
    image: "https://images.pexels.com/photos/7648278/pexels-photo-7648278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Polo professionnel.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "polo-long",
    nom: "Polo Manches Longues",
    categorie: "polos",
    prix: "À partir de 2100 DA",
    image: "https://images.pexels.com/photos/15936940/pexels-photo-15936940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Polo manches longues.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "tricot-simple",
    nom: "Tricot Classique",
    categorie: "tricots",
    prix: "À partir de 2400 DA",
    image: "https://images.pexels.com/photos/12967/pexels-photo-12967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Tricot professionnel.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "tricot-polo",
    nom: "Tricot Polo",
    categorie: "tricots",
    prix: "À partir de 2600 DA",
    image: "https://images.pexels.com/photos/5710033/pexels-photo-5710033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Tricot style polo.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "hoodie-classique",
    nom: "Hoodie Classique",
    categorie: "hoodies",
    prix: "À partir de 2900 DA",
    image: "https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Hoodie personnalisable.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "hoodie-zippe",
    nom: "Hoodie Zippé",
    categorie: "hoodies",
    prix: "À partir de 3200 DA",
    image: "https://images.pexels.com/photos/6311229/pexels-photo-6311229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Hoodie avec fermeture.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "tablier",
    nom: "Tablier Cuisine",
    categorie: "cuisine",
    prix: "À partir de 900 DA",
    image: "https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Tablier professionnel.",
    couleurs: DEFAULT_COULEURS,
    tailles: ["Unique"],
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "chemise-cuisine",
    nom: "Chemise Cuisine",
    categorie: "cuisine",
    prix: "À partir de 2500 DA",
    image: "https://images.pexels.com/photos/6050331/pexels-photo-6050331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Chemise cuisine professionnelle.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "gilet",
    nom: "Gilet Travail",
    categorie: "travail",
    prix: "À partir de 1700 DA",
    image: "https://images.pexels.com/photos/34442873/pexels-photo-34442873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Gilet professionnel.",
    couleurs: ["Jaune", "Orange"],
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "dossard-ouvert",
    nom: "Dossard Ouvert",
    categorie: "travail",
    prix: "À partir de 850 DA",
    image: "https://images.pexels.com/photos/9258892/pexels-photo-9258892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Dossard ouvert.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "dossard-ferme",
    nom: "Dossard Fermé",
    categorie: "travail",
    prix: "À partir de 950 DA",
    image: "https://images.pexels.com/photos/9258892/pexels-photo-9258892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Dossard fermé.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: DEFAULT_TECHNIQUES,
  },
  {
    id: "dossard-sport",
    nom: "Dossard Sport",
    categorie: "sport",
    prix: "À partir de 700 DA",
    image: "https://images.pexels.com/photos/38083557/pexels-photo-38083557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Dossard sportif.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: ["Flocage", "Sublimation"],
  },
  {
    id: "maillot-sport",
    nom: "Maillot Sport",
    categorie: "sport",
    prix: "À partir de 1900 DA",
    image: "https://images.pexels.com/photos/34742833/pexels-photo-34742833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description: "Maillot personnalisé.",
    couleurs: DEFAULT_COULEURS,
    tailles: DEFAULT_TAILLES,
    personnalisable: true,
    techniques: ["Flocage", "Sublimation"],
  },
];

export function getProductById(id: string | null): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(categorie: string): Product[] {
  return PRODUCTS.filter((p) => p.categorie === categorie);
}
