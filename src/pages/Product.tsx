import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { getProductById } from "@/data/products";
import type { OrderData } from "@/lib/orders";

const POSITIONS = ["Poitrine", "Dos", "Manche", "Devant complet"];

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id ?? null);

  const [version, setVersion] = useState<"origine" | "personnalise">("origine");
  const [couleur, setCouleur] = useState(product?.couleurs[0] ?? "");
  const [taille, setTaille] = useState(product?.tailles[0] ?? "");
  const [quantite, setQuantite] = useState(1);
  const [technique, setTechnique] = useState(product?.techniques[0] ?? "");
  const [position, setPosition] = useState(POSITIONS[0]);
  const [texte, setTexte] = useState("");
  const [logo, setLogo] = useState("");

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-display text-sage-deep mb-4">Produit introuvable</h1>
        <p className="text-ink-soft mb-6">Retourne au catalogue pour choisir un produit.</p>
        <Link to="/catalogue" className="btn btn-primary">
          Voir le catalogue
        </Link>
      </div>
    );
  }

  const handleBuy = () => {
    const order: OrderData = {
      id: product.id,
      nom: product.nom,
      version,
      couleur,
      taille,
      quantite,
    };
    if (version === "personnalise") {
      order.technique = technique;
      order.position = position;
      order.texte = texte;
      order.logo = logo;
    }
    const query = new URLSearchParams({
      id: order.id,
      version: order.version,
      couleur: order.couleur,
      taille: order.taille,
      quantite: String(order.quantite),
      ...(order.technique ? { technique: order.technique } : {}),
      ...(order.position ? { position: order.position } : {}),
      ...(order.texte ? { texte: order.texte } : {}),
      ...(order.logo ? { logo: order.logo } : {}),
    });
    navigate(`/commande?${query.toString()}`);
  };

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 text-clay-deep font-medium mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au catalogue
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-start">
            {/* Gallery */}
            <div className="rounded-xl overflow-hidden bg-ivory-deep shadow-card-sm min-h-[400px]">
              <img
                src={product.image}
                alt={product.nom}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="font-display font-semibold text-sage-deep text-[1.75rem] md:text-[2.6rem] mb-5">
                {product.nom}
              </h1>
              <p className="text-ink-soft mb-5">{product.description}</p>
              <p className="text-clay-deep font-semibold text-xl mb-6">{product.prix}</p>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 font-semibold text-sm text-sage-deep">
                    Couleur
                  </label>
                  <select
                    value={couleur}
                    onChange={(e) => setCouleur(e.target.value)}
                    className="input-field"
                  >
                    {product.couleurs.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-sm text-sage-deep">
                    Taille
                  </label>
                  <select
                    value={taille}
                    onChange={(e) => setTaille(e.target.value)}
                    className="input-field"
                  >
                    {product.tailles.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="font-display font-medium text-sage-deep text-lg mb-3">
                    Choisissez votre version
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label
                      className={`flex items-center gap-3 p-4 rounded-lg border-[1.5px] cursor-pointer transition-all ${
                        version === "origine"
                          ? "border-clay bg-clay/10"
                          : "border-[#ddd5c8] hover:border-clay/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="version"
                        value="origine"
                        checked={version === "origine"}
                        onChange={() => setVersion("origine")}
                        className="accent-clay-deep w-4 h-4"
                      />
                      <span className="font-medium">Produit d'origine</span>
                    </label>
                    <label
                      className={`flex items-center gap-3 p-4 rounded-lg border-[1.5px] cursor-pointer transition-all ${
                        version === "personnalise"
                          ? "border-clay bg-clay/10"
                          : "border-[#ddd5c8] hover:border-clay/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="version"
                        value="personnalise"
                        checked={version === "personnalise"}
                        onChange={() => setVersion("personnalise")}
                        className="accent-clay-deep w-4 h-4"
                      />
                      <span className="font-medium">Produit personnalisé</span>
                    </label>
                  </div>
                </div>

                {version === "personnalise" && (
                  <div className="pt-5 border-t border-[#ddd5c8] animate-fade-in-fast">
                    <h3 className="font-display font-medium text-sage-deep text-lg mb-4">
                      Personnalisation
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-2 font-semibold text-sm text-sage-deep">
                          Technique
                        </label>
                        <select
                          value={technique}
                          onChange={(e) => setTechnique(e.target.value)}
                          className="input-field"
                        >
                          {product.techniques.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-sm text-sage-deep">
                          Position
                        </label>
                        <select
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className="input-field"
                        >
                          {POSITIONS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-sm text-sage-deep">
                          Texte à ajouter (optionnel)
                        </label>
                        <input
                          type="text"
                          value={texte}
                          onChange={(e) => setTexte(e.target.value)}
                          placeholder="Votre texte"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-semibold text-sm text-sage-deep">
                          Décris ton logo (tu pourras l'envoyer en photo dans WhatsApp)
                        </label>
                        <textarea
                          value={logo}
                          onChange={(e) => setLogo(e.target.value)}
                          placeholder="Ex: logo rond bleu et blanc avec le nom de l'entreprise"
                          className="input-field min-h-[80px] resize-y"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block mb-2 font-semibold text-sm text-sage-deep">
                    Quantité
                  </label>
                  <input
                    type="number"
                    value={quantite}
                    min={1}
                    onChange={(e) => setQuantite(Math.max(1, Number(e.target.value) || 1))}
                    className="input-field max-w-[120px]"
                  />
                </div>

                <button
                  onClick={handleBuy}
                  className="btn btn-clay btn-block text-base"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Acheter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
