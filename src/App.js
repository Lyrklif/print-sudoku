import React  from "react";

import SettingsPanel from './components/settings-panel/settings-panel';
import Preview from './components/preview/preview';
import Area from './components/area/area';



const App = () => {

  return (
    <>
      <SettingsPanel />
      <Preview />
      <Area />
    </>
  )
};

export default App;
