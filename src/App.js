import React from "react";

import SettingsPanel from './components/settings-panel/settings-panel';
import Preview from './components/preview/preview';
import Area from './components/area/area';



const App = () => {

  return (
    <>
      <SettingsPanel />
      <Preview />
      <Area />

      <footer class="no-print hide">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </footer>
    </>
  )
};

export default App;
