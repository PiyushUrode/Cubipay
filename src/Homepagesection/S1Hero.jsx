import hero1 from "../assets/Image/homepage1.png";
import "../index.css"

const S1Hero = () => {
  const openPDF = () => {
    window.open("  ", "_blank");
  };

  return (
    <> 
    <div className=" min-h-[120vh] relative w-full header-background   ">
      <div
        id="Hero"
        className="relative min-h-[100vh]  w-full h-full flex flex-col md:flex-row items-center px-5 md:px-10 py-10"
      >
        <div id="abt4" className="w-full">
          <div
            id="listing"
            className="relative min-h-[30vh] px-5 md:px-10 py-10 flex flex-col gap-10 md:gap-20"
          >
            <div
              id="filler-main"
              className="flex items-center z-10 w-full gap-10 md:gap-5 flex-col-reverse md:flex-row"
            >
              {/* Left Content */}
              <div
                data-aos="fade-left"
                id="filler-right"
                className="w-full md:w-[60%] flex flex-col justify-center gap-10 text-center md:text-left"
              >

                <h1
                  className="text-3xl md:5xl  lg:text-6xl  bg-custom-gradient bg-clip-text text-transparent font-bold uppercase leading-snug md:leading-tight"
                >
                  Transforming Blockchain Utilities with CUBIPAY{" "}


                </h1>
                <p className="text-sm md:text-base md:w-3/4 items-center leading-relaxed text-gray-300">
                  CUBIPAY (CIP) empowers gaming, NFTs, metaverse, and blockchain with secure transactions, innovative features, and limitless possibilities.
                </p>
                <div className="flex flex-row gap-10 justify-center md:justify-start   ">
                
                  <button
                    // onClick={openPDF}
                    className=" px-5 py-3 bg-custom-gradient     text-white"
                  >
Whitepaper
                  </button>
                  
                  <button
  onClick={openPDF}
  className="relative px-20 py-5 text-white rounded-full bg-custom-gradient    animate-rotate-gradient border-2 border-transparent"
>
  <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
    <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
      Buy Now
    </span>
  </span>
</button>





                </div>
              </div>

              {/* Right Content */}
              <div
                data-aos="zoom-in"
                id="filler-left"
                className="z-10 w-full md:w-[40%] flex justify-center md:justify-end"
              >
                <img
                  loading="lazy"
                  src={hero1}
                  alt="VOIP"
                  className="w-[90%] md:w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-black absolute bottom--1 w-full h-1 md:h-20 blur-md"></div>   */}
    </div>

        </>
  );
};

export default S1Hero;
