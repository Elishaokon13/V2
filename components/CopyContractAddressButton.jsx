import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div onClick={handleCopyClick}>
      <motion.a
        className='btn btn-solid'
        target='_blank'
        rel='noopener noreferrer'
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
      >
        {copySuccess ? 'Copied!' : 'Copy CA'}
      </motion.a>
    </div>
  );
};

export default CopyContractAddressButton;
