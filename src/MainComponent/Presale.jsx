// import grabsale from "../assets/Grabsale-img.png"
import React, { useState } from "react";
import "../index.css"
import jsonData from "../data/Presaledata.json";
function Presale () {
    const [activeList, setActiveList] = useState("Staking List");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    const { stakingData, referralData } = jsonData;
  
    const currentData = activeList === "Staking List" ? stakingData : referralData;
    const paginatedData = currentData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    return(
        <>
        <div className="">
            <div className="m-5 lg:m-20">
                <div className="flex flex-col items-center justify-center py-12 sm:py-10 ">
                  
                <div class="relative text-white text-center w-full align-middle justify-center text-center pb-10">
  <h3 class="text-4xl sm:text-5xl md:text-6xl font-quantico font-medium tracking-widest text-[#f8fbfa] inline-block shadow-custom-drop rounded-2xl px-6 sm:px-8 md:px-10 py-2">
    COMING SOON
  </h3>

 {/* <div class="bar mt-5 h-[0.75rem] w-[30rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] xl:w-[70rem] rounded-md bg-transparent shadow-inner shadow-[inset_0px_0px_8px_rgba(50,50,50,1)] overflow-hidden p-1">
    <div class="progress h-full rounded-md bg-text-custom-gradient animate-load"></div>
  </div>  */}
</div>

                
                    <div className="w-full py-2 sm:w-[60%]  lg:w-[45%] xl:w-[35%]  rounded-lg  border border-[#feab1dbf] shadow-md shadow-white/50 text-center">
                        <div className="bg-[#0F0F0F] rounded-lg p-2 lg:py-4  lg:px-6 w-full flex flex-col gap-2 ">
                            <div className="text-3xl mb-2 font-semibold  font-quantico leading-loose">CUBIPAY TOKEN</div>
                            <p className="text-xl font-semibold mb-2 text-white leading-relaxed" >Grab the deal Buy new CUBIPAY</p>

                            {/* progress bar */}
                            <div className="bg-[#1d1d1d] rounded-lg h-10 mb-4 ">
                                <div className="bg-gradient-to-r from-[#FEAB1D] via-[#ED00FF] to-[#00E1FF] h-10 rounded-lg flex items-center justify-center w-[55%] " > 
                                    <span className="text-black text-sm font-medium">55%</span>
                                </div>
                            </div>

                            {/* current price & next price */}
                            <div className="flex justify-between text-white text-sm mb-6">
                                <div className="font-istok">Current price: <span className="">$0.20</span> </div>
                                <div className="font-istok">Next price: <span className="">$0.40</span> </div>
                            </div>
                        </div>
                        {/* payment options */}
                        <div className=" flex flex-col overflow-hidden  gap-2">
                            <div className="flex flex-col"> 
                            <p className="font-bold mt-2 mb-2 text-xl md:text-2xl text-white font-quantico ">You can buy with</p>
                            <div className="flex justify-center gap-2 mb-6 ">
                            <button  className="relative px-16 py-2 text-white font-quantico  rounded-xl md:rounded-xl bg-custom-gradient animate-rotate-gradient border-2 border-transparent">
                                <span className="absolute inset-0  bg-custom-gradient p-px rounded-xl md:rounded-xl flex items-center justify-center">
                                <span className="absolute inset-0 bg-black  flex items-center justify-center rounded-xl md:rounded-xl text-xl md:text-2xl"> 
                                USDT
                                 </span>
                                  </span> 
                                </button>
                                <button className="bg-[#1d1d1d] text-white py-2 px-16 border border-[#ffffff1f] rounded-lg flex items-center space-x-2">
                                    {/* <img src={bnb} alt="BNB" className="h-5 w-5" /> */}
                                    <span className="font-medium">BNB</span>
                                </button>
                            </div>
                            </div>

                            {/*input fields  */}
                            <p className="font-bold mt-2 mb-5 text-xl md:text-2xl  text-white font-quantico"> Buy CUBIPAY token Here</p>
                            <div className="flex  flex-col sm:flex-row justify-center sm:justify-between  gap-2 mx-2  mb-4">
                                <div className=" flex flex-col text-left ">
                                    <p className="text-xl text-white text-start pl-5">You will pay</p>
                                    <input type="text" placeholder="Enter USDT Amount" className="bg-[#1d1d1d] w-full pl-5 text-sm py-2 px-4 rounded-lg text-white outline-none" />
                                </div>
                                <div className=" flex flex-col text-right">
                                    <p className="text-xl text-white text-left  sm:text-end sm:pr-2 pl-4 ">You will Get</p>
                                    <input type="text" placeholder="Enter CUBIPAY Amount" className="bg-[#1d1d1d] pr-5 w-full  text-sm py-2 text-left sm:pr-2 pl-5 sm:text-right rounded-lg text-white outline-none" />
                                </div>

                                
                            </div>
                            <div className="w-full">

                            <div className=" flex flex-col   border py-3 px-2 border-gray-900">
                                    <p className="text-xl text-white text-left sm:text-center py-1 font-quantico   "> Referral Address </p>
                                    <input type="text" placeholder="Enter Referral Address" className="bg-[#1d1d1d]  font-istok w-full  text-sm py-4 text-left sm:text-center rounded-lg text-white outline-none" />
                                </div>
                            </div>

                            {/* buttons */}
                            <div className="flex flex-col gap-3 sm:flex-row  mb-2 bg-[#1d1d1d] p-3 mx-2 rounded-lg justify-around gap-2 ">
                            <button className=" px-5 py-3 rounded-md bg-custom-gradient font-quantico text-black font-bold"> Connect Wallet </button>
                            <button  className="relative px-16 py-6 text-white font-quantico  rounded-xl md:rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent">
                                <span className="absolute inset-0  bg-custom-gradient p-px rounded-xl md:rounded-full flex items-center justify-center">
                                <span className="absolute inset-0 bg-black  flex items-center justify-center rounded-xl md:rounded-full"> 
                                Buy Now
                                 </span>
                                  </span> 
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* new */}
                <div className="flex flex-col w-full p-5 md:p-10 overflow-x-scroll sm:overflow-hidden">
  <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-5">
    <button
      className={`relative px-8 py-4 md:px-16 md:py-6 text-white font-quantico rounded-xl md:rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent ${
        activeList === "Staking List" ? "bg-custom-gradient" : "bg-gray-200"
      }`}
      onClick={() => {
        setActiveList("Staking List");
        setCurrentPage(1);
      }}
    >
      <span className="absolute inset-0 bg-custom-gradient p-px rounded-xl md:rounded-full flex items-center justify-center">
        <span className="absolute inset-0 bg-black flex items-center justify-center rounded-xl md:rounded-full">
          Staking List
        </span>
      </span>
    </button>
    <button
      className={`relative px-8 py-4 md:px-16 md:py-6 text-white font-quantico rounded-xl md:rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent ${
        activeList === "Referral List" ? "bg-custom-gradient" : "bg-gray-200"
      }`}
      onClick={() => {
        setActiveList("Referral List");
        setCurrentPage(1);
      }}
    >
      <span className="absolute inset-0 bg-custom-gradient p-px rounded-xl md:rounded-full flex items-center justify-center">
        <span className="absolute inset-0 bg-black flex items-center justify-center rounded-xl md:rounded-full">
          Referral List
        </span>
      </span>
    </button>
  </div>

  <table className="table-auto border-collapse border border-gray-300 w-full text-center">
    <thead>
      <tr>
        {activeList === "Staking List" ? (
          <>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Sr No.</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Amount</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Duration</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Returns</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Start Date</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">End Date</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Status</th>
          </>
        ) : (
          <>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Sr No.</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Name</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Email</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Referrals</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Reward</th>
            <th className="border border-[#feab1dbf] shadow-custom-drop shadow-white/15 p-3">Status</th>
          </>
        )}
      </tr>
    </thead>
    <tbody>
      {paginatedData.map((item, index) => (
        <tr key={index}>
          {Object.values(item).map((value, i) => (
            <td className="border border-gray-300 p-2" key={i}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>

  <div className="flex justify-center items-center gap-3 mt-5">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="relative px-10 py-4 md:px-14 md:py-5 text-white font-quantico rounded-xl md:rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent disabled:opacity-50"
  >
    <span className="absolute inset-0 bg-custom-gradient p-px rounded-xl md:rounded-full flex items-center justify-center">
      <span className="absolute inset-0 bg-black flex items-center justify-center rounded-xl md:rounded-full">
        Previous
      </span>
    </span>
  </button>

  {/* Pagination buttons */}
  {Array.from({ length: Math.min(totalPages, window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 4 : totalPages) }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-custom-gradient" : "bg-custom-gradientpresale"}`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="relative px-10 py-4 md:px-14 md:py-5 text-white font-quantico rounded-xl md:rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent disabled:opacity-50"
  >
    <span className="absolute inset-0 bg-custom-gradient p-px rounded-xl md:rounded-full flex items-center justify-center">
      <span className="absolute inset-0 bg-black flex items-center justify-center rounded-xl md:rounded-full">
        Next
      </span>
    </span>
  </button>
</div>


</div>

            </div>


        </div>
        </>
    )
}
export default Presale