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
    for (let k = 0; k < n; k++) {
      nums1[k] = nums2[k];
    }

    return;
  }

  const mergedArray = nums1
    .slice(0, m)
    .concat(nums2.slice(0, n));

  let left = 0;
  let right = m;

  for (let i = 0; left !== right; i++) {
    if (mergedArray[left] > mergedArray[right]) {
      nums1[i] = mergedArray[right];
      right += 1;
    } else {
      nums1[i] = mergedArray[left];
      left += 1;
    }

    if (left >= m) {
      for (let j = right; j < mergedArray.length; j++) {
        i += 1;
        nums1[i] = mergedArray[j];
      }

      break;
    }

    if (right >= mergedArray.length) {
      for (let j = left; j < m; j++) {
        i += 1;
        nums1[i] = mergedArray[j];
      }

      break;
    }
  }
};
