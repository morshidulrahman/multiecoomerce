import React, { useState } from "react";
import { toast } from "react-toastify";
import { Color } from "../configs/Color";
import { db, storage } from "../../../../firebaseconfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
const Addproduct = () => {
  const [entertitle, setentertitle] = useState("");
  const [entershortdesc, setentershortdesc] = useState("");
  const [description, setdescription] = useState("");
  const [enterprice, setenterprice] = useState("");
  const [entercategory, setentercategory] = useState("");
  const [enterimage, setenterimage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const addproducthandaller = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const docref = await collection(db, "product");

      const storageref = ref(
        storage,
        `productimages/${Date.now() + enterimage.name}`
      );
      const uploadtask = uploadBytesResumable(storageref, enterimage);

      uploadtask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error(error);
          toast.error("can not upload images");
        },
        () => {
          getDownloadURL(uploadtask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docref, {
              title: entertitle,
              shortDesc: entershortdesc,
              description: description,
              price: enterprice,
              imgUrl: downloadURL,
            });
            setloading(false);
            toast.success("product added successfully");
            navigate("/dashboard/all-products");
          });
        }
      );
    } catch (error) {
      setloading(false);
      toast.error("product added failed");
    }
  };

  return (
    <div>
      <div className="mx-auto px-6 container">
        {loading ? (
          <div className="flex items-center justify-center my-10">
            <Bars
              visible={true}
              height="80"
              width="80"
              color="#0a1d37"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <>
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
              <motion.button
                whileTap={{ scale: 1.1 }}
                type="submit"
                className={`bg-[${Color.primarycolor}] px-3  py-2 rounded text-white text-sm capitalize font-medium my-3`}
              >
                add product
              </motion.button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Addproduct;
