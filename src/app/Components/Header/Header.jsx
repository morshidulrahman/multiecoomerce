import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/eco-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Color } from "../configs/Color";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { BsBagDash } from "react-icons/bs";
import userlogo from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import Auth from "../Hook/Auth";
import { useSelector } from "react-redux";
import { TotalQuantity } from "../../Redux/slices/cartSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebaseconfig";
import { toast } from "react-toastify";

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
  const navigation = useNavigate();
  const totalammount = useSelector(TotalQuantity);
  const { currentuser } = Auth();
  const [Toggle, setToggle] = useState(false);

  const navigatelink = () => {
    navigation("/cart");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setToggle(false);
        toast.success("logout successfully");
        navigation("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <header className="border-b border-b-gray-200">
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
            <div className="relative" onClick={navigatelink}>
              <BsBagDash size={20} />
              <p
                className={`bg-[#0a1d37] text-white  rounded-full text-[8px] w-3 h-3 flex items-center justify-center absolute top-0 -right-0`}
              >
                {totalammount}
              </p>
            </div>
            <div className="relative">
              <motion.img
                onClick={() => setToggle(!Toggle)}
                whileTap={{ scale: 1.2 }}
                src={!currentuser ? userlogo : currentuser.photoURL}
                alt="user-logo"
                className="w-6 h-6 rounded-full object-cover"
                loading="lazy"
              />
              {Toggle ? (
                <div className="bg-[#fdefe6] px-4 py-2 rounded-sm absolute top-11 text-sm font-semibold">
                  {currentuser ? (
                    <motion.span onClick={logout} whileTap={{ scale: 1.2 }}>
                      Logout
                    </motion.span>
                  ) : (
                    <div className="flex flex-col gap-1 text-sm">
                      <Link to="/signup">
                        <span onClick={() => setToggle(false)}>Signup</span>
                      </Link>
                      <Link to="/login">
                        <span onClick={() => setToggle(false)}>Login</span>
                      </Link>
                      <Link to="/dashboard">
                        <span onClick={() => setToggle(false)}>Dashboard</span>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
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
