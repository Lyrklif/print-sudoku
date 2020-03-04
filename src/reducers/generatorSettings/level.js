
import { LEVEL } from "../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === LEVEL) {
    return action.value;
  } else {
    return state
  }
}
