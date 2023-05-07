import React, { useState } from "react";
import { Color } from "../configs/Color";
import { BiSearch } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Auth from "../Hook/Auth";
import { Link, NavLink } from "react-router-dom";
const adminnav = [
  {
    path: "dashboard",
    name: "Dashboard",
  },
  {
    path: "dashboard/all-products",
    name: "All products",
  },
  {
    path: "dashboard/add-product",
    name: "Add product",
  },

  {
    path: "dashboard/user",
    name: "user",
  },
];
const AdminNav = () => {
  const { currentuser } = Auth();
  return (
    <header>
      <div className={`bg-[${Color.primarycolor}]`}>
        <div className="mx-auto container px-6 flex justify-between items-center py-5 ">
          <Link to="/">
            {" "}
            <h3 className="text-white font-semibold">Multimart</h3>
          </Link>
          <div className="relative w-[60%]">
            <input
              type="text"
              placeholder="Search...."
              className="outline-none px-2 text-xs w-full py-2 rounded-sm"
            />
            <span className="absolute top-2 right-1">
              <BiSearch size={18} color="black" />
            </span>
          </div>
          <div className="flex space-x-4">
            <span>
              {" "}
              <IoMdNotificationsOutline size={18} color="white" />
            </span>
            <span>
              {" "}
              <AiOutlineSetting size={18} color="white" />
            </span>
          </div>
          <div>
            <img
              src={currentuser && currentuser?.photoURL}
              alt="user"
              className="w-7 h-7 rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={`bg-[${Color.cardbg2}]`}>
        <ul className="container flex items-center md:justify-center space-x-3 py-4 md:space-x-5 flex-wrap gap-5">
          {adminnav.map((item, index) => (
            <li key={index} className=" font-medium text-sm ">
              <NavLink
                to={item.path}
                className={(navclass) =>
                  navclass.isActive
                    ? "bg-white py-2 px-3 rounded"
                    : "py-2 px-3 rounded"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AdminNav;
