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
const oddEvenList = function(head) {
  if (head === null) return null;

  let oddTail = head;
  const evenHead = head.next;
  let evenTail = evenHead;

  while (evenTail !== null && evenTail.next !== null) {
      oddTail.next = evenTail.next;
      oddTail = oddTail.next;
      evenTail.next = oddTail.next;
      evenTail = evenTail.next;
  }

  oddTail.next = evenHead;

  return head;
};
