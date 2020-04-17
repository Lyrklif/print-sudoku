import { makepuzzle, solvepuzzle } from "sudoku";


/**
 * возвращает сгенерированный массив чисел для судоку
 * 
 * @returns {object []}
 */
const getSudokuArray = () => {
  var puzzle = makepuzzle();
  var solution = solvepuzzle(puzzle);

  return solution;
};

export default getSudokuArray;
