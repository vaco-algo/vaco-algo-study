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

const reorderList = (head) => {
  const stack = [];
  let node = head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = head;
  let length = stack.length;

  for (let i = 0; i < length; i += 1) {
    if (i % 2) {
      node.next = stack.pop();
    } else {
      node.next = stack.shift();
    }

    node = node.next;
  }

  node.next = null;
};
