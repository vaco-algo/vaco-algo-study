/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const swapPairs = function (head) {
  if (!head || !head.next) return head;

  let first = head,
    second = head.next,
    third = second.next;

  second.next = first;
  first.next = swapPairs(third);

  return second;
};
