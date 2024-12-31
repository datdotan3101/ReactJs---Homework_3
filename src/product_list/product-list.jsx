import React from "react";

export default function ProductList({ product, onClickProductsData }) {
  return (
    <div className="w-full border border-gray-400 rounded-lg p-4">
      <div className="flex items-center justify-center mb-8">
        <img className="w-40 h-40" src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.name}</h4>
        <h4>{product.price} $</h4>
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          onClick={() => onClickProductsData(product)}
          className="p-2 bg-black text-white"
        >
          add To Cart
        </button>
      </div>
    </div>
  );
}
