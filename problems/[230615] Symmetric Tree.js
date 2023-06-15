/**
 * leetcode problem link: https://leetcode.com/problems/symmetric-tree
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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  const isCorrect = function (leftTree, rightTree) {
    if (!leftTree && !rightTree) return true;
    if (!leftTree || !rightTree) return false;

    return (
      leftTree.val === rightTree.val &&
      isCorrect(leftTree.left, rightTree.right) &&
      isCorrect(rightTree.left, leftTree.right)
    );
  };

  return isCorrect(root.left, root.right);
};
