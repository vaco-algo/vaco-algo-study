/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * leetcode problem link: https://leetcode.com/problems/odd-even-linked-list/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  if (!head) return;

  let size = 0;
  let current = head;
  let copyHead = head;
  let odd;

  while (current.next) {
    if (size % 2) {
      if (!odd) {
        odd = current;
      } else {
        odd.next = current;
      }
    }

    current = current.next;
    size++;
  }
};
