/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let leftPointer;
  let rightPointer;
  let lastIdx = nums.length - 1;

  for (let i = 0; i < lastIdx; i++) {
    leftPointer = nums[i];
    for (let j = 1; j < lastIdx + 1; j++) {
      rightPointer = nums[j];

      const answer = leftPointer + rightPointer;

      if (answer === target) {
        return [i, j];
      }
    }
  }
};
