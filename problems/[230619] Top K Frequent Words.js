/**
 * leetcode problem link: https://leetcode.com/problems/top-k-frequent-words
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
  const map = {};

  words.forEach((word) => {
    if (map[word]) return map[word] += 1;
      map[word] = 1;
  });

  return Object.keys(map).sort().sort((wordA, wordB) => {
    return map[wordB] - map[wordA];
  }).splice(0,k); 

};
