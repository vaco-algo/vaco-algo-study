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
const sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return;
  }

  const midIdx = Math.floor(nums.length / 2);
  const left = nums.slice(0, midIdx);
  const right = nums.slice(midIdx + 1);

  return new TreeNode(
    nums[midIdx],
    sortedArrayToBST(left),
    sortedArrayToBST(right)
  );
};
