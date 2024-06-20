import React from "react";
import lady from "../images/lady.png";
import line from "../images/line.jpg";

const EffectiveWeb = () => {
  return (
    <div>
      <div className="bg-[#ddf1f7] flex justify-center mt-4">
        <div className="py-8 text-left w-[38%] flex flex-col gap-3 leading-relaxed">
          <h1 className="font-semibold text-4xl">
            The Impact of Effective Website Design and Development
          </h1>
          <p>
            Your online presence is significantly influenced by the design and
            development of your website. Even minor enhancements can
            significantly impact your success in the market. A basic and poorly
            optimized website is no longer sufficient for businesses.
          </p>
          <p>
            In the evolving digital landscape, customer discernment plays a
            crucial role in choosing business partners.
          </p>
          <p>
            For the past decade, The Make Lots Foundation has consistently out
            performed other web design companies. Our commitment to delivering
            superior outcomes sets us apart and ensures our clients’ success
          </p>
          <button className="w-[35%] mt-8 font-medium bg-[#219ebc] text-white p-3 rounded transition-transform duration-300  hover:-translate-y-2">
            START YOUR WEBSITE
          </button>
        </div>
        <div className="w-[44%]">
          <img src={lady} alt="Busniess_lady" />
        </div>
      </div>
      <div className="w-[40%] m-auto mt-2 text-center flex flex-col gap-3">
        <img src={line} alt="Line" className="m-auto" />
        <i className="text-2xl">
          The entire team is highly supportive and truly knowledgeable in
          research and development.
        </i>
        <p className="text-2xl">Ellawese Jackson-Smith</p>
      </div>
    </div>
  );
};

export default EffectiveWeb;
