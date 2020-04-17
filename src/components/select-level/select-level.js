import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import level from '../../actions/settings/level';
import levels from '../../constants/levels';


const SelectLevel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(level(+e.target.value))
  };

  return (
    <div className="select-wp">
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
    </div>
  )
};

export default SelectLevel;

