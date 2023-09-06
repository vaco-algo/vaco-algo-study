/**
 * leetcode problem link: https://leetcode.com/problems/climbing-stairs
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // 풀아 방법: 중복되는 경우의 수가 있을것 같으므로 DP를 사용해봐야겠다. 또는 피보나치 수열과 비슷해보인다.
  // 시간 복잡도: O(n)
  // 공간 복잡도: O(n)

  const dp = new Array(45);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
