import React, {useState} from "react";

import {useSelector, useDispatch} from 'react-redux';

import fluids from "./store/actions/fluids/fluids";

import SettingsPanel from './components/settings-panel/settings-panel';
import Preview from './components/preview/preview';



const App = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <SettingsPanel />
      <Preview />
    </>
  )
};

export default App;
