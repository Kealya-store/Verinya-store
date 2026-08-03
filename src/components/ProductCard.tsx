import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
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
  );
}
