/**
 * leetcode problem link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (inorder.length === 0) return null;

  const root = new TreeNode(preorder.shift());
  const index = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
};
