const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(param) {
    const wordCount = {};
    
    for (const word of param) {
      if (wordCount[word]) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    }
    
    return wordCount;
  }
  
  const result = repeatCounter(counterWords);
  console.log(result);