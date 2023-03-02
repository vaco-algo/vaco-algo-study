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
const isSymmetric = function(root) {
  if (!root?.left && !root?.right) {
    return true;
  }
 
  const queue = [root];
  let stack = [];
  let current = null;
 
  while (queue.length > 0) {
    current = queue.shift();
 
    current?.left && queue.push(current.left);
    current?.right && queue.push(current.right);
 
    if (!current?.left && !current?.right) {
      stack.push(false);
      while (
        stack.length > 1
        && stack[stack.length - 1] === stack[stack.length - 2]
      ) { 
        stack.pop();
        stack.pop();
      }
 
      continue;
    }
 
    stack.push(current.left?.val);
    while (
      stack.length > 1
      && stack[stack.length - 1] === stack[stack.length - 2]
    ) { 
      stack.pop();
      stack.pop();
    }
 
    stack.push(current.right?.val);
    while (
      stack.length > 1
      && stack[stack.length - 1] === stack[stack.length - 2]
    ) { 
      stack.pop();
      stack.pop();
    }
  }
 
  return stack.length === 0;
};
 