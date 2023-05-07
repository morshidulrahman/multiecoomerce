import React, { useEffect, useState } from "react";
import { Color } from "../configs/Color";
import { BiSearch } from "react-icons/bi";
import ProductList from "../products/ProductList";
import products from "../../assets/data/products";
import UseGetdata from "../Hook/UseGetdata";
import Loader from "../Loader/Loader";
function ShopComponent() {
  const { data: products, loading } = UseGetdata("product");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setProductsData(products);
    }
  }, [loading]);

  const handlefilter = (value) => {
    if (value === "sofa") {
      const filterproducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filterproducts);
    }
    if (value === "sofa") {
      const filterproducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filterproducts);
    }
    if (value === "mobile") {
      const filterproducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterproducts);
    }
    if (value === "chair") {
      const filterproducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filterproducts);
    }
    if (value === "watch") {
      const filterproducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filterproducts);
    }
    if (value === "wireless") {
      const filterproducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filterproducts);
    }
  };
  const handlesearch = (value) => {
    const searchproducts = products.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );
    setProductsData(searchproducts);
  };

  const sortinghandler = (value) => {
    if (value === "ascending") {
      const filterdata = products.slice().sort((a, b) => a.price - b.price);
      setProductsData(filterdata);
    } else if (value === "descending") {
      const filterdata = products.slice().sort((a, b) => b.price - a.price);
      setProductsData(filterdata);
    } else {
      setProductsData(products);
    }
  };

  return (
    <>
      <div className="container px-6 mx-auto py-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <select
              onChange={(e) => handlefilter(e.target.value)}
              className={`bg-[${Color.primarycolor}] text-white p-2 rounded-md text-sm cursor-pointer border border-[${Color.primarycolor}] outline-none`}
            >
              <option>Filter By Category</option>
              <option value="sofa" className="capitalize text-sm py-2">
                sofa
              </option>
              <option value="mobile" className="capitalize text-sm py-2">
                mobile
              </option>
              <option value="chair" className="capitalize text-sm py-2">
                chair
              </option>
              <option value="watch" className="capitalize text-sm py-2">
                watch
              </option>
              <option value="wireless" className="capitalize text-sm py-2">
                wireless
              </option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-1">
            <select
              className={`bg-[${Color.primarycolor}] text-white p-2 rounded-md text-sm cursor-pointer border border-[${Color.primarycolor}] outline-none`}
              onChange={(e) => sortinghandler(e.target.value)}
            >
              <option>Sort By</option>
              <option value="ascending" className="capitalize text-sm py-2">
                ascending
              </option>
              <option value="descending" className="capitalize text-sm py-2">
                descending
              </option>
            </select>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="flex relative">
              <input
                onChange={(e) => handlesearch(e.target.value)}
                type="text"
                placeholder="search..."
                className="border border-gray-300 w-full px-4 text-xs py-2 rounded-md outline-none"
              />
              <span
                className={`text-[${Color.primarycolor}] absolute top-2 right-2`}
              >
                <BiSearch size={18} color="#0a1d37" />
              </span>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {productsData.length == 0 ? (
              <div className=" py-3 md:py-20 ">
                <h1 className="font-bold text-2xl text-center">
                  product not found
                </h1>
              </div>
            ) : (
              <ProductList data={productsData} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ShopComponent;
