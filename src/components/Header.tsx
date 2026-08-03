import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/#categories", label: "Catégories" },
  { to: "/#avantages", label: "Personnalisation" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/#")) return false;
    return location.pathname.startsWith(to);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[5%] h-20">
          <Link to="/" className="font-display font-bold text-2xl text-sage-deep tracking-wide">
            VERINYA STORE
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.to) ? "text-clay-deep" : "text-ink hover:text-clay-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/devis"
              className="bg-clay-deep text-white px-5 py-3 rounded-lg font-semibold transition-colors hover:bg-clay"
            >
              Demander un devis
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6 text-sage-deep" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/35 animate-fade-in-fast"
            onClick={closeMenu}
          />
          <nav className="absolute right-0 top-0 h-full w-[280px] bg-white flex flex-col items-start p-8 pt-8 gap-5 shadow-[-5px_0_20px_rgba(0,0,0,0.15)] animate-slide-in-right">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="font-display font-bold text-xl text-sage-deep">Menu</span>
              <button onClick={closeMenu} aria-label="Fermer le menu">
                <X className="w-6 h-6 text-sage-deep" />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="text-lg font-medium text-ink hover:text-clay-deep transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/devis"
              onClick={closeMenu}
              className="bg-clay-deep text-white px-5 py-3 rounded-lg font-semibold w-full text-center mt-2"
            >
              Demander un devis
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] font-semibold mt-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
