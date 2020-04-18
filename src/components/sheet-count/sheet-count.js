import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import numberOfSheet from '../../store/actions/settings/numberOfSheet';

// задать к-во страниц
const SheetCount = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();


  // обработчик изменения input value (к-во стр.)
  const handleChange = (value) => {
    dispatch(numberOfSheet(value))
  };


  // уменьшить значение на 1
  const minus = () => {
    let value = store.settings.numberOfSheet - 1;
    value = value >= 1 ? value : 1;

    handleChange(value);
  };


  // увеличить значение на 1
  const plus = () => {
    let value = store.settings.numberOfSheet + 1;
    value = value <= 100 ? value : 100;

    handleChange(value);
  };


  return (
    <>
      <label className="sheet-count" for="sheet">
        <span className="fluid-name">К-во страниц</span>
      </label>

      <div className="sheet-count__controls-group">

        <button
          onClick={minus}
          className="btn btn-secondary sheet-count__btn_minus">-</button>

        <input
          className="sheet-count__input"
          if="sheet"
          value={store.settings.numberOfSheet}
          type="number"
          min="1"
          max="100"
          onInput={(e) => handleChange(e.target.value)}
        />

        <button
          onClick={plus}
          className="btn btn-secondary sheet-count__btn_plus">+</button>
      </div>
    </>
  )
};

export default SheetCount;

