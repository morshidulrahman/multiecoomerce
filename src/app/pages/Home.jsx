import React, { useEffect, useState } from "react";
import { Color } from "../Components/configs/Color";
import Hero from "../Components/Hero";
import ProductList from "../Components/products/ProductList";
import Services from "../Components/Services";
import products from "../assets/data/products";
import timerimage from "../assets/images/counter-timer-img.png";
import { Link } from "react-router-dom";
import Clock from "../Components/configs/Clock";
function Home() {
  const [data, setdata] = useState([]);
  const [bestseller, setbestseller] = useState([]);
  useEffect(() => {
    const filterproducts = products.filter((item) => item.category === "chair");
    const filetbestseller = products.filter((item) => item.category === "sofa");
    setdata(filterproducts);
    setbestseller(filetbestseller);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <section className="container mx-auto px-6 py-10">
        <h2
          className={`text-[${Color.primarycolor}] font-bold text-center text-xl capitalize`}
        >
          Trending products
        </h2>
        <ProductList data={data} />
      </section>
      <section className="container mx-auto px-6 py-10">
        <h2
          className={`text-[${Color.primarycolor}] font-bold text-center text-xl capitalize`}
        >
          Best Sales
        </h2>
        <ProductList data={bestseller} />
      </section>
      <section className={`bg-[${Color.primarycolor}]`}>
        <div className="container mx-auto px-6 py-10 ">
          <div className="flex justify-between flex-wrap items-center">
            <div>
              <p className="text-white/90 font-semibold capitalize text-sm leading-6">
                Limited offers
              </p>
              <p className="text-white/90 font-semibold mb-2 capitalize">
                Quality Armchair
              </p>
              <div>
                <Clock />
              </div>
              <button
                className={`text-[${Color.primarycolor}] bg-white rounded-sm px-3 py-2 capitalize text-xs font-semibold`}
              >
                <Link to="/shop">visit store</Link>
              </button>
            </div>
            <img src={timerimage} alt="img" className="w-[30%]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
