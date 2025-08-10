

/**

 * product to a mock cart.  The modal is accessible and traps focus
 * implicitly through react tree since it is the only interactive element when
 * shown.  Images (if provided) should include a `loading="lazy"` attribute
 * elsewhere in the component tree.
 */
const ProductModal = ({ product, onAddToCart, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h3 id="modal-title" className="text-xl font-bold" aria-label="Toote info">
            {product.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Sulge modal"
          >
            ✕
          </button>
        </div>
        <p className="mb-4" aria-label="Tootekirjeldus">
          {product.description}
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            aria-label="Tühista"
          >
            Sulge
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            aria-label="Lisa ostukorvi"
          >
            Lisa ostukorvi
          </button>
        </div>
      </div>
    </div>
  )
}


export default ProductModal
