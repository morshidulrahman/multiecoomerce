import React from "react";
import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Color } from "../configs/Color";
function ProductCard({ item }) {
  return (
    <div className="border rounded-md px-2 py-3 cursor-pointer hover:-top-2 shadow-md">
      <img src={item.imgUrl} alt="chair" className="w-48 h-48" />
      <motion.h3
        whileTap={{ scale: 1.1 }}
        className={`text-[${Color.primarycolor}] font-semibold text-sm mt-2`}
      >
        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
      </motion.h3>
      <p className="text-sm mb-2 capitalize text-gray-600">{item.category}</p>
      <div className="flex justify-between items-center">
        <p className="text-xs">$ {item.price}</p>
        <motion.span
          className={`bg-[${Color.primarycolor}] p-2 flex items-center text-white rounded-full mr-2 justify-end`}
          whileTap={{ scale: 1.2 }}
        >
          <BsCartPlus size={14} />
        </motion.span>
      </div>
    </div>
  );
}

export default ProductCard;