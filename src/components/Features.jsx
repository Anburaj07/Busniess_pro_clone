import React from 'react';

const features = [
  "Responsive Layouts",
  "Intuitive User Experience",
  "Visually Striking Designs",
  "Seamless Navigation",
  "Accessible Content",
  "Fast Loading Times",
  "Engaging Interactions",
  "Cross-Browser Compatibility",
];

const Features = () => {
  return (
    <div className='w-[45%] ml-auto mt-10 mb-4'>
      <h1 className='font-semibold text-2xl mb-4'>CRAFTING OUTSTANDING WEB EXPERIENCES</h1>
      <h1 className='font-medium text-lg mb-4'>RESPONSIVE, USER-FRIENDLY, VISUALLY STUNNING DESIGNS</h1>
      <div className='w-[74%] m-auto mt-4 flex flex-col gap-2 text-lg'>
        {features.map((feature, index) => (
          <p key={index}>☑️ {feature}</p>
        ))}
      </div>
    </div>
  );
};

export default Features;
