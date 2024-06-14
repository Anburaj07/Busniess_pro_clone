import React from "react";

const PakageCart = () => {
  return (
    <div className="w-[39.5%] ml-40 rounded-t-lg shadow-xl absolute top-96  left-0 ">
      <div className="bg-[#083248] text-white text-center py-4 rounded-t-lg ">
        <h1 className="font-semibold text-3xl">PLEASE SELECT YOUR PACKAGE</h1>
        <p>Once your order is placed, we'll reach out to you shortly.</p>
      </div>
      <div className="flex justify-between p-4 text-center bg-white">
        <div className="w-[46%] shadow-lg pb-8">
          <h1 className="bg-[#e8ad48] font-semibold text-xl px-8 py-4">
            BUSINESS PRO WEBSITE
          </h1>
          <h1 className="bg-[#454a51] text-white p-8 font-bold text-5xl">
            $99 <span className="text-lg">99</span>
          </h1>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            5-Page Website
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Domain Registration
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Web Hositing*
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Business Email
          </p>
          <p className="p-2 pb-6 w-[80%] m-auto">SEO Optimized Design</p>
          <button className="p-2 px-6 font-medium bg-[#e8ad48] rounded text-white">START NOW</button>
        </div>
        <div className="w-[46%] shadow-lg pb-8 ">
          <h1 className="bg-[#3eb3e7] font-semibold text-xl px-8 py-4">
            E_COMMERCE WEBSITE
          </h1>
          <h1 className="bg-[#454a51] text-white p-8 font-bold text-5xl">
            $199 <span className="text-lg">99</span>
          </h1>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            10 Products Listed
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Domain Registration
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Web Hositing*
          </p>
          <p className="p-2 border-b-2 border-gray-300 w-[80%] m-auto">
            Business Email
          </p>
          <p className="p-2 pb-6 w-[80%] m-auto">SEO Optimized Design</p>
          <button className="p-2 px-6 font-medium bg-[#3eb3e7] rounded text-white">START NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PakageCart;
