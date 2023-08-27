/**
 * leetcode problem link: https://leetcode.com/problems/house-robber/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  // 접근 방식: 중복되는 조합이 많이 나올것 같음 -> DP 를 사용해야 할 것 같다 -> 어떻게 DP를 적용해야 할 것인지 잘 모르겠음.
  // 시간 복잡도: O(n)
  // 공간 복잡도: O(1)

  if (nums.length === 1) return nums[0];

  let dp1 = nums[0];
  let dp2 = Math.max(nums[1], dp1);
  let maxValue = 0;

  for (let i = 2; i < nums.length; i += 1) {
    maxValue = Math.max(dp1 + nums[i], dp2);
    dp1 = dp2;
    dp2 = maxValue;
  }

  return dp2;
};
