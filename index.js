/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid
 */

function high(x) {
  // Split the input string into an array of words
  const words = x.split(" ");
  console.log(words);

  // Initialize variables to keep track of the highest-scoring word and score
  let highestWord = "";
  let highestScore = 0;

  // Iterate through each word in the array
  for (const word of words) {
    // Calculate the score for the current word
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } // console.log("a".charCodeAt(0) - "a".charCodeAt(0) + 1);

    // Check if the current word has a higher score than the highest-scoring word
    if (score > highestScore) {
      highestWord = word;
      highestScore = score;
    }
  }

  // Return the highest-scoring word
  return `${highestWord} with ${highestScore} scores`;
}

// Example usage:
let findHigh = high("I am the best programmer in the world!");
console.log("findHigh :>>", findHigh);
