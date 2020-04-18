import React from 'react';
import { useSelector } from 'react-redux';

import Sudoku from '../sudoku/sudoku';


// блок, внутри которого отображаются сгенерированные судоку
// содержимое этого блока выводится на печать
const Preview = () => {
  const store = useSelector(state => state);

  return (
    <section className="preview-wp">

      {store.fluids.map((block, index) => {
        return (
          <div className={`preview preview-${store.params.sudokuCount}`}>
            {store.fluids[index].map((el, i) => {
              return <Sudoku key={i} array={el} />
            })}
          </div>
        )
      })}

    </section>
  )
};

export default Preview;

