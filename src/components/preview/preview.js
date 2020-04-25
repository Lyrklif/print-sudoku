import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sudoku from '../sudoku/sudoku';


// блок, внутри которого отображаются сгенерированные судоку
// содержимое этого блока выводится на печать
const Preview = () => {
  const store = useSelector(state => state);


  // вызывается при обновлении store.fluids
  useEffect(() => {

    // если есть созданные судоку
    if (store.fluids.length) {
      console.log(`Было создано ${store.params.pages * store.params.sudokuCount} судоку`);

      window.print(); // вызвать диалоговое окно для печати
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.fluids]);


  return (
    <section className="preview-wp">
      <header className="hide no-print">
        <h2>Превью созданных судоку</h2>
      </header>

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

