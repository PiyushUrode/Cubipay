import {useState} from 'react';

import "../index.css"
const S5Roadmap = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseEnter = () => setIsScrolling(true);
  const handleMouseLeave = () => setIsScrolling(false);
  return (
    <>
      <div className="Roadmap w-full py-10 flex justify-center items-center flex-col bg-[#090909] ">
        <div className="Roadmap-heading text-center">
          <h1 className="font-bold  text-gray-300 uppercase leading-snug md:leading-tight text-xl sm:text-2xl md:text-3xl">
            Roadmap
          </h1>
          <h2 className=" bg-custom-gradient bg-clip-text text-transparent  font-semibold   mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Milestones to a Decentralized Future
          </h2>
        </div>
{/* card start */}

<div className="w-full py-10 flex justify-center items-center cursor-move">
      <div
        className={`flex overflow-x-auto py-10 px-4 md:px-10 w-full space-x-5 ${
          isScrolling ? "scrollbar-thin scrollbar-thumb-black scrollbar-track-white" : "scrollbar-hidden"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card Wrapper */}
        <div className="flex space-x-5">
          {/* Card 1 */}
          {/* <div class="p-6 overflow-hidden flex flex-col gap-4 border border-transparent rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] bg-origin-border bg-clip-border border-box backdrop-blur-sm w-[29rem] flex-shrink-0 self-start"></div>
 */}
          {/* <div className="card border-2 border-white p-6 w-[300px] flex-shrink-0 bg-custom-gradient2 rounded-lg shadow-lg"> */} 
          {/* <div className="p-6 w-[300px] overflow-hidden flex flex-col gap-4  rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] border-transparent border-[1px]"> */}
          <div className="card relative rounded-2xl border  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>
          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>


          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>



          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>




          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>



          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>



          <div className="card relative rounded-2xl  p-6 w-[300px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg 
          border-gradient border-gradient-green
          ">

            <div className="items-center space-y-3 flex flex-col justify-center text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                Phase 01
              </h1>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                Foundation and Development
              </h2>
              <div className="w-[70%] h-[3px] bg-roadmapline"></div>
            </div>
            <div className="pt-5">
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-400">
                <li>Conceptualization and whitepaper creation.</li>
                <li>Smart contract development and deployment on BEP-20.</li>
                <li>Onboarding advisors and strategic partners.</li>
                <li>Building community through social media and marketing campaigns.</li>
              </ul>
            </div>
          </div>



        </div>
      </div>
    </div>


{/* card end */}

      </div>
    </>
  );
}

export default S5Roadmap;
