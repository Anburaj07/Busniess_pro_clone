import React from "react";
import payment from "../images/payment.jpg";
import support from "../images/support.jpg";
import seo from "../images/seo.jpg";
import tsa from "../images/tsa.jpg";
import webMain from "../images/webMain.jpg";

const Solutions = () => {
  // Array of solution items for easier management
  const solutions = [
    { image: payment, title: "Payment Gateway" },
    { image: support, title: "Dedicated Support" },
    { image: webMain, title: "Website Maintenance" },
    { image: seo, title: "SEO Services" }, // Updated alt text
    { image: tsa, title: "Terms of Service Agreements" },
  ];

  return (
    <div className="w-full text-center bg-[#083248] py-8 mt-8">
      <h1 className="w-[30%] m-auto font-semibold text-3xl text-white mb-8">
        WE OFFER BUSINESS SOLUTIONS THAT ENSURE YOUR SUCCESS
      </h1>
      <div className="w-[65%] m-auto flex justify-between text-center">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white w-[18%] p-6">
            <img src={solution.image} alt={solution.title} className="m-auto" />
            <p className="font-medium text-lg mt-4">{solution.title}</p>
          </div>
        ))}
      </div>
      <div>
        <button className="w-[16%] mt-8 font-medium bg-[#219ebc] text-white p-3 px-8 rounded transition-transform duration-300 hover:-translate-y-2">
          START YOUR WEBSITE
        </button>
      </div>
    </div>
  );
};

export default Solutions;
