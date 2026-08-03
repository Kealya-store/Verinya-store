import { useState } from "react";
import { FileText, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG, CATEGORIES } from "@/data/config";

export default function Quote() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [categorie, setCategorie] = useState("");
  const [quantite, setQuantite] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    let msg = `Bonjour, je souhaite demander un devis :\n\n`;
    msg += `Nom : ${nom}\n`;
    msg += `Téléphone : ${telephone}\n`;
    msg += `Ville : ${ville}\n`;
    msg += `Catégorie : ${categorie}\n`;
    msg += `Quantité estimée : ${quantite}\n`;
    if (description) msg += `Détails : ${description}\n`;

    const lien = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
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
          <h2 className="font-display text-sage-deep text-2xl mb-3">Demande envoyée !</h2>
          <p className="text-ink-soft mb-6">
            Votre demande de devis a été envoyée sur WhatsApp. Nous vous répondrons
            rapidement avec une proposition.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setNom("");
              setTelephone("");
              setVille("");
              setCategorie("");
              setQuantite(1);
              setDescription("");
            }}
            className="btn btn-secondary"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[600px] px-[5%]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-clay/15 mb-4">
            <FileText className="w-7 h-7 text-clay-deep" />
          </div>
          <h1 className="font-display font-semibold text-sage-deep text-[2.2rem] md:text-[2.8rem] mb-4">
            Demander un devis
          </h1>
          <p className="text-ink-soft text-lg">
            Remplissez ce formulaire et recevez un devis personnalisé sur WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-card p-8">
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
              Catégorie de produit
            </label>
            <select
              required
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="input-field"
            >
              <option value="" disabled>
                Choisir une catégorie
              </option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.label}>
                  {cat.label}
                </option>
              ))}
            </select>

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Quantité estimée
            </label>
            <input
              type="number"
              min={1}
              value={quantite}
              onChange={(e) => setQuantite(Math.max(1, Number(e.target.value) || 1))}
              className="input-field max-w-[120px]"
            />

            <label className="text-sm font-semibold text-sage-deep mt-3 mb-1">
              Détails de la demande
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: 20 polos personnalisés avec logo brodé..."
              className="input-field min-h-[100px] resize-y"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary btn-block mt-5 disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi...
                </>
              ) : (
                "Demander mon devis"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
