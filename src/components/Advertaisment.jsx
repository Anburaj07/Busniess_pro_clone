import React from "react";
import ad from "../images/ad.jpg";

const Advertaisment = () => {
  return (
    <div className="bg-[#ddf0f7] w-[100%] flex justify-center py-16">
      <img src={ad} alt="advertaisment" className="w-[64%]" />
    </div>
  );
};

export default Advertaisment;
