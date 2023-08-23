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

  const result = nums.filter((item, i) => {
    return nums.indexOf(item) === i;
  });

  return result.sort((a, b) => a - b);
};
