
import { SUDOKU_COUNT } from "../../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === SUDOKU_COUNT) {
    return action.value;
  } else {
    return state
  }
}
