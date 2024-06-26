import React from "react";

const packages = [
  {
    title: "BUSINESS PRO WEBSITE",
    price: "99.99",
    color: "#e8ad48",
    features: [
      "5-Page Website",
      "Domain Registration",
      "Web Hosting*",
      "Business Email",
      "SEO Optimized Design",
    ],
  },
  {
    title: "E_COMMERCE WEBSITE",
    price: "199.99",
    color: "#3eb3e7",
    features: [
      "10 Products Listed",
      "Domain Registration",
      "Web Hosting*",
      "Business Email",
      "SEO Optimized Design",
    ],
  },
];

const PackageCard = ({ title, price, color, features }) => (
  <div className="w-[46%] shadow-lg pb-8">
    <h1 className={`bg-[${color}] font-semibold text-xl px-8 py-4`}>{title}</h1>
    <h1 className="bg-[#454a51] text-white p-8 font-bold text-5xl">
      ${price.split(".")[0]}{" "}
      <span className="text-lg">{price.split(".")[1]}</span>
    </h1>
    {features.map((feature, index) => (
      <p
        key={index}
        className={`p-2 ${
          index !== features.length - 1 ? "border-b-2 border-gray-300" : ""
        } w-[80%] m-auto`}
      >
        {feature}
      </p>
    ))}
    <button
      className={`p-2 px-6 font-medium bg-[${color}] rounded text-white mt-4`}
    >
      START NOW
    </button>
  </div>
);

const PakageCart = () => {
  return (
    <div className="w-[39.5%] ml-40 rounded-t-lg shadow-xl absolute top-96 left-0">
      <div className="bg-[#083248] text-white text-center py-4 rounded-t-lg">
        <h1 className="font-semibold text-3xl">PLEASE SELECT YOUR PACKAGE</h1>
        <p>Once your order is placed, we'll reach out to you shortly.</p>
      </div>
      <div className="flex justify-between p-4 text-center bg-white">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default PakageCart;
