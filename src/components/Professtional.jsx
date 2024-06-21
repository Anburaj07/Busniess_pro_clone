import React from "react";
import CountUp from "react-countup";
import professional from "../images/professional.jpg";
import shade from "../images/shade.png";

const Professtional = () => {
  return (
    <div className="w-full bg-white text-center mt-12 pb-6">
      <h1 className="w-[30%] mx-auto font-semibold text-3xl text-[#203548] mt-12 mb-8">
        THE POWER OF PROFESSIONAL WEBSITE DESIGN
      </h1>
      <p className="w-[45%] mx-auto text-lg text-[#42382e]">
        Investing in a professionally designed website is crucial for businesses
        seeking online success. It enhances credibility, user experience, and
        brand visibility driving growth and customer engagement.
      </p>
      <div className="w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-around">
        <img src={professional} alt="professional" className="w-full lg:w-[45%] mt-8 lg:mt-0" />
        <div className="w-full lg:w-[45%] text-left mt-8 lg:mt-0">
          <h2 className="text-xl font-medium mt-4 mb-4">UNLOCKING SUCCESS:</h2>
          <img src={shade} alt="shade" className="ml-8 lg:ml-0 mb-4 lg:mb-0" />
          <div className="ml-8 mt-4 lg:ml-0 text-lg flex flex-col gap-5 w-[80%]">
            <p>☑️ Elevates brand credibility and trust.</p>
            <p>☑️ Enhances user experience and navigation.</p>
            <p>☑️ Drives business growth through customer engagement.</p>
          </div>
          <p className="w-full mt-4 text-base leading-relaxed">
            A professionally designed website serves as a dynamic tool,
            propelling your business towards unparalleled success in the digital
            landscape. Don't miss out on the transformative impact a
            well-crafted online presence can bring to your brand.
          </p>
          <button className="w-[43%] mt-8 font-medium bg-[#219ebc] text-white p-2 rounded transition-transform duration-300 hover:-translate-y-2">
            START YOUR WEBSITE
          </button>
        </div>
      </div>
      <div className="flex mt-16 w-[70%] mx-auto">
        <StatBox number={1000} label="WEBSITES CREATED" />
        <StatBox number={750} label="COMPANIES HELPED" />
        <StatBox number={60} label="YEARS COMBINED EXPERIENCE" />
      </div>
    </div>
  );
};

const StatBox = ({ number, label }) => {
  return (
    <div className="w-[33.3%] border-r border-gray-400 p-4 flex flex-col gap-3">
      <p className="text-[#219ebc] font-semibold text-lg">OVER</p>
      <AnimatedNumber end={number} />
      <p >{label}</p>
    </div>
  );
};

const AnimatedNumber = ({ end }) => {
  return (
    <div className="text-5xl font-bold text-[#203548]">
      <CountUp start={0} end={end} duration={2.5} />+
    </div>
  );
};

export default Professtional;
