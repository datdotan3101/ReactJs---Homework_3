import React, { useState } from "react";

export default function ProductList({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Hàm mở modal
  const handleModalOpen = () => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full border border-gray-400 rounded-lg p-4">
      <div className="flex items-center justify-center mb-8">
        <img className="w-40 h-40" src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.name}</h4>
        <h4>{product.price} $</h4>
        <button
          onClick={handleModalOpen}
          className="p-2 bg-black text-white rounded"
        >
          Add to Cart
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClose}
        >
          <div
            className="bg-white p-4 rounded shadow-md w-3/4 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-bold">Product Details</h3>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-black"
              >
                &times;
              </button>
            </div>
            {/* Nội dung modal */}
            {selectedProduct && (
              <div className="mt-4 grid grid-cols-2">
                <div>
                  <img src={selectedProduct.image} alt="" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    {selectedProduct.name}
                  </h4>

                  <p>Price: {selectedProduct.price} $</p>
                  <p>Description: {selectedProduct.description}</p>
                </div>
              </div>
            )}
            {/* Footer modal */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
