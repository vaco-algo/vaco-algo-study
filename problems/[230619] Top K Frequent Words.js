/**
 * leetcode problem link: https://leetcode.com/problems/top-k-frequent-words
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const wordFrequent = {};

  words.forEach((word) => {
    wordFrequent[word] ? (wordFrequent[word] += 1) : (wordFrequent[word] = 1);
  });

  const wordFrequentArray = Object.entries(wordFrequent);

  wordFrequentArray
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] > b[0] ? 1 : -1;
      }
    });

  const answer = wordFrequentArray
    .map((word) => {
      return word[0];
    })
    .splice(0, k);

  return answer;
};
