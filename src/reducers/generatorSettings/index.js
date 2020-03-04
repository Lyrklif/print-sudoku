import { combineReducers } from 'redux'
import level from "./level";
import blocksOnSheet from "./blocksOnSheet";
import numberOfSheet from "./numberOfSheet";

export default combineReducers({
  level,
  blocksOnSheet,
  numberOfSheet
})
