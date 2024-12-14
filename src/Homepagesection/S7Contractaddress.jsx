import React, { useState } from 'react';

const Presale = () => {
  const contractAddress = "IJGFRU783JHRWNF9E4T4ER3";
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopyStatus('Copied to Clipboard !');
      setTimeout(() => setCopyStatus(''), 2000); // Clears the message after 2 seconds
    }).catch(() => {
      setCopyStatus('Copy failed');
    });
  };

  return (
    <>
      <div className="flex flex-col text-center gap-5 align-middle items-center justify-center w-full px-5 py-20" id="contract">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-3xl bg-custom-gradient border border-transparent">
          <div className="bg-black rounded-3xl p-5 flex flex-col gap-8 items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl bg-custom-gradient bg-clip-text text-transparent font-semibold uppercase leading-snug md:leading-tight">
              Contract <span className="text-gradient">Address</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold w-full sm:w-[90%] md:w-[80%] break-words leading-tight border-2 p-3 rounded-2xl text-left">
              {contractAddress}
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
              <button
                className="relative px-16 md:px-16 py-5 text-sm md:text-base text-white font-quantico rounded-full bg-custom-gradient hover:text-[#ddd] animate-rotate-gradient border-2 border-transparent"
                onClick={handleCopy}
              >
                <span className="absolute inset-0 rounded-full bg-custom-gradient p-px  flex items-center justify-center">
                  <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
                    Copy Address
                  </span>
                </span>
              </button>
            </div>
            {copyStatus && (
              <p className="text-white text-center mt-4">
                {copyStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Presale;
