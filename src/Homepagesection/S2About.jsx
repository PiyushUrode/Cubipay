import about1 from "../assets/Image/about4.webp";
import "../index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const S2About = () => {
  const openPDF = () => {
    window.open("  ", "_blank");
  };
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration for each element
      easing: 'ease-out-back', // Easing type
      once: false, // Trigger animation only once
    });
  }, []);
  return (

    <>
      <div className="min-h-[90vh] pt-3 md:pt-0 bg-[#090909]">
        <div
          id="about"
          className="relative min-h-[80vh] w-full h-full flex flex-col md:flex-row items-center px-3 md:px-10"
        >
          <div id="abt4" className="w-full flex flex-col md:flex-row">
            <div
              id="listing"
              className="relative min-h-[30vh] px-5 md:px-10 py-10 md:py-0 flex flex-col md:flex-row gap-10 md:gap-20"
            >
              <div
                id="filler-main"
                className="flex items-center z-10 w-full gap-10 md:gap-5 flex flex-col md:flex-row-reverse"
              >
                {/* Left Content */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="300" // Delay for the h1
                  data-aos-duration="1500"
                  id="filler-right"
                  className="w-full md:w-[50%]  flex flex-col justify-center gap-10 text-center md:text-left"
                >
                  <h1 className="text-3xl md:text-3xl font-thin text-gray-200">
                    ABOUT
                  </h1>
                  <h2
                    data-aos="fade-left" // Fade-in effect for the h2
                    data-aos-delay="1000" // Delay for h2 to come after h1
                    data-aos-duration="1000"
                    className="text-3xl md:text-4xl lg:text-5xl font-quantico bg-custom-gradient bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight"
                  >
                    Empowering a Decentralized Tomorrow with CUBIPAY
                  </h2>
                  <p
                    data-aos="fade-left" // Fade-in effect for the paragraph
                    data-aos-delay="1500" // Delay for p to come after h2
                    data-aos-duration="1000"
                    className="text-md md:text-lg text-gray-300 leading-relaxed md:w-3/4 mx-auto md:mx-0"
                  >
                    CUBIPAY (CIP) is a revolutionary BEP-20 token driving
                    innovation in digital transactions. With applications in
                    gaming, NFTs, metaverse integration, and blockchain
                    development, it bridges blockchain technology with real-world
                    use cases, delivering secure, scalable, and fast solutions.
                    CUBIPAY empowers users, shaping a decentralized future for
                    businesses and individuals globally.
                  </p>
                </div>

                {/* Right Content (Image) */}
                <div
                  data-aos="fade-zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  id="filler-left"
                  className="z-10 w-full md:w-[40%] items-center flex justify-center md:justify-center align-middle "
                >
                  <img
                    loading="lazy"
                    src={about1}
                    
                    alt="About Image"
                   
                    className="transition-all duration-1000 transform hover:scale-110 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S2About;
