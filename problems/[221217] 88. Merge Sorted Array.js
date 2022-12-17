/**
 * leetcode problem link: https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  const modifiedNums1 = nums1.slice(0, m);
  const modifiedNums2 = nums2.slice(0, n);

  let nums1Pointer = 0;
  let nums2Pointer = 0;

  while (nums2Pointer < n) {
    const target = modifiedNums2[nums2Pointer];

    if (target > modifiedNums1[nums1Pointer]) {
      if (target === modifiedNums1[nums1Pointer + 1]) {
        modifiedNums1.splice(nums1Pointer + 2, 0, target);

        nums1Pointer += 2;
      } else {
        modifiedNums1.splice(nums1Pointer + 1, 0, target);

        nums1Pointer += 1;
      }

      nums2Pointer += 1;
    }
  }
};
