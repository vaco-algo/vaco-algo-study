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
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }

    return;
  }

  const mergedArray = nums1
    .slice(0, m)
    .concat(nums2.slice(0, n));

  let left = 0;
  let right = m;
  let idx = 0;

  while (left < m && right < mergedArray.length) {
    if (mergedArray[left] > mergedArray[right]) {
      nums1[idx] = mergedArray[right];
      right += 1;
    } else {
      nums1[idx] = mergedArray[left];
      left += 1;
    }

    idx += 1;
  }
  while (right < mergedArray.length) {
    nums1[idx] = mergedArray[right];
    idx += 1;
    right += 1;
  }
  while (left < m) {
    nums1[idx] = mergedArray[left];
    idx += 1;
    left += 1;
  }
};
