
import { SUDOKU_COUNT_OPTIONS } from "../../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === SUDOKU_COUNT_OPTIONS) {
    return action.value;
  } else {
    return state
  }
}
