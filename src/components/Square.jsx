const Square = ({ handleSquareClick, squareText }) => {
  return (
    <button
      className="border border-gray-400 w-12 h-12 text-2xl m-2"
      onClick={handleSquareClick}
    >
      {squareText}
    </button>
  );
};

export default Square;
