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

  return (
    <label className="sheet-count">
      <span className="fluid-name">К-во страниц</span>
      <input
        className="sheet-count__input"
        defaultValue={store.settings.numberOfSheet}
        type="number"
        min="1"
        max="100"
        onInput={(e) => handleChange(e.target.value)}
      />
    </label>
  )
};

export default SheetCount;

