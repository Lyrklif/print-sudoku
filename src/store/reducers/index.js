import {combineReducers} from 'redux';
import fluids from "./fluids/index";
import params from "./params/index";

export default combineReducers({
    fluids,
    params
})
