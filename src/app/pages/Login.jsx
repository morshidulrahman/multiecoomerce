import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Color } from "../Components/configs/Color";
function Login() {
  const [password, setpassweord] = useState("");
  const [email, setmail] = useState("");
  return (
    <div className="container px-6 mx-auto">
      <div className="flex items-center justify-center flex-col my-10">
        <h1 className="text-[#0a1d37] font-bold capitalize mb-4 text-xl">
          login
        </h1>
        <div
          className={`bg-[${Color.primarycolor}] px-6 pt-8 pb-5 rounded-md w-[40%] flex items-center justify-center flex-col`}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-4 w-full text-sm"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-4 w-full text-sm"
          />
          <button
            className={`text-[#0a1d37] bg-white rounded-md px-4 py-2  mx-auto text-center cursor-pointer capitalize font-semibold mt-2`}
          >
            login
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gray-300">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
