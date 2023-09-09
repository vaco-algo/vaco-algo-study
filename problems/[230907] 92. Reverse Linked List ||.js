/**
 * leetcode problem link: https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  let start = head,
    curr = head;
  let count = 1;

  while (count < left) {
    start = curr;
    curr = curr.next;
    count++;
  }

  let reversed = null,
    tail = curr;

  while (count >= left && count <= right) {
    const next = curr.next;
    curr.next = reversed;
    reversed = curr;
    curr = next;

    count++;
  }

  start.next = reversed;
  tail.next = curr;

  return left > 1 ? head : reversed;
};
