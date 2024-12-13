import React from 'react'

function Presale() {
  return (
    <div className='flex flex-col pt-40 justify-center items-center'>
      <div 
        className='flex flex-col justify-center items-center p-5 sm:p-8 md:p-10 w-4/5 lg:w-3/5 gap-8 border-2'
        id='man'
      > 
        {/* Title and Description */}
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center tracking-wide'>
            CUBIPAY TOKEN
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl text-center tracking-wide'>
            Grab the deal Buy now CUBIPAY
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#535353] rounded-lg h-10 w-full">
          <div className="bg-gradient-to-r from-[#FEAB1D] to-[#ffed49] h-10 rounded-lg flex items-center justify-center w-[55%]">
            <span className="text-black text-sm font-medium">55%</span>
          </div>
        </div>

        {/* Price Info */}
        <div className="flex justify-between text-white text-sm mb-6 w-full">
          <div>Current price: <span>$0.20</span></div>
          <div>Next price: <span>$0.40</span></div>
        </div>

        {/* Payment Options */}
        <div className='w-full'>
          <p className="font-normal mt-2 mb-2 text-center text-3xl">You can buy with</p>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-[#2E2921] text-white py-5 px-10 rounded-lg flex items-center space-x-2">
              <span className="font-medium">USDT</span>
            </button>
            <button className="bg-[#2E2921] text-white py-5 px-10 rounded-lg flex items-center space-x-2">
              <span className="font-medium">BNB</span>
            </button>
          </div>
        </div>

        {/* Input fields for token purchase */}
        <div>
          <p className="font-bold mt-2 mb-2">Buy BVEGAS token Here</p>
          <div className="flex justify-between gap-2 mx-2 mb-4">
            <div className="flex-1">
              <p className="text-sm text-start">You will pay</p>
              <input
                type="text"
                placeholder="Enter USDT Amount"
                className="bg-[#2E2921] w-full py-2 px-4 rounded-lg text-white outline-none"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-end">You will Get</p>
              <input
                type="text"
                placeholder="Enter BVEGAS Amount"
                className="bg-[#2E2921] w-full py-2 px-4 rounded-lg text-white outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mb-2 bg-[#2E2921] p-3 mx-2 rounded-lg justify-between gap-2">
            <button className="bg-gradient-to-r from-[#FFA100] via-[#FFE488] to-[#F89D00] text-[#303030] font-bold py-2 px-6 shadow-sm shadow-white button-cliped font-istokweb">
              Connect Wallet
            </button>
            <button className="bg-white text-[#303030] font-bold py-2 px-6 button-cliped font-istokweb">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presale
