import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import sudokuCount from '../../store/actions/params/sudokuCount';
import sudokuCountOptions from '../../constants/sudokuCountOptions';


// задать к-во судоку на странице
const SudokuCount = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();


  // при нажатии на кнопки с цифрами -> к-во судоку на странице
  const handleClick = (value) => {
    dispatch(sudokuCount(value))
  };


  return (
    <>
      <p className="fluid-name">Количество судоку на&nbsp;странице</p>
      <ul className="sudoku-count__list">

        {sudokuCountOptions.map((elem, i) => {
          return (
            <li className="sudoku-count__item" key={i}>
              <button
                className={"sudoku-count__btn btn-secondary " + (elem === store.params.sudokuCount ? 'active' : '')}
                onClick={() => handleClick(elem)}
              >{elem}</button>
            </li>
          );
        })}

      </ul>
    </>
  )
};

export default SudokuCount;

