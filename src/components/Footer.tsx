import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-sage-deep text-ivory-deep text-center px-6 py-12">
      <div className="font-display font-bold text-3xl text-ivory mb-3">Verinya</div>
      <p className="text-sm mb-1">Livraison dans toute l'Algérie · Paiement à la livraison</p>
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-semibold text-ivory hover:text-clay-light transition-colors mt-2"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp : {SITE_CONFIG.whatsappDisplay}
      </a>
      <p className="text-xs text-ivory-deep/60 mt-4">
        © {new Date().getFullYear()} Verinya Store. Tous droits réservés.
      </p>
    </footer>
  );
}
