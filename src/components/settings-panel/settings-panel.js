import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fluids from '../../store/actions/fluids/fluids';

import SelectLevel from '../select-level/select-level';
import SelectBlockCount from '../select-block-count/select-block-count';
import SheetCount from '../sheet-count/sheet-count';

import getSudokuArray from '../../functions/getSudokuArray';

import levels from '../../constants/levels';

import getUniqueNumbersArray from '../../functions/getUniqueNumbersArray';
import getClearedArrayByIndexes from '../../functions/getClearedArrayByIndexes';


// панель настроек параметров судоку
const SettingsPanel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const length = levels[store.settings.level].hiddenNumbers;

  // записать массив судоку в store
  const setSudokuArray = () => {
    dispatch(fluids(createSudokuArray()));

    // print();
  };

  // создать массив судоку
  const createSudokuArray = () => {
    let array = [];
    let blocks = store.settings.blocksOnSheet;
    let sheet = store.settings.numberOfSheet;

    for (let i = 0; i < sheet; ++i) {
      array[i] = [];
      for (let z = 0; z < blocks; ++z) {

        let completeArray = getClearedArrayByIndexes(getSudokuArray(), getUniqueNumbersArray(length, 0, 80));
        array[i][z] = completeArray;
      }
    }

    return array;
  };

  // диалоговое окно для печати
  const print = () => {
    window.print();
  };


  return (
    <section className="settings-panel no-print">

      <h1>Судоку</h1>

      <SelectLevel />
      <SelectBlockCount />
      <SheetCount />

      <button className="btn btn-primary settings-panel__btn" onClick={setSudokuArray}>Создать судоку</button>
      <button className="btn btn-secondary settings-panel__btn" onClick={print}>Распечатать</button>

    </section>
  )
};

export default SettingsPanel;

