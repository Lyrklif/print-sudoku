import { combineReducers } from 'redux'
import level from "./level";
import sudokuCount from "./sudokuCount";
import pages from "./pages";

export default combineReducers({
  level,
  sudokuCount,
  pages,
})
