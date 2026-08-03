import { Link } from "react-router-dom";
import { ArrowRight, Shirt, Palette, Truck, FileText, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/config";
import { PRODUCTS } from "@/data/products";

const ADVANTAGES = [
  { icon: Shirt, title: "Produit d'origine", text: "Achetez nos vêtements sans personnalisation." },
  { icon: Palette, title: "Personnalisation", text: "Logo, texte, numéro, image ou design selon votre demande." },
  { icon: Truck, title: "Livraison", text: "Livraison rapide partout en Algérie." },
  { icon: FileText, title: "Devis gratuit", text: "Recevez rapidement un devis personnalisé." },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-[5%] py-16 md:py-20 min-h-[80vh] max-w-[1200px] mx-auto">
        <div className="flex-1 animate-fade-in">
          <span className="block uppercase tracking-[0.12em] text-xs font-semibold text-clay-deep mb-3">
            VERINYA STORE
          </span>
          <h1 className="font-display font-semibold text-sage-deep leading-[1.15] mb-5 text-[2.2rem] md:text-[3.4rem]">
            Vêtements professionnels<br />
            personnalisables pour<br />
            entreprises, associations<br />
            et clubs sportifs
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft mb-9 max-w-[650px]">
            Nous réalisons des vêtements professionnels de qualité, disponibles en
            version d'origine ou entièrement personnalisés avec votre logo, votre
            texte ou votre identité visuelle.
          </p>
          <div className="flex gap-5 flex-wrap">
            <Link to="/catalogue" className="btn btn-primary">
              Découvrir nos produits
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/devis" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center order-first md:order-last">
          <img
            src="https://images.pexels.com/photos/1488470/pexels-photo-1488470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Verinya Store"
            className="max-w-[600px] w-full rounded-xl shadow-card animate-scale-in"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6" aria-hidden="true">
        <svg viewBox="0 0 600 24" preserveAspectRatio="none" className="w-full h-5 stroke-clay stroke-2 fill-none" style={{ strokeLinecap: "round" }}>
          <path d="M0,12 C150,24 250,0 300,12 C350,24 450,0 600,12" />
        </svg>
      </div>

      {/* Categories */}
      <section id="categories" className="py-20 md:py-25 bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <div className="text-center mb-15">
            <h2 className="font-display font-semibold text-sage-deep text-[1.5rem] md:text-[2.1rem] mb-3">
              Nos catégories
            </h2>
            <p className="text-ink-soft max-w-[700px] mx-auto">
              Choisissez la catégorie qui correspond à votre activité. Tous nos
              produits sont disponibles en version d'origine ou entièrement personnalisés.
            </p>
          </div>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/categorie/${cat.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-card-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
              >
                <div className="w-full h-[260px] overflow-hidden bg-ivory-deep">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="px-5 pt-5 text-2xl font-display font-medium text-sage-deep">
                  {cat.label}
                </h3>
                <p className="px-5 pb-6 text-ink-soft">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="avantages" className="py-20 md:py-25 bg-white">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <div className="text-center mb-15">
            <h2 className="font-display font-semibold text-sage-deep text-[1.5rem] md:text-[2.1rem] mb-3">
              Pourquoi choisir Verinya Store ?
            </h2>
            <p className="text-ink-soft max-w-[700px] mx-auto">
              Nous accompagnons les entreprises, associations, restaurants et
              clubs sportifs avec des vêtements de qualité.
            </p>
          </div>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-2xl p-8 shadow-card-sm text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-clay/15 mb-4">
                  <adv.icon className="w-7 h-7 text-clay-deep" />
                </div>
                <h3 className="font-display font-medium text-clay-deep text-xl mb-3">
                  {adv.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-25 bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <div className="text-center mb-15">
            <span className="inline-flex items-center gap-2 text-clay-deep font-semibold text-sm uppercase tracking-wide mb-2">
              <Sparkles className="w-4 h-4" />
              Sélection
            </span>
            <h2 className="font-display font-semibold text-sage-deep text-[1.5rem] md:text-[2.1rem] mb-3">
              Nos produits phares
            </h2>
            <p className="text-ink-soft max-w-[700px] mx-auto">
              Tous nos vêtements sont disponibles en version d'origine ou personnalisée.
            </p>
          </div>
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <Link
                key={product.id}
                to={`/produit/${product.id}`}
                className="group block bg-white rounded-xl shadow-card-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="w-full h-[280px] overflow-hidden bg-ivory-deep">
                  <img
                    src={product.image}
                    alt={product.nom}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="px-5 pt-5 pb-1 text-xl font-display font-medium text-sage-deep">
                  {product.nom}
                </h3>
                <p className="px-5 text-ink-soft text-[0.95rem] mb-3">{product.description}</p>
                <div className="flex gap-2.5 flex-wrap px-5 pb-5">
                  <span className="badge">{product.prix}</span>
                  {product.personnalisable && <span className="badge badge-custom">Personnalisable</span>}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/catalogue" className="btn btn-primary">
              Voir tout le catalogue
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
