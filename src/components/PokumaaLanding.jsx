import { useState } from 'react'
import { BRONEERI_URL, EPOOD_URL, UUDISKIRI_URL } from '../config.ts'
import NewsletterForm from './NewsletterForm.jsx'
import ProductModal from './ProductModal.jsx'

// Example product catalogue for the shop section.  In a real implementation
// this data would come from an API or CMS.
const products = [
  {
    id: 1,
    name: 'Poku T‑särk',
    description: 'Õrgekvaliteediline T‑särk Pokumaa teemaliste illustratsioonidega.',
  },
  {
    id: 2,
    name: 'Poku müts',
    description: 'Stiilne ja soe müts kõigile Pokumaa fännidele.',
  },
]

const PokumaaLanding = () => {
  // Maintain a simple cart state (array of product IDs).  This is a mock
  // implementation; in a real application you would persist the cart and
  // potentially sync it with a backend.
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    setSelectedProduct(null)
  }

  return (
    <div className="p-8 text-center space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Tere tulemast Pokumaale</h1>
        <p className="mb-6 max-w-xl mx-auto">
          Avasta Pokumaa maagiline maailm, kus ootavad ees seiklused, sõbrad ja
 põnevaid mänge.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
  <a href={BRONEERI_URL} aria-label="Broneeri külastus"
     className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md">
    Broneeri külastus
  </a>
  <a href={EPOOD_URL} aria-label="Vaata e‑poodi"
     className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-100">
    Vaata e‑poodi
  </a>
  <a href={UUDISKIRI_URL} aria-label="Liitu uudiskirjaga"
     className="px-6 py-3 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200">
    Liitu uudiskirjaga
  </a>
</div>

             className="px-6 py-3 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200"
             aria-label="Liitu uudiskirjaga">
            Liitu
          </a>
        </div>

      {/* Shop section with products */}
      <section aria-label="Pokumaa e‑pood" className="space-y-6">
        <h2 className="text-3xl font-bold">Meie Merch</h2>
        <div className="grid gap-6 sm:grid-cols-2 justify-center">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              aria-label={`Vaata toote ${product.name} infot`}
            >
              {product.name}
            </button>
          ))}
        </div>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        {cart.length > 0 && (
          <p className="text-sm text-gray-600" aria-live="polite">
            Ostukorvis: {cart.length} toodet
          </p>
        )}
      </section>

      {/* Newsletter subscription */}
      <section aria-label="Uudiskirja tellimine" className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-2">Liitu uudiskirjaga</h2>
        <NewsletterForm />
      </section>
    </div>
  )
}

export default PokumaaLanding
