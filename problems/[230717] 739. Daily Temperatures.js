/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i += 1) {
    for (let j = i + 1; j < temperatures.length; j += 1) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
};
