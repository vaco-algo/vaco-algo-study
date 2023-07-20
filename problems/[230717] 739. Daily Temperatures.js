/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    let days = 0;

    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        days = j - i;
        break;
      }
    }
    result.push(days);
  }

  return result;
};
