var canJump = function (nums) {
  if (nums.length <= 1) return true;

  let maximum = nums[0];

  for (let i = 0; i < nums.length; i+= 1) {
    if (maximum <= i && nums[i] == 0) return false;
    if (i + nums[i] > maximum) {
      maximum = i + nums[i];
    }
    if (maximum >= nums.length - 1) return true;
  }
  return false;
};
