import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="flex justify-between items-center space-x-4 mt-10 flex-wrap ">
      {data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
}

export default ProductList;
