import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import {  FaRocket, FaCogs, FaLayerGroup, FaGlobeAmericas } from 'react-icons/fa'; // Import multiple icons
import { FaCode } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import { LiaNetworkWiredSolid } from "react-icons/lia";
const S5Roadmap = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseEnter = () => setIsScrolling(true);
  const handleMouseLeave = () => setIsScrolling(false);

  // Roadmap data array
  const roadmapData = [
    {
      title: "Phase 01",
      subtitle: "Foundation and Development",
      icon: <FaRocket className="text-2xl w-7 h-7  text-white" />, // Icon for Phase 1
      content: [
        "Conceptualization and whitepaper creation.",
        "Smart contract development and deployment on BEP-20.",
        "Onboarding advisors and strategic partners.",
        "Building community through social media and marketing campaigns."
      ]
    },
    {
      title: "Phase 02",
      subtitle: "Initial Launch & Expansion",
      icon: <FaCode  className="text-2xl text-white  w-10 h-7 " />, // Icon for Phase 2
      content: [
        "Token launch on decentralized exchanges (DEXs).",
        "Beta testing of the online gaming platform.",
        "Development of Move to Earn prototype.",
        "Initial framework setup for AI integration and NFT marketplace."
      ]
    },
    {
      title: "Phase 03",
      subtitle: "Growth & Adoption",
      icon: <LiaNetworkWiredSolid className="text-2xl w-10 h-10  text-white" />, // Icon for Phase 3
      content: [
        "Listing on centralized exchanges (CEXs).",
        "Launch of Move to Earn (M2E) platform.",
        "Integration of Real World Assets tokenization.",
        "Community engagement through staking and reward programs."
      ]
    },
    {
      title: "Phase 04",
      subtitle: "Advanced Ecosystem Deployment",
      icon: <MdEco className="text-2xl w-10 h-10  text-white" />, // Icon for Phase 4
      content: [
        "Full launch of NFT marketplace.",
        "Integration of AI-driven solutions.",
        "Initial rollouts and demos for metaverse integration.",
        "Security audits and legal compliance certification."
      ]
    },
    {
      title: "Phase 05",
      subtitle: "Global Expansion & Governance",
      icon: <FaGlobeAmericas className="text-2xl  w-7 h-7  text-white" />, // Icon for Phase 5
      content: [
        "Blockchain deployment for targeted real-world use cases.",
        "Expansion of strategic partnerships across industries.",
        "Launch of global marketing initiatives.",
        "Introduction of community-driven governance and decision-making."
      ]
    },
    // Add more phases here...
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
      easing: 'ease-out', // Smooth easing for animations
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="Roadmap w-full pt-10 sm:pt-16 flex justify-center items-center flex-col bg-[#090909]" id="roadmap">
      <div className="Roadmap-heading text-center">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-3xl sm:text-3xl md:text-3xl">
          Roadmap
        </h1>
        <h2 className="bg-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Milestones to a Decentralized Future
        </h2>
      </div>

      {/* Card Container */}
      <div className="w-full pt-10 flex justify-center items-center" id="roadmapcard">
        <div
          className={`scroll-container sm:gap-10 flex overflow-x-auto sm:py-12 px-4 md:px-10 w-full space-x-5 ${isScrolling ? "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#b7e903] scrollbar-track-white" : "scrollbar-hidden"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dynamically Render Cards with AOS Animations */}
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              data-aos="fade-up" // AOS animation trigger for fade-up effect
              data-aos-delay={index * 100} // Stagger delay for each card
              data-aos-duration="1000" // Duration of animation
              className="card relative rounded-2xl border md:py-12 md:px-6 w-[450px] flex-shrink-0 bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] shadow-lg border-gradient border-gradient-green"
            >
              <div className="items-center space-y-3 flex flex-col justify-center text-center">
                {/* Phase Title with Icon */}
                <div className="flex items-center justify-between px-3 w-full space-x-3">
                   {/* Display the phase-specific icon */}
                  <h1 className="text-xl md:text-3xl lg:text-4xl bg-custom-gradient bg-clip-text text-transparent font-medium uppercase leading-snug md:leading-tight">
                    {phase.title}
                  </h1>
                  {phase.icon}
                </div>
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl uppercase leading-snug md:leading-tight">
                  {phase.subtitle}
                </h2>
                <div className="w-[70%] h-[3px] bg-roadmapline"></div>
              </div>
              <div className="py-10">
                <ul className="list-disc font-istok pl-8 text-wrap break-words text-xl w-[90%] space-y-2 text-gray-400">
                  {phase.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
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
