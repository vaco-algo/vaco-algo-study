/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const answer = [];

  function DFS(L, sum, arr) {
    if (sum === target) {
      answer.push(arr);
      return;
    }

    if (sum > target || L >= candidates.length) {
      return;
    } else {
      for (let i = L; i < candidates.length; i++) {
        if (sum + candidates[i] <= target) {
          DFS(i, sum + candidates[i], [...arr, candidates[i]]);
        }
      }
    }
  }

  DFS(0, 0, []);

  return answer;
};
