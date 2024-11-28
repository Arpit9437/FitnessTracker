import React, { createContext, useState, useContext } from 'react';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);  

  const addChallenge = (challenge) => {
    setChallenges((prevChallenges) => [...prevChallenges, challenge]);
  };

  return (
    <ChallengeContext.Provider value={{ challenges, addChallenge }}>
      {children}
    </ChallengeContext.Provider>
  );
};

// Custom hook to use challenge context
export const useChallenges = () => useContext(ChallengeContext);
