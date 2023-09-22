
// Just takes in the number of dimensions
const checkDirection = function(letters, word, currentDepth, currentRow, currentColumn, depthDelta, rowDelta, columnDelta) {
  const totalDepth = letters.length;
  const totalRows = letters[0].length;
  const totalColumns = letters[0][0].length;
  let matchingLetters = 0;
  // total${dimensionsIndex} = letters[0]...[0].length
  // current${dimensionsIndex} = 0;
  
  // create while (current${dimensionsIndex} >= 0 && current${dimensionsIndex} < total${dimensionsIndex} ...)
  while (currentDepth >= 0 && currentDepth < totalDepth &&
    currentRow >= 0 && currentRow < totalRows &&
    currentColumn >= 0 && currentColumn < totalColumns) {
      
    // if (letters[current${dimensionsIndex}]current${dimensionsIndex}... === word[matchingLetters])
    if (letters[currentDepth][currentRow][currentColumn] === word[matchingLetters]) {
      matchingLetters++;
      
      // If we have all the letters!
      if (matchingLetters === word.length) {
        return true;
      }
      // if (letters[current${dimensionsIndex}]current${dimensionsIndex}... !== word[matchingLetters])
    } else if (letters[currentDepth][currentRow][currentColumn] !== word[matchingLetters]) {
      return false;
    }
    // for (i of dimensions) current${dimensionsIndex} += delta${dimensionsIndex}
    currentDepth += depthDelta;
    currentRow += rowDelta;
    currentColumn += columnDelta;
  }
};

// // using loops
// const createDimensionLengths = function(totalDimensions) {
//   // for the for
// };
const generateDeltas = function(totalDimensions) {
  const deltas = [];
  
  const recursiveDeltaGenerator = function(totalDimensions, combination = []) {
    
    if (combination.length === totalDimensions) {
      deltas.push([...combination]);
      
    } else {
      for (let i = -1; i <= 1; i++) {
        combination.push(i);
        recursiveDeltaGenerator(totalDimensions, combination);
        combination.pop();
      }
    }
  };
  
  recursiveDeltaGenerator(totalDimensions);
  return deltas;
};

/**
 * This function takes in a 3D matrix and a word and searches the matrix for the word in all possible directions.
 * @param {array} letters A 3D array of depth, rows, and columns.
 * @param {string} word The word that is searched for.
 * @param {number} totalDimensions (optional) The number of dimensions in the array, if greater than two.
 * @returns {boolean} A statement of truth for the word being included.
*/
const infiniteWordSearch = (letters, word, totalDimensions) => {

  if (letters.length === 0 || word.length === 0) return false;
  
  if (!totalDimensions) {
    totalDimensions = 3;
  }
  
  // This needs to be dynamic to the totalDimensions
  const totalDepth = letters.length;
  const totalRows = letters[0].length;
  const totalColumns = letters[0][0].length;
  
  const allDeltas = generateDeltas(totalDimensions);

  // these need to based on
  for (let currentDepth = 0; currentDepth < totalDepth; currentDepth++) {
    for (let currentRow = 0; currentRow < totalRows; currentRow++) {
      for (let currentColumn = 0; currentColumn < totalColumns; currentColumn++) {
        const currentChar = letters[currentDepth][currentRow][currentColumn];
        
        if (currentChar === word[0]) {
          // Check each direction
          for (const [depthDelta, rowDelta, columnDelta] of allDeltas) {
            if (checkDirection(letters, word, currentDepth, currentRow, currentColumn, depthDelta, rowDelta, columnDelta)) {
              return true;
            }
          }
        }
      }
    }
  }
  
  // If word not found in any direction, return false.
  return false;
};

console.log(infiniteWordSearch([
[
    ['G', 'U', 'A', 'L'],
    ['F', 'E', 'L', 'D'],
    ['Q', 'U', 'A', 'L'],
    ['E', 'V', 'R', 'G']
  ],
  [
    ['Q', 'U', 'A', 'L'],
    ['F', 'A', 'L', 'D'],
    ['Q', 'U', 'A', 'L'],
    ['E', 'V', 'R', 'G']
  ],
  [
    ['Q', 'U', 'A', 'L'],
    ['F', 'E', 'L', 'D'],
    ['Q', 'U', 'M', 'L'],
    ['E', 'V', 'R', 'G']
  ],
  [
    ['Q', 'U', 'A', 'L'],
    ['F', 'E', 'L', 'D'],
    ['Q', 'U', 'A', 'L'],
    ['E', 'V', 'R', 'E']
  ]
], 'GAME'));

module.exports = infiniteWordSearch;
