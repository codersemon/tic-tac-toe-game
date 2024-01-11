import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  // squares text state
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // current move
  const [currentMove, setCurrentMove] = useState(0);

  //   X state for next move is 'X' or 'Y'
  const xIsNext = currentMove % 2 === 0;

  // current squares
  const currenctSquare = history[currentMove];

  // handle squares
  const handleSquare = (nextSquareText) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquareText];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  // generating moves history
  const moves = history?.map((squares, move) => {
    let moveStep;
    if (move > 0) {
      moveStep = `Go to move # ${move}`;
    } else {
      moveStep = "Go to start game";
    }

    // handle move jumping
    const jumpToMove = (move) => {
      setCurrentMove(move);
    };

    return (
      <li key={move}>
        <button onClick={() => jumpToMove(move)} className="bg-gray-400 p-2 rounded-sm my-1 w-[100%]">{moveStep}</button>
      </li>
    );
  });

  return (
    <>
      <div className="container mx-auto flex justify-center gap-x-8 py-5">
        <div className="w-2/12">
          <Board
            squareText={currenctSquare}
            xIsNext={xIsNext}
            handleSquare={handleSquare}
          />
        </div>
        <div className="w-2/12 border px-3 pb-2">
          <h1 className="text-2xl">History</h1>
          <ul>{moves}</ul>
        </div>
      </div>
      <p className="text-center fixed bottom-0 right-0 left-0 bg-lime-300">Design & Developed by <a href="https://github.com/codersemon">Emon Khan</a></p>
    </>
  );
}

export default App;
