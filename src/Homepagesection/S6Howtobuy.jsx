import React from 'react';
import usecase1 from '../assets/Image/usecase1.png';
import usecase2 from '../assets/Image/usecase2.png';
import usecase3 from '../assets/Image/usecase3.png';
import usecase4 from '../assets/Image/usecase4.png';
import usecase5 from '../assets/Image/usecase5.png';

const S6Howtobuy = () => {
  const useCases = [
    {
      title: 'Staking Platform',
      img: usecase1,
      points: [
        'Conceptualization and whitepaper creation.',
        'Smart contract development and deployment on BEP-20.',
        'Onboarding advisors and strategic partners.',
        'Building community through social media and marketing campaigns.',
      ],
    },
    {
      title: 'NFT Marketplace',
      img: usecase2,
      points: [
        'Conceptualization and whitepaper creation.',
        'Smart contract development and deployment on BEP-20.',
        'Onboarding advisors and strategic partners.',
        'Building community through social media and marketing campaigns.',
      ],
    },
    {
      title: 'Exchange Launching',
      img: usecase3,
      points: [
        'Conceptualization and whitepaper creation.',
        'Smart contract development and deployment on BEP-20.',
        'Onboarding advisors and strategic partners.',
        'Building community through social media and marketing campaigns.',
      ],
    },
    {
      title: 'Decentralized Finance (DeFi)',
      img: usecase4,
      points: [
        'Conceptualization and whitepaper creation.',
        'Smart contract development and deployment on BEP-20.',
        'Onboarding advisors and strategic partners.',
        'Building community through social media and marketing campaigns.',
      ],
    },
    {
      title: 'Metaverse Integration',
      img: usecase5,
      points: [
        'Conceptualization and whitepaper creation.',
        'Smart contract development and deployment on BEP-20.',
        'Onboarding advisors and strategic partners.',
        'Building community through social media and marketing campaigns.',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center text-center mt-10 px-4 sm:px-6 lg:px-8" id="token">
      <div className="py-16 sm:py-8">
        <h1 className="font-bold text-gray-300 uppercase leading-snug md:leading-tight text-xl sm:text-2xl md:text-3xl">
          Process
        </h1>
        <h2 className="bg-text-custom-gradient bg-clip-text text-transparent font-semibold mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          How To Buy
        </h2>
      </div>

      <div className="flex flex-col gap-10 md:gap-16 items-center w-full max-w-full">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col w-[80%]  md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center  gap-8 md:gap-10`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-between">
              <img

                src={useCase.img}
                alt={useCase.title}
                className="w-full max-w-sm md:max-w-1/2 h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start md:items-start text-left gap-4 md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight bg-text-custom-gradient bg-clip-text text-transparent font-semibold">
                {useCase.title}
              </h1>
              <ul className="list-disc pl-5 text-sm sm:text-base lg:text-lg text-gray-400 space-y-2">
                {useCase.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default S6Howtobuy;
