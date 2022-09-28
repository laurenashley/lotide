const letterPositions = function(sentence) {
  console.log('Input is: ', sentence);

  const results = {};
  
  for (const letter in sentence) {
    const thisLetter = sentence[letter];
    const isLetter = thisLetter.match(/[a-z]/i);

    if (isLetter) {
      console.log('hello');
      if (results[thisLetter]) {
        results[thisLetter].push(letter);
      } else {
        results[thisLetter] = [letter];
      }
    }
  }

  return results;
};

console.log(letterPositions('Do not get upset about the results you don\'t get from the work you didn\'t do.'));