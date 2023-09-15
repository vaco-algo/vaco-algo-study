/**
 * leetcode problem link: https://leetcode.com/problems/binary-tree-paths/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {string[]}
 */

const binaryTreePaths = function (root) {
  const result = [];

  const helper = (node, path) => {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push([...path, node.val]);
      return;
    }

    helper(node.left, [...path, node.val]);
    helper(node.right, [...path, node.val]);
  };

  helper(root, []);

  return result.map((route) => route.join("->"));
};
