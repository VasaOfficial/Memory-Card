import React, { useState } from "react";
import MemoryGame from "./components/Cards/Cards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <MemoryGame currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}

export default App;
