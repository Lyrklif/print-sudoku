
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import levels from '../../constants/levels';

import fluids from '../../store/actions/fluids/fluids';

import getSudokuArray from '../../functions/getSudokuArray';
import getUniqueNumbersArray from '../../functions/getUniqueNumbersArray';
import getClearedArrayByIndexes from '../../functions/getClearedArrayByIndexes';

import Loader from '../loader/loader';



// кнопки
const CreatePrintButton = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const length = levels[store.params.level].hiddenNumbers;
  const [progress, changeProgress] = useState(false); // прогресс создания судоку


  // записать массив судоку в store
  const setSudokuArray = () => {
    changeProgress(true);

    setTimeout(() => {
      dispatch(fluids(createSudokuArray())); // записать новый массив судоку в store
      changeProgress(false);
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
        let completeArray = length === 81 ? getEmptyArray() : getArray();
        array[i][z] = completeArray;
      }
    }

    return array;
  };

  // вернуть массив судоку
  const getArray = () => {
    return getClearedArrayByIndexes(getSudokuArray(), getUniqueNumbersArray(length, 0, 80));
  };

  // вернуть пустой массив
  const getEmptyArray = () => {
    return [...Array(length)]; // указано к-во пустых ячеек
  };


  return (
    <>
      <button
        disabled={progress}
        title={progress ? 'Судоку создаётся' : 'Создать судоку'}
        className={"create-print-btn " + (progress ? 'loading btn-secondary' : 'btn-primary')}
        onClick={setSudokuArray}
      >
        {progress ?
          <Loader />
          :
          <span>Создать и&nbsp;распечатать</span>
        }
      </button>
    </>
  )
};

export default CreatePrintButton;

