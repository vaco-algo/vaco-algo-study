/**
 * leetcode problem link: https://leetcode.com/problems/symmetric-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return true;

  const checkSymmetric = (firstNode, secondNode) => {
    if (!firstNode && !secondNode) return true;
    if (!firstNode || !secondNode) return false;
    if (firstNode.val !== secondNode.val) return false;
    if (firstNode.val === secondNode.val)
      return (
        checkSymmetric(firstNode.left, secondNode.right) &&
        checkSymmetric(firstNode.right, secondNode.left)
      );
    else return false;
  };

  return checkSymmetric(root.left, root.right);
};
