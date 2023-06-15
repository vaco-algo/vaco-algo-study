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

function DFS(node, sum, store) {
  if (!node) {
    store.push(...sum);
  } else {
    DFS(node.left, [...sum, node.left ? node.left.val : null], store);
    DFS(node.right, [...sum, node.right ? node.right.val : null], store);
  }
}

function mirrorDFS(node, sum, store) {
  if (!node) {
    store.push(...sum);
  } else {
    mirrorDFS(node.right, [...sum, node.right ? node.right.val : null], store);
    mirrorDFS(node.left, [...sum, node.left ? node.left.val : null], store);
  }
}

const isSymmetric = function (root) {
  if ((root.left && !root.right) || (root.right && !root.left)) {
    return false;
  }

  if (!root.left && !root.right) {
    return true;
  }

  const leftChecker = [];
  const rightChecker = [];

  DFS(root.left, [root.left.val], leftChecker);
  mirrorDFS(root.right, [root.right.val], rightChecker);

  return JSON.stringify(leftChecker) === JSON.stringify(rightChecker);
};
