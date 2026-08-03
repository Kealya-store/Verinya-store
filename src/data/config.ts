export const SITE_CONFIG = {
  whatsappNumber: "213XXXXXXXXX",
  whatsappDisplay: "21X XX XX XX XX",
};

export const CATEGORIES = [
  { id: "tshirts", label: "T-Shirts", description: "Classiques & Oversize", image: "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "polos", label: "Polos", description: "Manches courtes & longues", image: "https://images.pexels.com/photos/7648278/pexels-photo-7648278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "tricots", label: "Tricots", description: "Pulls & Gilets", image: "https://images.pexels.com/photos/12967/pexels-photo-12967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "hoodies", label: "Hoodies", description: "Avec ou sans fermeture", image: "https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "cuisine", label: "Cuisine", description: "Tabliers & Chemises", image: "https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "travail", label: "Travail", description: "Gilets & Dossards", image: "https://images.pexels.com/photos/34442873/pexels-photo-34442873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "sport", label: "Sport", description: "Équipes & Clubs", image: "https://images.pexels.com/photos/38083557/pexels-photo-38083557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
] as const;

export type CategoryId = typeof CATEGORIES[number]["id"];
