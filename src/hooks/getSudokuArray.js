import { makepuzzle, solvepuzzle } from "sudoku";

const getSudokuArray = () => {
  var puzzle = makepuzzle();
  var solution = solvepuzzle(puzzle);

  return solution;
};

export default getSudokuArray;
