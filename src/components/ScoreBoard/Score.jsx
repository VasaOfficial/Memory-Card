import React from "react";
import "./scoreboard.css";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <>
      <div className="title">
        <h1>Memory Game</h1>
      </div>
      <div className="score-display">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </>
  );
};

export default ScoreBoard;
