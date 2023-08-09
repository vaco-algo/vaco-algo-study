/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(index, current, remain) {
    if (remain < 0) return;
    if (remain === 0) {
      result.push(Array.from(current));
      return;
    }

    for (let i = index; i < candidates.length; i += 1) {
      current.push(candidates[i]);
      backtrack(i, current, remain - candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], target);

  return result;
};
