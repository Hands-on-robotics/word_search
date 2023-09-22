


const transposedArray = function(letters) {
  const newMatrix = [];
  for (let i = 0; i < letters[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < letters.length; j++) {
      newMatrix[i][j] = letters[j][i];
    }
  }
  return newMatrix;
};

const wordSearch = function(letters, word) {
  const horizontalArray = letters.map(ls => ls.join(''));
  for (const element of horizontalArray) {
    if (element.includes(word)) {
      return true;
    }

    const verticalArray = transposedArray(letters).map(ls => ls.join(''));
    for (const element of verticalArray) {
      if (element.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;
