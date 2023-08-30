/**
 * https://leetcode.com/problems/edit-distance/description/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

const minDistance = function (word1, word2) {
  // 접근 방식: 경우의 수를 저장할 것 같아서 DP를 사용해야할 것 같다. -> 실패 -> 해설의 레벤슈타인 알고리즘으로 해결
  // 시간 복잡도: O(m * n)
  // 공간 복잡도: O(m * n)

  let dp = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0));

  for (let i = 0; i < dp.length; i += 1) {
    dp[i][0] = i;
  }

  for (let i = 0; i < dp[0].length; i += 1) {
    dp[0][i] = i;
  }

  for (let i = 1; i < dp.length; i += 1) {
    for (let j = 1; j < dp[0].length; j += 1) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0)
      );
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};
