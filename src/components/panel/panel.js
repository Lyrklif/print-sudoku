import React from 'react';

import SelectLevel from '../select-level/select-level';
import SudokuCount from '../sudoku-count/sudoku-count';
import SheetCount from '../sheet-count/sheet-count';

import CreatePrintButton from '../create-print-button/create-print-button';


// панель настроек параметров судоку
const Panel = () => {

  return (
    <section className="panel no-print">
      <header className="hide">
        <h2>Панель параметров</h2>
      </header>

      <SelectLevel />
      <SudokuCount />
      <SheetCount />

      <CreatePrintButton />

    </section>
  )
};

export default Panel;

