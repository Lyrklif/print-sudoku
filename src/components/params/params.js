import React from 'react';

import SelectLevel from '../select-level/select-level';
import SelectBlockCount from '../select-block-count/select-block-count';
import SheetCount from '../sheet-count/sheet-count';



// параметры панели настроек
const Params = () => {

  return (
    <>
      <SelectLevel />
      <SelectBlockCount />
      <SheetCount />
    </>
  )
};

export default Params;

