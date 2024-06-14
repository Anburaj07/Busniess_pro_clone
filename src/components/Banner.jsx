import React from "react";
import banner from "../images/banner.png";
import medal from "../images/medal.png";
const Banner = () => {
  return (
    <div className="flex justify-center bg-[#dcf1f7] relative inline-block ">
      <div className="w-[40%] p-4 mt-6">
        <p className="text-sm bg-[#1e9eb9] p-1.5 text-white w-[90%] shadow-md">
          ELEVATE YOUR BRAND: PROFESSIONALLY CRAFTED WEBSITE FOR YOUR BUSINESS
        </p>
        <h1 className="font-semibold text-4xl p-2 pb-4">
          LET’S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.
        </h1>
        <p className="text-lg">
          We are the Make Lots Foundation. We design professional websites for
          those in need. We’re offering our design services at an affordable
          rate to support small businesses in building their online presence.
        </p>
      </div>
      <div className="w-[40%] relative inline-block">
        <div className="absolute top-10 left-0 w-[29%] h-16">
          <img src={medal} alt="medal" />
        </div>
        <img src={banner} alt="banner" className="block" />
      </div>
    </div>
  );
};

export default Banner;
