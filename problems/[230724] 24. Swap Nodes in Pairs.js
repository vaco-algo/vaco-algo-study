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
  let node = head;

  while (node) {
    if (node.next) {
      const temp = node.val;
      node.val = node?.next?.val;
      node.next.val = temp;
    }

    node = node?.next?.next;
  }

  return head;
};
