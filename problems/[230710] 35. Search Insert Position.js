/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const centerIdx = Math.floor((right + left) / 2);

    if (nums[centerIdx] < target) {
      left = centerIdx + 1;
    } else {
      right = centerIdx;
    }
  }

  if (nums[right] === target) {
    return right;
  }

  return nums[right] < target ? right + 1 : right;
};
