import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonTitle from "../Components/Shop/CommonTitle";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { Color } from "../Components/configs/Color";
function Productdetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);
  const {
    imgUrl,
    productName,
    price,
    shortDesc,
    avgRating,
    review,
    description,
  } = product;
  return (
    <div>
      <CommonTitle title={productName} />
      <div className="grid grid-cols-2 gap-4 container px-6 mx-auto">
        <div className="col-span-1">
          <img
            src={imgUrl}
            alt={productName}
            loading="lazy"
            className="w-[90%] h-[90%]"
          />
        </div>
        <div className="col-span-1">
          <div className="py-6">
            <h2 className="font-semibold text-lg">{productName}</h2>
            <div className="flex space-x-2 items-center py-1">
              <div className="flex space-x-1">
                <span>
                  <AiFillStar color="orange" size={20} />
                </span>
                <span>
                  <AiFillStar color="orange" size={20} />
                </span>
                <span>
                  <AiFillStar color="orange" size={20} />
                </span>
                <span>
                  <AiFillStar color="orange" size={20} />
                </span>
                <span>
                  <AiFillStar color="orange" size={20} />
                </span>
              </div>
              <span>{avgRating} ratings</span>
            </div>
            <p className="py-2">$ {price}</p>
            <p className="text-xs text-gray-500">{shortDesc}</p>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className={`bg-[${Color.primarycolor}] text-white px-4 py-2 cursor-pointer capitalize text-sm rounded-md my-3`}
            >
              add to cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
