import React from "react";
import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Color } from "../configs/Color";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/slices/cartSlice";
import { toast } from "react-toastify";
function ProductCard({ item }) {
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(
      addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("cart added successfully");
  };
  return (
    <Link to={`/shop/${item.id}`}>
      <div className="border rounded-md px-2 py-3 cursor-pointer hover:-translate-y-2 shadow-md duration-500">
        <img src={item.imgUrl} alt="chair" className="w-48 h-48" />
        <motion.h3
          whileTap={{ scale: 1.1 }}
          className={`text-[${Color.primarycolor}] font-semibold text-sm mt-2`}
        >
          {item.productName}
        </motion.h3>
        <p className="text-sm mb-2 capitalize text-gray-600">{item.category}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs">$ {item.price}</p>
          <motion.span
            onClick={addtoCart}
            className={`bg-[${Color.primarycolor}] p-2 flex items-center text-white rounded-full mr-2 justify-end`}
            whileTap={{ scale: 1.2 }}
          >
            <BsCartPlus size={14} />
          </motion.span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
