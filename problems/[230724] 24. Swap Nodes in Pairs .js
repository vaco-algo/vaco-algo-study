/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let result = swapPairs(head.next.next);
  let currNode = head;
  let nextNode = head.next;

  currNode.next = result;
  nextNode.next = currNode;

  return nextNode;
};
