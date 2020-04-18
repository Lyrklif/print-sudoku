import React from 'react';

import Params from '../params/params';
import Buttons from '../buttons/buttons';


// панель настроек параметров судоку
const Panel = () => {

  return (
    <section className="panel no-print">
      <h1>Судоку</h1>

      <Params />
      <Buttons />

    </section>
  )
};

export default Panel;

