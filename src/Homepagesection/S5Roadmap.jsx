import { useState } from "react";
import "../index.css";

const S5Roadmap = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseEnter = () => setIsScrolling(true);
  const handleMouseLeave = () => setIsScrolling(false);

  return (
    <div className="Roadmap w-full pt-10 sm:pt-16 flex justify-center items-center flex-col bg-[#090909]">
      <div className="Roadmap-heading text-center">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-3xl sm:text-3xl md:text-3xl">
          Roadmap
        </h1>
        <h2 className="bg-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Milestones to a Decentralized Future
        </h2>
      </div>

      {/* Card Container */}
      <div className="w-full pt-10 flex justify-center items-center ">
        <div
          className={`scroll-container sm:gap-10 flex overflow-x-auto sm:py-12 px-4 md:px-10 w-full space-x-5 ${
            isScrolling ? "scrollbar-none scrollbar-track-transparent   scrollbar-thumb-black scrollbar-track-white" : "scrollbar-hidden"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cards */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card relative rounded-2xl border md:py-12 md:px-6 w-[450px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg border-gradient border-gradient-green"
            >
              <div className="items-center space-y-3 flex flex-col justify-center text-center">
                <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                  Phase 0{index + 1}
                </h1>
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                  Foundation and Development
                </h2>
                <div className="w-[70%] h-[3px] bg-roadmapline"></div>
              </div>
              <div className="py-10">
                <ul className="list-disc font-istok  pl-8 text-wrap break-words text-xl w-[90%  ] space-y-2 text-gray-400">
                  <li>Conceptualization and whitepaper creation.</li>
                  <li>Smart contract development and deployment on BEP-20.</li>
                  <li>Onboarding advisors and strategic partners.</li>
                  <li>Building community through social media and marketing campaigns.</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default S5Roadmap;
