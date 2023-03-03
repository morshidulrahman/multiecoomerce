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
  const [mobileproduct, setmobileproduct] = useState([]);
  const [wirelessproduct, setwirelessproduct] = useState([]);
  const [watchproduct, setwatchproduct] = useState([]);

  useEffect(() => {
    const filterproducts = products.filter((item) => item.category === "chair");
    const filetbestseller = products.filter((item) => item.category === "sofa");
    const mobilefilterproducts = products.filter(
      (item) => item.category === "mobile"
    );
    const wirelessfilterproducts = products.filter(
      (item) => item.category === "wireless"
    );
    const watchproduct = products.filter((item) => item.category === "watch");

    setdata(filterproducts);
    setbestseller(filetbestseller);
    setmobileproduct(mobilefilterproducts);
    setwirelessproduct(wirelessfilterproducts);
    setwatchproduct(watchproduct);
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
          <div className="flex md:gap-4 flex-wrap items-center sm:justify-between gap-8 justify-center">
            <div className="text-center sm:text-start">
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
            <img
              src={timerimage}
              alt="img"
              className="w-[30%] hidden sm:flex "
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-10">
        <h2
          className={`text-[${Color.primarycolor}] font-bold text-center text-xl capitalize`}
        >
          New Arrivals
        </h2>
        <ProductList data={mobileproduct} />
        <ProductList data={wirelessproduct} />
      </section>
      <section className="container mx-auto px-6 py-10">
        <h2
          className={`text-[${Color.primarycolor}] font-bold text-center text-xl capitalize`}
        >
          popular in category
        </h2>
        <ProductList data={watchproduct} />
      </section>
    </>
  );
}

export default Home;
