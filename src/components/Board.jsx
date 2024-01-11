import { calculateWinner } from "../utils/utils";
import Square from "./Square";

const Board = ({ squareText, xIsNext, handleSquare }) => {
  //   getting winner
  const winner = calculateWinner(squareText);
  let moveOrWinnerText;
  if (winner) {
    moveOrWinnerText = `Winner is: ${winner}`;
  } else {
    moveOrWinnerText = `Next move for: ${xIsNext ? "X" : "Y"}`;
  }

  /**
   *
   * @param {*} index - receiving square button index
   */
  const handleSquareClick = (index) => {
    // return if text already exist or winner is selected
    if (squareText[index] || winner) {
      return;
    }

    // creating a copy of previous squareText state
    const nextSquareText = squareText.slice();

    // checking if next move for "X" or "O"
    if (xIsNext) {
      nextSquareText[index] = "X";
    } else {
      nextSquareText[index] = "O";
    }

    // send nextSquareText to state 
    handleSquare(nextSquareText);
  };

  return (
    <>
      {moveOrWinnerText && <h1 className="text-2xl">{moveOrWinnerText}</h1>}
      <div className="flex">
        <Square
          squareText={squareText[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          squareText={squareText[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          squareText={squareText[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="flex">
        <Square
          squareText={squareText[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          squareText={squareText[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          squareText={squareText[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="flex">
        <Square
          squareText={squareText[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          squareText={squareText[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          squareText={squareText[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
};

export default Board;
