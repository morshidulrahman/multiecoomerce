import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonTitle from "../Components/Shop/CommonTitle";
import { Cartitems, deletItems, TotalAmount } from "../Redux/slices/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { Color } from "../Components/configs/Color";
import { Link } from "react-router-dom";
function Cart() {
  const Cartitemslist = useSelector(Cartitems);
  const Totalammount = useSelector(TotalAmount);
  return (
    <div>
      <div>
        <CommonTitle title="cart" />
      </div>
      <div className="container mx-auto px-6">
        <div className="my-12">
          {Cartitemslist.length === 0 ? (
            <>
              <h2 className="text-center capitalize font-bold ">
                cart is empty
              </h2>
            </>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-6">
                <table className="col-span-3">
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
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
                <div className="col-span-1">
                  <div className="flex justify-between items-center font-bold">
                    <p>Subtotal</p>
                    <span>${Totalammount}</span>
                  </div>
                  <p className="text-sm text-gray-400 py-2">
                    taxes and shipping will calculate in checkout
                  </p>
                  <div>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className={`bg-[${Color.primarycolor}] text-white rounded-md px-4 py-2 w-full mb-4 text-sm capitalize`}
                    >
                      <Link to="/checkout">checkout</Link>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className={`bg-[${Color.primarycolor}] text-white rounded-md px-4 py-2 w-full text-sm capitalize`}
                    >
                      <Link to="/shop">continue shopping</Link>
                    </motion.button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
const Tr = ({ item }) => {
  const disptach = useDispatch();
  const dleteditd = () => {
    disptach(deletItems(item.id));
  };
  return (
    <tr className="text-sm border-b-2">
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
      <motion.td whileTap={{ scale: 1.2 }} className="pl-3" onClick={dleteditd}>
        <RiDeleteBin5Line size={18} />
      </motion.td>
    </tr>
  );
};

export default Cart;
