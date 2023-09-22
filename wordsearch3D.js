

/**
 * Pair Programmed with @ekatie and @Hands-on-robotics
 * This function checks the direction of the word from the starting point (first letter).
 * @param {array} letters A 2D array of rows and single characters.
 * @param {string} word The word that is searched for.
 * @param {string} currentDepth Starting depth index of the word.
 * @param {string} currentRow Starting currentRow index of the word.
 * @param {string} currentColumn Starting column index of the word.
 * @param {number} depthDelta The index value to be updated for depth.
 * @param {number} rowDelta The index value to be updated for row.
 * @param {number} columnDelta The index value to be updated for column.
 * @returns {boolean} Returns true or false depending on whether the word is found or not.
 */

const checkDirection = function(letters, word, currentDepth, currentRow, currentColumn, depthDelta, rowDelta, columnDelta) {
  // Simple variables
  const totalDepth = letters.length;
  const totalRows = letters[0].length;
  const totalColumns = letters[0][0].length;
  let matchingLetters = 0;

  // Add to matching letters, while increasing search within limits
  while (currentDepth >= 0 && currentDepth < totalDepth &&
    currentRow >= 0 && currentRow < totalRows &&
    currentColumn >= 0 && currentColumn < totalColumns) {

    // If we found a matching letter!
    if (letters[currentDepth][currentRow][currentColumn] === word[matchingLetters]) {
      matchingLetters++;

      // If we have all the letters!
      if (matchingLetters === word.length) {
        return true;
      }
      // If the letters do not match
    } else if (letters[currentDepth][currentRow][currentColumn] !== word[matchingLetters]) {
      return false;
    }
    // Update currentRow and column index
    currentDepth += depthDelta;
    currentRow += rowDelta;
    currentColumn += columnDelta;
  }
};

/**
 * This function takes in a 3D matrix and a word and searches the matrix for the word in all possible directions.
 * @param {array} letters A 3D array of depth, rows, and columns.
 * @param {string} word The word that is searched for.
 * @param {number} totalDimensions (optional) The number of dimensions in the array, if greater than two.
 * @returns {boolean} A statement of truth for the word being included.
*/
const wordSearch3D = (letters, word) => {

  if (letters.length === 0 || word.length === 0) return false;

  const totalDepth = letters.length;
  const totalRows = letters[0].length;
  const totalColumns = letters[0][0].length;

  const allDeltas = [
    [-1, 0, 0],  // Up
    [1, 0, 0],   // Down
    [0, -1, 0],  // Left
    [0, 1, 0],   // Right
    [0, 0, -1],  // Backward
    [0, 0, 1],   // Forward
    [-1, -1, 0], // Up-Left
    [-1, 1, 0],  // Up-Right
    [1, -1, 0],  // Down-Left
    [1, 1, 0],   // Down-Right
    [-1, 0, -1], // Up-Backward
    [-1, 0, 1],  // Up-Forward
    [1, 0, -1],  // Down-Backward
    [1, 0, 1],   // Down-Forward
    [0, -1, -1], // Left-Backward
    [0, -1, 1],  // Left-Forward
    [0, 1, -1],  // Right-Backward
    [0, 1, 1],   // Right-Forward
    [-1, -1, -1], // Up-Left-Backward
    [-1, -1, 1],  // Up-Left-Forward
    [-1, 1, -1],  // Up-Right-Backward
    [-1, 1, 1],   // Up-Right-Forward
    [1, -1, -1],  // Down-Left-Backward
    [1, -1, 1],   // Down-Left-Forward
    [1, 1, -1],   // Down-Right-Backward
    [1, 1, 1],    // Down-Right-Forward
  ];


  for (let currentDepth = 0; currentDepth < totalDepth; currentDepth++) {
    for (let currentRow = 0; currentRow < totalRows; currentRow++) {
      for (let currentColumn = 0; currentColumn < totalColumns; currentColumn++) {

        const currentChar = letters[currentDepth][currentRow][currentColumn];

        // Match found!
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

console.log(wordSearch3D([
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

module.exports = wordSearch3D;
