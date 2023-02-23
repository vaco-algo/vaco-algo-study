/**
 * leetcode problem link: https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = function(nums) {
  if (nums.length === 1) {
    return [nums[0][0], nums[0][0]];
  }

  let currentNumbers = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let maxIndex = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i].pop();

    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
      maxIndex = i;
    }

    currentNumbers.push(num);
  }

  let currentMax = max;
  let currentMin = min;

  while (true) {
    if (nums[maxIndex].length === 0) {
      return [min, max];
    }

    const newNumber = nums[maxIndex].pop();

    currentNumbers[maxIndex] = newNumber;

    currentMin = Math.min(currentMin, newNumber);
    currentMax = Number.MIN_SAFE_INTEGER;

    for (let j = 0; j < currentNumbers.length; j++) {
      if (currentNumbers[j] > currentMax) {
        currentMax = currentNumbers[j];
        maxIndex = j;
      }
    }

    if (currentMax - currentMin <= max - min) {
      min = currentMin;
      max = currentMax;
    }
  }
};
