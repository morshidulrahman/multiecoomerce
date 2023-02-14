import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Color } from "../Components/configs/Color";
function Signup() {
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  return (
    <div className="container px-6 mx-auto">
      <div className="flex items-center justify-center flex-col my-10">
        <h1 className="text-[#0a1d37] font-bold capitalize mb-4 text-xl">
          Signup
        </h1>
        <div
          className={`bg-[${Color.primarycolor}] px-6 pt-8 pb-5 rounded-md w-[40%] flex items-center justify-center flex-col`}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name"
            className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-4 w-full text-sm"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setmail(e.target.value)}
            placeholder="Enter your email"
            className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-4 w-full text-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
            className="px-3 py-2 rounded-md border border-gray-300 outline-none mb-4 w-full text-sm"
          />
          <input
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
            className="my-2 text-gray-300 text-xs font-medium"
          />
          <button
            className={`text-[#0a1d37] bg-white rounded-md px-4 py-2  mx-auto text-center cursor-pointer capitalize font-semibold mt-4 text-sm`}
          >
            create an account
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-300 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
