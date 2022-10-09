// letterPositions.js

const letterPositions = function(sentence) {
  console.log('Input is: ', sentence);

  const results = {};
  
  for (const letter in sentence) {
    const thisLetter = sentence[letter];
    const isLetter = thisLetter.match(/[a-z]/i);

    if (isLetter) {
      if (results[thisLetter]) {
        results[thisLetter].push(letter);
      } else {
        results[thisLetter] = [letter];
      }
    }
  }

  return results;
};

module.exports = letterPositions;