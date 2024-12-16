import React from 'react';
import "../index.css"
import Str1 from '../assets/Image/Strategic1.png';
import Str2 from '../assets/Image/Strategic2.png';
import Str3 from '../assets/Image/Strategic3.png';
import Str4 from '../assets/Image/Strategic4.png';
import Button from '../MainComponent/Button';
import Token1 from '../assets/Image/Tokenimg.png';
import img1 from "../assets/Newfolder/token1.webp"
import img2 from "../assets/Image/tokenwork.png"

const S4Tokenomics = () => {
  return (
    <>
      {/* Strategic Partners Section */}
      <div className="flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8 sm:py-24 relative" >
  <h1 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
    Strategic Partners
  </h1>
  <div className="flex flex-wrap justify-center md:justify-around gap-8 sm:gap-8 mt-6 w-full partner-image" id='tokenstra' >
    <img
      src={Str1}
      alt="Strategic Partner 1"
      className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
    />
    <img
      src={Str2}
      alt="Strategic Partner 2"
      className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
    />
    <img
      src={Str3}
      alt="Strategic Partner 3"
      className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
    />
    <img
      src={Str4}
      alt="Strategic Partner 4"
      className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto"
    />
  </div>
  {/* <div className="bg-[#090909] blur-md absolute -bottom-1 left-0 w-full h-10"> </div> */}
</div>


      {/* Tokenomics Section */}


      <div
  // style={{ boxShadow: "rgba(151, 71, 255, 0.73) 1px -20px 20px 0px" }}
  className="flex flex-col items-center shadow-custom-token sm:shadow-none  mt-40 mb-20   rounded-tr-[50%] rounded-tl-[50%]  rounded-br-[50%] rounded-bl-[50%] bg-black py-20 sm:pt-40  sm:pb-20 relative justify-center text-center"
  id="token"
>


         <div className="w-full relative gap-10 flex flex-col  ">
          <div className=' flex flex-col justify-center items-center text-center w-full'>
            <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-xl sm:text-2xl md:text-3xl">
              Tokenomics
            </h1>
            <div className='w-[100%] text-center flex  justify-center items-center text-center w-full'>
            {/* <h2 className=" bg-text-custom-gradient     bg-clip-text text-transparent font-semibold mt-4 text-sm  justify-normal items-center text-center sm:text-2xl md:text-4xl lg:text-6xl"> */}
            <h2 className=" bg-text-custom-gradient     bg-clip-text text-transparent font-semibold w-[50%] text-3xl pt-5   sm:w-[70%] sm:text-3xl  md:w-[100%] md:text-4xl  md:w-[100%] lg:text-5xl     ">
              The Financial Framework of CUBIPAY
            </h2>
                 </div>
           
          </div>
          <div className='hidden sm:block  absolute top-[-10rem]    left-1/2 w-[50%] md:w-[60%] lg:w-[70%] -z-10 transform -translate-x-1/2'>
<img src={img1} alt="" className='absolute max-h-none   left-1/2 transform -translate-x-1/2 -translate-y-[60%]  md:-translate-y-[42%] top-0' />
{/* <img src={img2} alt="" className='absolute max-h-none   left-0 w-full' /> */}

</div>
<div className="flex justify-center align-middle px-10 mt-8">
  <img
    src={Token1}
    alt="Tokenomics"
    className="w-full max-w-3xl transform transition-transform duration-300 hover:scale-110"
  />
</div>

              <div className=' hidden sm:block absolute transform -translate-x-1/2 rotate-180 top-auto left-1/2   w-[50%] md:w-[60%] lg:w-[70%] bottom-[-10rem]  -z-10 '>
<img src={img1} alt="" className='absolute max-h-none left-1/2 transform -translate-x-1/2 -translate-y-[12%] md:-translate-y-[22%] lg:-translate-y-[30%] top-0' />
{/* <img src={img2} alt="" className='absolute max-h-none left-0 w-full' /> */}

</div>

        <div className="  flex flex-row   flex-wrap sm:flex-row items-center font-quantico font-bold flex-wrap justify-center gap-0 sm:gap-4  mt-8 md:pt-0  " id='one'>
          <div className=" w-[40%]  phone:w-56     flex flex-col   sm:w-[33%] w-full  justify-center   items-center align-middle " id='two'>
            <Button leftText="TOKEN NAME" rightText="CUBIPAY" />
          </div>
          <div className=" w-[40%]  phone:w-56     flex flex-col   sm:w-[33%] w-full  justify-center   items-center align-middle        ">
            <Button leftText="SYMBOL" rightText="SBC" />
          </div>
          <div className=" w-[40%]  phone:w-56     flex flex-col   sm:w-[33%] w-full  justify-center   items-center align-middle       ">
            <Button leftText="NETWORK" rightText="BEP-20" />
          </div>
          <div className=" w-[40%]  phone:w-56     flex flex-col   sm:w-[33%] w-full  justify-center   items-center align-middle      ">
            <Button leftText="DECIMAL" rightText="18" />
          </div>
          <div className="w-[40%]  phone:w-56     flex flex-col   sm:w-[33%] w-full  justify-center   items-center align-middle        ">
            <Button leftText="TOTAL SUPPLY" rightText="10 CR" />
          </div>
        </div>
 


</div>


        </div>
        

      
        

    </>
  );
};

export default S4Tokenomics;

