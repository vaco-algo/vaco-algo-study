/**
 * leetcode problem link: https://leetcode.com/problems/top-k-frequent-words
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const frequency = {};
  const result = [];

  words.forEach((word) => {
    frequency[word] =
      frequency[word] === undefined ? 1 : (frequency[word] += 1);
  });

  Object.entries(frequency)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => result.push(word[0]));

  return result.slice(0, k);
};
