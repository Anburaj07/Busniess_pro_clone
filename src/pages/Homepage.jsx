import React from "react";
import Banner from "../components/Banner";
import PakageCart from "../components/PakageCart";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Info from "../components/Info";
import Mission from "../components/Mission";
import SlidingImages from "../components/SlidingImages";
import Solutions from "../components/Solutions";
import Professtional from "../components/Professtional";
import ad from "../images/ad.jpg"
const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <PakageCart />
      <Features/>
      <Info/>
      <Mission/>
      <SlidingImages/>
      <Solutions/>
      <Professtional/>
      <div className="bg-[#ddf0f7] w-[100%] flex justify-center py-16">
        <img src={ad} alt="advertaisment" className="w-[64%]" />
      </div>
      <div className="h-96"> 

      </div>
    </div>
  );
};

export default Homepage;
