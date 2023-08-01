/**
 * leetcode problem link: https://leetcode.com/problems/reorder-list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let node = head;
  const stack = [];
  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = head;
  const length = stack.length;

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }
    node = node.next;
    node.next = null;
  }
};
