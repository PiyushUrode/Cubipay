import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import "../index.css"

const S7Contractaddress = () => {
  const contractAddress = "0x5DDc0B083d65761d80b0401AB3Ce886dD69c0075";
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        setCopyStatus('Copied to Clipboard!');
        setTimeout(() => setCopyStatus(''), 2000); // Clears the message after 2 seconds
      })
      .catch(() => {
        setCopyStatus('Copy failed');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 w-full px-5 py-20   relative " id="contract">
        <div className='  gap-5 flex flex-col p-10 bg-custom-gradientpresale  border-gradient-two border-gradient-red '>  
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-normal break-words leading-tight text-white">
        Contract <span className="text-gradient">Address</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-4xl px-4 border-2 p-3 rounded-2xl">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white break-words leading-tight flex items-center gap-4">
          {contractAddress}
          <FaCopy 
            className="cursor-pointer text-white hover:text-customTealhover" 
            size={28} 
            onClick={handleCopy} 
          />
        </p>
      </div>
      {copyStatus && (
        <p className="text-white text-center mt-4 text-sm sm:text-base">
          {copyStatus}
        </p>
      )}
    </div>
    </div>
  );
};

export default S7Contractaddress;
