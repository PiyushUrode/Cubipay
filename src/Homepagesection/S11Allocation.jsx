import React from 'react';
import table1 from "../assets/Newfolder/table1.webp";

const S11Allocation = () => {
  const data = [
    { category: 'Community', allocation: '40%', period: '60 months vesting' },
    { category: 'Liquidity Pool', allocation: '10%', period: '12 months locking' },
    { category: 'Marketing', allocation: '10%', period: '36 months vesting' },
    { category: 'Referral & Airdrop', allocation: '5%', period: 'Fully unlocked' },
    { category: 'Advisory', allocation: '5%', period: '36 months vesting' },
    { category: 'Treasury', allocation: '5%', period: '36 months vesting' },
  ];

  return (
    <>   
      <div className="w-full items-center flex justify-center text-center text-2xl sm:text-3xl px-4 sm:px-6 md:px-8">
        <h1 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Allocation Breakdown
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row w-full p-6 sm:p-10 md:p-20 items-center justify-center gap-6">
        {/* Left Section: Image */}
        <div
          id="filler-left"
          className="w-full sm:w-[50%] flex justify-center items-center max-h-[500px]"
        >
          <img
            loading="lazy"
            src={table1}
            alt="About Image"
            className="transition-all duration-1000 transform hover:scale-110 max-h-[500px] w-full object-contain"
          />
        </div>

        {/* Right Section: Table */}
        <div className="overflow-x-auto w-full sm:w-[50%] flex justify-center max-h-[500px]">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-black">
                <th className="text-left text-lg sm:text-xl font-medium text-white font-quantico rounded-lg border border-[#feab1dbf] shadow-md shadow-white/50 text-center px-4 py-2">
                  Category
                </th>
                <th className="text-left text-lg sm:text-xl font-medium text-white font-quantico rounded-lg border border-[#feab1dbf] shadow-md shadow-white/50 text-center px-4 py-2">
                  Allocation
                </th>
                <th className="text-left text-lg sm:text-xl font-medium text-white font-quantico rounded-lg border border-[#feab1dbf] shadow-md shadow-white/50 text-center px-4 py-2">
                  Locking/Vesting Period
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="text-base sm:text-lg text-center text-white border border-gray-300 px-2 py-2">
                    {item.category}
                  </td>
                  <td className="text-base sm:text-lg text-center text-white border border-gray-300 px-2 py-2">
                    {item.allocation}
                  </td>
                  <td className="text-base sm:text-lg text-center text-white border border-gray-300 px-2 py-2">
                    {item.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default S11Allocation;
