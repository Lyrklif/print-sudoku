
import { NUMBER_OF_SHEET } from "../../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === NUMBER_OF_SHEET) {
    return action.value;
  } else {
    return state
  }
}
