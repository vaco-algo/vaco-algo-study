/**
 * leetcode problem link: https://leetcode.com/problems/climbing-stairs
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 0; i < dp.length; i++) {
    if (i < 2) dp[i] = 1;
    else dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp.at(-1);
};
