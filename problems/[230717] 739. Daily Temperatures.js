/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = new Array(temp.length).fill(0);

  for (let i = 0; i < temp.length - 1; i++) {
    for (let n = i + 1; n < temp.length; n++) {
      if (temp[i] < temp[n]) {
        answer[i] = n - i;
        break;
      }
    }
  }

  return answer;
};
