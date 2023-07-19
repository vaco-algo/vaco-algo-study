/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let i = 0;
  let j = 1;

  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (j < temperatures.length)
    if (i <= j) arr[i] = j - i;
    else if (i > j) j += 1;

  console.log("dt", arr);
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
