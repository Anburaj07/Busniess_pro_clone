import React from "react";
import payment from "../images/payment.jpg"
import support from "../images/support.jpg"
import seo from "../images/seo.jpg"
import tsa from "../images/tsa.jpg"
import webMain from "../images/webMain.jpg"
const Solutions = () => {
  return (
    <div className="w-[100%] text-center bg-[#083248] py-8 mt-8">
      <h1 className="w-[30%] m-auto font-semibold text-3xl text-white mb-8">WE OFFER BUSINESS SOLUTIONS THAT ENSURE YOUR SUCCESS</h1>
      <div className=" w-[65%] m-auto flex justify-between text-center  ">
        <div className="bg-white w-[18%] p-6  ">
            <img src={payment} alt="Payment Gateway" className="m-auto"/>
            <p className="font-medium text-lg mt-4">Payment Gateway</p>
        </div>
        <div className="bg-white w-[18%] p-6  ">
            <img src={support} alt="Dedicated Support" className="m-auto"/>
            <p className="font-medium text-lg mt-4">Dedicated Support</p>
        </div>
        <div className="bg-white w-[18%] p-6  ">
            <img src={webMain} alt="Website Maintenance" className="m-auto"/>
            <p className="font-medium text-lg mt-4">Website Maintenance</p>
        </div>
        <div className="bg-white w-[18%] p-6  ">
            <img src={seo} alt="Website Maintenance" className="m-auto"/>
            <p className="font-medium text-lg mt-4">Website Maintenance</p>
        </div>
        <div className="bg-white w-[18%] p-6  ">
            <img src={tsa} alt="Terms of Service Agreements" className="m-auto"/>
            <p className="font-medium text-lg mt-4">Terms of Service Agreements</p>
        </div>
      </div>
      <div>
      <button className="w-[16%] mt-8 font-medium bg-[#219ebc] text-white p-3 px-8 rounded">
          START YOUR WEBSITE
        </button>
      </div>
    </div>
  );
};

export default Solutions;
