import React from "react";
import Banner from "../components/Banner";
import PakageCart from "../components/PakageCart";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Info from "../components/Info";
import Mission from "../components/Mission";
import SlidingImages from "../components/SlidingImages";
const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <PakageCart />
      <Features/>
      <Info/>
      <Mission/>
      <SlidingImages/>
      <div className="h-96"> 

      </div>
    </div>
  );
};

export default Homepage;
