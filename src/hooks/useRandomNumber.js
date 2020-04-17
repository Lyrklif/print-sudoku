import { useState } from 'react';
import getRandomNumber from '../functions/getRandomNumber';


export const useRandomNumber = (min, max) => {
  const [number, setNumber] = useState(getRandomNumber(min, max));


  const changeNumber = () => {
    setNumber(getRandomNumber(min, max));
  };

  return [number, changeNumber];
};