/**
 * leetcode problem link: https://leetcode.com/problems/maximum-depth-of-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (tree, count = 0) {
  if (!tree) return count;

  return Math.max(
    maxDepth(tree.left, count + 1),
    maxDepth(tree.right, count + 1)
  );
};
