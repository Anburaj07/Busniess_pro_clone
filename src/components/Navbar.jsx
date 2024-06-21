import React from 'react';
import logo from "../images/logo.webp";

const Navbar = () => {
  const navItems = [
    "Donate",
    "Mission Statement",
    "Learning Resources",
    "Portfolio",
    "About Us"
  ];

  return (
    <nav className='flex justify-around bg-white p-5 w-[68%] m-auto items-center text-[#131212ed] '>
      <div className='w-[11%]'>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex gap-4 text-lg'>
        {navItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <button className='p-2 bg-[#1e83cb] text-white shadow-custom transition-transform duration-300 hover:-translate-y-2'>
        CONTACT US
      </button>
    </nav>
  );
};

export default Navbar;
