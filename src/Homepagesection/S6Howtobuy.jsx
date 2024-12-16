import React from 'react';
import { motion } from 'framer-motion';
import "../index.css";

import howtobuy from "../assets/Image/howtobuyimg.png";
import howicon1 from "../assets/Image/howicon1.png";
import howicon2 from "../assets/Image/howicon2.png";
import howicon3 from "../assets/Image/howicon3.png";
import howicon4 from "../assets/Image/howicon4.png";

const S6Howtobuy = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 px-4 sm:px-6 lg:px-1 bg-[#090909]" id="howtobuy">
      <div className="py-8 sm:py-2 w-full">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-2xl sm:text-2xl md:text-3xl">
          Process
        </h1>
        <h2 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          How To Buy
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 w-full"> 
    
        <div className="flex flex-col md:w-[50%] w-full">
          <div className="flex gap-6 flex-col md:flex-row m-3 sm:m-10"> 

            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
                  <button className="px-5 font-bold  py-3 bg-custom-gradient text-white text-sm sm:text-base">
                    Step 1
                  </button>
                  <img
                    src={howicon1}
                    alt="Step 1 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%] font-semibold py-5">
                  Visit CUBIPAY.IO and Click on "Buy Token" Button
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
                  <button className="px-5 font-bold  py-3 bg-custom-gradient text-white text-sm sm:text-base">
                    Step 2
                  </button>
                  <img
                    src={howicon2}
                    alt="Step 2 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%] font-semibold py-5">
                  Connect Your Wallet to Metamask and Use USDT
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row m-3 sm:m-10"> 
            {/* Card 3 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
                  <button className="px-5 font-bold py-3 bg-custom-gradient text-white text-sm sm:text-base">
                    Step 3
                  </button>
                  <img
                    src={howicon3}
                    alt="Step 3 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%] font-semibold py-5">
                  Choose the Number of USDT and "APPROVE"
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="flex flex-col w-full md:w-1/2 rounded-3xl bg-custom-gradient border-2 border-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }} 
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start rounded-3xl px-6 py-6 bg-black w-full h-full">
                <div className="flex flex-row items-center justify-between space-x-4 w-full mb-4">
                  <button className="px-5 py-3 bg-custom-gradient text-white font-bold text-sm sm:text-base">
                    Step 4
                  </button>
                  <img
                    src={howicon4}
                    alt="Step 4 Icon"
                    className="w-10 h-10 sm:w-10 sm:h-10 object-cover rounded-lg"
                  />
                </div>
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-left w-[70%] md:w-[100%] font-semibold py-5">
                  Choose the Number of USDT and "BUY" Checking Transactions
                </p>
              </div>
            </motion.div>
          </div>
        </div>


        <div className="md:w-[40%] w-full items-center justify-center flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }} 
            viewport={{ once: true }}
            className="w-full md:w-[100%] lg:w-[80%] xl:w-[60%] flex justify-center md:justify-center"
          >
            <img
              loading="lazy"
              src={howtobuy}
              alt="How to Buy"
              className="w-[90%] md:w-full h-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default S6Howtobuy;
