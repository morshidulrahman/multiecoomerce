import React from "react";
import UseGetdata from "../Hook/UseGetdata";

function Dashboard() {
  const { data: user } = UseGetdata("users");
  const { data: product } = UseGetdata("product");
  return (
    <div className="container px-6 mx-auto my-5">
      <div className="flex justify-between gap-5 flex-wrap my-6">
        <div className="w-[20%] bg-green-300 rounded-md px-3 py-4">
          <h1 className="text-semibold text-lg mb-2">Total sales</h1>
          <p className="font-bold text-xl"> $ 7896</p>
        </div>
        <div className="w-[20%] bg-orange-300 rounded-md px-3 py-4">
          <h1 className="text-semibold text-lg mb-2">Total orders</h1>
          <p className="font-bold text-xl">306</p>
        </div>
        <div className="w-[20%] bg-blue-300 rounded-md px-3 py-4">
          <h1 className="text-semibold text-lg mb-2">Total product</h1>
          <p className="font-bold text-xl">{product.length}</p>
        </div>
        <div className="w-[20%] bg-cyan-300 rounded-md px-3 py-4">
          <h1 className="text-semibold text-lg mb-2">Total users</h1>
          <p className="font-bold text-xl">{user.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
