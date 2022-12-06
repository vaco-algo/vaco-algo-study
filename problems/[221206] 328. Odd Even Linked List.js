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
  let evenListHead = null;
  let currentIndex = 1;
  let currentNode = head;
  let tailOddNode = head;
  let tailEvenNode = null;

  while (currentNode.next) {
      if (currentIndex % 2) {
          if (currentIndex === 1) {
              evenListHead = currentNode.next;
              tailEvenNode = evenListHead;
          } else {
              tailEvenNode.next = currentNode.next;
              tailEvenNode = tailEvenNode.next;
          }
      } else {
          tailOddNode.next = currentNode.next;
          tailOddNode = tailOddNode.next;
      }

      currentNode = currentNode.next;
      currentIndex++;
  }

  tailOddNode.next = evenListHead;

  if (tailEvenNode?.next) tailEvenNode.next = null;

  return head;
};
