/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  let index = 0;
  let tempData = [];
  let result = [];

  function backtracking(index, target, tempData) {
    if (target === 0) {
      result.push([...tempData]);
      return;
    }

    if (target < 0) return;

    for (let i = index; i < candidates.length; i += 1) {
      tempData.push(candidates[i]);
      backtracking(i, target - candidates[i], tempData);
      tempData.pop();
    }
  }

  backtracking(index, target, tempData);

  return result;
};
