/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
const relocateMarbles = function (nums, moveFrom, moveTo) {
  for (let i = 0; i < moveFrom.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === moveFrom[i]) {
        nums[j] = moveTo[i];
      }
    }
  }

  const set = new Set(nums);

  return [...set].sort((a, b) => a - b);
};
