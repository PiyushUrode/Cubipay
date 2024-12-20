import React from "react";

const S12pinksale = () => {
  return (
    <div className="w-full items-center flex flex-col overflow-x-hidden px-4 sm:px-6 md:px-8">
      <h1 className="bg-text-custom-gradient font-quantico bg-clip-text uppercase text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
        PINKSALE  INTEGRATION
      </h1>
      <div className="text-white bg-transparent flex flex-col w-full justify-center gap-10 py-10 sm:py-16 md:py-20">
        {/* Card 1 */}
        <div className="card flex flex-col items-center justify-center border p-6 sm:p-8 md:p-10 gap-6 rounded-xl shadow-lg border-gradient border-gradient-green max-w-full flex-grow">
          <h1 className="text-2xl sm:text-3xl md:text-4xl bg-text-custom-gradient bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight text-center">
            CubiPay employs PinkSale for token distribution, ensuring:
          </h1>

          <h2 className="font-istok text-lg sm:text-xl md:text-2xl text-left sm:text-center   leading-relaxed sm:leading-normal">
            Secure Locking & Vesting: Protecting investments.
          </h2>
          <h2 className="font-istok text-lg sm:text-xl md:text-2xl text-left sm:text-center leading-relaxed sm:leading-normal">
            Transparent System Representation: Token sale details presented clearly.
          </h2>
          <h2 className="font-istok text-lg sm:text-xl md:text-2xl text-left sm:text-center leading-relaxed sm:leading-normal">
            Gas Fee Optimization: Just 1% gas fees for efficiency.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default S12pinksale;
