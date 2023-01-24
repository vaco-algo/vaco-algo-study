/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      return result.push([...nums]);
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];

      dfs(i + 1, nums);

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result[1];
};
