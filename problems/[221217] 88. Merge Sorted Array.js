/**
 * leetcode problem link: https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  const onlyNums1Arr = nums1.slice(0, m);
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < m + n; i++) {
      const num1 = onlyNums1Arr[index1] === undefined ? Number.MAX_SAFE_INTEGER : onlyNums1Arr[index1];
      const num2 = nums2[index2] === undefined ? Number.MAX_SAFE_INTEGER : nums2[index2];

      if (num1 <= num2) {
          nums1[i] = onlyNums1Arr[index1];
          index1++;
      } else {
          nums1[i] = nums2[index2];
          index2++;
      }
  }

  return nums1;
};
