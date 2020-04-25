import React from "react";

import Panel from './components/panel/panel';
import Preview from './components/preview/preview';
import Area from './components/area/area';
import Header from './components/header/header';
import Footer from './components/footer/footer';



const App = () => {

  return (
    <>
    <Header />

      <Panel />
      <Preview />
      <Area />

      <Footer />
    </>
  )
};

export default App;
