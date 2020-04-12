import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Sudoku = (props) => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

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

