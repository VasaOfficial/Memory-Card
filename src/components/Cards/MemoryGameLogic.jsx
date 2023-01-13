import React, { useState } from "react";
import Cards from "./Cards";
import ScoreBoard from "../ScoreBoard/Score";

// Score logic
const MemoryGame = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (card) => {
    if (clickedCards.includes(card)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, card]);
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    }
  };
  return (
    <div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <Cards onCardClick={handleClick} />
    </div>
  );
};

export default MemoryGame;
