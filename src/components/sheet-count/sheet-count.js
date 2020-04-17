import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import numberOfSheet from '../../actions/settings/numberOfSheet';

const SheetCount = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(numberOfSheet(value))
  };

  return (
    <label className="sheet-count">
      <span className="fluid-name">К-во листов</span>
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

