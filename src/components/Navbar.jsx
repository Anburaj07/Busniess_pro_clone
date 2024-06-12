import React from 'react'
import logo from "../images/logo.webp"
const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#ffffff] p-4 w-[70%] m-auto items-center text-[#131212ed] text-lg'>
        <div className='w-[11%]'>
            <img src={logo} alt="logo" />
        </div>
        <p>Donate</p>
        <p>Mission Statement</p>
        <p>Learning Resources</p>
        <p>Portfolio</p>
        <p>About Us</p>
        <button className='p-2 bg-[#1e83cb] text-white shadow-custom'>CONTACT US</button>
    </div>
  )
}

export default Navbar