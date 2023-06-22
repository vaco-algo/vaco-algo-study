/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left !== nums.length - 1) {
    if (nums[left] === nums[right]) {
      return nums[left];
    }

    right--;

    if (left === right) {
      left++;
      right = nums.length - 1;
    }
  }
};
