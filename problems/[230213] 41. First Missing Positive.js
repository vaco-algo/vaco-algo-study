/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let result = 1;
  const sortedNums = nums.sort((a, b) => a - b);
  const sorteDeduplicatedNums = [...new Set(sortedNums)];

  for (const num of sorteDeduplicatedNums) {
    if (num <= 0) continue;
    if (result === num) {
      result++;
      continue;
    }

    break;
  }

  return result;
};
