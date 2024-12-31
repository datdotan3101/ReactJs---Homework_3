import React, { useState } from "react";
import ProductList from "./product-list";
import ProductItem from "./product-detail";
import data from "./data.json";

export default function Index() {
  const [products, setProducts] = useState(data);
  const handleProductsData = (data) => {
    setViewDetailProduct(data);
  };
  const [viewDetailProduct, setViewDetailProduct] = useState(null);

  return (
    <div className="max-w-[80%] mx-auto">
      <h2 className="text-center text-2xl text-gray-500">Shoes Shop</h2>
      <div>
        <div className="grid grid-cols-3 col-span-2 gap-2">
          {products.map((product) => {
            return (
              <ProductList
                product={product}
                onClickProductsData={handleProductsData}
              />
            );
          })}
        </div>
        {/* Detail  */}
        <div>
          {viewDetailProduct != null && (
            <>
              <ProductItem viewDetails={viewDetailProduct} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
