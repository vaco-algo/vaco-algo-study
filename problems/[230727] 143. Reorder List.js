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
  if (!head) return;
  if (!head.next) return head;

  const stack = [];
  let node = head;
  length = 0;

  while (node) {
    stack.push(node);
    node = node.next;
    length += 1;
  }

  node = head;

  for (let i = 0; i < Math.floor(length / 2); i += 1) {
    getNode = stack.pop();
    nextNode = node.next;

    node.next = getNode;
    getNode.next = nextNode;
    node = nextNode;
  }

  if (length % 2 > 0) {
    node.next = null;
  } else {
    node.next.next = null;
  }
};
