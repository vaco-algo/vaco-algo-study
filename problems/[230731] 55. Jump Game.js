/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let index = 0;
  let afterMaxJump = 0;
  const lastIndex = nums.length - 1;

  if (!lastIndex) return true;

  while (index < lastIndex) {
    afterMaxJump = Math.max(afterMaxJump, index + nums[index]);
    if (afterMaxJump >= lastIndex) return true;
    if (afterMaxJump <= index && nums[index] === 0) return false;
    index++;
  }
};
