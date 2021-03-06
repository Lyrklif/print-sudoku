
import { createStore } from 'redux';

import reducer from '../store/reducers';
import startingValue from './startingValue';

const store = createStore(reducer, startingValue);

export default store;
