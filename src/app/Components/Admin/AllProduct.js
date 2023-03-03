import React from "react";
import Srmchair from "../../assets/images/arm-chair-01.jpg";
import { RiDeleteBin5Line } from "react-icons/ri";
const AllProduct = () => {
  return (
    <div className="container px-6 mx-auto my-5">
      <h1 className="font-bold capitalize my-5 ">All products</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="">
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              iMAGE
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              category
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              price
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <img
                className="h-16 w-16 rounded-sm"
                src={Srmchair}
                alt="chair"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                Jane Doe ldkirri
              </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-sm leading-5 font-medium">
                chair
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium text-sm ml-2">120</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div>
                <button className="bg-red-500 rounded-sm px-3 py-2 text-sm text-white font-medium">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
