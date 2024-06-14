import React from "react";
import Banner from "../components/Banner";
import PakageCart from "../components/PakageCart";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Info from "../components/Info";
const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <PakageCart />
      <Features/>
      <Info/>
      <div className="h-96"> 

      </div>
    </div>
  );
};

export default Homepage;
