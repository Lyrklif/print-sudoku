import {combineReducers} from 'redux';
import fluids from "./fluids/index";
import generatorSettings from "./generatorSettings/index";

export default combineReducers({
    fluids,
    generatorSettings
})
