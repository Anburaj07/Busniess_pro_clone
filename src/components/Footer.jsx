import React from "react";
import logo from "../images/logo.webp";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-3 w-[23%]">
    <h1 className="font-bold text-2xl">{title}</h1>
    <p className="border-2 border-[#24a7ff] w-[40%]"></p>
    <div className="leading-relaxed mt-8">{children}</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full mt-4">
      <div className="text-center py-12 bg-[#073248] text-white">
        <div className="w-[45%] m-auto">
          <h1 className="text-3xl font-semibold">READY TO GET STARTED?</h1>
          <h1 className="text-3xl font-semibold">
            LET US KNOW WHAT YOU NEED TODAY!
          </h1>
          <p className="mt-8">
            Don't wait to start your professionally designed website at a
            fraction of the cost charged by other companies. Explore all our
            current web design packages.
          </p>
          <button className="w-[35%] mt-8 font-medium bg-[#219ebc] text-white p-2 rounded m-auto block transition-transform duration-300 hover:-translate-y-2">
            START YOUR WEBSITE
          </button>
        </div>
      </div>
      <div className="bg-[#262627] text-white">
        <div className="w-[70%] m-auto flex justify-between p-8">
          <div className="flex flex-col gap-3 w-[22%]">
            <img src={logo} alt="Logo" className="w-[75%]" />
            <p className="mt-4">
              Empowering Small Businesses to Make Lots of Customers, Clients,
              Leads, Connections and more!
            </p>
          </div>

          <FooterSection title="USEFUL LINKS">
            <p className="hover:cursor-pointer">Donations</p>
            <p className="hover:cursor-pointer">Learning Resources</p>
            <p className="hover:cursor-pointer">Request A Quote</p>
            <p className="hover:cursor-pointer">Our Portfolio</p>
            <p className="hover:cursor-pointer">Website Development Agreement</p>
          </FooterSection>

          <FooterSection title="COMPANY">
            <p className="hover:cursor-pointer">About Us</p>
            <p className="hover:cursor-pointer">Contact Us</p>
            <p className="hover:cursor-pointer">FAQ's</p>
            <p className="hover:cursor-pointer">Testimonials</p>
            <p className="hover:cursor-pointer">Mission Statement</p>
            <p className="hover:cursor-pointer">Vision Statement</p>
            <p className="hover:cursor-pointer">Core Values</p>
            <p className="hover:cursor-pointer">Privacy Policy</p>
            <p className="hover:cursor-pointer">Terms and Conditions</p>
          </FooterSection>

          <FooterSection title="SOCIAL">
            <div className="flex space-x-4">
              <FaFacebook className="w-6 h-6 text-white hover:cursor-pointer hover:text-gray-700" />
              <FaTwitter className="w-6 h-6 text-white hover:cursor-pointer hover:text-gray-700" />
              <FaGoogle className="w-6 h-6 text-white hover:cursor-pointer hover:text-gray-700" />
            </div>
          </FooterSection>
        </div>
      </div>
      <div className="text-center bg-[#141414] py-4">
        <p className="text-[#8a8a7f]">© 2023 Makelots All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
