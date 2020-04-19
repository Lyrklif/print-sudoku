import { SUDOKU_COUNT } from "../../../constants/actionTypes";

export default (value) => {
  return {
    type: SUDOKU_COUNT,
    value
  };
}

