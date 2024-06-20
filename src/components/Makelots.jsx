import React from "react";
import logo from "../images/logo.webp";

const Card = ({ title, content, isCompetitor }) => {
  return (
    <div className="w-[48%]">
      <div className={`w-[100%] ${isCompetitor ? 'bg-[#e6e6e6]' : 'bg-[#e0f3fa]'} p-4 rounded-t-md text-center`}>
        {isCompetitor ? (
          <h2 className="text-[#203548] font-semibold text-2xl py-6">{title}</h2>
        ) : (
          <img src={logo} alt="Maklots Logo" className="w-[35%] m-auto" />
        )}
      </div>
      <div className="bg-white flex flex-col gap-3 p-6">
        {content.map((item, index) => (
          <p key={index} className={`py-1 ${index < content.length - 1 ? 'border-b border-gray-300' : ''}`}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

const Makelots = () => {
  const makelotsContent = [
    "☑️ Innovative Designs for Unique Branding",
    "☑️ Seamless User Experience for Engagement",
    "☑️ Mobile-Friendly for Wider Reach",
    "☑️ Fast Loading for Improved Performance",
    "☑️ SEO-Optimized for Higher Visibility",
    "☑️ Robust Security Measures in Place",
    "☑️ Dedicated Support for Client Satisfaction"
  ];

  const competitorsContent = [
    "☑️ Limited Customization Options",
    "☑️ Longer Turnaround Time for Projects",
    "☑️ High Initial Startup Expenses",
    "☑️ Learning Curve for New Features",
    "☑️ Dependency on Slower Hosting Services",
    "☑️ Limited Integration with Third-Party Apps",
    "☑️ Continuous Updates May Require Downtime"
  ];

  return (
    <div className="w-full bg-[#073248] p-8">
      <h1 className="w-[35%] text-center m-auto text-white font-semibold text-3xl">
        GET MORE WITH A WEBSITE DESIGNED BY MAKELOTS
      </h1>
      <div className="flex justify-between w-[64%] m-auto mt-8">
        <Card title="MAKLOTS" content={makelotsContent} isCompetitor={false} />
        <Card title="OUR COMPETITORS" content={competitorsContent} isCompetitor={true} />
      </div>
      <button className="w-[15%] mt-8 font-medium bg-[#219ebc] text-white p-2 px-4 rounded m-auto block transition-transform duration-300  hover:-translate-y-2">
        START YOUR WEBSITE
      </button>
    </div>
  );
};

export default Makelots;
