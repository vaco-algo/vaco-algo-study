/**
 * leetcode problem link: https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  let left = 0;
  let right = m;

  while (left !== right) {
    if (nums1[right] < nums1[left]) {
      const temp = nums1[left];

      nums1[left] = nums1[right];
      nums1[right] = temp;

      right += 1;
      continue;
    }

    left += 1;
  }
};
