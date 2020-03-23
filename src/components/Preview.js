import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

import level from '../actions/generatorSettings/level';
import blocksOnSheet from '../actions/generatorSettings/blocksOnSheet';
import numberOfSheet from '../actions/generatorSettings/numberOfSheet';

import Sudoku from './Sudoku';

const Preview = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Box m={3} className="preview">

      {store.fluids.map((block, index) => {
        return <Sudoku key={index} array={block}/>
      })}

    </Box>
  )
};

export default Preview;

