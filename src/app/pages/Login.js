import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebaseconfig";
import { Color } from "../Components/configs/Color";

function Login() {
  const [password, setpassword] = useState("");
  const [email, setmail] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const singin = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setloading(false);
      toast.success("login successfully");
      navigate("/");
    } catch (error) {
      setloading(false);
      toast.error("username and password are incorrect");
    }
  };
  return (
    <div className="container px-6 mx-auto">
      <div className="flex items-center justify-center flex-col my-10">
        <h1 className="text-[#0a1d37] font-bold capitalize mb-4 text-xl">
          login
        </h1>
        <form
          onSubmit={singin}
          className={`bg-[${Color.primarycolor}] px-6 pt-8 pb-5 rounded-md  w-full md:w-[40%] flex items-center justify-center flex-col`}
        >
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
          <button
            type="submit"
            className={`text-[#0a1d37] bg-white rounded-md px-4 py-2  mx-auto text-center cursor-pointer capitalize font-semibold mt-2`}
          >
            login
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gray-300 font-medium">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
