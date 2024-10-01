import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
