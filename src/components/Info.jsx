import React from "react";
import tq from "../images/tq.png";
import line from "../images/line.jpg";

const Info = () => {
  return (
    <div className="w-[81%] m-auto flex justify-around items-center">
      <div className="w-[49%]">
        <p className="ml-8">
          *Monthly maintenance fee required to host your website and keep it up
          to date.
        </p>
        <div className="border border-gray-900 flex justify-between items-center p-4 mt-2 w-[94%] text-base">
          <div className="w-[26%]">
            <img src={tq} alt="Thank You" />
          </div>
          <div className="w-[70%]">
            <p>
              Because of your support, we are able to provide our professional
              web design services at little to no cost to those in need. Our
              mission is to leave no business behind. Lets get started today!
            </p>
            <p className="mt-4">
              If you would like to donate to our cause please visit{" "}
              <strong>HERE</strong>. Thank you for your generosity!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] mt-4 text-center">
        <div className="flex justify-center mb-4">
          <img src={line} alt="EndLine" />
        </div>
        <i className=" text-lg ">
          “I can’t tell you how much I appriciate your complimentary website
          service. My business is really taking off and I am so thankful to
          you!”
        </i>
        <h2 className="font-semibold mt-4 text-lg">Torri Attenborough</h2>
      </div>
    </div>
  );
};

export default Info;
