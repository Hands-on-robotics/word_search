/**
 * This function checks the direction of the word from the starting point (first letter).
 * @param {array} letters A 2D array of rows and single characters.
 * @param {string} word The word that is searched for.
 * @param {string} row Starting row index of the word.
 * @param {string} column Starting column index of the word.
 * @param {number} rowDelta The index value to be updated for row.
 * @param {number} columnDelta The index value to be updated for column.
 * @returns {boolean} Returns true or false depending on whether the word is found or not.
 * Pair Programmed with @ekatie and @Hands-on-robotics
 */

const checkDirection = function(letters, word, row, column, rowDelta, columnDelta) {
  // Simple variables
  const numRows = letters.length;
  const numColumns = letters[0].length;
  let matchingLetters = 0;

  // Add to matching letters, while increasing search within the limits of column and row
  // Defining the edges of the map
  while (row >= 0 && row < numRows && column >= 0 && column < numColumns) {
    
    // If we found a matching letter!
    if (letters[row][column] === word[matchingLetters]) {
      matchingLetters++;
   
      // If we have all the letters!
      if (matchingLetters === word.length) {
        return true;
      } // If the letters do not match
    } else if (letters[row][column] !== word[matchingLetters]) {
      return false;
    }
    // Update row and column index
    row += rowDelta;
    column += columnDelta;
  }
};

/**
 * This function takes in a matrix (array of arrays) and a word and searches the matrix for the word in all possible directions.
 * @param {array} letters A 2D array of rows and single characters.
 * @param {string} word The word that is searched for.
 * @returns {boolean} A statement of truth for the word being included.
 */

const wordSearch = (letters, word) => {

  // First edge case returns.
  if (letters.length === 0 || word.length === 0) {
    return false;
  }
  // Simplify
  const numRows = letters.length;
  const numColumns = letters[0].length;
  
  // For every letter.
  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {

      // If first letters match.
      if (letters[row][column] === word[0]) {
        

        // Check each direction for word with column and row vectors.
        if (checkDirection(letters, word, row, column, 0, 1) ||  // horizontal forward
          checkDirection(letters, word, row, column, 0, -1) ||  // horizontal backward
          checkDirection(letters, word, row, column, 1, 0) ||  // vertical down
          checkDirection(letters, word, row, column, -1, 0) ||  // vertical up
          checkDirection(letters, word, row, column, 1, 1) ||  // diagonally down/forward
          checkDirection(letters, word, row, column, 1, -1) ||  // diagonally down/backward
          checkDirection(letters, word, row, column, -1, 1) ||  // diagonally up/forward
          checkDirection(letters, word, row, column, -1, -1)) { // diagonally up/backward
          return true;
        }
      }
    }
  }
  
  // If word not found in any direction, return false.
  return false;
};

module.exports = wordSearch;