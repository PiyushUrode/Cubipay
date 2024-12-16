// import grabsale from "../assets/Grabsale-img.png"
function Presale () {
    return(
        <>
        <div className="">
            <div className="m-5 lg:m-20">
                <div className="flex justify-center ">
                    <div className="w-full py-2 sm:w-[60%] md:w-[50%] lg:w-[30%] border border-[#feab1dbf] rounded-lg shadow-md shadow-white/50 text-center">
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
                            <div className="flex justify-between gap-2 mx-2  mb-4">
                                <div className=" flex flex-col text-left ">
                                    <p className="text-xl text-white text-start pl-5">You will pay</p>
                                    <input type="text" placeholder="Enter USDT Amount" className="bg-[#1d1d1d] w-full text-sm py-2 px-4 rounded-lg text-white outline-none" />
                                </div>
                                <div className=" flex flex-col text-right">
                                    <p className="text-xl text-white text-end pr-2 ">You will Get</p>
                                    <input type="text" placeholder="Enter CUBIPAY Amount" className="bg-[#1d1d1d] pr-5 w-full  text-sm py-2 text-right rounded-lg text-white outline-none" />
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
            </div>
        </div>
        </>
    )
}
export default Presale