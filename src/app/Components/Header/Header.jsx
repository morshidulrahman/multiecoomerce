import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import { Color } from "../configs/Color";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { BsBagDash } from "react-icons/bs";
import userlogo from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const Navlink = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "shop",
    path: "shop",
  },
  {
    title: "cart",
    path: "cart",
  },
];
function Header() {
  const [active, setactive] = useState("");
  const [toggle, settoggle] = useState(false);
  const headerref = useRef(null);
  // const sticyheader = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTo > 80 ||
  //       document.documentElement.scrollTo > 80
  //     ) {
  //       headerref.current.classList.add("sticky_header");
  //     } else {
  //       headerref.current.classList.remove("sticky_header");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   sticyheader();
  //   return () => window.removeEventListener("scroll", sticyheader);
  // });

  return (
    <header className="">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <div className="flex space-x-2">
            <img src={logo} alt="logo" className="w-5 h-5" />
            <p className={`text-[${Color.primarycolor}] font-semibold`}>
              <Link to="home">Multimart</Link>
            </p>
          </div>
          <div>
            <ul
              className={` ${
                toggle
                  ? "flex absolute top-0 right-0 w-48 bg-slate-100 h-full flex-col justify-center items-center z-50 gap-2"
                  : "md:flex items-center hidden space-x-5"
              }`}
            >
              {Navlink.map((item, index) => (
                <li
                  key={index}
                  className={`capitalize `}
                  onClick={() => setactive(index)}
                >
                  <Link
                    to={item.path}
                    className={`capitalize [${active ? "text-semibold" : ""}]`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <span
                className="md:hidden absolute top-3 right-[155px]"
                onClick={() => settoggle(false)}
              >
                <GrFormClose size={23} color="white" />
              </span>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <AiOutlineHeart size={22} />
              <p
                className={`bg-[#0a1d37] text-white  rounded-full text-[8px] w-3 h-3 flex items-center justify-center absolute top-0 -right-0`}
              >
                1
              </p>
            </div>
            <div className="relative">
              <BsBagDash size={20} />
              <p
                className={`bg-[#0a1d37] text-white  rounded-full text-[8px] w-3 h-3 flex items-center justify-center absolute top-0 -right-0`}
              >
                1
              </p>
            </div>
            <motion.img
              whileTap={{ scale: 1.2 }}
              src={userlogo}
              alt="user-logo"
              className="w-6 h-6 rounded-full"
            />
            <span className=" md:hidden block" onClick={() => settoggle(true)}>
              <AiOutlineMenu size={22} color="#0a1d37" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
