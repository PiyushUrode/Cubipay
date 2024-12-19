import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

import logo from "../assets/logo/logo1.png";
// import Popup from './Popupbuydog';

const Navbar = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle popup visibility
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`w-full  bg-[rgb(10,10,10)] font-quantico overflow-x-hidden z-0    top-0 border-b border-none dark:border-gray-600 `}>
      <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
     
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              loading="lazy"
              src={logo}
              className="w-[9rem] phone:w-[5.5rem] h-auto"
              alt="doogscoin"
            />
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex md:order-2 gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <div className="flex gap-3 sm:gap-1 hidden sm:block items-center  ">
            <a
              target="blank"
              href="https://cubipay-token.gitbook.io/cubipay-token"
              rel="noopener noreferrer"
              className="rbtn h-fit rounded-full  "
            >
              <span className=" font-bold font-serif rounded-full px-1 py-1 sm:py-3 sm:px-3 sm:text-sm text-white  rounded-xl bg-custom-gradient ">
              <a href="https://cubipay-token.gitbook.io/cubipay-token" >  White Paper   </a>
              </span>
            </a>
          </div> */}


<div className="flex gap-3 sm:gap-1 items-center hidden md:block">
          <a
              target="blank"
              href="https://cubipay-token.gitbook.io/cubipay-token"
              rel="noopener noreferrer"
              className="rbtn h-fit rounded-full  "
            >
              <span className=" font-istok font-bold   px-2 py-2 sm:py-3 sm:px-3 sm:text-sm text-white  rounded-xl bg-custom-gradient ">
              <a href="https://cubipay-token.gitbook.io/cubipay-token" >  White Paper   </a>
              </span>
            </a>
          </div>

          <div className="flex gap-3 sm:gap-1   items-center">
          <Link smooth to="/presale" onClick={closeMenu}>
           
            
              <span className="  font-istok font-bold   px-2 py-2 sm:py-3 sm:px-4 sm:text-sm text-white    rounded-xl bg-custom-gradient  ">
                BUY NOW
              </span>
            </Link>
          </div>



          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-1 w-9 h-9  justify-center text-sm text-red-100 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[--prime-color] hover:bg-gray-900"
            aria-controls="navbar-sticky1"
            aria-expanded={isNavVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div
          id="navbar-sticky1"
          className={`items-center justify-center w-[99%] md:flex md:w-fit md:order-1 ${isNavVisible ? 'block' : 'hidden'}`}
        >
          <ul className="navcar flex flex-col p-4 md:py-1.5 mt-4 font-medium border border-[--primary-color] md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0 text-white font-semibold tablet:bg-gray-900">
            <li className="md:border-none border-b-[1px] border-gradient">
            <Link smooth to="/#home" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold  rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  Home
                </div>
              </Link>
            </li>
            <li className="md:border-none border-b-[1px] border-gradient">
            <Link smooth to="/#about" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  About
                </div>
              </Link>
            </li>

            <li className="md:border-none border-b-[1px] border-gradient">
            <Link smooth to="/#usecase" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3  text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  Ecosystem
                </div>
              </Link>
            </li>


            <li className="md:border-none border-b-[1px] border-gradient"> 
            <Link smooth to="/#howtobuy" onClick={closeMenu}>
       
                <div className="font-normal block py-2 px-3 text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  How to Buy
                </div>
              </Link>
            </li>

            <li className="md:border-none border-b-[1px] border-gradient">
            <Link smooth to="/#roadmap" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  Roadmap
                </div>
              </Link>
            </li>


            <li className="md:border-none  md:hidden border-b-[1px] border-gradient">
              <a   target="blank"
              href="https://cubipay-token.gitbook.io/cubipay-token"
              rel="noopener noreferrer"
            onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit">
                  Whitepaper
                </div>
              </a>
            </li>




            
            {/* Popup Trigger */}
            <li className="md:border-none border-b-[1px] border-gradient ">
            <Link smooth to="/#token" onClick={closeMenu}>
              <div
                // onClick={togglePopup}
                className="font-normal block py-2 px-3 text-white font-semibold rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-orange-600 font-outfit cursor-pointer"
              >
                Tokenomics
              </div>
              </Link>
            </li>


          </ul>
        </div>
      </div>

      {/* Popup */}
      {/* {isPopupOpen && <Popup onClose={togglePopup} />} */}
    </nav>
  );
};

export default Navbar;
