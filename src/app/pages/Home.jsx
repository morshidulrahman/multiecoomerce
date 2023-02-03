import React, { useEffect, useState } from "react";
import { Color } from "../Components/configs/Color";
import Hero from "../Components/Hero";
import ProductList from "../Components/products/ProductList";
import Services from "../Components/Services";
import products from "../assets/data/products";
function Home() {
  const [data, setdata] = useState(products);
  useEffect(() => {
    let filterproducts = products.filter((item) => item.category === "chair");
    setdata(filterproducts);
  }, []);
  console.log(data);
  return (
    <>
      <Hero />
      <Services />
      <section className="container mx-auto px-6 py-5">
        <h2
          className={`text-[${Color.primarycolor}] font-bold text-center text-xl`}
        >
          Trending products
        </h2>
        <ProductList data={data} />
      </section>
    </>
  );
}

export default Home;
