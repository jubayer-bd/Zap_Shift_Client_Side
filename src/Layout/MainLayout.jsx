import React from "react";
// import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
// import { Footer } from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto ">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
