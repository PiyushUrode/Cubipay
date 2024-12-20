import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../MainComponent/Contact.jsx";
import "../index.css";
import logo from "../assets/logo/logo1.png";
import footericon1 from "../assets/Image/footericon1.png";
import footericon2 from "../assets/Image/footericon2.png";
import footericon3 from "../assets/Image/footericon3.png";
import footericon4 from "../assets/Image/footericon4.png";
import footericon5 from "../assets/Image/footericon6.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactPopup = () => {
    setIsContactOpen(!isContactOpen);
  };

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#090909] z-10 rounded-t-3xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10 gap-12 flex flex-col">
          <div className="md:flex md:justify-between tablet:justify-center z-10">
            <div className="flex flex-col gap-8 sm:gap-5 mb-6 max-w-[100%] sm:max-w-[35%] tablet:max-w-[100%] items-center tablet:items-center md:mb-0">
              <Link className="flex items-center" smooth to="/">
                <img src={logo} className="h-[80px] me-3" alt="FlowBite Logo" />
              </Link>
              <button
                className="relative px-20 py-5 text-white rounded-full bg-custom-gradient w-fit animate-rotate-gradient border-2 border-transparent"
              >
                <Link smooth to="/presale">
                  <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
                    <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                      Buy Now
                    </span>
                  </span>
                </Link>
              </button>

              <div className="flex space-x-4">
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon1} alt="Social Media Icon 1" className="hover:scale-110 transition-transform duration-300" />
  </a>
  <a href="https://www.instagram.com/cubipay" target="_blank" rel="noopener noreferrer">
    <img src={footericon2} alt="Social Media Icon 2" className="hover:scale-110 transition-transform duration-300" />
  </a>
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon3} alt="Social Media Icon 3" className="hover:scale-110 transition-transform duration-300" />
  </a>
  <a href="/" target="_blank" rel="noopener noreferrer">
    <img src={footericon4} alt="Social Media Icon 4" className="hover:scale-110 transition-transform duration-300" />
  </a>
  <a href="https://x.com/cubipay" target="_blank" rel="noopener noreferrer">
    <img src={footericon5} alt="Social Media Icon 5" className="hover:scale-110 transition-transform duration-300" />
  </a>
</div>



            </div>
            <div className="flex gap-[5vmax] w-full justify-center sm:justify-start md:justify-end tablet:flex-wrap z-10 ">
              <div className="flex flex-col tablet:items-center">
                <h2 className="  mb-6 font-istok text-2xl  bg-custom-gradient2 bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  Important Link
                </h2>
                <ul className="text-gray-400 font-medium">
                  <ul className="gap-4 flex flex-col">
                    <li className="tablet:text-center">
                      <a href="#about">About Us</a>
                    </li>
                    <li className="tablet:text-center">
                      <a href="#usecase">Ecosystem</a>
                    </li>

                    <li className="tablet:text-center">
                      <a href="#howtobuy">How To Buy</a>
                    </li>

                    <li className="tablet:text-center">
                      <a href="#roadmap">Roadmap</a>
                    </li>
                  </ul>
                </ul>
              </div>

              <div className="flex flex-col tablet:items-center">
                <h2 className=" mb-6 font-istok text-2xl  bg-custom-gradient2 bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  About us
                </h2>
                <ul className="text-gray-400 font-medium flex flex-col gap-4">
                  <li className="tablet:text-center">
                    <a href="https://cubipay-token.gitbook.io/cubipay-token">
                      White Paper
                    </a>
                  </li>

                  <li className="tablet:text-center">
                    <a href="/public/LITEPAPER.pdf">Lite Paper</a>
                  </li>

                  <li className="tablet:text-center">
                    <a href="#token">Tokenomics</a>
                  </li>

                  <li>
                    <button onClick={toggleContactPopup} className="tablet:text-center">
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col tablet:items-center">
                <h2 className="  mb-6 font-istok text-2xl  bg-custom-gradient2 bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight">
                  Privacy
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4 tablet:text-center">
                    <a
                      href="/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li className="tablet:text-center">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[3px] bg-roadmapline"></div>
          <div className="flex flex-row items-center tablet:text-center justify-between">
            <span className="text-sm sm:text-center text-[#ffffff]">
              © {currentYear} CUBI PAY. All Rights Reserved.
            </span>
            <button onClick={scrollToTop}>
              <IoIosArrowDropup className="w-10 h-10" />
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed w-full h-full overflow-x-hidden  inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div className=" p-4 relative rounded-lg sm:w-[99%] justify-center h-full flex flex-row  ">
            <Contact />
            <button
  onClick={toggleContactPopup}
  className="mt-4 h-10 px-4 py-2 absolute top-5 right-0 w-[10%] sm:w-[5%] bg-red-500 text-white rounded flex justify-center items-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
