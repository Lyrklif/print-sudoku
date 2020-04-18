import React from "react";

import Panel from './components/panel/panel';
import Preview from './components/preview/preview';
import Area from './components/area/area';



const App = () => {

  return (
    <>
      <Panel />
      <Preview />
      <Area />

      <footer class="no-print hide">
        <p>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
      </footer>
    </>
  )
};

export default App;
