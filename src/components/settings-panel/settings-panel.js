import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fluids from '../../actions/fluids/fluids';
import numberOfSheet from '../../actions/generatorSettings/numberOfSheet';

import SelectLevel from '../select-level/select-level';
import SelectBlockCount from '../select-block-count/select-block-count';
import SheetCount from '../sheet-count/sheet-count';

import getSudokuArray from '../../functions/getSudokuArray';

const SettingsPanel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const changeNumberOfSheet = (e) => {
    let value = e.target.value;
    if (value > 0 && value <= 100) dispatch(numberOfSheet(value))
  };

  const setSudokuArray = () => {
    dispatch(fluids(createSudokuArray()));
  };

  const createSudokuArray = () => {
    let array = [];
    let blocks = store.generatorSettings.blocksOnSheet;
    let sheet = store.generatorSettings.numberOfSheet;

    for (let i = 0; i < sheet; i++) {
      array[i] = [];
      for (let z = 0; z < blocks; z++) {
        array[i][z] = getSudokuArray();
      }
    }

    return array;
  };


  return (
    <div className="no-print">

      <SelectLevel />
      <SelectBlockCount />
      <SheetCount />

      <button className="btn" onClick={setSudokuArray}>Создать судоку</button>

    </div>
  )
};

export default SettingsPanel;

