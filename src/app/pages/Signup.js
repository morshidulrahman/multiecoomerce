import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Color } from "../Components/configs/Color";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseconfig";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Bars } from "react-loader-spinner";
import Loader from "../Components/Loader/Loader";

function Signup() {
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [loading, setloading] = useState(false);
  const [file, setfile] = useState(null);
  const navigate = useNavigate();
  const singup = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const usercredintial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = usercredintial.user;
      const storageref = ref(storage, `images/${Date.now() + name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      console.log(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });

            // store the data
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setloading(false);
      toast.success("account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error("something is wrong");
      console.log(error.message);
    }
  };
  return (
    <div className="container px-6 mx-auto">
      {!loading ? (
        <div className="flex items-center justify-center flex-col my-10">
          <h1 className="text-[#0a1d37] font-bold capitalize mb-4 text-xl">
            Signup
          </h1>
          <form
            onSubmit={singup}
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
            <motion.button
              whileTap={{ scale: 1.2 }}
              type="submit"
              className={`text-[#0a1d37] bg-white rounded-md px-4 py-2  mx-auto text-center cursor-pointer capitalize font-semibold mt-4 text-sm`}
            >
              create an account
            </motion.button>
            <p className="text-xs text-gray-400 mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-gray-300 font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Signup;
