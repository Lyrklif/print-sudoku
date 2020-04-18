
import { BLOCKS_ON_SHEET } from "../../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === BLOCKS_ON_SHEET) {
    return action.value;
  } else {
    return state
  }
}
