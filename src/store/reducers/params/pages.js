
import { PAGES } from "../../../constants/actionTypes";

export default (state = 1, action) => {
  if (action.type === PAGES) {
    return action.value;
  } else {
    return state
  }
}
