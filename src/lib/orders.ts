import type { Product } from "@/data/products";
import { supabase } from "@/lib/supabase";

export interface OrderData {
  id: string;
  nom: string;
  version: "origine" | "personnalise";
  couleur: string;
  taille: string;
  quantite: number;
  technique?: string;
  position?: string;
  texte?: string;
  logo?: string;
}

export interface OrderRow {
  id: string;
  product_id: string;
  product_name: string;
  version: string;
  couleur: string | null;
  taille: string | null;
  quantite: number;
  technique: string | null;
  position: string | null;
  texte: string | null;
  logo: string | null;
  nom: string;
  telephone: string;
  ville: string;
  adresse: string;
  note: string | null;
  status: string;
  created_at: string;
}

export async function saveOrder(
  product: Product,
  order: OrderData,
  delivery: { nom: string; telephone: string; ville: string; adresse: string; note: string }
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("orders").insert({
    product_id: product.id,
    product_name: product.nom,
    version: order.version,
    couleur: order.couleur || null,
    taille: order.taille || null,
    quantite: order.quantite,
    technique: order.technique || null,
    position: order.position || null,
    texte: order.texte || null,
    logo: order.logo || null,
    nom: delivery.nom,
    telephone: delivery.telephone,
    ville: delivery.ville,
    adresse: delivery.adresse,
    note: delivery.note || null,
  });

  if (error) return { success: false, error: error.message };
  return { success: true };
}

export function buildWhatsAppMessage(
  product: Product,
  order: OrderData,
  delivery: { nom: string; telephone: string; ville: string; adresse: string; note: string }
): string {
  let msg = `Bonjour, je souhaite passer commande :\n\n`;
  msg += `Produit : ${product.nom}\n`;
  msg += `Couleur : ${order.couleur}\n`;
  msg += `Taille : ${order.taille}\n`;
  msg += `Quantité : ${order.quantite}\n`;
  msg += `Version : ${order.version === "personnalise" ? "Personnalisé" : "Produit d'origine"}\n`;

  if (order.version === "personnalise") {
    if (order.technique) msg += `Technique : ${order.technique}\n`;
    if (order.position) msg += `Position : ${order.position}\n`;
    if (order.texte) msg += `Texte à ajouter : ${order.texte}\n`;
    if (order.logo) msg += `Logo : ${order.logo} (je t'enverrai le fichier ici sur WhatsApp)\n`;
  }

  msg += `\nMes informations de livraison :\n`;
  msg += `Nom : ${delivery.nom}\n`;
  msg += `Téléphone : ${delivery.telephone}\n`;
  msg += `Wilaya / Ville : ${delivery.ville}\n`;
  msg += `Adresse : ${delivery.adresse}\n`;
  if (delivery.note) msg += `Note : ${delivery.note}\n`;
  msg += `\nPaiement à la livraison.`;

  return msg;
}
