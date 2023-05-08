import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="flex items-center gap-6 md:gap-4 mt-12 flex-wrap justify-center md:justify-between">
      {data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
