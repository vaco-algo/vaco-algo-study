/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastIndex = nums.length - 1;

  for (let i = lastIndex - 1; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) {
      lastIndex = i;
    }
  }
  return lastIndex === 0;
};
