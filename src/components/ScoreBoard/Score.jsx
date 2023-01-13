import React from "react";

const ScoreBoard = ({ currentScore, bestScore }) => {
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

export default ScoreBoard;
