import React from "react";
import Banner from "../components/Banner";
import PakageCart from "../components/PakageCart";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Info from "../components/Info";
import Mission from "../components/Mission";
import SlidingImages from "../components/SlidingImages";
import Solutions from "../components/Solutions";
import Professtional from "../components/Professtional";
import Makelots from "../components/Makelots";
import Feedback from "../components/Feedback";
import EffectiveWeb from "../components/EffectiveWeb";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Advertaisment from "../components/Advertaisment";
const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <PakageCart />
      <Features />
      <Info />
      <Mission />
      <SlidingImages />
      <Solutions />
      <Professtional />
      <Advertaisment/>
      <Makelots />
      <Feedback />
      <EffectiveWeb />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Homepage;
