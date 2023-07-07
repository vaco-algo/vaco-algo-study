/**
 * leetcode problem link: https://leetcode.com/problems/two-sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

  const twoSum = function (nums, target) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
      if (store[target - nums[i]]) {
        return [store[target - nums[i]][0], i];
      }

      if (store[nums[i]]) {
        store[nums[i]].push(i);
      } else {
        store[nums[i]] = [i];
      }
    }
  };
