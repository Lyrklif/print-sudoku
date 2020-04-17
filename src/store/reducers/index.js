import {combineReducers} from 'redux';
import fluids from "./fluids/index";
import settings from "./settings/index";

export default combineReducers({
    fluids,
    settings
})
