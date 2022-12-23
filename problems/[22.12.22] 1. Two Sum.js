/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const numbers = [...nums];
  let result;

  for (let i = 0; i < numbers.length; i++) {
    const NumberToFind = target - numbers[i];
    result = [i];

    for (let j = 1; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }

      if (numbers[j] === NumberToFind) {
        result.push(j);
        break;
      }
    }

    if (result.length === 2) {
      break;
    }
  }

  return result;
};
