/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const dp = Array(target + 1)
    .fill()
    .map(() => []);
  dp[0] = [[]];

  for (const candidate of candidates) {
    for (let i = candidate; i <= target; i++) {
      for (const combination of dp[i - candidate]) {
        dp[i].push([...combination, candidate]);
      }
    }
  }

  return dp[target];
};
