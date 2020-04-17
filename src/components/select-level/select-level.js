import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import level from '../../store/actions/settings/level';
import levels from '../../constants/levels';



// задать уровень сложности судоку
const SelectLevel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const [lvl, updLvl] = useState(store.settings.level);


  // записать значение в store
  const setStore = () => {
    dispatch(level(lvl));
  }

  // при изменении select option (уровни сложности)
  const handleChange = (e) => {
    updLvl(+e.target.value);
  };


  return (
    <div className="select-wp">
      <span className="fluid-name">Уровень сложности</span>
      <div className="select">
        <select className="select__content" value={lvl} onChange={handleChange}>

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

