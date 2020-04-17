
/**
 * возвращает массив, в котором элементы по заданным индексам заменены на пустую строку
 *
 * @param {object []} baseArray [изначальный массив]
 * @param {object []} indexes [массив индексов]
 * @returns {object []}
 */
const getClearedArrayByIndexes = (baseArray, indexes) => {
  let clearedArray = baseArray;

  indexes.forEach(i => {
    clearedArray[i] = '';
  });

  return clearedArray;
}

export default getClearedArrayByIndexes;