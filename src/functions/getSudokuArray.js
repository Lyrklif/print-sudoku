import { makepuzzle, solvepuzzle } from "sudoku";


/**
 * возвращает сгенерированный массив чисел для судоку
 * 
 * @returns {object []}
 */
const getSudokuArray = () => {
  let puzzle = makepuzzle(); // судоку с отсутствием части цифр
  let solution = solvepuzzle(puzzle); // решение

  // исправленный массив. все числа увеличены на 1, 
  // т.к. в оригинальном массиве идут числа от 0 до 8
  let fixedPuzzle = []; 

  // увеличить все числа на 1
  solution.forEach((number, i) => {
    fixedPuzzle[i] = ++number;
  });

  return fixedPuzzle;
};

export default getSudokuArray;
