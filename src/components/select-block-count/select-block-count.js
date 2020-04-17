import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import blocksOnSheet from '../../store/actions/settings/blocksOnSheet';

// задать к-во судоку на странице
const SelectBlockCount = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  // при нажатии на кнопки с цифрами -> к-во судоку на странице
  const handleClick = (value) => {
    dispatch(blocksOnSheet(value))
  };

  return (
    <div className="block-count">
      <span className="fluid-name">К-во судоку на&nbsp;странице</span>
      <ul className="block-count__list">
        
        {store.settings.countBlocksOnSheet.map((elem, i) => {
          return (
            <li className="block-count__item" key={i}>
              <button
                className={"block-count__btn " + (elem === store.settings.blocksOnSheet && 'active')}
                onClick={() => handleClick(elem)}
              >{elem}</button>
            </li>
          );
        })}
        
      </ul>
    </div>
  )
};

export default SelectBlockCount;

