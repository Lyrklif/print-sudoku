
import getRandomNumber from './getRandomNumber';


/**
 * возвращает сгенерированный массив из уникальных чисел (т.е. числа в нём не повторяются)
 *
 * @param {number} [length=0] [длина массива]
 * @param {number} [min=0] [минимальное значение числа]
 * @param {number} [max=100] [максимальное значение числа]
 * @returns {object []}
 */
const getUniqueNumbersArray = (length = 0, min = 0, max = 100) => {
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