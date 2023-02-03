import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroimg from "../../assets/images/hero-img.png";
import { Color } from "../configs/Color";
function Hero() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#d6e5fb] py-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-[#111] text-sm">Trending Product in {year}</p>
            <h1 className="text-xl font-bold py-2 w-[70%] capitalize">
              Make your interior more minimalistic & modern
            </h1>
            <p className="mb-5 mt-1 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quisquam, qui illo, laudantium aperiam vero consequatur debitis
              illum expedita quia porro explicabo
            </p>
            <motion.button
              className={`bg-[${Color.primarycolor}] text-white px-3 py-1 rounded-sm capitalize text-sm`}
              whileTap={{ scale: 1.2 }}
            >
              <Link to="shop">shop now</Link>
            </motion.button>
          </div>
          <div className="md:w-2/5">
            <img src={heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
