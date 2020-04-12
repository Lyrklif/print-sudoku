import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sudoku from '../sudoku/sudoku';

const Preview = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="preview-wp">
    <div className="preview-content">

      {store.fluids.map((block, index) => {
        return (
          <div className={`preview preview-${store.generatorSettings.blocksOnSheet}`}>
            {store.fluids[index].map((el, i) => {
              return <Sudoku key={i} array={el} />
            })}
          </div>
        )
      })}


    </div>
    </div>
  )
};

export default Preview;

