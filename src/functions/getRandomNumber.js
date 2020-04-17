

/**
 * возвращает рандомное число в заданном промежутке
 *
 * @param {number} min [минимальное число]
 * @param {number} max [максимальное число]
 * @returns {number}
 */
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomNumber;