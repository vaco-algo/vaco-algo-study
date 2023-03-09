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
const maxDepth = function(root, depth = 1) { 
  if (!root) {
    return depth - 1;
  }
 
  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1),
  );
}; 
