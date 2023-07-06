/**
 * leetcode problem link: https://leetcode.com/problems/two-sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  let left = 0;
  let right = sortedNums.length - 1;

  while (left !== right) {
    const currentSum = sortedNums[left] + sortedNums[right];

    if (currentSum === target) {
      const sumResult = [sortedNums[left], sortedNums[right]];
      const result = [];

      for (let i = 0; i < nums.length; i++) {
        if (sumResult.includes(nums[i])) {
          result.push(i);
        }
      }

      return [left, right];
    }

    if (currentSum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};
