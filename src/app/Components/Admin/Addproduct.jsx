import React, { useState } from "react";
import { toast } from "react-toastify";
import { Color } from "../configs/Color";
import { db, storage } from "../../../../firebaseconfig";
import { ref, uploadBytesResumablem, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
const Addproduct = () => {
  const [entertitle, setentertitle] = useState("");
  const [entershortdesc, setentershortdesc] = useState("");
  const [description, setdescription] = useState("");
  const [enterprice, setenterprice] = useState("");
  const [entercategory, setentercategory] = useState("");
  const [enterimage, setenterimage] = useState(null);
  const [loading, seloading] = useState(false);

  const addproducthandaller = async (e) => {
    e.preventDefault();
    const product = {
      title: entertitle,
      shortDesc: entershortdesc,
      description: description,
      price: enterprice,
      imgUrl: enterimage,
    };

    //  add firebae product
    toast.success("product added successfully");
    console.log(product);
  };

  return (
    <div>
      <div className="mx-auto px-6 container">
        <h1 className="font-bold text-xl capitalize mt-5">Add product</h1>
        <form action="" className="py-5" onSubmit={addproducthandaller}>
          <div className="mb-2">
            <span className="product-title">Product Title</span>
            <input
              required
              value={entertitle}
              type="text"
              placeholder="dubole sofa..."
              className="product-input"
              onChange={(e) => setentertitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <span className="product-title">Short Description</span>
            <input
              required
              value={entershortdesc}
              onChange={(e) => setentershortdesc(e.target.value)}
              type="text"
              placeholder="lorem...."
              className="product-input"
            />
          </div>
          <div className="mb-2">
            <span className="product-title">Description</span>
            <input
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              type="text"
              placeholder="lorem...."
              className="product-input"
            />
          </div>
          <div className="flex justify-between items-center mb-2 flex-wrap">
            <div className="w-full md:w-[47%]">
              <span className="product-title">Price : </span>
              <input
                required
                value={enterprice}
                onChange={(e) => setenterprice(e.target.value)}
                type="number"
                placeholder="$100"
                className="text-xs border py-1 px-2 rounded outline-none w-full border-gray-300"
              />
            </div>
            <div className="w-full md:w-[47%]">
              <span className="product-title">Category </span>
              <select
                value={entercategory}
                onChange={(e) => setentercategory(e.target.value)}
                required
                className="rounded text-sm px-2 outline-none w-full border py-1 border-gray-300"
              >
                <option value="sofa">sofa</option>
                <option value="mobile">mobile</option>
                <option value="chair">chair</option>
                <option value="watch">watch</option>
                <option value="wireless">wireless</option>
              </select>
            </div>
          </div>
          <div className="mb-2">
            <span className="product-title block my-1">Product Image</span>
            <input
              onChange={(e) => setenterimage(e.target.files[0])}
              type="file"
              className="w-full py-1 text-xs border border-gray-300 px-2"
              required
            />
          </div>
          <button type="submit">add product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
