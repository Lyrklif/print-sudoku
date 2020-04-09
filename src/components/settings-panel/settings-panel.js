import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

import fluids from '../../actions/fluids/fluids';
import level from '../../actions/generatorSettings/level';
import blocksOnSheet from '../../actions/generatorSettings/blocksOnSheet';
import numberOfSheet from '../../actions/generatorSettings/numberOfSheet';
import countBlocksOnSheet from '../../actions/generatorSettings/countBlocksOnSheet';


import { makepuzzle, solvepuzzle } from "sudoku";

import getSudokuArray from '../../functions/getSudokuArray';

const SettingsPanel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const changeNumberOfSheet = (e) => {
    let value = e.target.value;
    if (value > 0 && value <= 100) dispatch(numberOfSheet(value))
  };

  const setSudokuArray = () => {
    dispatch(fluids(createSudokuArray()));
  };

  const createSudokuArray = () => {
    let array = [];
    // let count = store.generatorSettings.blocksOnSheet * store.generatorSettings.numberOfSheet;
    let blocks = store.generatorSettings.blocksOnSheet;
    let sheet = store.generatorSettings.numberOfSheet;


    for (let i = 0; i < sheet; i++) {
      array[i] = [];
      for (let z = 0; z < blocks; z++) {
        array[i][z] = getSudokuArray();
      }
    }

    return array;
  };


  return (
    <Box m={3} p={3} className="no-print">

      <FormControl variant="outlined">
        <InputLabel>
          Уровень сложности
        </InputLabel>
        <Select
          value={store.generatorSettings.level}
          onChange={e => dispatch(level(e.target.value))}
        >
          <MenuItem value={0}>Легко</MenuItem>
          <MenuItem value={1}>Нормально</MenuItem>
          <MenuItem value={3}>Сложно</MenuItem>
          <MenuItem value={4}>Хардкор</MenuItem>
        </Select>
      </FormControl>


      <Typography gutterBottom>
        Количество блоков на странице
      </Typography>

      <Slider
        className="slider"
        value={store.generatorSettings.blocksOnSheet}
        onChange={(e, value) => dispatch(blocksOnSheet(value))}
        valueLabelDisplay="auto"
        step={null}
        marks={store.generatorSettings.countBlocksOnSheet}
        min={store.generatorSettings.countBlocksOnSheet[0].value}
        max={store.generatorSettings.countBlocksOnSheet[store.generatorSettings.countBlocksOnSheet.length - 1].value}
      />


      <TextField
        label="Количество листов"
        variant="outlined"
        type={'number'}
        value={store.generatorSettings.numberOfSheet}
        onChange={changeNumberOfSheet}
      />


      <Button variant="contained" color="primary" onClick={setSudokuArray}>
        Создать судоку
      </Button>

    </Box>
  )
};

export default SettingsPanel;

