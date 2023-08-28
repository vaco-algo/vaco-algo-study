/**
 *
 * @param {number[]} nums
 * @returns {number}
 */

const rob = (nums) => {
  if (nums.length < 3) return Math.max(...nums);

  const dp = new Array(nums).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = nums[0] + nums[2];

  for (let i = 3; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
  }

  return Math.max(...dp);
};
