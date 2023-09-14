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
var binaryTreePaths = function (root) {
  const answer = [];

  function DFS(L, sum) {
    if (!L) {
      return;
    }

    if (!L.left && !L.right) {
      answer.push((sum.length ? [...sum, `->${L.val}`] : [L.val]).join(""));

      return;
    }

    DFS(L.left, [...sum, sum.length ? `->${L.val}` : L.val]);
    DFS(L.right, [...sum, sum.length ? `->${L.val}` : L.val]);
  }

  DFS(root, []);

  return answer;
};
