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
  const leftTreeValues = [];

  (function leftTreeDfs(tree) {
    if (!tree) {
      leftTreeValues.push(101);

      return;
    }

    leftTreeValues.push(tree.val);

    if (tree.left || tree.right) {
      leftTreeDfs(tree.left);
      leftTreeDfs(tree.right);
    }
  })(root.left);

  function compareRightToTheLeftTreeItems(tree, LeftItemsArr) {
    const compareLeftValue = LeftItemsArr.pop();

    if (!tree) {
      if (compareLeftValue !== 101) {
        LeftItemsArr.push(101);
      }

      return;
    }

    if (compareLeftValue !== tree.val) {
      LeftItemsArr.push(101);

      return;
    }

    if (tree.left || tree.right) {
      compareRightToTheLeftTreeItems(tree.right, LeftItemsArr);
      compareRightToTheLeftTreeItems(tree.left, LeftItemsArr);
    }
  }

  compareRightToTheLeftTreeItems(root.right, leftTreeValues.reverse());

  return leftTreeValues.length ? false : true;
};
