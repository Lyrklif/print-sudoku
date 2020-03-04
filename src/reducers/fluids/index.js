
import { FLUIDS } from "../../constants/actionTypes";

export default (state = [], action) => {
    if (action.type === FLUIDS) {
        return action.array;
    } else {
        return state
    }
}
