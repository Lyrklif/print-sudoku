import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import level from '../../store/actions/settings/level';
import levels from '../../constants/levels';

// задать уровень сложности судоку
const SelectLevel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  // при изменении select option (уровни сложности)
  const handleChange = (e) => {
    dispatch(level(+e.target.value))
  };

  return (
    <>
      <span className="fluid-name">Уровень сложности</span>
      <div className="select">
        <select className="select__content" value={store.settings.level} onChange={handleChange}>

          {levels.map((elem, i) => {
            return (
              <option key={i} value={i}>{elem.title}</option>
            );
          })}

        </select>
      </div>
    </>
  )
};

export default SelectLevel;

