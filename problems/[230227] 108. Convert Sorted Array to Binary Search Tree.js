/**
 * leetcode problem link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sortedArrayToBST = function (nums) {
  if (nums.length === 0) return;
  const nodeIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, nodeIndex);
  const right = nums.slice(nodeIndex + 1);
  const node = new TreeNode(
    nums[nodeIndex],
    sortedArrayToBST(left),
    sortedArrayToBST(right)
  );

  return node;
};
