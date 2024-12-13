import React from 'react'
import "../index.css"
import eco1 from "../assets/Image/eco1.png"
import eco2 from "../assets/Image/eco2.png"
import eco3 from "../assets/Image/eco3.png"
import eco4 from "../assets/Image/eco4.png"
import eco5 from "../assets/Image/eco5.png"
import eco6 from "../assets/Image/eco6.png"
import eco7 from "../assets/Image/eco7.png"

const S3Usecase = () => {
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center  px-4 sm:px-6 lg:px-8 bg-[#090909] " id="token">
        <div className="py-16 phone:py-8">
          <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-xl sm:text-2xl md:text-3xl">
            Use Cases
          </h1>
          <h2 className=" bg-text-custom-gradient  bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            ECO SYSTEM
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-10  gap-10 justify-around">

        {/* eco 1 start */}
 
 <div className="eco1 flex flex-col gap-10 ">

  <div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className="ecoa ecobgimg1 h-64 w-full flex items-end  rounded-2xl  justify-center bg-cover bg-center ">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">NFT Marketplace</h1>
</div>
</div>






<div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className="ecoc ecobgimg3 h-64 w-full flex items-end justify-center bg-cover bg-center rounded-2xl">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">Blockchain Deployment</h1>
</div>
</div>




<div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className="ecoc ecobgimg3 h-64 w-full flex items-end justify-center bg-cover bg-center rounded-2xl">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">Blockchain Deployment</h1>
</div>
</div>



</div>


        {/* eco 2 start */}

<div className="eco2 flex flex-col gap-10">
<div className='rounded-2xl h-full w-full flex items-end justify-center bg-cover bg-center  bg-custom-gradient border-2 border-transparent'> 
<div className="ecod ecobgimg4 h-full w-full flex items-end justify-center bg-cover bg-center">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">Move to Earn (M2E)</h1>
</div>
</div>
</div>


        {/* eco 3 start */}

<div className="eco3 flex flex-col gap-10 ">

<div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className="ecoa ecobgimg1 h-64 w-full flex items-end  rounded-2xl  justify-center bg-cover bg-center ">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">NFT Marketplace</h1>
</div>
</div>

<div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className=" ecob ecobgimg2 h-64 w-full flex items-end justify-center bg-cover bg-center rounded-2xl">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">Metaverse Integration</h1>
</div>
</div>


<div className='rounded-2xl bg-custom-gradient border-2 border-transparent'> 
<div className="ecoc ecobgimg3 h-64 w-full flex items-end justify-center bg-cover bg-center rounded-2xl">
<h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center p-10">Blockchain Deployment</h1>
</div>
</div>



</div>


</div>










    </>)
}

export default S3Usecase