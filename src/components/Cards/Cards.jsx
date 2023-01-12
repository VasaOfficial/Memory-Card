import { cardStorage } from "./CardsStorage";
import React from "react";

const Cards = () => {
  const shuffledCards = cardStorage.sort(() => Math.random() - 0.5);

  return (
    <div>
      {shuffledCards.map((card) => (
        <img key={card.id} src={card.img} alt={card.text} />
      ))}
    </div>
  );
};

export default Cards;
