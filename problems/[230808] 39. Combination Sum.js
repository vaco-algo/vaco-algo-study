/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const findCandidates = (nums, target, path, result) => {
  if (target < 0) return;
  if (target === 0) {
    result.push(path);
    return;
  }
  nums.forEach((num, i) => {
    findCandidates(nums.slice(i), target - num, [...path, num], result);
  });
};

var combinationSum = function (candidates, target) {
  const result = [];

  findCandidates(candidates, target, [], result);

  return result;
};
