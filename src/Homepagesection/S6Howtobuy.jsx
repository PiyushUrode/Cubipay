import React from 'react';
import "../index.css";

import howtobuy from "../assets/Image/howtobuyimg.png";
import howicon1 from "../assets/Image/howicon1.png";
import howicon2 from "../assets/Image/howicon2.png";
import howicon3 from "../assets/Image/howicon3.png";
import howicon4 from "../assets/Image/howicon4.png";

const S6Howtobuy = () => {

  return (
    <div className="flex flex-col items-center text-center pt-10 px-4 sm:px-6 lg:px-1 bg-[#090909]" id="token">
      <div className="py-8 sm:py-2 w-full">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-2xl sm:text-2xl md:text-3xl">
          Process
        </h1>
        <h2 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          How To Buy
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 w-full">
  {/* Left Section: Takes 60% width on medium screens and up */}
  <div className="flex flex-col md:w-[50%] w-full">
    <div className="flex gap-10 flex-col md:flex-row m-3 sm:m-10">
      {/* Card 1 */}
      <div className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 1
            </button>
            <img
              src={howicon1}
              alt="Step 1 Icon"
              className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-lg"
            />
          </div>
          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%]  font-semibold py-5">
            Visit CUBIPAY.IO and Click on "Buy Token" Button
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 1
            </button>
            <img
              src={howicon1}
              alt="Step 1 Icon"
              className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-lg"
            />
          </div>
          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%]  font-semibold py-5">
            Visit CUBIPAY.IO and Click on "Buy Token" Button
          </p>
        </div>
      </div>
    </div>

    <div className="flex gap-10 flex-col md:flex-row m-3 sm:m-10">
      {/* Card 1 */}
      <div className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 1
            </button>
            <img
              src={howicon1}
              alt="Step 1 Icon"
              className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-lg"
            />
          </div>
          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%]  font-semibold py-5">
            Visit CUBIPAY.IO and Click on "Buy Token" Button
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 1
            </button>
            <img
              src={howicon1}
              alt="Step 1 Icon"
              className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-lg"
            />
          </div>
          <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%]  font-semibold py-5">
            Visit CUBIPAY.IO and Click on "Buy Token" Button
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Takes 40% width on medium screens and up */}
  <div className="md:w-[40%] w-full items-center justify-center flex">
    <div id="filler-left"                 className=" w-full md:w-[100%] lg:w-[80%]  xl:w-[60%] flex justify-center md:justify-center">
      <img
        loading="lazy"
        src={howtobuy}
        alt="How to Buy"
        className="w-[90%] md:w-full h-full  rounded-lg"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default S6Howtobuy;
