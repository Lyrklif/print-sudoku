
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import levels from '../../constants/levels';

import fluids from '../../store/actions/fluids/fluids';

import getSudokuArray from '../../functions/getSudokuArray';
import getUniqueNumbersArray from '../../functions/getUniqueNumbersArray';
import getClearedArrayByIndexes from '../../functions/getClearedArrayByIndexes';



// кнопки
const Buttons = () => {
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
    <>
      <button className="btn btn-primary panel__btn" onClick={setSudokuArray}>Создать судоку</button>
      <button className="btn btn-secondary panel__btn" onClick={print}>Распечатать</button>
    </>
  )
};

export default Buttons;

