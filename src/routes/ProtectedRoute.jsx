import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../app/Components/Hook/Auth";
import { Outlet } from "react-router-dom";
function ProtectedRoute() {
  const { currentuser } = Auth();

  return currentuser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
