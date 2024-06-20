import React, { useRef, useState } from "react";
import YouTube from "react-youtube";

const Mission = () => {
  const videoId = "uO9sm7jMfVU";
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = (event) => {
    event.target.playVideo();
    setIsPlaying(true);
  };

  const handleMouseLeave = (event) => {
    event.target.pauseVideo();
    setIsPlaying(false);
  };

  return (
    <div className="w-[82%] m-auto mt-8 flex justify-between">
      <div className="w-[49%] flex flex-col gap-4 ">
        <h1 className="font-medium text-2xl">
          ACHIEVE INCREDIBLE RESULTS THAT ARE UNRIVALED IN THE WEB DESIGN
          INDUSTRY.
        </h1>
        <p>
          Our mission is to empower fledgling business owners by providing them
          with professional, high-quality websites at an affordable cost. We
          strive to level the playing field and give small business owners the
          tools they need to succeed in today’s digital age and unleash their
          full potential.
        </p>
        <p>
          Our clients are at the heart of everything we do. We’re dedicated to
          providing personalized, attentive service to each and every one of our
          clients, and believe
        </p>
        <p>
          that building strong relationships is the key to our success.
          Moreover, we believe in building websites that are sustainable and
          scalable, ensuring that our clients are able to achieve their
          long-term goals.
        </p>
      </div>
      <div className="w-[49%] text-center ">
        <div
          className="relative w-[92%] h-[340px] m-auto cursor-pointer "
        >
          <YouTube
            videoId={videoId}
            opts={{
              height: "340",
              width: "100%",
              playerVars: {
                autoplay: 0, // Do not auto play video on load
                controls: 0, // Hide player controls
                mute: 1, // Mute the video
              },
            }}
            onReady={(event) => {
              event.target.mute();
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full"
          />
        </div>
        <button className="w-[92%]  bg-[#219ebc] text-white p-3 px-8 font-medium rounded mt-4 transition-transform duration-300  hover:-translate-y-2">
          START YOUR WEBSITE
        </button>
      </div>
    </div>
  );
};

export default Mission;

