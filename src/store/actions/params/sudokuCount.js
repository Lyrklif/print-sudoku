import { BLOCKS_ON_SHEET } from "../../../constants/actionTypes";

export default (value) => {
  return {
    type: BLOCKS_ON_SHEET,
    value
  };
}

