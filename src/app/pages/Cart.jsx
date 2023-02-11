import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonTitle from "../Components/Shop/CommonTitle";
import { Cartitems, deletItems } from "../Redux/slices/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from "framer-motion";

function Cart() {
  const disptach = useDispatch();
  const Cartitemslist = useSelector(Cartitems);
  return (
    <div>
      <CommonTitle title="cart" />
      <div className="container mx-auto px-6">
        <div className="my-12">
          {Cartitemslist.length === 0 ? (
            <h2>No product found</h2>
          ) : (
            <div>
              <table className="w-[60%]">
                <thead className="">
                  <tr className="border-b-2 px-4 text-sm text-left pb-2">
                    <th>Image</th>
                    <th className="w-[40%]">Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Cartitemslist.map((item, index) => (
                    <tr className="text-sm border-b-2" key={index}>
                      <td>
                        <img
                          src={item.imgUrl}
                          alt="title"
                          className="w-[50px] h-[50px]"
                          loading="lazy"
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>${item.price}</td>
                      <td className="pl-2">{item.quantity}</td>
                      <motion.td
                        whileTap={{ scale: 1.2 }}
                        className="pl-3"
                        onClick={() => disptach(deletItems(item.id))}
                      >
                        <RiDeleteBin5Line size={18} />
                      </motion.td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
