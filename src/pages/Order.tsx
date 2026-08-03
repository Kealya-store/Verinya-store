import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { getProductById } from "@/data/products";
import { saveOrder, buildWhatsAppMessage } from "@/lib/orders";
import type { OrderData } from "@/lib/orders";
import { SITE_CONFIG } from "@/data/config";

export default function Order() {
  const [params] = useSearchParams();
  const productId = params.get("id");
  const product = getProductById(productId);

  const version = (params.get("version") as "origine" | "personnalise") || "origine";
  const couleur = params.get("couleur") || "";
  const taille = params.get("taille") || "";
  const quantite = Number(params.get("quantite")) || 1;
  const technique = params.get("technique") || "";
  const position = params.get("position") || "";
  const texte = params.get("texte") || "";
  const logo = params.get("logo") || "";

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [adresse, setAdresse] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!product) {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto max-w-[520px] bg-white rounded-xl shadow-card p-10">
          <h2 className="font-display text-sage-deep text-2xl mb-4">Produit introuvable</h2>
          <p className="text-ink-soft mb-6">
            Retourne au catalogue pour choisir un produit.
          </p>
          <Link to="/catalogue" className="btn btn-primary">
            Voir le catalogue
          </Link>
        </div>
      </div>
    );
  }

  const order: OrderData = {
    id: product.id,
    nom: product.nom,
    version,
    couleur,
    taille,
    quantite,
    technique: technique || undefined,
    position: position || undefined,
    texte: texte || undefined,
    logo: logo || undefined,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const delivery = { nom, telephone, ville, adresse, note };
    const result = await saveOrder(product, order, delivery);

    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error || "Une erreur est survenue. Réessayez.");
      return;
    }

    const message = buildWhatsAppMessage(product, order, delivery);
    const lien = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(lien, "_blank");
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto max-w-[520px] bg-white rounded-xl shadow-card p-10 animate-scale-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-5">
            <CheckCircle2 className="w-9 h-9 text-green-600" />
          </div>
          <h2 className="font-display text-sage-deep text-2xl mb-3">Commande envoyée !</h2>
          <p className="text-ink-soft mb-6">
            Ta commande a été enregistrée. WhatsApp s'est ouvert pour finaliser avec
            le vendeur. Si rien ne s'est ouvert, clique sur le bouton ci-dessous.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(product, order, { nom, telephone, ville, adresse, note }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-clay"
            >
              Ouvrir WhatsApp
            </a>
            <Link to="/catalogue" className="text-clay-deep font-medium hover:underline">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[520px] px-[5%]">
        <Link
          to={product ? `/produit/${product.id}` : "/catalogue"}
          className="inline-flex items-center gap-2 text-clay-deep font-medium mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au produit
        </Link>

        <div className="bg-white rounded-xl shadow-card p-8 md:p-10">
          <h2 className="font-display text-sage-deep text-2xl mb-6 text-center">
            Finaliser ma commande
          </h2>

          {/* Recap */}
          <div className="flex gap-4 items-center mb-5 pb-5 border-b border-[#ddd5c8]">
            <img
              src={product.image}
              alt={product.nom}
              className="w-[90px] h-[90px] object-cover rounded-lg"
            />
            <div>
              <h3 className="font-display font-medium text-sage-deep text-lg mb-1">
                {product.nom}
              </h3>
              <p className="text-clay-deep font-semibold">{product.prix}</p>
            </div>
          </div>

          <div className="flex gap-2.5 flex-wrap mb-5">
            <span className="badge">Couleur : {couleur}</span>
            <span className="badge">Taille : {taille}</span>
            <span className="badge">Quantité : {quantite}</span>
            <span className={`badge ${version === "personnalise" ? "badge-custom" : ""}`}>
              {version === "personnalise" ? "Personnalisé" : "Produit d'origine"}
            </span>
          </div>

          {version === "personnalise" && (technique || position || texte || logo) && (
            <div className="mt-3 mb-5 text-sm text-ink-soft space-y-1">
              {technique && <p>Technique : {technique}</p>}
              {position && <p>Position : {position}</p>}
              {texte && <p>Texte : {texte}</p>}
              {logo && <p>Logo : {logo}</p>}
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-2 bg-red-50 text-red-700 p-3 rounded-lg mb-5 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="input-field"
            />

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              required
              placeholder="05XX XX XX XX"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="input-field"
            />

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Wilaya / Ville
            </label>
            <input
              type="text"
              required
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              className="input-field"
            />

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Adresse de livraison
            </label>
            <input
              type="text"
              required
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              className="input-field"
            />

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Note (optionnel)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Précision supplémentaire..."
              className="input-field min-h-[70px] resize-y"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary btn-block mt-5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Envoyer la commande sur WhatsApp"
              )}
            </button>
          </form>

          <p className="text-xs text-ink-soft text-center mt-4">
            Paiement à la livraison. Ta commande sera confirmée directement par WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
