import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../app/Components/Hook/Auth";
function ProtectedRoute({ children }) {
  const { currentuser } = Auth();

  return currentuser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
