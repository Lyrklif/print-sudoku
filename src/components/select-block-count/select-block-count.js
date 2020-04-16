import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import level from '../../actions/settings/level';
import levels from '../../constants/levels';

import blocksOnSheet from '../../actions/settings/blocksOnSheet';

const SelectBlockCount = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(blocksOnSheet(value))
  };

  return (
    <div className="block-count">
      <span className="fluid-name">К-во блоков на&nbsp;странице</span>
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

