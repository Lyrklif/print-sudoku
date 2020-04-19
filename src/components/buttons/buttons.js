
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import levels from '../../constants/levels';

import fluids from '../../store/actions/fluids/fluids';

import getSudokuArray from '../../functions/getSudokuArray';
import getUniqueNumbersArray from '../../functions/getUniqueNumbersArray';
import getClearedArrayByIndexes from '../../functions/getClearedArrayByIndexes';

import Loader from '../loader/loader';



// кнопки
const Buttons = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const length = levels[store.params.level].hiddenNumbers;
  const [progress, changeProgress] = useState(false); // прогресс создания судоку
  const [created, changeCreated] = useState(false); // судоку созданы 


  // записать массив судоку в store
  const setSudokuArray = () => {
    changeProgress(true);

    setTimeout(() => {
      dispatch(fluids(createSudokuArray())); // записать новый массив судоку в store

      changeProgress(false);
      changeCreated(true);

    }, 500);
  };


  // создать массив судоку
  const createSudokuArray = () => {
    let array = [];
    let blocks = store.params.sudokuCount;
    let sheet = store.params.pages;

    for (let i = 0; i < sheet; ++i) {
      array[i] = [];
      for (let z = 0; z < blocks; ++z) {

        // удалить из массива судоку несколько чисел, к-во зависит от уровня сложности 
        let completeArray = getClearedArrayByIndexes(getSudokuArray(), getUniqueNumbersArray(length, 0, 80));
        array[i][z] = completeArray;
      }
    }

    return array;
  };


  // диалоговое окно для печати
  const print = () => {
    window.print();

    changeCreated(false);
    changeProgress(false);

    dispatch(fluids([]));// очистить массив судоку в store
  };


  return (
    <>
      <button
        disabled={progress}
        title={progress ? 'Судоку создаётся' : 'Создать судоку'}
        className={"btn panel__btn " + (progress ? 'loading ' : '') + (created ? 'btn-secondary ' : 'btn-primary ')}
        onClick={setSudokuArray}>
        {progress ? <Loader /> : <span>Создать судоку</span>}
      </button>

      <button
        disabled={!created}
        title={created ? 'Распечатать' : 'Сначала нужно создать судоку'}
        className={"btn panel__btn " + (created ? 'btn-primary ' : 'btn-secondary ')}
        onClick={print}>Распечатать</button>
    </>
  )
};

export default Buttons;

