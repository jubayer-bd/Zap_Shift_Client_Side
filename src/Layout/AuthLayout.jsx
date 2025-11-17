import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authimg from "../assets/Others/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <Logo />
      <div className="flex justify-between">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
