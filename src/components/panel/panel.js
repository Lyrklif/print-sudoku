import React from 'react';

import SelectLevel from '../select-level/select-level';
import SudokuCount from '../sudoku-count/sudoku-count';
import SheetCount from '../sheet-count/sheet-count';

import Buttons from '../buttons/buttons';


// панель настроек параметров судоку
const Panel = () => {

  return (
    <section className="panel no-print">
      <h1>Судоку для печати</h1>

      <SelectLevel />
      <SudokuCount />
      <SheetCount />

      <Buttons />

    </section>
  )
};

export default Panel;

