function countWords(text) {
  const words = text.split(' ');
  const wordCountMap = new Map();

  words.forEach(word => {
    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanedWord !== '') {
      if (wordCountMap.has(cleanedWord)) {
        wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
      } else {
        wordCountMap.set(cleanedWord, 1);
      }
    }
  });

  return wordCountMap;
}

const inputText = "This is a sample text. This text contains words. Sample text is important.";

const wordCountMap = countWords(inputText);
console.log("Word Count Map:", wordCountMap);
