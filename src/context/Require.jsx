import React from "react";
import { useAuth } from "./AddToCartContext";
import { Navigate, useLocation } from "react-router-dom";
export const Require = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation()
  if (!currentUser) {
   return <Navigate to={"/login"} state={{path: location.pathname}} />;
  }
  return children;
};
