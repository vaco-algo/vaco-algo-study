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

  const checkSymmetric = (startNode, nextNode) => {
    if (!startNode && !nextNode) return true;
    if (!startNode || !nextNode) return false;
    if (startNode.val !== nextNode.val) return false;
    if (startNode.val === nextNode.val)
      return (
        checkSymmetric(startNode.left, nextNode.right) &&
        checkSymmetric(startNode.right, nextNode.left)
      );
    else return false;
  };

  return checkSymmetric(root.left, root.right);
};
