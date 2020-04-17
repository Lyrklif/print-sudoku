

const getClearedArrayByIndexes = (baseArray, indexes) => {
  let clearedArray = baseArray;

  indexes.forEach(i => {
    clearedArray[i] = '';
  });

  return clearedArray;
}

export default getClearedArrayByIndexes;