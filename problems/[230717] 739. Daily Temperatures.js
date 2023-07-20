/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const result = [];
  result[temperatures.length - 1] = 0;

  for (let i = 0; i < temperatures.length; i += 1) {
    let count = 0;

    for (let j = i + 1; j < temperatures.length; j += 1) {
      count += 1;

      if (temperatures[i] < temperatures[j]) {
        result[i] = count;
        break;
      }

      if (j === temperatures.length - 1) result[i] = 0;
    }
  }

  return result;
};
