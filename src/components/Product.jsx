import React from "react";

const ProductItem = ({ product }) => (
  <div className="product-item flex flex-col w-96 items-center bg-white rounded-lg shadow-xl p-4">
    <div className="bg-contain">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
        width="200"
        height="200"
      />
    </div>
    <div className="text-center">
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-xl">${product.price}</p>
      <p className="text-slate-400">Category: {product.category}</p>
    </div>
  </div>
);

export default ProductItem;
