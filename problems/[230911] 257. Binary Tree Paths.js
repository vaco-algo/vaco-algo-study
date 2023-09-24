/**
 * https://leetcode.com/problems/binary-tree-paths/
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
  // 접근 방식: root에서 왼쪽으로 탐색, 오른쪽으로 탐색하라는 뜻인듯 하다. dfs로 접근
  // 시간 복잡도: O(V + E)
  // 공간 복잡도: O(V)

  const result = [];

  dfs(root, "", result);

  return result;
};

const dfs = function (node, path, result) {
  if (!node) return;

  if (!node.left && !node.right) {
    result.push(path + node.val);
    return;
  }

  dfs(node.left, path + node.val + "->", result);
  dfs(node.right, path + node.val + "->", result);
};
