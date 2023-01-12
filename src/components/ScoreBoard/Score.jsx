import React from "react";

const MemoryGame = ({ currentScore, bestScore }) => {
  return (
    <>
      <>
        <div>
          <h1>Memory Game</h1>
        </div>
        <p>Current Score: {currentScore}</p>
      </>
      <p>Best Score: {bestScore}</p>
    </>
  );
};

export default MemoryGame;
