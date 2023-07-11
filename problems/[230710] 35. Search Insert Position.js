/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums.at(-1)) return nums.length;

  let pointer = parseInt(nums.length / 2);

  while (0 <= pointer && pointer <= nums.length) {
    if (nums[pointer] === target) return pointer;

    if (nums[pointer] < target) {
      pointer += 1;
      if (nums[pointer] > target) return pointer;
    } else {
      pointer -= 1;
      if (nums[pointer] < target) return pointer + 1;
    }
  }
};
