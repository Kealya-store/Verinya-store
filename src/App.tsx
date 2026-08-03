import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import Category from "@/pages/Category";
import Product from "@/pages/Product";
import Order from "@/pages/Order";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="/categorie/:id" element={<Category />} />
            <Route path="/produit/:id" element={<Product />} />
            <Route path="/commande" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
