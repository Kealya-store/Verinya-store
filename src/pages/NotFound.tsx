import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto max-w-[520px] bg-white rounded-xl shadow-card p-10">
        <h1 className="font-display font-semibold text-sage-deep text-5xl mb-4">404</h1>
        <p className="text-ink-soft text-lg mb-6">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
