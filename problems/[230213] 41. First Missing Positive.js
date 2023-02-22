/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {//성공!
  const Deduplication = new Set(nums);
  const sortedNums = [...Deduplication].sort((a, b) => a - b);
  let count = 0;
  let index = 0;

  if (sortedNums.length === 1) {
    if (sortedNums[0] > 1 || sortedNums[0] < 0) {
      return 1;
    } else {
      return sortedNums[0] + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] <= 0) {
      count++;

      if (sortedNums.length === 1 || count === sortedNums.length) {
        return 1;
      }

      continue;
    } else {
      index++;

      if (index === 1 && sortedNums[i] !== 1) {
        return 1;
      }

      if (index === sortedNums[i]) {
        if (index === sortedNums[sortedNums.length - 1]) {
          return sortedNums[sortedNums.length - 1] + 1;
        }

        continue;
      } else {
        return index;
      }
    }
  }
};
