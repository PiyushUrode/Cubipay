import React from "react";

const S8Schedule = () => {
  return (
    <div className="w-full items-center flex flex-col overflow-x-hidden">
      <h1 className="bg-text-custom-gradient font-quantico bg-clip-text text-transparent font-semibold mt-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
        PRESALE SCHEDULE
      </h1>
      <div className="text-white bg-transparent flex flex-col sm:flex-row w-full justify-center gap-10 py-20 px-10">
        {/** Card 1 */}
        <div className="card flex flex-col items-center justify-center border p-8 gap-6 rounded-xl shadow-lg border-gradient border-gradient-green max-w-full flex-grow sm:max-w-[350px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl bg-custom-gradient2 bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight">
            Round 1
          </h1>
          <h2 className="font-istok text-2xl sm:text-3xl font-light">CIP COIN</h2>
          <h3 className="font-istok text-xl text-center sm:text-3xl">Price:- 0.001$</h3>
          <h4 className="font-quantico text-xl sm:text-2xl text-center align-middle  ">21-11-2024 - 14-01-2025</h4>
          <div className="relative px-20 py-4 text-white font-quantico rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent">
            <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
              <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                <a className="text-white font-semibold">Buy Now</a>
              </span>
            </span>
          </div>
        </div>

        {/** Card 2 */}
        <div className="card flex flex-col items-center justify-center border p-8 gap-6 rounded-xl shadow-lg border-gradient border-gradient-green max-w-full flex-grow sm:max-w-[350px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl bg-custom-gradient2 bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight">
            Round 2
          </h1>
          <h2 className="font-istok text-2xl sm:text-3xl font-light">CIP COIN</h2>
          <h3 className="font-istok text-xl text-center sm:text-3xl">Price:- 0.002$</h3>
          <h4 className="font-quantico text-xl sm:text-2xl text-center align-middle ">15-01-2025 - 09-02-2025</h4>
          <div className="relative px-20 py-4 text-white font-quantico rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent">
            <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
              <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                <a className="text-white font-semibold">Coming Soon</a>
              </span>
            </span>
          </div>
        </div>

        {/** Card 3 */}
        <div className="card flex flex-col items-center justify-center border p-8 gap-6 rounded-xl shadow-lg border-gradient border-gradient-green max-w-full flex-grow sm:max-w-[350px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl bg-custom-gradient2 bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight">
            Round 3
          </h1>
          <h2 className="font-istok text-2xl sm:text-3xl font-light">CIP COIN</h2>
          <h3 className="font-istok text-xl text-center sm:text-3xl">Price:- 0.004$</h3>
          <h4 className="font-quantico text-xl sm:text-2xl text-center align-middle  ">10-02-2025 - 05-03-2025</h4>
          <div className="relative px-20 py-4 text-white font-quantico rounded-full bg-custom-gradient animate-rotate-gradient border-2 border-transparent">
            <span className="absolute inset-0 rounded-full bg-custom-gradient p-px flex items-center justify-center">
              <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                <a className="text-white font-semibold">Coming Soon</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S8Schedule;
