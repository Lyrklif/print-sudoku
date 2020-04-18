import { COUNT_BLOCKS_ON_SHEET } from "../../../constants/actionTypes";

export default (value) => {
  return {
    type: COUNT_BLOCKS_ON_SHEET,
    value
  };
}

