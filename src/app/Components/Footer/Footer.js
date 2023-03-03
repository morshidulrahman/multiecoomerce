import React from "react";
import { Link } from "react-router-dom";
import { Color } from "../configs/Color";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdLocalPhone,
} from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={`bg-[${Color.primarycolor}]`}>
      <div className="container mx-auto px-6 pt-10">
        <div className="flex gap-6 justify-between flex-wrap">
          <div className="md:w-2/5 w-11/12">
            <h3 className="text-white capitalize font-semibold mb-2">
              multimart
            </h3>
            <p className="text-white/40 text-xs leading-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ad
              qui est consectetur? Nihil, quasi eveniet quis asperiores harum
              blanditiis ipsum eius numquam
            </p>
          </div>
          <div>
            <h3 className="text-white capitalize font-semibold mb-2">
              top categories
            </h3>
            <ul className="text-xs text-white/40 capitalize flex flex-col gap-2 cursor-pointer ">
              <li className="hover:text-white/80 duration-300">
                mobile phones
              </li>
              <li className="hover:text-white/80 duration-300">modern sofa</li>
              <li className="hover:text-white/80 duration-300">arm chair</li>
              <li className="hover:text-white/80 duration-300">
                smart watches
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white capitalize font-semibold mb-2">
              useful links
            </h3>
            <ul className="text-xs text-white/40 capitalize flex flex-col gap-2 cursor-pointer ">
              <li className="hover:text-white/80 duration-300">
                <Link to="shop">shop</Link>
              </li>
              <li className="hover:text-white/80 duration-300">
                <Link to="cart">cart</Link>
              </li>
              <li className="hover:text-white/80 duration-300">
                <Link to="login">login</Link>
              </li>
              <li className="hover:text-white/80 duration-300">
                privacy policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white capitalize font-semibold mb-2">
              contact
            </h3>
            <ul className="text-xs text-white/40 capitalize flex flex-col gap-3 cursor-pointer w-[80%]">
              <li className="flex space-x-2 items-center">
                <span>
                  <MdOutlineLocationOn size={17} />
                </span>
                <span> 129 / gha, Mohakhali, Dhaka</span>
              </li>
              <li className="flex space-x-2 items-center">
                <span>
                  <MdLocalPhone size={15} />
                </span>
                <span>+01772368192</span>
              </li>
              <li className="flex space-x-2 items-center">
                <span>
                  <MdOutlineEmail size={15} />
                </span>
                <span>boydanger416@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-t-white/10 mt-3">
          <p className="text-white/40 text-center text-xs mt-2 pb-2">
            Copyright {year} developed by Morshidul Rahman . All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
