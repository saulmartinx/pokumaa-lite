import { useState } from 'react';
import { BRONEERI_URL, EPOOD_URL, UUDISKIRI_URL } from '../config.ts';
import NewsletterForm from './NewsletterForm.jsx';
import ProductModal from './ProductModal.jsx';

const products = [
  { id: 1, name: 'Poku T-särk', description: 'Õrgekvaliteediline T-särk Pokumaa teemaliste illustratsioonidega.', price: '19.90€', image: '/poku-shirt.jpg' },
  { id: 2, name: 'Poku müts', description: 'Stiilne ja soe müts kõigile Pokumaa fännidele.', price: '9.90€', image: '/poku-mug.jpg' },
];

const PokumaaLanding = () => {
  // Maintain a simple cart state (array of product items)
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setSelectedProduct(null);
  };

  return (
    <div className="p-8 text-center space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Tere tulemast Pokumaale</h1>
        <p className="mb-6 max-w-xl mx-auto">
          Avasta Pokumaa maagiline maailm, kus ootavad ees seiklused, sõbrad ja põnevaid mänge.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={BRONEERI_URL} aria-label="Broneeri külastus" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md">
            Broneeri külastus
          </a>
          <a href={EPOOD_URL} aria-label="Vaata e-poodi" className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-100">
            Vaata e-poodi
          </a>
          <a href={UUDISKIRI_URL} aria-label="Liitu uudiskirjaga" className="px-6 py-3 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200">
            Liitu uudiskirjaga
          </a>
        </div>
      </section>

      {/* Shop section with products */}
      <section aria-label="Pokumaa e-pood" className="space-y-6">
        <h2 className="text-3xl font-bold">Meie Merch</h2>
        <div className="grid gap-6 sm:grid-cols-2 justify-center">
          {products.map((product) => (
            <div key={product.id} className="border rounded-xl p-4 text-left">
              <img src={product.image} alt={product.name} loading="lazy" className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold">{product.price}</span>
                <div className="flex gap-2">
                  <button aria-label="Vaata toote infot" onClick={() => setSelectedProduct(product)} className="px-3 py-2 border rounded">
                    Info
                  </button>
                  <button aria-label="Lisa ostukorvi" onClick={() => { setSelectedProduct(product); }} className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
                    Lisa ostukorvi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
        {cart.length > 0 && (
          <p className="mt-4 text-sm text-gray-600" aria-live="polite">
            Ostukorvis: {cart.length} toodet
          </p>
        )}
      </section>

      {/* Newsletter section */}
      <section aria-label="Uudiskirja tellimine" className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-2">Liitu uudiskirjaga</h2>
        <NewsletterForm />
      </section>
    </div>
  );
};

export default PokumaaLanding;
