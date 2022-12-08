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
  if (!head?.next || !head?.next?.next) {
    return head;
  }
  const evenHead = {};

  let currentNode = head;
  let currentEvenNode = evenHead;

  while (!!currentNode?.next?.next) {
    currentEvenNode.next = currentNode.next;
    currentEvenNode = currentEvenNode.next;

    currentNode.next = currentNode.next.next;
    currentNode = currentNode.next;
  }

  if (!!currentNode?.next) {
    currentEvenNode.next = currentNode.next;
    currentEvenNode = currentEvenNode.next;
  }

  currentNode.next = evenHead.next;
  currentEvenNode.next = null;

  return head;
};
