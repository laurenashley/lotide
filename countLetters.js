// Function Implementation
const assertEqual = function(actual, expected) {
  const successMsg = `👍✅Assertion Passed: ${actual} === ${expected}`,
    failMsg = `👎❌Assertion Failed: ${actual} === ${expected}`;

  const result = (actual === expected) ? successMsg : failMsg;

  console.log(result);
};

const countLetters = function(string) {
  console.log('Input is: ', string);
  let countList = {};
  
  // For letter of string check if isLetter
  // if first of this letter, add as key with value 1
  // if key exists inc value ++

  for (const letter of string) {
    const isLetter = letter.match(/[a-z]/i);

    // Only count letters
    if (isLetter) {
      if (countList[letter]) {
        countList[letter] += 1;
      } else {
        countList[letter] = 1;
      }
    }
  }
  return countList;
};

// Test Code
console.log(countLetters('Today is a good day.'));
console.log(countLetters('Today is full of unicorns, rainbows, and magick.'));