import React from "react";
import CommonTitle from "../Components/Shop/CommonTitle";
import { Color } from "../Components/configs/Color";
import { TotalAmount } from "../Redux/slices/cartSlice";
import { TotalQuantity } from "../Redux/slices/cartSlice";
import { useSelector } from "react-redux";
function Checkout() {
  const totalAmount = useSelector(TotalAmount);
  const totalQuantity = useSelector(TotalQuantity);
  return (
    <div>
      <CommonTitle title="checkout" />
      <div className="container px-6 mx-auto">
        <div className="py-10">
          <h1 className="font-bold capitalize text-xl py-2 mb-2">
            billing info
          </h1>
          <div className="grid grid-cols-3 gap-5">
            <div className="md:col-span-2 col-span-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
              <input
                type="email"
                placeholder="Enter your mail"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
              <input
                type="number"
                placeholder="Enter your phone number"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
              <input
                type="text"
                placeholder="Street address"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
              <input
                type="text"
                placeholder="City"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />{" "}
              <input
                type="text"
                placeholder="Postal Code"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />{" "}
              <input
                type="text"
                placeholder="Enter your country"
                className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-2 w-full text-sm"
              />
            </div>
            <div className="md:col-span-1 col-span-3">
              <div
                className={`bg-[${Color.primarycolor}] rounded-md p-5 text-white`}
              >
                <div className="flex justify-between items-center  mb-2 text-sm">
                  <h3 className="">Toal qty :</h3>
                  <span>{totalQuantity} items</span>
                </div>
                <div className="flex justify-between items-center  mb-2 text-sm">
                  <h3>Subtotal :</h3>
                  <span>$ {totalAmount}</span>
                </div>
                <div className="flex justify-between items-center  mb-2 text-sm">
                  <h3>
                    {" "}
                    Shipping <br />
                    Free shipping{" "}
                  </h3>
                  <span>0</span>
                </div>
                <div className="flex justify-between items-center font-bold mb-2 border-t border-t-slate-600 py-2">
                  <h3>Total cost:</h3>
                  <span>$ {totalAmount}</span>
                </div>
                <button
                  className={`text-[#0a1d37] bg-white rounded-md px-4 py-2 w-full text-center cursor-pointer capitalize font-semibold`}
                >
                  place in order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
