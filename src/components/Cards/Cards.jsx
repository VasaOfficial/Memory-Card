import { cardStorage } from "./CardsStorage";
import React, { useState } from "react";
import "./cards.css";

// Card Shuffling
const Cards = (props) => {
  const [shuffledCards, setShuffledCards] = useState(shuffle(cardStorage));

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="cards-container">
      {shuffledCards.map((card) => (
        <div className="card" key={card.id}>
          <img
            src={card.img}
            alt={card.text}
            onClick={() => props.onCardClick(card.id)}
          />
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
