import { useState, useEffect } from "react";
import Cell from "./components/Cell";
const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [go, setGo] = useState("circle");
  let message = `let ${go}'s go`;

  const checkScore = () => {
    console.log(cells);
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let isDraw = true;

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinnerMessage(`Circle Wins`);
        isDraw = false;
        return;
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinnerMessage(`Cross Wins`);
        isDraw = false;
        return;
      }
    });

    if (isDraw && cells.every((cell) => cell !== "")) {
      setWinnerMessage(`Game Is Draw`);
      isDraw = true;
      return;
    }
  }

  function resetGame(){
    setCells(Array(9).fill(''));
    setWinnerMessage('');
  }

  useEffect(()=>{
    checkScore();
  },[cells])

  return (
    <div className="app">
      <div className="gameboard">
      {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winnerMessage={winnerMessage}
          />
        ))}
      </div>
      <p>{winnerMessage || message}</p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;
