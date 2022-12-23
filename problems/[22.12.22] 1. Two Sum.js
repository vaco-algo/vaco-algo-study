/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// On^2 모든 경우의 수 탐색
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    }

    if (left === right - 1) {
      left++;
      right = nums.length - 1;
    } else {
      right--;
    }
  }
};

// On object를 해시테이블로 사용하여 탐색 O2N
var twoSum2 = function (nums, target) {
  const storedNumberAndIndex = {};

  nums.forEach((number, index) => (storedNumberAndIndex[number] = index));

  for (let i = 0; i < nums.length; i++) {
    if (
      storedNumberAndIndex[target - nums[i]] &&
      storedNumberAndIndex[target - nums[i]] !== i
    ) {
      return [storedNumberAndIndex[target - nums[i]], i];
    }
  }
};
