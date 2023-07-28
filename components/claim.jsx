import { useState, useEffect } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import dayjs from 'dayjs';
import Cookies from 'js-cookie';

const Claim = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nextClaimTime, setNextClaimTime] = useState(null);

  useEffect(() => {
    // Get the last claim time from cookies
    const lastClaimTime = Cookies.get('lastClaimTime');
    if (lastClaimTime) {
      const nextClaim = dayjs(lastClaimTime).add(4, 'week');
      setNextClaimTime(nextClaim);
      const currentTime = dayjs();
      if (nextClaim.isAfter(currentTime)) {
        // If next claim time is in the future, disable the button
        setIsButtonDisabled(true);
      }
    }
  }, []);

  const handleClaim = (contract) => {
    // Check if the button is disabled, if so, do nothing
    if (isButtonDisabled) return;

    // Perform your claim action here
    contract.call("claim");

    // Disable the button and set the expiration time to 4 weeks from now
    const expirationDate = dayjs().add(4, 'week').toDate();
    Cookies.set('lastClaimTime', new Date().toISOString(), { expires: expirationDate });
    setIsButtonDisabled(true);

    // After 4 weeks, re-enable the button
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 4 * 7 * 24 * 60 * 60 * 1000); // 4 weeks in milliseconds
  };

  const calculateTimeRemaining = () => {
    if (nextClaimTime) {
      const currentTime = dayjs();
      const diffInSeconds = nextClaimTime.diff(currentTime, 'second');
      const duration = dayjs.duration(diffInSeconds, 'second');
      return duration.format('D [days], H [hours], m [minutes], s [seconds]');
    }
    return '';
  };

  return (
    <Web3Button
      contractAddress="0x593649F70f836565e33f0BCe9af9503c243359B3"
      action={handleClaim}
      disabled={isButtonDisabled}
    >
      {isButtonDisabled ? `Next Claim in ${calculateTimeRemaining()}` : "Claim"}
    </Web3Button>
  );
};

export default Claim;
