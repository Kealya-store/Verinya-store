import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/data/config";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Category() {
  const { id } = useParams<{ id: string }>();
  const category = CATEGORIES.find((c) => c.id === id);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-display text-sage-deep mb-4">Catégorie introuvable</h1>
        <Link to="/catalogue" className="btn btn-primary">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  const products = getProductsByCategory(category.id);

  return (
    <>
      <section className="py-16 md:py-20 text-center bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 text-clay-deep font-medium mb-4 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au catalogue
          </Link>
          <h1 className="font-display font-semibold text-sage-deep text-[2.5rem] md:text-[3.25rem] mb-5">
            {category.label}
          </h1>
          <p className="text-lg text-ink-soft">{category.description}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#fafafa]">
        <div className="mx-auto max-w-[1200px] px-[5%]">
          {products.length === 0 ? (
            <p className="text-center text-ink-soft">Aucun produit dans cette catégorie.</p>
          ) : (
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
