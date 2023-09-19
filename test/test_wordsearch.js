const chai = require('chai');
const assert = chai.assert;

const run = function() { return; };

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return true if word found in 3D array", function() {
    const result = wordSearch([
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
    ], 'GAME');

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });
  
  it("should return true if the word is present horizontally forward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically downward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'D', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'G', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'O', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'N', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DRAGONS');

    assert.isTrue(result);
  });

  it("returns false if the word matrix is an empty array", () => {
    const result = wordSearch([]
      , 'HELP');
    assert.isFalse(result);
  });

  it("should return true if the word is present vertically upward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'D', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'T', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'E', 'A', 'L'],
      ['H', 'M', 'J', 'G', 'E', 'M', 'R', 'G'],
      ['W', 'H', 'C', 'P', 'Y', 'O', 'R', 'L'],
      ['B', 'F', 'R', 'N', 'N', 'S', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'E', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'W', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'A', 'A', 'L'],
    ], 'AWESOME');

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontally backward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'X', 'I', 'R', 'T', 'A', 'M'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MATRIX');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally down/forward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'M', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'I', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'G', 'E', 'R', 'L'],
      ['B', 'F', 'X', 'I', 'R', 'O', 'A', 'M'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'S', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'H'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'OMIGOSH');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally down/backward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'M', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'I', 'E', 'W', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'H', 'E', 'R', 'L'],
      ['B', 'F', 'X', 'A', 'R', 'O', 'A', 'M'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'S', 'I'],
      ['O', 'U', 'C', 'A', 'K', 'U', 'A', 'H'],
      ['P', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WHATUP');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally up/backward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'M', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'S', 'I', 'E', 'W', 'R', 'G'],
      ['W', 'H', 'C', 'L', 'H', 'E', 'R', 'L'],
      ['B', 'F', 'X', 'A', 'L', 'O', 'A', 'M'],
      ['U', 'B', 'T', 'W', 'A', 'E', 'S', 'I'],
      ['O', 'U', 'C', 'A', 'K', 'U', 'H', 'H'],
      ['P', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'HELLSYA');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally up/forward", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['A', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'M', 'F', 'Q', 'E', 'A', 'L'],
      ['H', 'M', 'S', 'I', 'L', 'W', 'R', 'G'],
      ['W', 'H', 'C', 'A', 'H', 'E', 'R', 'L'],
      ['B', 'F', 'N', 'A', 'L', 'O', 'A', 'M'],
      ['U', 'I', 'T', 'W', 'A', 'E', 'S', 'I'],
      ['F', 'U', 'C', 'A', 'K', 'U', 'H', 'H'],
      ['P', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FINALE');

    assert.isTrue(result);
  });

});
