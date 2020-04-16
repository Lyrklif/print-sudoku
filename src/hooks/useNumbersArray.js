import { useState } from "react";
import getUniqueNumbersArray from '../functions/getUniqueNumbersArray';


// useNumbersArray
export const useNumbersArray = (length = 0, min = 0, max = 100) => {
  const [array, setArray] = useState(getUniqueNumbersArray(length, min, max));
  
  const changeArray = () => {
    setArray(getUniqueNumbersArray(length, min, max));
  };
  
  return [array, changeArray];
};