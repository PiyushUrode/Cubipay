import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import "../Homepagesection/Usecase.css"


const S3Usecase = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: false, // Animation runs only once
    });
  }, []);
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center  px-4 sm:px-6 lg:px-8 bg-[#090909] " id="usecase">
        <div className="py-10 md:py-8">
     
          <h2
data-aos="fade-up"
data-aos-easing="linear"
data-aos-duration="1000"

          className=" bg-text-custom-gradient  font-quantico  bg-clip-text text-transparent font-semibold mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
            ECOSYSTEM
          </h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row md:pt-10 px-10 sm:px-2   gap-10 items-center justify-center  ">
 
 <div className="eco1 flex flex-col gap-10 w-[100%] sm:w-[33%] overflow-hidden  ">

{/* move2earn */}
 <div id="card" className="rounded-2xl  relative h-60 w-full">
  {/* <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg3a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10"> AI Integration</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg3 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl line-clamp-3  text-white text-left w-full p-10"> CIP powers secure, decentralized data sharing for AI platforms. Users earn tokens for contributing data, while developers access high-quality datasets, accelerating breakthroughs in healthcare, finance, and more.  </p>
    </div>
  </div> */}

<div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg4 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10">Move 2 Earn </h1>
    </div>
    <div id="Back" className="ecoa ecobgimg4b w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl  line-clamp-3 text-white text-left w-full p-10"> The Move to Earn concept leverages CIP to reward users for physical activities. Through a fitness app integrated with blockchain technology, users can earn tokens by achieving fitness goals, such as steps walked or calories burned.  </p>
    </div>
  </div>
</div>



  {/* online gaming */}

<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg1a  w-full flex item-center   rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl  md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10"> Online Gaming</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg1  w-full flex item-center   rounded-2xl justify-center bg-cover bg-center">
      
      <p class="text-xl line-clamp-3   text-white  text-left w-full p-10">
      CUBIPAY (CIP) transforms online gaming by enabling fast, secure, and decentralized payments for in-game assets, tournaments, and premium content. It empowers players with low fees, peer-to-peer trading, and rewards for achievements, creating a thriving gaming ecosystem.
      </p>
    
    </div>
  </div>
</div>





{/* real worl assests */}

<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg2a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10">Real World Assests</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg2 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl  line-clamp-3 text-white text-left w-full p-10">CIP enables fractional ownership of real-world assets like real estate and art, fostering financial inclusivity. Blockchain ensures secure transactions and transparent records, bridging traditional finance with digital innovation.</p>
    </div>
  </div>
</div>


{/* ai Integration */}





</div>


        {/* eco 2 start */}
{/* move2earn */}
<div  className="eco2 flex flex-col gap-10 h-[500px] sm:h-[50rem]  w-[100%] sm:w-[33%]">
<div id="card" className="rounded-2xl  relative h-[500px] sm:h-full w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg5 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white font-bold text-left w-full p-10">NFT MARKETPLACE </h1>
    </div>
    <div id="Back" className="ecoa ecobgimg5a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl  line-clamp-3 text-white text-left w-full p-10"> CIP drives a decentralized NFT marketplace where creators mint, sell, and trade digital art and collectibles. With low-cost transactions and robust tools, CIP fosters a dynamic creator economy and community engagement.  </p>
    </div>
  </div>
</div>
</div>


        {/* eco 3 start */}
        <div className="eco1 flex flex-col gap-10 w-[100%] sm:w-[33%]  ">

        {/* <div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg5a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10">NFT Marketplace</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg5 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl line-clamp-3  text-white text-left w-full p-10">CIP drives a decentralized NFT marketplace where creators mint, sell, and trade digital art and collectibles. With low-cost transactions and robust tools, CIP fosters a dynamic creator economy and community engagement.</p>
    </div>
  </div>
</div> */}

<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg3a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10"> AI Integration</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg3 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl line-clamp-3  text-white text-left w-full p-10"> CIP powers secure, decentralized data sharing for AI platforms. Users earn tokens for contributing data, while developers access high-quality datasets, accelerating breakthroughs in healthcare, finance, and more.  </p>
    </div>
  </div>
</div>






<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg6a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10"> Metaverse Integration</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg6 w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <p class="text-xl   line-clamp-3 text-white text-left w-full p-10"> CIP serves as currency in virtual worlds, allowing users to buy land, avatars, and experiences. It supports cross-platform transactions, governance, and collaborative decision-making in immersive metaverse environments.</p>
    </div>
  </div>
</div>




<div id="card" className="rounded-2xl  relative h-60 w-full">
  <div id="card-inner" className="">
    <div id="front" className="ecoa ecobgimg7a w-full flex item-center rounded-2xl justify-center bg-cover bg-center">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-quantico text-white text-left w-full p-10">Blockchain Development</h1>
    </div>
    <div id="Back" className="ecoa ecobgimg7 w-full flex items-center rounded-2xl justify-normal bg-cover bg-center">
      <p class="text-xl  line-clamp-3 text-white  text-left w-full pb-5"> CIP streamlines blockchain adoption for businesses, supporting supply chain management, smart contracts, and identity verification. It delivers transparency, security, and cost efficiency for operational innovation.</p>
    </div>
  </div>
</div>



</div>


</div>










    </>)
}

export default S3Usecase