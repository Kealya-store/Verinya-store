import { useState } from "react";
import { CATEGORIES } from "@/data/config";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type FilterValue = "all" | (typeof CATEGORIES)[number]["id"];

export default function Catalog() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.categorie === filter);

  return (
    <>
      <section className="py-16 md:py-20 text-center bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <h1 className="font-display font-semibold text-sage-deep text-[2.5rem] md:text-[3.25rem] mb-5">
            Notre Catalogue
          </h1>
          <p className="text-lg text-ink-soft">
            Découvrez tous nos vêtements professionnels, personnalisables ou non.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-[1200px] px-[5%] flex flex-wrap justify-center gap-3.5">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-full font-semibold text-[0.95rem] transition-all ${
              filter === "all"
                ? "bg-clay-deep text-white"
                : "bg-[#eee] text-ink hover:bg-[#e0d8cc]"
            }`}
          >
            Tous
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold text-[0.95rem] transition-all ${
                filter === cat.id
                  ? "bg-clay-deep text-white"
                  : "bg-[#eee] text-ink hover:bg-[#e0d8cc]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#fafafa]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          {filtered.length === 0 ? (
            <p className="text-center text-ink-soft">Aucun produit dans cette catégorie.</p>
          ) : (
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
