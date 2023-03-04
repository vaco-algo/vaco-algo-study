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
const isSymmetric = function (root) {
  const 재귀 = (toTheLeft, toTheRight) => {
    if (!toTheLeft && !toTheRight) return true;
    if (!toTheLeft && toTheRight) return false;
    if (toTheLeft && !toTheRight) return false;
    if (toTheLeft.val !== toTheRight.val) return false;

    return (
      재귀(toTheLeft.left, toTheRight.right) &&
      재귀(toTheLeft.right, toTheRight.left)
    );
  };

  return 재귀(root, root);
};
