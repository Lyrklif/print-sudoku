import React, {useState} from "react";

import {useSelector, useDispatch} from 'react-redux';


import SettingsPanel from './components/settings-panel/settings-panel';
import Preview from './components/preview/preview';
import Area from './components/area/area';



const App = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <SettingsPanel />
      <Preview />
      <Area />
    </>
  )
};

export default App;
