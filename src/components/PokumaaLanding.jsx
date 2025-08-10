import React, { useState } from "react";
import { motion } from "framer-motion";
import { BRONEERI_URL, EPOOD_URL, UUDISKIRI_URL } from "../config";
import NewsletterForm from "./NewsletterForm.jsx";
import ProductModal from "./ProductModal.jsx";

const products = [
  { id: 1, name: "Poku T-särk", description: "Õrgekvaliteediline T-särk Pokumaa illustratsioonidega.", price: "19.90€", image: "/poku-shirt.jpg" },
  { id: 2, name: "Poku müts", description: "Soe müts kõigile Pokumaa fännidele.", price: "9.90€", image: "/poku-mug.jpg" },
];

const fadeParent = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const fadeChild = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function PokumaaLanding() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setSelectedProduct(null);
  };

  return (
    <main className="space-y-12">
      {/* HERO */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        {/* taust + overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/252853-forest-light-and-mother.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />

        {/* sisu */}
        <motion.div className="relative z-10 container mx-auto px-6 max-w-5xl text-center" variants={fadeParent} initial="hidden" animate="show">
          <motion.h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream drop-shadow-md" variants={fadeChild}>
            Tule Pokumaale!
          </motion.h1>
          <motion.p className="font-heading mt-4 text-cream/90 text-lg sm:text-xl max-w-2xl mx-auto" variants={fadeChild}>
            Seiklus kogu perele – loodus, mäng ja maagia.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4" variants={fadeChild}>
            <a
              href={BRONEERI_URL}
              aria-label="Broneeri külastus"
              className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#3A5A40,#FFD166)] text-forest rounded-xl hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-honey"
            >
              Broneeri külastus
            </a>
            <a
              href={EPOOD_URL}
              aria-label="Osta Poku koju"
              className="inline-block px-6 py-3 bg-[linear-gradient(90deg,#3A5A40,#FFD166)] text-forest rounded-xl hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-honey"
            >
              Osta Poku koju
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* E-POOD */}
      <section aria-label="Pokumaa e-pood" className="space-y-6 container mx-auto px-6">
        <h2 className="text-3xl font-heading">Meie Merch</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="border rounded-xl p-4 text-left bg-white/70">
              <img src={product.image} alt={product.name} loading="lazy" className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold">{product.price}</span>
                <div className="flex gap-2">
                  <button aria-label="Vaata toote infot" onClick={() => setSelectedProduct(product)} className="px-3 py-2 border rounded">
                    Info
                  </button>
                  <button
                    aria-label="Lisa ostukorvi"
                    onClick={() => handleAddToCart(product)}
                    className="px-3 py-2 bg-[linear-gradient(90deg,#3A5A40,#FFD166)] text-forest rounded hover:scale-[1.02] transition"
                  >
                    Lisa ostukorvi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} />
        )}

        {cart.length > 0 && (
          <p className="mt-4 text-sm text-gray-700" aria-live="polite">
            Ostukorvis: {cart.length} toodet
          </p>
        )}
      </section>

      {/* UUDISKIRI */}
      <section aria-label="Uudiskirja tellimine" className="max-w-md mx-auto px-6">
        <h2 className="text-3xl font-heading mb-2">Liitu uudiskirjaga</h2>
        <NewsletterForm actionUrl={UUDISKIRI_URL} />
      </section>
    </main>
  );
}
