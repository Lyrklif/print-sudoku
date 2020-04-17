import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// судоку (отображение массива в виде квадрата 9х9) 
const Sudoku = (props) => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  // массив чисел, записанных в <div>
  const array = props.array.map((number, index) => {
    return (
      <div key={index} className="sudoku__col">
        <span className="sudoku__number">{number}</span>
      </div>
    )
  });


  return (
    <div className="sudoku">
      <div className="sudoku__content">
        {array}
      </div>
    </div>
  )
};

export default Sudoku;

