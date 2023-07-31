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
const reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let cur = slow.next;

  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  slow.next = null;

  let h1 = head;
  let h2 = prev;

  while (h2) {
    let temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};
