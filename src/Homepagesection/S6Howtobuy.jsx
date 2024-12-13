import React from 'react';
import "../index.css";

import howtobuy from "../assets/Image/howtobuyimg.png";
import howicon1 from "../assets/Image/howicon1.png";
import howicon2 from "../assets/Image/howicon2.png";
import howicon3 from "../assets/Image/howicon3.png";
import howicon4 from "../assets/Image/howicon4.png";

const S6Howtobuy = () => {

  return (
    <div className="flex flex-col items-center text-center pt-10 px-4 sm:px-6 lg:px-8 bg-[#090909]" id="token">
      <div className="py-16 sm:py-8">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-xl sm:text-2xl md:text-3xl">
          Process
        </h1>
        <h2 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          How To Buy
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8 w-full">
  {/* Left Section: Takes 60% width on medium screens and up */}
  <div className="flex flex-col sm:w-[60%] w-full">
    <div className="flex gap-10 flex-col sm:flex-row m-10">
      {/* Card 1 */}
      <div className="flex flex-col w-full sm:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 1
            </button>
            <img
              src={howicon1}
              alt="Step 1 Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-semibold py-5">
            Visit CUBIPAY.IO and Click on "Buy Token" Button
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col w-full sm:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 2
            </button>
            <img
              src={howicon2}
              alt="Step 2 Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-semibold py-5">
            Connect Your Wallet to Metamask and Use USDT
          </p>
        </div>
      </div>
    </div>

    <div className="flex gap-10 flex-col sm:flex-row m-10">
      {/* Card 3 */}
      <div className="flex flex-col w-full sm:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 3
            </button>
            <img
              src={howicon3}
              alt="Step 3 Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-semibold py-5">
            Choose the Number of USDT and "APPROVE"
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col w-full sm:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent">
        <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
          <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
            <button className="px-5 py-3 bg-custom-gradient text-white text-sm sm:text-base">
              Step 4
            </button>
            <img
              src={howicon4}
              alt="Step 4 Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left font-semibold py-5">
            Choose the Number of USDT and "BUY"
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Takes 40% width on medium screens and up */}
  <div className="sm:w-[40%] w-full items-center justify-center flex">
    <div id="filler-left" className="z-10 w-full m-auto h-screen flex justify-center md:justify-center">
      <img
        loading="lazy"
        src={howtobuy}
        alt="How to Buy"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default S6Howtobuy;
