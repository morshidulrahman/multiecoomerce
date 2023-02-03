import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="flex items-center gap-6 mt-16 flex-wrap justify-center md:justify-start">
      {data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
