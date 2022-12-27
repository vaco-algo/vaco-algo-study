/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const hashMap = {};
  const array = [...nums];
  const result = [];

  for (let i = 0; i < array.length; i++) {
    hashMap[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (i === hashMap[complement]) continue;

    if (hashMap[complement] !== undefined) {
      result.push(i, hashMap[complement]);

      break;
    }
  }

  return result;
};
