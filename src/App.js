import React, {useState} from "react";

import {useSelector, useDispatch} from 'react-redux';

import fluids from "./actions/fluids/fluids";

import SettingsPanel from './components/SettingsPanel';

const App = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <SettingsPanel />
    </>
  )
};

export default App;
