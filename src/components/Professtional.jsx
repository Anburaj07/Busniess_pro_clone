import React from "react";
import CountUp from "react-countup";
import professional from "../images/professional.jpg";
import shade from "../images/shade.png";

const Professtional = () => {
  return (
    <div className="w-[100%] bg-white text-center mt-12 pb-6">
      <h1 className="w-[30%] m-auto font-semibold text-3xl text-[#203548] mt-12 mb-8">
        THE POWER OF PROFESSIONAL WEBSITE DESIGN
      </h1>
      <p className="w-[45%] m-auto text-lg text-[#42382e] ">
        Investing in a professionally designed website is crucial for businesses
        seeking online success. It enhances credibility, user experience, and
        brand visibility driving growth and customer engagement.
      </p>
      <div className="w-[70%] m-auto mt-6 flex justify-between ">
        <img src={professional} alt="professional" />
        <div className="w-[50%] text-left mt-16">
          <h2 className="text-xl font-medium mt-4 mb-4">UNLOCKING SUCCESS:</h2>
          <img src={shade} alt="shade" />
          <div className=" ml-8 w-[70%] text-lg flex flex-col gap-5 mt-4">
            <p>☑️ Elevates brand credibility and trust.</p>
            <p>☑️ Enhances user experience and navigation.</p>
            <p>☑️ Enhances user experience and navigation.</p>
            <p>☑️ Drives business growth through customer engagement.</p>
          </div>
          <p className="w-[90%] mt-4 text-base">
            A professionally designed website serves as a dynamic tool,
            propelling your business towards unparalleled success in the digital
            landscape. Don't miss out on the transformative impact a
            well-crafted online presence can bring to your brand.
          </p>
          <button className="w-[43%] mt-8 font-medium bg-[#219ebc] text-white p-2 rounded">
            START YOUR WEBSITE
          </button>
        </div>
      </div>
      <div className="flex mt-16 w-[70%] m-auto">
        <div className="w-[33.3%] border-r border-gray-400 p-4 flex flex-col gap-3">
          <p className="text-[#219ebc] font-semibold text-lg">OVER</p>
          <AnimatedNumber end={1000} />
          <p className="text-lg">WEBSITES CREATED</p>
        </div>
        <div className="w-[33.3%] border-r border-gray-400 p-4 flex flex-col gap-3">
          <p className="text-[#219ebc] font-semibold text-lg">OVER</p>
          <AnimatedNumber end={750} />
          <p className="text-lg">COMPANIES HELPED</p>
        </div>
        <div className="w-[33.3%] p-4 flex flex-col gap-3">
          <p className="text-[#219ebc] font-semibold text-lg">OVER</p>
          <AnimatedNumber end={60} />
          <p className="text-lg">YEARS COMBINED EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default Professtional;

export const AnimatedNumber = ({ end }) => {
  return (
    <div className="text-5xl font-bold text-[#203548]">
      <CountUp start={0} end={end} duration={2.5} />+
    </div>
  );
};
