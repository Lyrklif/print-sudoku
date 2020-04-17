import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sudoku from '../sudoku/sudoku';

// блок, внутри которого отображаются сгенерированные судоку
// содержимое этого блока выводится на печать
const Preview = () => {
  const store = useSelector(state => state);

  return (
    <section className="preview-wp">
      <div className="preview-content">

        {store.fluids.map((block, index) => {
          return (
            <div className={`preview preview-${store.settings.blocksOnSheet}`}>
              {store.fluids[index].map((el, i) => {
                return <Sudoku key={i} array={el} />
              })}
            </div>
          )
        })}

      </div>
    </section>
  )
};

export default Preview;

