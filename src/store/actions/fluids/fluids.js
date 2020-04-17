
import { FLUIDS } from "../../../constants/actionTypes";

export default (array) => {
  console.log('array', array);
  return {
    type: FLUIDS,
    array
  };
}
