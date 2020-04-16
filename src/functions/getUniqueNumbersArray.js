
import getRandomNumber from './getRandomNumber';

// массив из уникальных чисел
const getUniqueNumbersArray = (length, min = 0, max = 100) => {
  // array = Array.from({length: count}, () => Math.floor(Math.random() * count));
  let array = [];
  while (array.length < length - 1) {
    let randomNumber = getRandomNumber(min, max);
    if (!array.indexOf(randomNumber) > -1) {
      array.push(randomNumber);
    }
  }

  return array;
};

export default getUniqueNumbersArray;