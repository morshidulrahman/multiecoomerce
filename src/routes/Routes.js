import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Shop,
  Home,
  Checkout,
  Cart,
  Login,
  Productdetails,
  Signup,
} from "../app/pages/index";

import ProtectedRoute from "./ProtectedRoute";
import Addproduct from "../app/Components/Admin/Addproduct";
import AllProduct from "../app/Components/Admin/AllProduct";
import Dashboard from "../app/Components/Admin/Dashboard";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<Productdetails />} />
      <Route path="cart" element={<Cart />} />

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard/all-products" element={<AllProduct />} />
        <Route path="dashboard/add-product" element={<Addproduct />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Routers;
