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


const SettingsPanel = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const changeNumberOfSheet = (e) => {
    let value = e.target.value;
    if (value > 0 && value <= 100) dispatch(numberOfSheet(value))
  };

  return (
    <Box m={3} p={3}>

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


      <Typography id="discrete-slider" gutterBottom>
        Количество блоков на странице
      </Typography>
      <Slider
        value={store.generatorSettings.blocksOnSheet}
        onChange={(e, value) => dispatch(blocksOnSheet(value))}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={8}
      />


      <TextField
        label="Количество листов"
        variant="outlined"
        type={'number'}
        value={store.generatorSettings.numberOfSheet}
        onChange={changeNumberOfSheet}
      />

    </Box>
  )
};

export default SettingsPanel;

