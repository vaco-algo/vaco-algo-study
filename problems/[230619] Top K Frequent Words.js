/**
 * leetcode problem link: https://leetcode.com/problems/top-k-frequent-words
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const counter = words.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;

    return acc;
  }, {});

  const sortedCounter = Object.entries(counter).sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return sortedCounter.slice(0, k).map((s) => s[0]);
};
