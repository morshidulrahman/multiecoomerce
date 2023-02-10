import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonTitle from "../Components/Shop/CommonTitle";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { Color } from "../Components/configs/Color";
import ProductList from "../Components/products/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/slices/cartSlice";
import { toast } from "react-toastify";

function Productdetails() {
  const [tab, settab] = useState("desc");
  const [textarea, settextarea] = useState("");
  const [name, setname] = useState("");
  const { id } = useParams();
  const [rating, setrating] = useState(null);
  const reviewuser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const product = products.find((p) => p.id == id);
  const {
    imgUrl,
    productName,
    price,
    shortDesc,
    avgRating,
    reviews,
    description,
    category,
  } = product;
  const filterproduct = products.filter((item) => item.category == category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewuserName = reviewuser.current.value;
    const reviewMessage = reviewMsg.current.value;

    const reviewobj = {
      auhor: reviewuserName,
      message: reviewMessage,
      rating,
    };
    console.log(reviewobj);

    toast.success("review successfully");
  };

  const addtoCart = () => {
    dispatch(
      addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("product added successfully");
  };

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
          <div className="mt-10">
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
              onClick={addtoCart}
              whileTap={{ scale: 1.2 }}
              className={`bg-[${Color.primarycolor}] text-white px-4 py-2 cursor-pointer capitalize text-sm rounded-sm my-5`}
            >
              add to cart
            </motion.button>
          </div>
        </div>
      </div>
      <div className="py-2 container mx-auto px-6">
        <div className="flex space-x-4 ">
          <p
            className={`${
              tab == "desc"
                ? `border-b-2 capitalize border-b-gray-700 font-semibold`
                : ""
            }`}
            onClick={() => settab("desc")}
          >
            Description
          </p>
          <p
            className={`${
              tab == "rev"
                ? "border-b-2 capitalize border-b-gray-700 font-semibold"
                : ""
            }`}
            onClick={() => settab("rev")}
          >
            Reviews ({reviews.length})
          </p>
        </div>
        <div className="my-4">
          {tab == "desc" ? (
            <p className="text-sm text-gray-700">{description}</p>
          ) : (
            <div>
              <ul>
                {reviews.map((item, index) => (
                  <li className="mb-2" key={index}>
                    <h2 className="text-semibold mt-1 capitalize text-sm">
                      john doe
                    </h2>
                    <span className="text-orange-500 py-3 text-sm">
                      {item.rating} (rating)
                    </span>
                    <p className="text-xs text-gray-500">{item.text}</p>
                  </li>
                ))}
              </ul>
              <div className="w-[80%] mx-auto">
                <h3 className="font-semibold mb-2">Leave your experience</h3>
                <form action="" onSubmit={submitHandler}>
                  <div>
                    <input
                      ref={reviewuser}
                      type="text"
                      placeholder="enter your name"
                      className={`border border-gray-300 rounded px-2 py-2 text-xs w-[70%] outline-none`}
                    />
                  </div>
                  <div className="flex space-x-4 my-3">
                    <motion.span
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center"
                      onClick={() => setrating(1)}
                    >
                      1 <AiFillStar color="orange" size={15} />
                    </motion.span>
                    <motion.span
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center"
                      onClick={() => setrating(2)}
                    >
                      2 <AiFillStar color="orange" size={15} />
                    </motion.span>
                    <motion.span
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center"
                      onClick={() => setrating(3)}
                    >
                      3 <AiFillStar color="orange" size={15} />
                    </motion.span>
                    <motion.span
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center"
                      onClick={() => setrating(4)}
                    >
                      4 <AiFillStar color="orange" size={15} />
                    </motion.span>
                    <motion.span
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center"
                      onClick={() => setrating(5)}
                    >
                      5 <AiFillStar color="orange" size={15} />
                    </motion.span>
                  </div>
                  <div className="py-3 ">
                    <textarea
                      ref={reviewMsg}
                      type="text"
                      placeholder="review message"
                      className={`border border-gray-300 rounded px-2 py-2 text-xs w-[70%] outline-none`}
                    />
                  </div>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    type="submit"
                    className={`submit text-capitalize bg-[${Color.primarycolor}] px-5 py-2 text-white rounded-sm mt-2 text-sm`}
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="pb-10 mt-6">
          <h2 className=" font-bold capitalize pt-4">you might also like</h2>
          <ProductList data={filterproduct} />
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
