import React, { useState } from 'react';

const CopyContractAddressButton = ({ contractAddress }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500);
      })
      .catch(err => console.error('Error copying to clipboard:', err));
  };

  return (
    <button
      className={`bg-blue-500 text-white py-2 px-4 rounded ${copySuccess ? 'bg-green-500' : ''}`}
      onClick={handleCopyClick}
    >
      {copySuccess ? 'Copied!' : 'Copy Contract Address'}
    </button>
  );
};

export default CopyContractAddressButton;
