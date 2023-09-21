import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRouter = () => {
  const token = Cookies.get("Authorization");
  if (token) {
    return <Outlet></Outlet>;
  } else {
    alert("로그인을 먼저해주세요!");
    return <Navigate to="/"></Navigate>;
  }
};

export default PrivateRouter;
