import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import sudokuCount from '../../store/actions/params/sudokuCount';


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
      <span className="fluid-name">К-во судоку на&nbsp;странице</span>
      <ul className="sudoku-count__list">

        {store.params.sudokuCountOptions.map((elem, i) => {
          return (
            <li className="sudoku-count__item" key={i}>
              <button
                className={"sudoku-count__btn " + (elem === store.params.sudokuCount ? 'active' : '')}
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

