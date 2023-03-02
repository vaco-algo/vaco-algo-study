/**
 * leetcode problem link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  const pivotIndex = Math.floor(nums.length / 2);
  const left = nums.length >= 2
    ? sortedArrayToBST(nums.slice(0, pivotIndex))
    : null;
  const right = nums.length >= 3
    ? sortedArrayToBST(nums.slice(pivotIndex + 1))
    : null;

  return new TreeNode(
    nums[pivotIndex],
    left,
    right,
  );
};
